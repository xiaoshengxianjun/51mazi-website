<template>
  <NuxtLink
    :to="link"
    class="group block bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover-lift border border-gray-100 relative overflow-hidden perspective-1000 h-full flex flex-col"
    style="transform-style: preserve-3d;"
  >
    <!-- 背景渐变效果 -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-50/0 via-primary-100/0 to-purple-50/0 group-hover:from-primary-50/60 group-hover:via-primary-100/40 group-hover:to-purple-50/60 transition-all duration-700"></div>
    
    <!-- 光效 -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-400/30 to-purple-400/30 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700"></div>
    </div>
    
    <!-- 内容 - 使用 flex 布局确保高度统一 -->
    <div class="relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500 flex flex-col flex-grow">
      <!-- 图标 - 3D 旋转效果 -->
      <div class="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 inline-block flex-shrink-0">
        {{ icon }}
      </div>
      
      <!-- 标题 - 渐变文字 -->
      <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-purple-600 transition-all duration-500 flex-shrink-0">
        {{ title }}
      </h3>
      
      <!-- 描述 - 自动填充剩余空间 -->
      <p class="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-500 flex-grow">
        {{ description }}
      </p>
      
      <!-- 箭头图标 - 增强动画 -->
      <div class="mt-6 flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-3 transition-all duration-500 flex-shrink-0">
        <span class="text-sm font-medium mr-2">了解更多</span>
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>

    <!-- 边框光效 -->
    <div class="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-200/50 transition-all duration-500 pointer-events-none"></div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  icon: string
  link: string
}

defineProps<Props>()
</script>
