<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            关于 51码字
          </h1>
          <p class="text-xl text-gray-600">
            本地优先的小说写作桌面客户端
          </p>
        </div>

        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">项目介绍</h2>

          <div class="mb-8 rounded-lg overflow-hidden shadow-xl border border-gray-200">
            <NuxtImg
              src="/images/home.png"
              alt="51码字首页：本地书架"
              class="w-full h-auto"
              loading="lazy"
              format="webp"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          <div>
            <p class="text-gray-700 leading-relaxed mb-4">
              <strong>51码字</strong>（51mazi）是面向网文与小说作者的桌面写作工具。书籍、章节、笔记和世界观设定都保存在你指定的本地目录，断网可继续写；文本 AI、图像 AI 与自动更新等联网能力按需使用。
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              没有账号体系，也不会把正文自动上传到云端。请定期备份整个书籍目录。
            </p>
            <ul class="text-gray-700 leading-relaxed mb-4 list-disc list-inside space-y-2">
              <li><strong>本地优先</strong>：数据在你选的目录里，换电脑拷贝目录即可继续</li>
              <li><strong>完整工作流</strong>：编辑器 + 十三项写作助手 + 近 30 日码字统计</li>
              <li><strong>可选 AI</strong>：自备 Key，润色、续写、校对、大纲 Agent、封面与插图</li>
              <li><strong>多窗口与主题</strong>：每书独立窗口；九套主题 + 跟随系统</li>
              <li><strong>跨平台</strong>：官方安装包覆盖 Windows（x64 / ARM64）与 macOS（Apple Silicon / Intel）</li>
            </ul>
          </div>
        </div>

        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">开发理念</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">本地优先</h3>
              <p class="text-gray-700">
                创作内容默认只在本机。没有强制云同步，也没有必须登录才能写的门槛。
              </p>
            </div>
            <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">工具齐全</h3>
              <p class="text-gray-700">
                大纲、设定、人物、地图、关系、时间线、伏笔与灵感随笔都在同一本书里，减少来回切换外部软件。
              </p>
            </div>
            <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">按需联网</h3>
              <p class="text-gray-700">
                写作本身不依赖网络。AI、下载小说和检查更新只在你主动使用时连接。
              </p>
            </div>
            <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">试用后激活</h3>
              <p class="text-gray-700">
                7 天试用功能完整；到期后可激活许可证，或在受限模式下继续少量创作。
              </p>
            </div>
          </div>
        </div>

        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">适用人群</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">网络小说作者</h3>
              <p class="text-gray-700">
                需要管理多线剧情、人物关系和日常码字目标。
              </p>
            </div>
            <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">世界观向创作者</h3>
              <p class="text-gray-700">
                设定、地图、组织与时间线都按书隔离存放。
              </p>
            </div>
            <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">注重隐私的作者</h3>
              <p class="text-gray-700">
                不强制注册，正文不自动上云，可叠加书架与书籍密码。
              </p>
            </div>
            <div class="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">偶尔使用 AI 的作者</h3>
              <p class="text-gray-700">
                自备第三方 Key，润色、续写和出图都在本机确认后落盘。
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">已经有的，和还没有的</h2>
          <div class="space-y-4">
            <div class="bg-white rounded-lg p-6 border border-gray-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">当前已提供</h3>
              <ul class="space-y-2 text-gray-700">
                <li>• 本地书架、码字统计、九套主题、自动更新</li>
                <li>• 章节 / 笔记编辑器、回收站、手机预览、全书导出</li>
                <li>• 大纲（含 Agent 与章纲生章）、设定、人物图谱、随机起名</li>
                <li>• 地图、词条、禁词、伏笔、灵感随笔、组织、关系、时间线、事序图</li>
                <li>• 可选文本 / 图像 AI，以及下载小说（需合规使用）</li>
              </ul>
            </div>
            <div class="bg-white rounded-lg p-6 border border-gray-200">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">尚未实现</h3>
              <ul class="space-y-2 text-gray-700">
                <li>• 账号体系与云同步（本地数据不会自动上传）</li>
                <li>• 多人协作、社区与移动端</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: '关于 51码字',
  description: '了解 51码字：本地优先的小说写作桌面客户端，数据保存在你指定的目录，支持 Windows 与 macOS。',
  ogTitle: '关于 51码字',
  ogDescription: '本地优先、可选 AI、试用后激活。账号与云同步尚未提供。',
})
</script>
