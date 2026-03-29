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
// 预加载 LCP 图片，缩短 LCP 时间（Speed Insights 优化）
useHead({
  link: [
    { rel: 'preload', href: '/images/home.png', as: 'image' }
  ]
})

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
  title: '51mazi - 专业小说创作工具',
  description:
    '51mazi 是面向小说作者的桌面写作软件：TipTap 专业编辑器支持 AI 润色、续写与选段 AI 场景图（DeepSeek + 通义万相）；书架/书籍双重密码、人物档案与 AI 人物图、时间线/事序图、地图设计、关系图谱、组织架构、词条字典、随机起名、下载小说与内置用户指南，数据本地存储。',
  ogTitle: '51mazi - 专业小说创作工具',
  ogDescription:
    '本地优先的小说创作桌面端：AI 润色与续写、通义万相封面/人物图/场景图、DeepSeek 智能起名与画面提炼、双重密码、地图/关系图/事序图等全套工具，支持下载小说加入书架或导出 TXT。',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})
</script>
