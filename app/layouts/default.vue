<template>
  <SpeedInsights />
  <div class="min-h-screen flex flex-col">
    <CommonHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <CommonFooter />
  </div>
</template>

<script setup lang="ts">
// 默认布局，包含 Header 和 Footer
// Nuxt 4 会根据目录结构自动添加前缀：common/Header.vue -> CommonHeader
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>
