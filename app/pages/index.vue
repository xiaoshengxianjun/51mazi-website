<template>
  <div class="relative">
    <!-- 银河背景 - 延迟加载以优先渲染关键内容，改善 FCP/LCP -->
    <ClientOnly>
      <div class="fixed inset-0 w-full h-full z-0 pointer-events-none bg-black">
        <CommonGalaxy v-if="showGalaxy" />
      </div>
      <template #fallback>
        <div class="fixed inset-0 w-full h-full z-0 bg-black" />
      </template>
    </ClientOnly>

    <!-- 内容区域 -->
    <div class="relative z-10">
      <HomeHeroSection />
      <HomeFeatureHighlights />
      <HomeDownloadCTA />
    </div>
  </div>
</template>

<script setup lang="ts">
// 延迟加载 Galaxy 银河背景，待首屏内容渲染完成后再初始化 WebGL
const showGalaxy = ref(false)
onMounted(() => {
  const init = () => {
    showGalaxy.value = true
  }
  if ('requestIdleCallback' in window) {
    ;(window as any).requestIdleCallback(init, { timeout: 1500 })
  } else {
    setTimeout(init, 800)
  }
})
// 首页 SEO（LCP 图片由 HeroSection 的 NuxtImg 组件自动优化与预加载）
useSeoMeta({
  title: '首页',
  description: '51mazi - 专为小说创作者设计的专业写作工具，提供 AI 智能起名、AI 一键生成封面、书架/书籍双重密码保护、专业编辑器、地图设计、关系图谱、事序图、组织架构、词条字典等强大功能',
  ogTitle: '51mazi - 专业小说创作工具',
  ogDescription: '专为小说创作者设计的专业写作工具，集成 DeepSeek AI 智能起名与通义万相 AI 生成封面，提供双重密码保护、专业编辑器、地图设计、关系图谱等强大功能',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})
</script>
