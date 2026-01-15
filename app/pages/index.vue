<template>
  <div>
    <HomeHeroSection />
    <HomeFeatureHighlights />
    <HomeDownloadCTA />
  </div>
</template>

<script setup lang="ts">
// 首页 SEO
// Nuxt 4 会根据目录结构自动添加前缀：home/HeroSection.vue -> HomeHeroSection
useSeoMeta({
  title: '首页',
  description: '51mazi - 专为小说创作者设计的专业写作工具，提供编辑器、地图设计、关系图谱等强大功能',
  ogTitle: '51mazi - 专业小说创作工具',
  ogDescription: '专为小说创作者设计的专业写作工具，提供编辑器、地图设计、关系图谱等强大功能',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})
</script>
