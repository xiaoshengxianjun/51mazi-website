import { DEFAULT_API_BASE } from '~/utils/product'

export interface AppStableAndroidAsset {
  filename: string
  size?: number
  sha256?: string
  url: string
}

export interface AppStableRelease {
  version?: string
  releaseNotes?: string
  downloadBaseUrl?: string
  android?: AppStableAndroidAsset | null
  iosStoreUrl?: string | null
  ios?: { version: string, storeUrl: string } | null
}

function formatFileSize(bytes?: number): string {
  if (!bytes) {
    return ''
  }
  const mb = bytes / (1024 * 1024)
  return `约 ${mb < 10 ? mb.toFixed(1) : Math.round(mb)} MB`
}

/**
 * Flutter App 当前 stable。与桌面 releases.json 独立；接口 404 表示尚未发布 APK。
 */
export function useAppStableRelease() {
  const config = useRuntimeConfig()
  const apiBase = (config.public.apiBase as string) || DEFAULT_API_BASE

  const { data, status } = useFetch<AppStableRelease>(
    `${apiBase}/api/app-releases/current/stable`,
    {
      key: 'app-stable-release',
      lazy: true,
      server: false,
      timeout: 8000,
      default: () => null,
      getCachedData() {
        return undefined
      },
    },
  )

  const version = computed(() => {
    const raw = data.value?.version?.trim()
    if (!raw) {
      return ''
    }
    return raw.startsWith('v') ? raw : `v${raw}`
  })

  const androidUrl = computed(() => data.value?.android?.url?.trim() || '')
  const androidSize = computed(() => formatFileSize(data.value?.android?.size))
  const iosUrl = computed(
    () => data.value?.ios?.storeUrl?.trim() || data.value?.iosStoreUrl?.trim() || '',
  )
  const hasAndroid = computed(() => Boolean(androidUrl.value))
  const hasIos = computed(() => Boolean(iosUrl.value))

  return { data, status, version, androidUrl, androidSize, iosUrl, hasAndroid, hasIos }
}
