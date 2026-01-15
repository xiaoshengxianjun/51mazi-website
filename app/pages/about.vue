<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- 页面标题 -->
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            关于 51mazi
          </h1>
          <p class="text-xl text-gray-600">
            专为小说创作者设计的专业写作工具
          </p>
        </div>

        <!-- 项目介绍 -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">项目介绍</h2>
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed mb-4">
              51mazi 是一个专为小说创作者设计的专业写作工具。我们致力于为创作者提供一套完整、易用的创作工具集，帮助您更高效地完成小说创作。
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              无论是长篇小说的复杂世界构建，还是短篇小说的快速创作，51mazi 都能满足您的需求。我们相信，好的工具能够激发创作灵感，提升创作效率。
            </p>
          </div>
        </div>

        <!-- 开发理念 -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">开发理念</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">本地优先</h3>
              <p class="text-gray-700">
                所有数据存储在本地，保护您的创作隐私和安全
              </p>
            </div>
            <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">功能全面</h3>
              <p class="text-gray-700">
                提供编辑器、地图、关系图等完整功能集合
              </p>
            </div>
            <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">开源免费</h3>
              <p class="text-gray-700">
                完全开源，免费使用，社区驱动
              </p>
            </div>
            <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">持续更新</h3>
              <p class="text-gray-700">
                根据用户反馈持续改进，不断添加新功能
              </p>
            </div>
          </div>
        </div>

        <!-- 技术栈 -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">技术栈</h2>
          <div class="bg-gray-50 rounded-lg p-6">
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>前端框架:</strong> Vue 3 + Electron</li>
              <li>• <strong>编辑器:</strong> TipTap</li>
              <li>• <strong>地图设计:</strong> Canvas API</li>
              <li>• <strong>数据存储:</strong> 本地文件系统</li>
            </ul>
          </div>
        </div>

        <!-- 开源信息 -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">开源信息</h2>
          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <p class="text-gray-700 mb-4">
              51mazi 是一个开源项目，源代码托管在 GitHub 上。
            </p>
            <div class="flex flex-wrap gap-4">
              <a
                href="https://github.com/your-username/51mazi"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                查看 GitHub 仓库
              </a>
              <a
                href="https://github.com/your-username/51mazi/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
              >
                查看开源协议
              </a>
            </div>
          </div>
        </div>

        <!-- 项目路线图 -->
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">项目路线图</h2>
          <div class="space-y-4">
            <div class="bg-white rounded-lg p-6 border border-gray-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">近期计划</h3>
              <ul class="space-y-2 text-gray-700">
                <li>• 优化编辑器性能</li>
                <li>• 添加更多地图设计工具</li>
                <li>• 改进关系图谱功能</li>
              </ul>
            </div>
            <div class="bg-white rounded-lg p-6 border border-gray-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">未来规划</h3>
              <ul class="space-y-2 text-gray-700">
                <li>• 插件系统</li>
                <li>• 主题定制</li>
                <li>• 协作功能</li>
                <li>• 移动端应用</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// SEO
useSeoMeta({
  title: '关于',
  description: '了解 51mazi 项目背景、开发理念、技术栈和开源信息',
  ogTitle: '关于 51mazi',
  ogDescription: '了解 51mazi 项目背景、开发理念、技术栈和开源信息'
})
</script>
