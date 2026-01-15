<template>
  <section class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- 主标题 -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          专为小说创作者设计的
          <span class="block text-primary-200">专业写作工具</span>
        </h1>

        <!-- 副标题 -->
        <p class="text-xl sm:text-2xl text-primary-100 mb-8 leading-relaxed">
          编辑器、地图设计、关系图谱、人物档案... 一切创作所需，尽在 51mazi
        </p>

        <!-- CTA 按钮 -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink
            to="/download"
            class="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            立即下载
          </NuxtLink>
          <NuxtLink
            to="/features"
            class="px-8 py-4 bg-primary-500/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-primary-500/30 transition-all duration-200"
          >
            查看功能
          </NuxtLink>
        </div>

        <!-- 软件截图占位 -->
        <div class="mt-16 rounded-lg overflow-hidden shadow-2xl border-4 border-white/20">
          <div class="bg-gray-800 aspect-video flex items-center justify-center">
            <p class="text-gray-400">软件截图占位</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero Section 组件
</script>
