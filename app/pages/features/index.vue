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
    description: '强大的富文本编辑器，支持 Markdown、代码高亮、笔记等功能，让创作更流畅。'
  },
  {
    slug: 'map',
    title: '地图设计',
    icon: '🗺️',
    description: '可视化地图设计工具，轻松创建小说世界的地图和场景，支持多种绘图工具。'
  },
  {
    slug: 'relation',
    title: '关系图谱',
    icon: '🕸️',
    description: '清晰展示人物关系，管理复杂的人物网络和剧情线索，让角色关系一目了然。'
  },
  {
    slug: 'character',
    title: '人物档案',
    icon: '👤',
    description: '完善的人物档案系统，记录角色的详细信息，包括外貌、性格、背景等。'
  },
  {
    slug: 'timeline',
    title: '时间线管理',
    icon: '📅',
    description: '时间线管理工具，帮助梳理故事的时间顺序，避免时间线混乱。'
  },
  {
    slug: 'events',
    title: '事序图管理',
    icon: '📊',
    description: '事序图管理功能，清晰展示事件发生的顺序和关联关系。'
  },
  {
    slug: 'organization',
    title: '组织架构',
    icon: '🏛️',
    description: '组织架构设计工具，管理小说中的各种组织和机构关系。'
  },
  {
    slug: 'dictionary',
    title: '词条字典',
    icon: '📖',
    description: '自定义词条字典，记录小说中的专有名词、术语和设定。'
  },
  {
    slug: 'random-name',
    title: '随机名字生成器',
    icon: '🎲',
    description: '智能随机名字生成器，快速生成符合设定的人物名字。'
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
