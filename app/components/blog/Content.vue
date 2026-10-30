<script setup lang="ts">
import type { BlogBlock } from '~/data/blog'

defineProps<{
  blocks: BlogBlock[]
}>()
</script>

<template>
  <div class="space-y-5">
    <template v-for="(block, index) in blocks" :key="`${block.type}-${index}`">
      <h2
        v-if="block.type === 'h2'"
        class="text-2xl font-bold text-gray-900 pt-2"
      >
        {{ block.text }}
      </h2>
      <p
        v-else-if="block.type === 'p'"
        class="text-gray-700 leading-relaxed"
      >
        {{ block.text }}
      </p>
      <ul
        v-else-if="block.type === 'ul'"
        class="list-disc pl-6 space-y-2 text-gray-700"
      >
        <li v-for="(item, itemIndex) in block.items" :key="itemIndex">
          {{ item }}
        </li>
      </ul>
      <ol
        v-else-if="block.type === 'ol'"
        class="list-decimal pl-6 space-y-2 text-gray-700"
      >
        <li v-for="(item, itemIndex) in block.items" :key="itemIndex">
          {{ item }}
        </li>
      </ol>
    </template>
  </div>
</template>
