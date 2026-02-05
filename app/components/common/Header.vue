<template>
  <header class="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-white/20 transition-all duration-300 shadow-lg supports-backdrop-filter:bg-white/30">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo - 添加动画 -->
        <NuxtLink to="/" class="flex items-center space-x-2 group transition-smooth">
          <NuxtImg src="/logo.png" alt="51mazi" class="h-8 w-auto transition-transform duration-300 group-hover:scale-105" width="120" height="32" />
        </NuxtLink>

        <!-- 导航菜单（桌面端） -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="relative text-gray-800 hover:text-primary-600 transition-smooth group font-medium"
            active-class="text-primary-600 font-semibold"
          >
            {{ item.label }}
            <!-- 下划线动画 -->
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" v-if="$route.path === item.path"></span>
          </NuxtLink>
        </div>

        <!-- 下载按钮 -->
        <div class="flex items-center space-x-4">
          <NuxtLink to="/download" class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-smooth font-medium hover-lift relative overflow-hidden group">
            <span class="relative z-10">立即下载</span>
            <span class="absolute inset-0 bg-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </NuxtLink>

          <!-- 移动端菜单按钮 -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 text-gray-800 hover:text-primary-600 transition-smooth rounded-lg hover:bg-white/50" aria-label="切换菜单">
            <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- 移动端菜单 - 添加动画 -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-show="mobileMenuOpen" class="md:hidden py-4 border-t border-white/20 overflow-hidden bg-white/40 backdrop-blur-md supports-backdrop-filter:bg-white/30">
          <NuxtLink
            v-for="(item, index) in navItems"
            :key="item.path"
            :to="item.path"
            class="block px-4 py-2 text-gray-800 hover:text-primary-600 hover:bg-white/50 rounded-lg transition-smooth font-medium"
            :class="`animate-fade-in animate-slide-left animate-delay-${(index + 1) * 100}`"
            active-class="text-primary-600 font-semibold bg-primary-50"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const mobileMenuOpen = ref(false);

const navItems = [
  { label: "首页", path: "/" },
  { label: "功能特性", path: "/features" },
  { label: "下载", path: "/download" },
  { label: "使用指南", path: "/guide" },
  { label: "博客", path: "/blog" },
  { label: "关于", path: "/about" },
  { label: "联系我们", path: "/contact" }
];
</script>
