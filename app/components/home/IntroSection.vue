<script setup lang="ts">
/** 首页产品说明：补充首屏过短的正文，给搜索和摘要用 */
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
          给小说作者的本地写作软件
        </h2>
        <div class="space-y-4 text-gray-700 leading-relaxed text-lg">
          <p>
            51码字面向网文和小说作者。书籍、章节、笔记和世界观设定都保存在你指定的文件夹里，不强制登录，断网也能写。
          </p>
          <p>
            正文和笔记在编辑器里完成；大纲、人物、地图、伏笔等写作助手按书隔离。需要时再用可选 AI 做润色、续写、校对或出图。书架上还可以
            <NuxtLink to="/features/writer-orders" class="text-primary-600 hover:text-primary-700 font-medium">发布或报名原创文学约稿</NuxtLink>。
          </p>
          <p>
            桌面端提供 Windows 与 macOS 安装包，Android 可在官网下载，iOS 目前内测。
          </p>
        </div>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="/download"
            class="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
          >
            下载安装包
          </NuxtLink>
          <NuxtLink
            to="/guide"
            class="inline-flex items-center px-5 py-2.5 border border-primary-200 text-primary-700 rounded-lg hover:bg-primary-50 font-medium"
          >
            使用指南
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
