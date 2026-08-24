<template>
  <NuxtLink
    :to="link"
    class="group block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col"
  >
    <div class="text-4xl mb-4">{{ icon }}</div>
    <h3 class="text-xl font-semibold text-gray-900 mb-2">
      {{ title }}
    </h3>
    <p class="text-gray-600 leading-relaxed flex-grow">
      {{ description }}
    </p>
    <div class="mt-5 flex items-center text-primary-600 text-sm font-medium">
      <span>了解更多</span>
      <svg class="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  icon: string
  link: string
}

defineProps<Props>()
</script>
