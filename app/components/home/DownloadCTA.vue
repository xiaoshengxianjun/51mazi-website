<template>
  <section class="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-purple-700 text-white relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float animate-delay-300"></div>
      <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-float animate-delay-600"></div>
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
          <div
            v-for="(platform, index) in platforms"
            :key="platform.name"
            class="flex flex-col items-center group/platform"
          >
            <div class="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mb-3 backdrop-blur-sm hover-lift hover-glow transition-all duration-500 cursor-pointer group-hover/platform:bg-white/30 group-hover/platform:scale-110 relative overflow-hidden">
              <!-- 光效 -->
              <div class="absolute inset-0 bg-gradient-to-br from-white/0 to-white/30 opacity-0 group-hover/platform:opacity-100 transition-opacity duration-500"></div>
              <div class="w-10 h-10 transform group-hover/platform:scale-125 group-hover/platform:rotate-12 transition-all duration-500 relative z-10" v-html="platform.icon"></div>
            </div>
            <span class="text-sm font-medium group-hover/platform:text-white transition-colors duration-300">{{ platform.name }}</span>
          </div>
        </div>

        <NuxtLink
          to="/download"
          class="inline-block px-10 py-5 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-primary-50 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_60px_rgba(99,102,241,0.4)] hover-lift relative overflow-hidden group"
        >
          <!-- 背景渐变 -->
          <span class="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          
          <!-- 文字 -->
          <span class="relative z-10 flex items-center gap-2">
            <span>立即下载</span>
            <svg
              class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </span>
          
          <!-- 光效动画 -->
          <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
        </NuxtLink>

        <p class="mt-4 text-primary-200 text-sm animate-fade-in animate-delay-500">
          当前版本: v1.0.0 • 支持 Windows、macOS、Linux
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 平台图标 SVG
const platforms = [
  {
    name: 'Windows',
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm16 16V5H5v14h14z"/></svg>'
  },
  {
    name: 'macOS',
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>'
  },
  {
    name: 'Linux',
    icon: '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.307-.545 1.655-.337 2.324.19.605.553 1.125.915 1.32.26.14.49.21.69.26.18.05.34.08.48.09.15.01.3.02.45.02.78.01 1.52.01 2.23.01.71 0 1.45 0 2.23-.01.15 0 .3-.01.45-.02.14-.01.3-.04.48-.09.2-.05.43-.12.69-.26.36-.195.725-.715.915-1.32.208-.669-.077-2.017-.337-2.324a.424.424 0 00-.11-.135c.123-.805-.009-1.657-.287-2.489-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-1.074-1.928-1.15-3.02-.065-1.491 1.056-5.965-3.17-6.298A4.017 4.017 0 0012.504 0zm-.97 2.22c.16-.01.32-.02.48-.02.16 0 .32.01.48.02 2.333.184 2.246 2.412 2.36 3.3.08.63.22 1.24.69 1.8.52.62 1.25 1.5 1.73 2.45.28.55.42 1.11.42 1.64 0 .01.01.02.01.03-.01.01-.02.02-.03.03-.1.05-.2.09-.31.12-.11.03-.22.05-.33.06-.22.02-.44.03-.66.03h-4.5c-.22 0-.44-.01-.66-.03-.11-.01-.22-.03-.33-.06-.11-.03-.21-.07-.31-.12-.01-.01-.02-.02-.03-.03.01-.01.01-.02.01-.03 0-.53.14-1.09.42-1.64.48-.95 1.21-1.83 1.73-2.45.47-.56.61-1.17.69-1.8.114-.888.027-3.116 2.36-3.3z"/></svg>'
  }
]
</script>
