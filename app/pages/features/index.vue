<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          功能特性
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          与桌面端一致：本地写作、十三项写作助手、可选 AI。账号与云同步尚未提供。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="feature in FEATURES"
          :key="feature.slug"
          class="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
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
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FEATURES } from '~/data/features'

usePageSeo({
  title: '功能特性',
  description:
    '51码字功能一览：智能编辑器、大纲与设定、人物图谱、地图、关系图、时间线、事序图、伏笔、灵感随笔、可选 AI 与下载小说。数据保存在本地。',
  ogTitle: '51码字功能特性',
  ogDescription: '本地小说写作软件完整功能：编辑器、写作助手与可选 AI。',
})
</script>
