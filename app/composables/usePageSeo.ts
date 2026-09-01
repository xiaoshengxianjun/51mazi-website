import type { MaybeRefOrGetter } from 'vue'

/** 默认分享图：静态资源，不走构建期 OG 生成 */
export const DEFAULT_OG_IMAGE = '/images/home1.png'

export interface PageSeoInput {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  ogTitle?: MaybeRefOrGetter<string>
  ogDescription?: MaybeRefOrGetter<string>
  ogImage?: MaybeRefOrGetter<string | undefined>
  ogImageAlt?: MaybeRefOrGetter<string | undefined>
  ogType?: 'website' | 'article'
  /** 传入后覆盖站点 titleTemplate，首页避免「品牌 | 品牌」重复 */
  titleTemplate?: string
}

/** 统一补齐 title / description / Open Graph / Twitter Card */
export function usePageSeo(input: PageSeoInput) {
  const resolveTitle = () => toValue(input.title)
  const resolveDescription = () => toValue(input.description)
  const resolveOgTitle = () => toValue(input.ogTitle) || resolveTitle()
  const resolveOgDescription = () => toValue(input.ogDescription) || resolveDescription()
  const resolveImage = () => toValue(input.ogImage) || DEFAULT_OG_IMAGE
  const resolveImageAlt = () => toValue(input.ogImageAlt) || resolveOgTitle()

  if (input.titleTemplate !== undefined) {
    useHead({
      titleTemplate: input.titleTemplate,
    })
  }

  useSeoMeta({
    title: resolveTitle,
    description: resolveDescription,
    ogTitle: resolveOgTitle,
    ogDescription: resolveOgDescription,
    ogImage: resolveImage,
    ogImageAlt: resolveImageAlt,
    ogType: input.ogType || 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: resolveOgTitle,
    twitterDescription: resolveOgDescription,
    twitterImage: resolveImage,
    twitterImageAlt: resolveImageAlt,
  })
}
