import fallbackRelease from '../../public/releases.json'
import { DEFAULT_API_BASE } from '~/utils/product'

/** 与发布接口对齐的平台资源 */
export interface StablePlatformAsset {
  bundleFilename: string
  installerFilename?: string
  bundleSize?: number
}

export interface StableRelease {
  version?: string
  downloadBaseUrl?: string
  releaseNotes?: string
  platforms?: Record<string, StablePlatformAsset>
  assets?: Array<{
    filename: string
    size: number
    kind: string
    platform: string
  }>
}

type FallbackPlatformAsset = {
  filename?: string
  url?: string
  size?: number
}

type FallbackRelease = {
  version: string
  downloadBaseUrl: string
  platforms: Record<string, FallbackPlatformAsset>
}

const fallback = fallbackRelease as FallbackRelease

/** 官网四个安装包：Windows x64 / ARM64，macOS Apple Silicon / Intel */
const INSTALLER_FALLBACK: Record<string, (version: string) => string> = {
  'windows-x86_64': (version) => `51mazi_${version}_x64-setup.exe`,
  'windows-aarch64': (version) => `51mazi_${version}_arm64-setup.exe`,
  'darwin-aarch64': (version) => `51mazi_${version}_aarch64.dmg`,
  'darwin-x86_64': (version) => `51mazi_${version}_x64.dmg`,
}

function isInstallerFile(filename?: string): filename is string {
  if (!filename) {
    return false
  }
  const lower = filename.toLowerCase()
  return lower.endsWith('.exe') || lower.endsWith('.msi') || lower.endsWith('.dmg')
}

function normalizeVersion(raw?: string): string {
  const value = raw?.trim() || fallback.version
  return value.startsWith('v') ? value.slice(1) : value
}

function resolveApiFilename(release: StableRelease, platform: string, versionNumber: string): string {
  const asset = release.platforms?.[platform]
  if (isInstallerFile(asset?.installerFilename)) {
    return asset.installerFilename
  }
  if (isInstallerFile(asset?.bundleFilename)) {
    return asset.bundleFilename
  }
  const fromAssets = release.assets?.find(
    (item) => item.platform === platform && isInstallerFile(item.filename) && item.kind !== 'signature',
  )
  if (fromAssets) {
    return fromAssets.filename
  }
  return INSTALLER_FALLBACK[platform]?.(versionNumber) || ''
}

function formatFileSize(bytes?: number): string {
  if (!bytes) {
    return ''
  }
  const mb = bytes / (1024 * 1024)
  return `约 ${mb < 10 ? mb.toFixed(1) : Math.round(mb)} MB`
}

/**
 * 当前稳定版与四个官方安装包直链。
 * 本地 public/releases.json 作为构建期与接口失败时的兜底；浏览器里接口成功后再覆盖。
 */
export function useStableRelease() {
  const config = useRuntimeConfig()
  const apiBase = (config.public.apiBase as string) || DEFAULT_API_BASE

  const { data, status } = useFetch<StableRelease>(
    `${apiBase}/api/releases/current/stable`,
    {
      key: 'stable-release',
      lazy: true,
      // 构建预渲染只读本地清单，避免 Vercel 节点访问国内 API 挂满 45 分钟
      server: false,
      timeout: 8000,
      default: () => null,
      getCachedData() {
        return undefined
      },
      onResponseError() {
        // 接口不可用时继续用 public/releases.json
      },
    },
  )

  const versionNumber = computed(() => normalizeVersion(data.value?.version || fallback.version))

  const version = computed(() => `v${versionNumber.value}`)

  function getDownloadUrl(platform: string): string {
    if (data.value) {
      const filename = resolveApiFilename(data.value, platform, versionNumber.value)
      if (filename) {
        const fromApi = data.value.downloadBaseUrl?.replace(/\/$/, '')
        const base = fromApi || `${apiBase}/api/download/stable`
        return `${base}/${encodeURIComponent(filename)}`
      }
    }

    const local = fallback.platforms[platform]
    if (local?.url) {
      return local.url
    }
    const filename = local?.filename || INSTALLER_FALLBACK[platform]?.(versionNumber.value)
    if (!filename) {
      return ''
    }
    return `${fallback.downloadBaseUrl.replace(/\/$/, '')}/${encodeURIComponent(filename)}`
  }

  function getFileSize(platform: string): string {
    if (data.value) {
      const filename = resolveApiFilename(data.value, platform, versionNumber.value)
      const fromAssets = data.value.assets?.find((item) => item.filename === filename)
      const bytes = fromAssets?.size || data.value.platforms?.[platform]?.bundleSize
      const formatted = formatFileSize(bytes)
      if (formatted) {
        return formatted
      }
    }
    return formatFileSize(fallback.platforms[platform]?.size)
  }

  return { data, status, version, getDownloadUrl, getFileSize }
}
