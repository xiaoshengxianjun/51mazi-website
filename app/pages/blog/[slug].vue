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
            <p class="text-gray-700 leading-relaxed whitespace-pre-line">
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
  'book-management': {
    slug: 'book-management',
    title: '书架与书籍管理系统：从零构建桌面写作软件的核心模块',
    date: '2026-01',
    category: '功能介绍',
    content:
      '书架式多书籍管理是 51mazi 的核心模块之一，目标是让创作者可以像管理项目一样管理多本作品。\n\n你将获得：\n- 创建/编辑/删除书籍的完整流程\n- 本地数据持久化与书籍数据隔离\n- 书籍元信息管理（目标字数、简介、更新记录等）\n- 面向创作者的交互体验（卡片式书架、确认删除、数据同步等）\n\n提示：书架/书籍双重密码保护、封面管理与 AI 生成封面也会在后续文章继续展开。'
  },
  'deepseek-integration': {
    slug: 'deepseek-integration',
    title: '在 Electron 应用中优雅接入 DeepSeek AI：完整实践指南',
    date: '2026-01',
    category: '技术分享',
    content:
      '在 Electron 应用里接入 AI，推荐遵循“主进程处理、渲染进程展示”的原则，避免 API Key 暴露。\n\n关键设计点：\n- 主进程封装 DeepSeek 服务（API Key 管理、统一错误处理）\n- 频率限制（例如：每分钟最多 10 次请求）\n- 防重复请求机制（pendingRequests Map）\n- IPC 通信桥接（contextBridge）\n\n这些能力最终支撑了 51mazi 的 AI 智能起名等创作辅助功能，并为后续 AI 续写/润色等扩展打下基础。'
  },
  'ai-naming-assistant': {
    slug: 'ai-naming-assistant',
    title: 'AI 赋能小说创作：智能起名如何提升写作效率',
    date: '2026-01',
    category: '功能介绍',
    content:
      '起名是最容易“卡住写作节奏”的环节之一。\n\n51mazi 的 AI 随机起名（DeepSeek）提供：\n- 多类型：中/日/西人名、势力、地名、秘籍、法宝等\n- 参数自定义：性别、姓氏、字数、中间字等\n- 批量生成：一次 24 个名字，快速筛选\n- 文化适配：日式/西式自动转换中文音译，保证全中文\n- 智能降级：AI 失败自动切到本地生成\n\n目标是“既要效率，也要可用性”。'
  },
  'map-design-overview': {
    slug: 'map-design-overview',
    title: '打造专业级小说地图设计工具：架构与核心能力拆解',
    date: '2026-01',
    category: '技术分享',
    content:
      '地图设计页是 51mazi 的一大亮点：基于 Vue 3 + Canvas，采用模块化 Composables 架构。\n\n能力覆盖：\n- 10+ 绘图工具（画笔/橡皮擦/形状/油漆桶/文字/资源/背景等）\n- 缩放/平移/重置视图\n- 选框：移动/缩放/旋转元素\n- 撤销/重做历史记录\n- 资源库拖拽与参数控制（颜色/大小/透明度）\n- 完整快捷键体系\n\n它让作者无需外部工具即可绘制世界地图并持续迭代。'
  },
  'text-highlight': {
    slug: 'text-highlight',
    title: '多彩文本高亮：基于 TipTap 的标记能力与搜索高亮联动',
    date: '2026-01',
    category: '技术分享',
    content:
      '在世界观与笔记整理中，“分类标记”极其重要。\n\n51mazi 的文本高亮支持：\n- 5 种颜色高亮（黄/绿/蓝/粉/紫）\n- 搜索高亮联动（当前匹配项特殊标记）\n- 工具栏状态同步\n- 高亮信息随内容持久化\n\n它适合用于标注人物/地点/设定/伏笔等不同信息类型。'
  },
  'paragraph-drag': {
    slug: 'paragraph-drag',
    title: '段落拖拽重排：基于 ProseMirror 的交互式段落移动技术',
    date: '2026-01',
    category: '技术分享',
    content:
      '传统复制粘贴移动段落又慢又容易出错。\n\n51mazi 的段落拖拽提供：\n- 段落左侧拖拽锚点（⋮⋮），悬停显示\n- 子段落联动：拖父段落会带着子段落一起移动\n- 精确落点：自动判断插入到目标段落上方/下方\n- 全局支持：拖拽到编辑器外区域也能正确放置\n- 清晰视觉反馈：拖拽预览\n\n结果就是：结构调整像“拖一下”那么自然。'
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
