import fallbackAppRelease from '../../public/app-releases.json'

type FallbackAppRelease = {
  version: string
  downloadBaseUrl: string
  android: {
    filename: string
    size?: number
  }
}

const fallback = fallbackAppRelease as FallbackAppRelease

function formatFileSize(bytes?: number): string {
  if (!bytes) {
    return ''
  }
  const mb = bytes / (1024 * 1024)
  return `约 ${mb < 10 ? mb.toFixed(1) : Math.round(mb)} MB`
}

/**
 * Android 官网 APK：版本与直链以 public/app-releases.json 为准。
 * iOS 不提供商店直链，下载页引导联系客服申请内测。
 */
export function useAppStableRelease() {
  const version = computed(() => {
    const raw = fallback.version.trim()
    return raw.startsWith('v') ? raw : `v${raw}`
  })

  const androidUrl = computed(() => {
    const filename = fallback.android.filename
    if (!filename) {
      return ''
    }
    return `${fallback.downloadBaseUrl.replace(/\/$/, '')}/${encodeURIComponent(filename)}`
  })

  const androidSize = computed(() => formatFileSize(fallback.android.size))
  const hasAndroid = computed(() => Boolean(androidUrl.value))

  return { version, androidUrl, androidSize, hasAndroid }
}
