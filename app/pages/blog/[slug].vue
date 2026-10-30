<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <CommonBreadcrumb :items="breadcrumbItems" />

        <article v-if="post" class="bg-white rounded-lg p-8 border border-gray-200">
          <header class="mb-8">
            <div class="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span>{{ post.date }}</span>
              <span>•</span>
              <span>{{ post.category }}</span>
            </div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">
              {{ post.title }}
            </h1>
          </header>

          <BlogContent :blocks="contentBlocks" />

          <nav
            v-if="relatedLinks.length > 0"
            class="mt-10 pt-8 border-t border-gray-200"
            aria-label="相关页面"
          >
            <h2 class="text-xl font-bold text-gray-900 mb-4">相关页面</h2>
            <ul class="flex flex-wrap gap-3">
              <li v-for="link in relatedLinks" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="inline-flex items-center px-4 py-2 rounded-lg border border-primary-200 text-primary-700 hover:bg-primary-50 font-medium"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </article>

        <div v-else class="text-center py-20">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">文章未找到</h1>
          <p class="text-gray-600 mb-8">抱歉，您访问的文章不存在。</p>
          <NuxtLink
            to="/blog"
            class="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            返回博客列表
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DEFAULT_OG_IMAGE } from '~/composables/usePageSeo'
import {
  getPostBySlug,
  getPostRelatedLinks,
  parseBlogContent,
  toBlogIsoDate,
} from '~/data/blog'

const route = useRoute()
const site = useSiteConfig()
const slug = computed(() => String(route.params.slug || ''))
const post = computed(() => getPostBySlug(slug.value))
const contentBlocks = computed(() =>
  post.value ? parseBlogContent(post.value.content) : [],
)
const relatedLinks = computed(() => getPostRelatedLinks(slug.value))
const articleImage = computed(
  () => `${site.url.replace(/\/$/, '')}${DEFAULT_OG_IMAGE}`,
)
const breadcrumbItems = computed(() => [
  { name: '首页', to: '/' },
  { name: '博客', to: '/blog' },
  { name: post.value?.title || '博客文章' },
])

usePageSeo({
  title: () => post.value?.title || '博客文章',
  description: () => post.value?.excerpt || '博客文章',
  ogTitle: () => post.value?.title || '博客文章',
  ogDescription: () => post.value?.excerpt || '博客文章',
  ogType: 'article',
})

useSchemaOrg(() => [
  defineArticle({
    headline: post.value?.title || '博客文章',
    description: post.value?.excerpt,
    datePublished: post.value ? toBlogIsoDate(post.value.date) : undefined,
    author: { name: '51码字' },
    image: articleImage.value,
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: '首页', item: '/' },
      { name: '博客', item: '/blog' },
      { name: post.value?.title || '博客文章' },
    ],
  }),
])
</script>
