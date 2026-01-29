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
    slug: 'book-management',
    title: '书架与书籍管理系统：从零构建桌面写作软件的核心模块',
    date: '2026-01',
    category: '功能介绍',
    excerpt: '深入拆解 51mazi 的书架式多书籍管理：创建/编辑/删除、数据本地存储与隔离、以及面向创作者的交互体验设计。'
  },
  {
    slug: 'deepseek-integration',
    title: '在 Electron 应用中优雅接入 DeepSeek AI：完整实践指南',
    date: '2026-01',
    category: '技术分享',
    excerpt: '主进程安全调用、频率限制、防重复请求与错误处理：用一套可落地的架构，把 AI 能力稳定接入到桌面应用。'
  },
  {
    slug: 'ai-naming-assistant',
    title: 'AI 赋能小说创作：智能起名如何提升写作效率',
    date: '2026-01',
    category: '功能介绍',
    excerpt: '支持多类型与参数自定义，一次生成 24 个名字；AI 失败自动降级到本地生成，让“起名卡壳”不再成为写作阻碍。'
  },
  {
    slug: 'map-design-overview',
    title: '打造专业级小说地图设计工具：架构与核心能力拆解',
    date: '2026-01',
    category: '技术分享',
    excerpt: '基于 Vue 3 + Canvas 的模块化 Composables 架构：10+ 工具、缩放平移、撤销重做、资源管理与快捷键体系。'
  },
  {
    slug: 'text-highlight',
    title: '多彩文本高亮：基于 TipTap 的标记能力与搜索高亮联动',
    date: '2026-01',
    category: '技术分享',
    excerpt: '支持 5 种颜色高亮、工具栏状态同步、内容持久化与搜索高亮联动，适合做世界观信息分类管理。'
  },
  {
    slug: 'paragraph-drag',
    title: '段落拖拽重排：基于 ProseMirror 的交互式段落移动技术',
    date: '2026-01',
    category: '技术分享',
    excerpt: '拖拽锚点、子段落联动、全局事件处理与精确落点判断，让笔记结构调整像“拖一下”那么简单。'
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
