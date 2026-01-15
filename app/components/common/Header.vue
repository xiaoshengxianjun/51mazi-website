<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <span class="text-2xl font-bold text-primary-600">51mazi</span>
        </NuxtLink>

        <!-- 导航菜单（桌面端） -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-700 hover:text-primary-600 transition-colors duration-200"
            active-class="text-primary-600 font-semibold"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- 下载按钮 -->
        <div class="flex items-center space-x-4">
          <NuxtLink
            to="/download"
            class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
          >
            立即下载
          </NuxtLink>

          <!-- 移动端菜单按钮 -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 text-gray-700 hover:text-primary-600"
            aria-label="切换菜单"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- 移动端菜单 -->
      <div
        v-show="mobileMenuOpen"
        class="md:hidden py-4 border-t border-gray-200"
      >
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
          active-class="text-primary-600 font-semibold bg-primary-50"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navItems = [
  { label: '首页', path: '/' },
  { label: '功能特性', path: '/features' },
  { label: '下载', path: '/download' },
  { label: '使用指南', path: '/guide' },
  { label: '博客', path: '/blog' },
  { label: '关于', path: '/about' },
  { label: '联系我们', path: '/contact' }
]
</script>
