<template>
  <NuxtLink
    :to="link"
    class="block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-2 border border-gray-100"
  >
    <div class="text-4xl mb-4">{{ icon }}</div>
    <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ title }}</h3>
    <p class="text-gray-600 leading-relaxed">{{ description }}</p>
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
