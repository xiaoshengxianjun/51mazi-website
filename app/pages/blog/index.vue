<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          博客
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          对照当前桌面端，介绍本地写作、写作助手与可选 AI
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="space-y-8">
          <article
            v-for="post in BLOG_POSTS"
            :key="post.slug"
            class="bg-white rounded-lg p-8 border border-gray-200"
          >
            <div class="mb-4">
              <h2 class="text-2xl font-bold text-gray-900 mb-2">
                <NuxtLink
                  :to="`/blog/${post.slug}`"
                  class="hover:text-primary-600 transition-colors"
                >
                  {{ post.title }}
                </NuxtLink>
              </h2>
              <div class="flex items-center space-x-4 text-sm text-gray-500">
                <span>{{ post.date }}</span>
                <span>•</span>
                <span>{{ post.category }}</span>
              </div>
            </div>
            <p class="text-gray-700 mb-4 leading-relaxed">
              {{ post.excerpt }}
            </p>
            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              阅读更多
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BLOG_POSTS } from '~/data/blog'

usePageSeo({
  title: '博客',
  description: '51码字博客：本地书架、写作助手、灵感随笔、AI 设置与地图等功能说明。',
  ogTitle: '51码字博客',
  ogDescription: '对照当前桌面端的功能介绍。',
})
</script>
