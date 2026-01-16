<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 页面标题 -->
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          下载 51mazi
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          选择您的平台，立即开始使用
        </p>
      </div>

      <!-- 版本信息 -->
      <div class="max-w-2xl mx-auto mb-12 text-center">
        <div class="bg-primary-50 border border-primary-200 rounded-lg p-6">
          <p class="text-sm text-primary-700 mb-2">当前版本</p>
          <p class="text-3xl font-bold text-primary-900 mb-2">v0.1.2</p>
          <p class="text-sm text-gray-600">持续更新中，欢迎关注 GitHub 获取最新版本</p>
          <NuxtLink
            to="/blog"
            class="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium"
          >
            查看更新日志 →
          </NuxtLink>
        </div>
      </div>

      <!-- 平台下载卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <!-- Windows -->
        <div class="bg-white rounded-xl p-8 shadow-md border border-gray-200 text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Windows</h3>
          <p class="text-gray-600 mb-4">支持 Windows 10 及以上版本</p>
          <a
            href="https://github.com/xiaoshengxianjun/51mazi/releases/latest/download/51mazi-Setup.exe"
            class="block w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold mb-2"
          >
            下载 .exe
          </a>
          <p class="text-sm text-gray-500">文件大小: ~XX MB</p>
        </div>

        <!-- macOS -->
        <div class="bg-white rounded-xl p-8 shadow-md border border-gray-200 text-center">
          <div class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">macOS</h3>
          <p class="text-gray-600 mb-4">支持 macOS 10.15 及以上版本</p>
          <a
            href="https://github.com/xiaoshengxianjun/51mazi/releases/latest/download/51mazi.dmg"
            class="block w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold mb-2"
          >
            下载 .dmg
          </a>
          <p class="text-sm text-gray-500">文件大小: ~XX MB</p>
        </div>

        <!-- Linux -->
        <div class="bg-white rounded-xl p-8 shadow-md border border-gray-200 text-center">
          <div class="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.307-.545 1.655-.337 2.324.19.605.553 1.125.915 1.32.26.14.49.21.69.26.18.05.34.08.48.09.15.01.3.02.45.02.78.01 1.52.01 2.23.01.71 0 1.45 0 2.23-.01.15 0 .3-.01.45-.02.14-.01.3-.04.48-.09.2-.05.43-.12.69-.26.36-.195.725-.715.915-1.32.208-.669-.077-2.017-.337-2.324a.424.424 0 00-.11-.135c.123-.805-.009-1.657-.287-2.489-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-1.074-1.928-1.15-3.02-.065-1.491 1.056-5.965-3.17-6.298A4.017 4.017 0 0012.504 0zm-.97 2.22c.16-.01.32-.02.48-.02.16 0 .32.01.48.02 2.333.184 2.246 2.412 2.36 3.3.08.63.22 1.24.69 1.8.52.62 1.25 1.5 1.73 2.45.28.55.42 1.11.42 1.64 0 .01.01.02.01.03-.01.01-.02.02-.03.03-.1.05-.2.09-.31.12-.11.03-.22.05-.33.06-.22.02-.44.03-.66.03h-4.5c-.22 0-.44-.01-.66-.03-.11-.01-.22-.03-.33-.06-.11-.03-.21-.07-.31-.12-.01-.01-.02-.02-.03-.03.01-.01.01-.02.01-.03 0-.53.14-1.09.42-1.64.48-.95 1.21-1.83 1.73-2.45.47-.56.61-1.17.69-1.8.114-.888.027-3.116 2.36-3.3z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Linux</h3>
          <p class="text-gray-600 mb-4">支持主流 Linux 发行版</p>
          <a
            href="https://github.com/xiaoshengxianjun/51mazi/releases/latest/download/51mazi.AppImage"
            class="block w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold mb-2"
          >
            下载 .AppImage
          </a>
          <p class="text-sm text-gray-500">文件大小: ~XX MB</p>
        </div>
      </div>

      <!-- 系统要求 -->
      <div class="max-w-4xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">系统要求</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="font-semibold text-gray-900 mb-3">Windows</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Windows 10 或更高版本</li>
              <li>• 64 位操作系统</li>
              <li>• 至少 500 MB 可用空间</li>
              <li>• 4 GB RAM（推荐 8 GB）</li>
            </ul>
          </div>
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="font-semibold text-gray-900 mb-3">macOS</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• macOS 10.15 或更高版本</li>
              <li>• 64 位处理器</li>
              <li>• 至少 500 MB 可用空间</li>
              <li>• 4 GB RAM（推荐 8 GB）</li>
            </ul>
          </div>
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="font-semibold text-gray-900 mb-3">Linux</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Ubuntu 18.04+ / Debian 10+</li>
              <li>• 或其他主流发行版</li>
              <li>• 至少 500 MB 可用空间</li>
              <li>• 4 GB RAM（推荐 8 GB）</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 安装说明 -->
      <div class="max-w-4xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">安装说明</h2>
        <div class="space-y-6">
          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-3">Windows</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-700">
              <li>下载 .exe 安装文件</li>
              <li>双击运行安装程序</li>
              <li>按照安装向导完成安装</li>
              <li>从开始菜单启动 51mazi</li>
            </ol>
          </div>
          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-3">macOS</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-700">
              <li>下载 .dmg 文件</li>
              <li>双击打开 .dmg 文件</li>
              <li>将 51mazi 拖拽到应用程序文件夹</li>
              <li>首次运行时，可能需要在系统偏好设置中允许运行</li>
            </ol>
          </div>
          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-3">Linux</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-700">
              <li>下载 .AppImage 文件</li>
              <li>添加执行权限：<code class="bg-gray-100 px-2 py-1 rounded">chmod +x 51mazi.AppImage</code></li>
              <li>双击运行或使用命令行：<code class="bg-gray-100 px-2 py-1 rounded">./51mazi.AppImage</code></li>
            </ol>
          </div>
        </div>
      </div>

      <!-- 其他下载方式 -->
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">其他下载方式</h2>
        <div class="space-y-4">
          <a
            href="https://github.com/xiaoshengxianjun/51mazi/releases"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub Releases
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: '下载',
  description: '下载 51mazi - 支持 Windows、macOS、Linux 三大平台，立即开始您的创作之旅',
  ogTitle: '下载 51mazi',
  ogDescription: '支持 Windows、macOS、Linux 三大平台，立即开始您的创作之旅'
})
</script>
