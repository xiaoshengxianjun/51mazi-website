<template>
  <NuxtLink
    :to="link"
    class="group block bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-smooth hover-lift border border-gray-100 relative overflow-hidden"
  >
    <!-- 背景渐变效果 -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/0 group-hover:from-primary-50/50 group-hover:to-primary-100/50 transition-all duration-500"></div>
    
    <!-- 内容 -->
    <div class="relative z-10">
      <!-- 图标 - 添加动画 -->
      <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {{ icon }}
      </div>
      
      <!-- 标题 -->
      <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
        {{ title }}
      </h3>
      
      <!-- 描述 -->
      <p class="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        {{ description }}
      </p>
      
      <!-- 箭头图标 -->
      <div class="mt-4 flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
        <span class="text-sm font-medium">了解更多</span>
        <svg
          class="w-4 h-4 ml-1"
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
