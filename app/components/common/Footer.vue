<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- 关于 -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">关于 51mazi</h3>
          <p class="text-sm leading-relaxed">
            专为小说创作者设计的专业写作工具，提供编辑器、地图设计、关系图谱等强大功能。
          </p>
        </div>

        <!-- 快速链接 -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">快速链接</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="/features" class="hover:text-white transition-colors">
                功能特性
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/download" class="hover:text-white transition-colors">
                下载
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/guide" class="hover:text-white transition-colors">
                使用指南
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="hover:text-white transition-colors">
                博客
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 资源 -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">资源</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="/about" class="hover:text-white transition-colors">
                关于我们
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-white transition-colors">
                联系我们
              </NuxtLink>
            </li>
            <li>
              <a
                href="https://github.com/your-username/51mazi"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://github.com/your-username/51mazi/releases"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition-colors"
              >
                更新日志
              </a>
            </li>
          </ul>
        </div>

        <!-- 联系方式 -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">联系我们</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="mailto:support@51mazi.com"
                class="hover:text-white transition-colors"
              >
                邮箱: support@51mazi.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/your-username/51mazi/issues"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition-colors"
              >
                GitHub Issues
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
        <p>
          © {{ currentYear }} 51mazi. All rights reserved.
        </p>
        <p class="mt-2 text-gray-500">
          Made with ❤️ for writers
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
