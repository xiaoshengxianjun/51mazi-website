import { DEFAULT_API_BASE, FALLBACK_APP_VERSION } from '~/utils/product'

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
  const value = raw?.trim() || FALLBACK_APP_VERSION
  return value.startsWith('v') ? value.slice(1) : value
}

/**
 * 拉取当前稳定版，并给出四个官方安装包直链。
 * 优先用接口里的首次安装包；缺失时按发布文件名规则回退，保证按钮始终可点。
 */
export function useStableRelease() {
  const config = useRuntimeConfig()
  const apiBase = (config.public.apiBase as string) || DEFAULT_API_BASE

  const { data, status } = useFetch<StableRelease>(
    `${apiBase}/api/releases/current/stable`,
    {
      key: 'stable-release',
      lazy: true,
      default: () => null,
      onResponseError() {
        // 接口不可用时用回退版本号与约定文件名
      },
    },
  )

  const versionNumber = computed(() => normalizeVersion(data.value?.version))

  const version = computed(() => `v${versionNumber.value}`)

  const downloadBase = computed(() => {
    const fromApi = data.value?.downloadBaseUrl?.replace(/\/$/, '')
    return fromApi || `${apiBase}/api/download/stable`
  })

  function resolveFilename(platform: string): string {
    const asset = data.value?.platforms?.[platform]
    if (isInstallerFile(asset?.installerFilename)) {
      return asset.installerFilename
    }
    if (isInstallerFile(asset?.bundleFilename)) {
      return asset.bundleFilename
    }
    const fromAssets = data.value?.assets?.find(
      (item) => item.platform === platform && isInstallerFile(item.filename) && item.kind !== 'signature',
    )
    if (fromAssets) {
      return fromAssets.filename
    }
    return INSTALLER_FALLBACK[platform]?.(versionNumber.value) || ''
  }

  function getDownloadUrl(platform: string): string {
    const filename = resolveFilename(platform)
    return `${downloadBase.value}/${encodeURIComponent(filename)}`
  }

  function getFileSize(platform: string): string {
    const filename = resolveFilename(platform)
    const fromAssets = data.value?.assets?.find((item) => item.filename === filename)
    const bytes = fromAssets?.size || data.value?.platforms?.[platform]?.bundleSize
    if (!bytes) {
      return ''
    }
    const mb = bytes / (1024 * 1024)
    return `约 ${mb < 10 ? mb.toFixed(1) : Math.round(mb)} MB`
  }

  return { data, status, version, getDownloadUrl, getFileSize }
}
