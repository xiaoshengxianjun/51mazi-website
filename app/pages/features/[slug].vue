<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <NuxtLink
        to="/features"
        class="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        返回功能列表
      </NuxtLink>

      <div v-if="feature" class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <div class="text-6xl mb-4">{{ feature.icon }}</div>
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {{ feature.title }}
          </h1>
          <p class="text-xl text-gray-600">
            {{ feature.description }}
          </p>
        </div>

        <div v-if="feature.image" class="mb-12 rounded-lg overflow-hidden shadow-xl border border-gray-200">
          <NuxtImg
            :src="feature.image"
            :alt="`${feature.title} - 51码字`"
            class="w-full h-auto"
            loading="eager"
            fetchpriority="high"
            format="webp"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        <div v-if="feature.secondImage" class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            {{ feature.secondImageTitle || '功能截图' }}
          </h2>
          <div class="rounded-lg overflow-hidden shadow-xl border border-gray-200">
            <NuxtImg
              :src="feature.secondImage"
              :alt="feature.secondImageTitle ? `${feature.secondImageTitle} - 51码字` : `${feature.title} - 51码字`"
              class="w-full h-auto"
              loading="lazy"
              format="webp"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>

        <div class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">核心特性</h2>
          <ul class="space-y-4">
            <li
              v-for="(item, index) in feature.features"
              :key="index"
              class="flex items-start"
            >
              <svg
                class="w-6 h-6 text-primary-600 mr-3 shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-700 text-lg">{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">使用场景</h2>
          <p class="text-gray-700 leading-relaxed text-lg">
            {{ feature.useCase }}
          </p>
        </div>

        <div v-if="relatedFeatures.length > 0">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">相关功能</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NuxtLink
              v-for="related in relatedFeatures"
              :key="related.slug"
              :to="`/features/${related.slug}`"
              class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <div class="flex items-center">
                <span class="text-2xl mr-3">{{ related.icon }}</span>
                <div>
                  <h3 class="font-semibold text-gray-900">{{ related.title }}</h3>
                  <p class="text-sm text-gray-600">{{ related.description }}</p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-20">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">功能未找到</h1>
        <p class="text-gray-600 mb-8">抱歉，您访问的功能页面不存在。</p>
        <NuxtLink
          to="/features"
          class="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          返回功能列表
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getFeatureBySlug, getRelatedFeatures } from '~/data/features'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

const feature = computed(() => getFeatureBySlug(slug.value))
const relatedFeatures = computed(() => getRelatedFeatures(slug.value))

usePageSeo({
  title: () => feature.value?.title || '功能详情',
  description: () =>
    feature.value
      ? `${feature.value.description}。51码字本地小说写作软件功能。`
      : '功能详情页面',
  ogTitle: () => (feature.value ? `${feature.value.title} - 51码字` : '功能详情'),
  ogDescription: () => feature.value?.description || '功能详情页面',
  ogImage: () => feature.value?.image,
  ogImageAlt: () => (feature.value ? `${feature.value.title} - 51码字` : undefined),
})

useSchemaOrg(() => [
  defineWebPage({
    name: feature.value?.title || '功能详情',
    description: feature.value?.description,
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: '首页', item: '/' },
      { name: '功能特性', item: '/features' },
      { name: feature.value?.title || '功能详情' },
    ],
  }),
])
</script>
