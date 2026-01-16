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
              <strong>51mazi</strong> 是一款基于 <strong>Electron + Vue 3</strong> 技术栈开发的桌面小说写作软件，专为小说创作者设计。它不仅提供了专业的写作环境，还集成了地图设计、关系图谱、人物档案等创作辅助工具，让小说创作变得更加高效和有趣。
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              无论是长篇小说的复杂世界构建，还是短篇小说的快速创作，51mazi 都能满足您的需求。软件采用书架式管理，支持多书籍管理，每本书都有独立的数据目录结构，确保数据的安全性和独立性。
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>核心优势：</strong>
            </p>
            <ul class="text-gray-700 leading-relaxed mb-4 list-disc list-inside space-y-2">
              <li>✅ <strong>完全本地化存储</strong>：所有数据都存储在本地，保护用户隐私，无需担心数据泄露</li>
              <li>✅ <strong>双重密码保护</strong>：支持书架密码和书籍密码双重保护，确保创作内容安全</li>
              <li>✅ <strong>跨平台支持</strong>：基于 Electron 框架，支持 Windows、macOS、Linux 等多个平台</li>
              <li>✅ <strong>专业写作体验</strong>：基于 TipTap 的专业富文本编辑器，支持人物高亮、禁词提示、段落拖拽等智能功能</li>
              <li>✅ <strong>创作辅助工具</strong>：专业地图设计、关系图谱、事序图、组织架构、词条字典等完整工具集</li>
            </ul>
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
            <h3 class="text-xl font-semibold text-gray-900 mb-4">现代化技术栈</h3>
            <ul class="space-y-2 text-gray-700 mb-6">
              <li>• <strong>Electron 39.2.7:</strong> 跨平台桌面应用框架</li>
              <li>• <strong>Vue 3.5.22:</strong> 渐进式 JavaScript 框架</li>
              <li>• <strong>Vite 6.4.0:</strong> 现代化构建工具</li>
              <li>• <strong>Element Plus 2.11.4:</strong> 企业级 UI 组件库</li>
            </ul>
            
            <h3 class="text-xl font-semibold text-gray-900 mb-4">核心功能库</h3>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>TipTap 3.7.0:</strong> 基于 ProseMirror 的富文本编辑器</li>
              <li>• <strong>ECharts 6.0.0:</strong> 数据可视化图表库</li>
              <li>• <strong>relation-graph-vue3 2.2.11:</strong> 关系图谱可视化组件</li>
              <li>• <strong>Pinia 3.0.3:</strong> Vue 3 官方推荐的状态管理库</li>
              <li>• <strong>perfect-freehand 1.2.2:</strong> 流畅的手绘工具库</li>
              <li>• <strong>Canvas API:</strong> 专业级地图绘制引擎</li>
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
                href="https://github.com/xiaoshengxianjun/51mazi"
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
                href="https://github.com/xiaoshengxianjun/51mazi/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
              >
                查看开源协议
              </a>
            </div>
          </div>
        </div>

        <!-- 适用人群 -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">适用人群</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">网络小说作者</h3>
              <p class="text-gray-700">
                需要管理复杂情节和人物关系，51mazi 的关系图谱和事序图功能完美满足需求
              </p>
            </div>
            <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">传统文学创作者</h3>
              <p class="text-gray-700">
                需要专业的写作环境，TipTap 编辑器提供流畅的创作体验
              </p>
            </div>
            <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">剧本创作者</h3>
              <p class="text-gray-700">
                需要时间线和人物管理，时间线管理和人物档案系统提供完整支持
              </p>
            </div>
            <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">游戏剧情策划</h3>
              <p class="text-gray-700">
                需要地图设计和世界观构建，专业地图设计工具和词条字典完美适配
              </p>
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
                <li>• 优化编辑器性能和用户体验</li>
                <li>• 增强地图设计工具功能</li>
                <li>• 改进关系图谱可视化效果</li>
                <li>• 完善用户指南和帮助文档</li>
              </ul>
            </div>
            <div class="bg-white rounded-lg p-6 border border-gray-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">未来规划</h3>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>插件系统</strong>：支持第三方插件扩展功能</li>
                <li>• <strong>云端同步</strong>：可选的云端数据同步功能</li>
                <li>• <strong>协作功能</strong>：多人协作创作支持</li>
                <li>• <strong>AI 辅助</strong>：集成 AI 写作助手</li>
                <li>• <strong>社区功能</strong>：作者交流平台</li>
                <li>• <strong>移动端应用</strong>：iOS 和 Android 版本</li>
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
