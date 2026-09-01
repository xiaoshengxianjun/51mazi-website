import { FALLBACK_APP_VERSION } from '~/utils/product'
import { DEFAULT_OG_IMAGE } from '~/composables/usePageSeo'

/** 软件产品结构化数据，便于搜索结果识别为可下载的桌面应用 */
export function useSoftwareAppSchema() {
  const site = useSiteConfig()

  useSchemaOrg([
    defineSoftwareApp({
      name: '51码字',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Windows, macOS',
      softwareVersion: FALLBACK_APP_VERSION,
      downloadUrl: `${site.url.replace(/\/$/, '')}/download`,
      screenshot: DEFAULT_OG_IMAGE,
      offers: {
        price: '0',
        priceCurrency: 'CNY',
      },
      description:
        '本地优先的小说写作桌面客户端。书籍与设定保存在你指定的目录，断网可写；编辑器、写作助手与可选 AI 按需联网。',
    }),
  ])
}
