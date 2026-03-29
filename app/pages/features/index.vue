<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 页面标题 -->
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          功能特性
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          从正文写作到世界观设定，从本地隐私到可选 AI 辅助，覆盖长篇小说创作常见工作流
        </p>
      </div>

      <!-- 功能列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.slug"
          class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-200 border border-gray-100"
        >
          <div class="text-4xl mb-4">{{ feature.icon }}</div>
          <h2 class="text-2xl font-semibold text-gray-900 mb-3">
            {{ feature.title }}
          </h2>
          <p class="text-gray-600 mb-4 leading-relaxed">
            {{ feature.description }}
          </p>
          <NuxtLink
            :to="`/features/${feature.slug}`"
            class="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
          >
            了解更多
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 功能列表数据
const features = [
  {
    slug: 'bookshelf',
    title: '书架管理 & AI 封面',
    icon: '📚',
    description: '书架式多书籍管理，支持书架/书籍双重密码保护、封面管理，并集成通义万相 AI 一键生成小说封面。'
  },
  {
    slug: 'editor',
    title: '专业编辑器',
    icon: '✍️',
    description:
      '基于 TipTap 的富文本编辑器：AI 润色与续写（DeepSeek）、选段 AI 场景图（通义万相）；人物高亮、禁词、段落拖拽、文本高亮；实时字数与码字速度；亮/暗/护眼等主题。'
  },
  {
    slug: 'ai-scene',
    title: 'AI 场景图',
    icon: '🖼️',
    description:
      '在章节编辑页选中一段正文（有效字数约 100～1000），在抽屉中配置画风、景别、尺寸等，由通义万相生成场景插图；可选 DeepSeek 将节选提炼为画面描述；图片保存到本书 scene_images 目录。'
  },
  {
    slug: 'map',
    title: '地图设计',
    icon: '🗺️',
    description: '专业级 Canvas 绘图引擎，支持画笔、形状、文字、油漆桶、资源工具等多种工具，内置资源图标库，完整的历史记录和撤销/重做功能。'
  },
  {
    slug: 'relation',
    title: '关系图谱',
    icon: '🕸️',
    description: '基于 relation-graph-vue3 的可视化关系图谱，支持头像设置和动态字体，清晰展示人物关系网络和剧情线索。'
  },
  {
    slug: 'character',
    title: '人物档案',
    icon: '👤',
    description: '完善的人物档案系统，记录角色详细信息，支持卡片/表格双视图、人物图列表；集成通义万相 AI 生成竖版全身人物图，多画风与构图可选。'
  },
  {
    slug: 'timeline',
    title: '时间线管理',
    icon: '📅',
    description:
      '支持创建多条并列时间线，每条时间线可编辑标题；以时间轴展示节点（标题 + 描述），支持新增、编辑、删除节点与删除整条时间线，数据按书籍本地持久化。'
  },
  {
    slug: 'events',
    title: '事序图管理',
    icon: '📊',
    description: '时间轴可视化管理工具，支持拖拽调整事件时间位置，进度跟踪（0-100%），直观展示事件发生的顺序和关联关系。'
  },
  {
    slug: 'organization',
    title: '组织架构',
    icon: '🏛️',
    description: '可视化组织架构管理，支持多层级结构，清晰展示组织结构和层级关系，帮助管理小说中的各种组织和机构。'
  },
  {
    slug: 'dictionary',
    title: '词条字典',
    icon: '📖',
    description: '树形结构词条字典，支持多层级分类和拖拽排序，统一管理小说中的专有名词、术语和设定，支持快速搜索，可与人物档案关联。'
  },
  {
    slug: 'random-name',
    title: '随机名字生成器',
    icon: '🎲',
    description: '智能随机名字生成器，集成 DeepSeek AI，支持中国人名、日本人名、西方人名、势力名称等多种类型，智能生成符合文化背景的名字，支持批量生成和参数自定义。'
  },
  {
    slug: 'novel-download',
    title: '下载小说',
    icon: '📥',
    description: '多书源搜索、按书名或作者查找，将网络小说下载到本地并加入书架或导出为 TXT，正文去广告，底部悬浮操作区；仅供个人学习研究。'
  }
]

// SEO
useSeoMeta({
  title: '功能特性',
  description:
    '51mazi 功能一览：专业编辑器（AI 润色/续写/场景图）、书架与 AI 封面、人物档案与 AI 人物图、时间线与事序图、地图与关系图谱、组织架构、词条字典、随机起名、下载小说等。',
  ogTitle: '51mazi 功能特性',
  ogDescription:
    '专业编辑器、AI 场景图、地图设计、关系图谱、人物档案、时间线、事序图、下载小说等完整创作工具。'
})
</script>
