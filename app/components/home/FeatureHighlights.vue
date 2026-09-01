<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          核心功能
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          从正文到世界观：编辑器、写作助手与可选 AI，都落在你的本地目录里
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        <CommonFeatureCard
          v-for="feature in highlights"
          :key="feature.slug"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
          :link="`/features/${feature.slug}`"
        />
      </div>

      <div class="text-center mt-12">
        <NuxtLink
          to="/features"
          class="inline-flex items-center gap-2 px-6 py-3 text-primary-600 hover:text-primary-700 font-medium rounded-lg border border-primary-200 hover:border-primary-400 hover:bg-primary-50 transition-colors"
        >
          <span>查看全部功能</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FEATURES } from '~/data/features'

/** 首页展示最常用的十二项，完整列表见 /features */
const highlightSlugs = [
  'editor',
  'outline',
  'bookshelf',
  'setting',
  'character',
  'map',
  'relation',
  'timeline',
  'events',
  'foreshadow',
  'inspiration',
  'random-name',
]

const highlights = computed(() =>
  highlightSlugs
    .map((slug) => FEATURES.find((item) => item.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item)),
)
</script>
