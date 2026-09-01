<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          返回博客列表
        </NuxtLink>

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

          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed whitespace-pre-line">
              {{ post.content }}
            </p>
          </div>
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
import { getPostBySlug, toBlogIsoDate } from '~/data/blog'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const post = computed(() => getPostBySlug(slug.value))

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
    image: DEFAULT_OG_IMAGE,
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
