<template>
  <div class="relative bg-white">
    <HomeHeroSection />
    <HomeFeatureHighlights />
    <HomeDownloadCTA />
  </div>
</template>

<script setup lang="ts">
// 首屏 LCP 图由 ThemeCarousel 内 NuxtImg preload 负责，避免预加载未优化的原图

useSeoMeta({
  title: '本地优先的小说写作工具',
  description:
    '51码字是本地优先的小说写作桌面客户端。书籍与设定保存在你指定的目录，断网可写；编辑器、十二项写作助手、可选 AI 辅助，按需联网。支持 Windows 与 macOS。',
  ogTitle: '51码字 - 本地优先的小说写作工具',
  ogDescription:
    '本地书架、智能编辑器、大纲与设定、人物图谱、地图、关系图、时间线与可选 AI。数据不上传云端。',
  ogImage: '/images/home1.png',
  twitterCard: 'summary_large_image',
})
</script>
