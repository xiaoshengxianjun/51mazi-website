<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 页面标题 -->
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          功能特性
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          强大的功能集合，满足小说创作的各种需求
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
    slug: 'editor',
    title: '专业编辑器',
    icon: '✍️',
    description: '基于 TipTap 的专业富文本编辑器，支持人物高亮、禁词提示、段落拖拽、文本高亮等智能功能，实时字数统计和码字速度计算，多种主题模式。'
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
    description: '完善的人物档案系统，记录角色的详细信息，包括外貌、性格、背景等，支持关联词条字典中的标签。'
  },
  {
    slug: 'timeline',
    title: '时间线管理',
    icon: '📅',
    description: '时间线管理工具，帮助梳理故事的时间顺序，避免时间线混乱，确保故事发展脉络清晰。'
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
  }
]

// SEO
useSeoMeta({
  title: '功能特性',
  description: '了解 51mazi 的强大功能：专业编辑器、地图设计、关系图谱、人物档案等，满足小说创作的各种需求',
  ogTitle: '51mazi 功能特性',
  ogDescription: '了解 51mazi 的强大功能：专业编辑器、地图设计、关系图谱、人物档案等'
})
</script>
