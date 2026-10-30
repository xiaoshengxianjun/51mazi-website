<script setup lang="ts">
export interface BreadcrumbItem {
  name: string
  to?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<template>
  <nav aria-label="面包屑导航" class="mb-8">
    <ol class="flex flex-wrap items-center gap-1 text-sm text-gray-500">
      <li
        v-for="(item, index) in items"
        :key="`${item.name}-${index}`"
        class="flex items-center gap-1"
      >
        <NuxtLink
          v-if="item.to"
          :to="item.to"
          class="text-primary-600 hover:text-primary-700"
        >
          {{ item.name }}
        </NuxtLink>
        <span v-else class="text-gray-700" aria-current="page">
          {{ item.name }}
        </span>
        <span
          v-if="index < items.length - 1"
          class="text-gray-300 px-1"
          aria-hidden="true"
        >
          /
        </span>
      </li>
    </ol>
  </nav>
</template>
