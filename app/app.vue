<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- Vercel Web Analytics（仅客户端渲染） -->
    <ClientOnly>
      <Analytics />
    </ClientOnly>
    <!-- 鼠标飞溅特效 - 延迟到页面空闲后加载，降低分辨率以改善 INP -->
    <ClientOnly>
      <CommonSplashCursor v-if="showSplashCursor"
        :SIM_RESOLUTION="64"
        :DYE_RESOLUTION="512"
        :CAPTURE_RESOLUTION="256"
        :DENSITY_DISSIPATION="4"
        :VELOCITY_DISSIPATION="2.5"
        :PRESSURE="0.1"
        :PRESSURE_ITERATIONS="12"
        :CURL="2"
        :SPLAT_RADIUS="0.25"
        :SPLAT_FORCE="4000"
        :SHADING="false"
        :COLOR_UPDATE_SPEED="8"
        :BACK_COLOR="{ r: 0.5, g: 0, b: 0 }"
        :TRANSPARENT="true"
      />
    </ClientOnly>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue'

// 延迟加载 SplashCursor，待页面交互完成后再初始化，显著改善 INP
const showSplashCursor = ref(false)
onMounted(() => {
  const init = () => {
    showSplashCursor.value = true
  }
  if ('requestIdleCallback' in window) {
    ;(window as any).requestIdleCallback(init, { timeout: 3000 })
  } else {
    setTimeout(init, 2000)
  }
})
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
