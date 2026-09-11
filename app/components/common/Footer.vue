<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">关于 51码字</h3>
          <p class="text-sm leading-relaxed">
            本地优先的小说写作桌面客户端。书籍与设定保存在你指定的目录，断网可写；文本 AI、图像 AI 与自动更新按需联网。
          </p>
        </div>

        <div>
          <h3 class="text-white text-lg font-semibold mb-4">快速链接</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="link in quickLinks" :key="link.path">
              <NuxtLink :to="link.path" class="hover:text-white transition-colors">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white text-lg font-semibold mb-4">资源</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="link in resources" :key="link.href">
              <NuxtLink
                v-if="!link.external"
                :to="link.href"
                class="hover:text-white transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
              <a
                v-else
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white text-lg font-semibold mb-4">联系我们</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a :href="`mailto:${CONTACT_EMAIL}`" class="hover:text-white transition-colors">
                邮箱: {{ CONTACT_EMAIL }}
              </a>
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-white transition-colors">
                QQ 群: {{ QQ_GROUP }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-white transition-colors">
                意见反馈与赞助
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-white/10 text-center text-sm">
        <p class="mb-2">
          © {{ currentYear }} 51码字. All rights reserved.
        </p>
        <p class="text-gray-500">
          本地写作，数据在你手里
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { CONTACT_EMAIL, QQ_GROUP } from '~/utils/product'

const currentYear = new Date().getFullYear()

const quickLinks = [
  { label: '功能特性', path: '/features' },
  { label: '下载', path: '/download' },
  { label: '使用指南', path: '/guide' },
  { label: '博客', path: '/blog' },
]

const resources = [
  { label: '关于我们', href: '/about', external: false },
  { label: '用户协议', href: '/terms', external: false },
  { label: '隐私政策', href: '/privacy', external: false },
  { label: '联系我们', href: '/contact', external: false },
]
</script>
