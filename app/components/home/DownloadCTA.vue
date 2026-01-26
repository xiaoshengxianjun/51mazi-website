<template>
  <section
    class="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-purple-700 text-white relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float animate-delay-300">
      </div>
      <div
        class="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-float animate-delay-600">
      </div>
    </div>

    <!-- 网格背景 -->
    <div class="absolute inset-0 animated-grid opacity-10"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in animate-slide-down">
          开始你的创作之旅
        </h2>
        <p class="text-xl text-primary-100 mb-8 animate-fade-in animate-slide-up animate-delay-200">
          立即下载 51mazi，体验专业的写作工具
        </p>

        <!-- 平台图标和下载按钮 -->
        <div class="flex flex-wrap justify-center gap-6 mb-8">
          <div v-for="platform in ['windows', 'macos', 'linux']" :key="platform"
            class="flex flex-col items-center group/platform">
            <div
              class="rounded-xl mb-3 hover-lift hover-glow transition-all duration-500 cursor-pointer group-hover/platform:scale-110 relative overflow-hidden">
              <!-- 光效 -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-white/0 to-white/30 opacity-0 group-hover/platform:opacity-100 transition-opacity duration-500 rounded-lg">
              </div>
              <div class="relative z-10">
                <CommonPlatformIcon :platform="platform as 'windows' | 'macos' | 'linux'" size="lg" variant="dark" />
              </div>
            </div>
            <span class="text-sm font-medium group-hover/platform:text-white transition-colors duration-300">{{
              platform === 'windows' ? 'Windows' : platform === 'macos' ? 'macOS' : 'Linux' }}</span>
          </div>
        </div>

        <NuxtLink to="/download"
          class="inline-block px-10 py-5 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_60px_rgba(99,102,241,0.4)] hover-lift relative overflow-hidden group">
          <!-- 背景渐变 -->
          <span
            class="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

          <!-- 文字 -->
          <span class="relative z-10 flex items-center gap-2">
            <span>立即下载</span>
            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-500" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </span>

          <!-- 光效动画 -->
          <span
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
        </NuxtLink>

        <p class="mt-4 text-primary-200 text-sm animate-fade-in animate-delay-500">
          当前版本: v0.2.0 • 支持 Windows、macOS、Linux
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 平台图标已抽离到 PlatformIcon 组件
</script>
