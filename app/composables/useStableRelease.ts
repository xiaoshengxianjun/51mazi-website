import fallbackRelease from '../../public/releases.json'

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

function normalizeVersion(raw?: string): string {
  const value = raw?.trim() || fallback.version
  return value.startsWith('v') ? value.slice(1) : value
}

function formatFileSize(bytes?: number): string {
  if (!bytes) {
    return ''
  }
  const mb = bytes / (1024 * 1024)
  return `约 ${mb < 10 ? mb.toFixed(1) : Math.round(mb)} MB`
}

/**
 * 官网下载固定读 public/releases.json。
 * 不请求发布接口，避免当前 stable 把页面覆盖成更新版本。
 */
export function useStableRelease() {
  const versionNumber = computed(() => normalizeVersion(fallback.version))
  const version = computed(() => `v${versionNumber.value}`)

  function getDownloadUrl(platform: string): string {
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
    return formatFileSize(fallback.platforms[platform]?.size)
  }

  return { version, getDownloadUrl, getFileSize }
}
