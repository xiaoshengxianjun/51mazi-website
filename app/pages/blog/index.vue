<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 页面标题 -->
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          博客 & 更新日志
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          了解最新功能更新、技术分享和使用技巧
        </p>
      </div>

      <!-- 博客文章列表 -->
      <div class="max-w-4xl mx-auto">
        <div class="space-y-8">
          <article
            v-for="post in posts"
            :key="post.slug"
            class="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div class="flex items-start justify-between mb-4">
              <div>
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
            </div>
            <p class="text-gray-700 mb-4 leading-relaxed">
              {{ post.excerpt }}
            </p>
            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              阅读更多
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </NuxtLink>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 博客文章数据（实际应该从内容文件或 API 获取）
const posts = [
  {
    slug: 'version-1-0-0',
    title: '51mazi v1.0.0 正式发布',
    date: '2025-01-XX',
    category: '更新日志',
    excerpt: '我们很高兴地宣布 51mazi v1.0.0 正式版发布！这个版本包含了编辑器、地图设计、关系图谱等核心功能。'
  },
  {
    slug: 'editor-features',
    title: '编辑器功能详解',
    date: '2025-01-XX',
    category: '功能介绍',
    excerpt: '深入了解 51mazi 编辑器的强大功能，包括 Markdown 支持、代码高亮、笔记功能等。'
  },
  {
    slug: 'map-design-tips',
    title: '地图设计技巧分享',
    date: '2025-01-XX',
    category: '使用技巧',
    excerpt: '学习如何使用 51mazi 的地图设计工具创建精美的小说世界地图，提升创作体验。'
  }
]

// SEO
useSeoMeta({
  title: '博客',
  description: '51mazi 博客 - 最新功能更新、技术分享和使用技巧',
  ogTitle: '51mazi 博客',
  ogDescription: '最新功能更新、技术分享和使用技巧'
})
</script>
