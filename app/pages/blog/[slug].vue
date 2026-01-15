<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- 返回按钮 -->
        <NuxtLink
          to="/blog"
          class="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          返回博客列表
        </NuxtLink>

        <!-- 文章内容 -->
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
            <p class="text-gray-700 leading-relaxed">
              {{ post.content }}
            </p>
          </div>
        </article>

        <!-- 未找到文章 -->
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
const route = useRoute()
const slug = route.params.slug as string

// 文章数据（实际应该从内容文件或 API 获取）
const postsData: Record<string, any> = {
  'version-1-0-0': {
    slug: 'version-1-0-0',
    title: '51mazi v1.0.0 正式发布',
    date: '2025-01-XX',
    category: '更新日志',
    content: '我们很高兴地宣布 51mazi v1.0.0 正式版发布！这个版本包含了编辑器、地图设计、关系图谱等核心功能。经过数月的开发和测试，我们终于可以将这个专业的写作工具呈现给大家。\n\n主要功能包括：\n- 专业编辑器\n- 地图设计工具\n- 关系图谱管理\n- 人物档案系统\n- 时间线管理\n- 更多功能...'
  },
  'editor-features': {
    slug: 'editor-features',
    title: '编辑器功能详解',
    date: '2025-01-XX',
    category: '功能介绍',
    content: '51mazi 的编辑器是专为小说创作者设计的强大工具。它支持 Markdown 语法、代码高亮、笔记功能等，让您的创作更加流畅。'
  },
  'map-design-tips': {
    slug: 'map-design-tips',
    title: '地图设计技巧分享',
    date: '2025-01-XX',
    category: '使用技巧',
    content: '学习如何使用 51mazi 的地图设计工具创建精美的小说世界地图。本文将分享一些实用的技巧和最佳实践。'
  }
}

const post = postsData[slug]

// SEO
useSeoMeta({
  title: post ? post.title : '博客文章',
  description: post ? post.content.substring(0, 150) : '博客文章',
  ogTitle: post ? post.title : '博客文章',
  ogDescription: post ? post.content.substring(0, 150) : '博客文章'
})
</script>
