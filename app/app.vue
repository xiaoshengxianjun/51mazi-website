<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- Vercel Web Analytics（仅客户端渲染） -->
    <ClientOnly>
      <Analytics />
    </ClientOnly>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue'
</script>
<style scoped>
/* 页面切换动画 */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
