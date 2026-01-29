<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- Vercel Web Analytics（仅客户端渲染） -->
    <ClientOnly>
      <Analytics />
    </ClientOnly>
    <!-- 鼠标飞溅特效 - 应用到所有页面 -->
    <ClientOnly>
      <CommonSplashCursor
        :SIM_RESOLUTION="128"
        :DYE_RESOLUTION="1440"
        :CAPTURE_RESOLUTION="512"
        :DENSITY_DISSIPATION="3.5"
        :VELOCITY_DISSIPATION="2"
        :PRESSURE="0.1"
        :PRESSURE_ITERATIONS="20"
        :CURL="3"
        :SPLAT_RADIUS="0.2"
        :SPLAT_FORCE="6000"
        :SHADING="true"
        :COLOR_UPDATE_SPEED="10"
        :BACK_COLOR="{ r: 0.5, g: 0, b: 0 }"
        :TRANSPARENT="true"
      />
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
