<template>
  <footer class="bg-black/80 backdrop-blur-xl text-gray-300 border-t border-white/10">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- 关于 -->
        <div class="animate-fade-in animate-slide-up">
          <h3 class="text-white text-lg font-semibold mb-4">关于 51mazi</h3>
          <p class="text-sm leading-relaxed">
            基于 Electron + Vue 3 开发的桌面小说写作软件，提供专业编辑器、地图设计、关系图谱、事序图、组织架构、词条字典等完整创作工具集。
          </p>
        </div>

        <!-- 快速链接 -->
        <div class="animate-fade-in animate-slide-up animate-delay-200">
          <h3 class="text-white text-lg font-semibold mb-4">快速链接</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="(link, index) in quickLinks" :key="link.path">
              <NuxtLink :to="link.path" class="hover:text-white transition-smooth group inline-flex items-center">
                <span class="transform group-hover:translate-x-1 transition-transform duration-300">
                  {{ link.label }}
                </span>
                <svg
                  class="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 资源 -->
        <div class="animate-fade-in animate-slide-up animate-delay-300">
          <h3 class="text-white text-lg font-semibold mb-4">资源</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="(link, index) in resources" :key="link.href">
              <!-- 内部路由使用 NuxtLink -->
              <NuxtLink v-if="!link.external" :to="link.href"
                class="hover:text-white transition-smooth group inline-flex items-center">
                <span class="transform group-hover:translate-x-1 transition-transform duration-300">
                  {{ link.label }}
                </span>
                <svg
                  class="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </NuxtLink>
              <!-- 外部链接使用 a 标签 -->
              <a v-else :href="link.href" target="_blank" rel="noopener noreferrer"
                class="hover:text-white transition-smooth group inline-flex items-center">
                <span class="transform group-hover:translate-x-1 transition-transform duration-300">
                  {{ link.label }}
                </span>
                <svg
                  class="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- 联系方式 -->
        <div class="animate-fade-in animate-slide-up animate-delay-400">
          <h3 class="text-white text-lg font-semibold mb-4">联系我们</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="(contact, index) in contacts" :key="contact.href">
              <a :href="contact.href" :target="contact.external ? '_blank' : undefined"
                :rel="contact.external ? 'noopener noreferrer' : undefined"
                class="hover:text-white transition-smooth group inline-flex items-center">
                <span class="transform group-hover:translate-x-1 transition-transform duration-300">
                  {{ contact.label }}
                </span>
                <svg v-if="contact.external"
                  class="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="mt-8 pt-8 border-t border-white/10 text-center text-sm animate-fade-in animate-delay-500">
        <p class="mb-2">
          © {{ currentYear }} 51mazi. All rights reserved.
        </p>
        <p class="text-gray-500">
          Made with <span class="text-red-500 animate-pulse">❤️</span> for writers
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const quickLinks = [
  { label: '功能特性', path: '/features' },
  { label: '下载', path: '/download' },
  { label: '使用指南', path: '/guide' },
  { label: '博客', path: '/blog' }
]

const resources = [
  { label: '关于我们', href: '/about', external: false },
  { label: '联系我们', href: '/contact', external: false },
  { label: 'GitHub 仓库', href: 'https://github.com/xiaoshengxianjun/51mazi', external: true },
  { label: '更新日志', href: 'https://github.com/xiaoshengxianjun/51mazi/releases', external: true }
]

const contacts = [
  { label: '邮箱: fomazi@163.com', href: 'mailto:fomazi@163.com', external: false },
  { label: 'QQ 群: 777690109', href: 'https://qm.qq.com/q/777690109', external: true },
  { label: 'GitHub Issues', href: 'https://github.com/xiaoshengxianjun/51mazi/issues', external: true }
]
</script>
