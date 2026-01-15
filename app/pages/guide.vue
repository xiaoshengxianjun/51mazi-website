<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 页面标题 -->
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          使用指南
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          快速上手 51mazi，开始您的创作之旅
        </p>
      </div>

      <!-- 快速开始 -->
      <div class="max-w-4xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">快速开始</h2>
        <div class="space-y-6">
          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">1. 安装软件</h3>
            <p class="text-gray-700 mb-4">
              访问 <NuxtLink to="/download" class="text-primary-600 hover:text-primary-700">下载页面</NuxtLink>，选择您的平台并下载安装包。
            </p>
            <p class="text-gray-700">
              按照安装向导完成安装后，启动 51mazi。
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">2. 创建第一个项目</h3>
            <p class="text-gray-700 mb-4">
              启动软件后，点击"新建项目"按钮，输入项目名称和保存位置。
            </p>
            <p class="text-gray-700">
              您可以为项目设置密码保护，确保创作内容的安全。
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">3. 开始创作</h3>
            <p class="text-gray-700 mb-4">
              在编辑器中开始写作，使用左侧导航栏访问各种功能模块。
            </p>
            <p class="text-gray-700">
              探索地图设计、关系图谱、人物档案等功能，让创作更加高效。
            </p>
          </div>
        </div>
      </div>

      <!-- 功能教程 -->
      <div class="max-w-4xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">功能教程</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NuxtLink
            v-for="tutorial in tutorials"
            :key="tutorial.slug"
            :to="`/features/${tutorial.slug}`"
            class="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div class="text-3xl mb-3">{{ tutorial.icon }}</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ tutorial.title }}</h3>
            <p class="text-gray-600">{{ tutorial.description }}</p>
          </NuxtLink>
        </div>
      </div>

      <!-- 常见问题 -->
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">常见问题 (FAQ)</h2>
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white rounded-lg p-6 border border-gray-200"
          >
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ faq.question }}</h3>
            <p class="text-gray-700">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tutorials = [
  {
    slug: 'editor',
    title: '编辑器使用教程',
    icon: '✍️',
    description: '学习如何使用专业编辑器进行创作'
  },
  {
    slug: 'map',
    title: '地图设计教程',
    icon: '🗺️',
    description: '掌握地图设计工具的使用方法'
  },
  {
    slug: 'relation',
    title: '关系图谱教程',
    icon: '🕸️',
    description: '了解如何创建和管理人物关系'
  }
]

const faqs = [
  {
    question: '如何安装 51mazi？',
    answer: '访问下载页面，选择您的操作系统，下载对应的安装包并按照安装向导完成安装。'
  },
  {
    question: '数据是否安全？',
    answer: '所有数据都存储在本地，您可以设置密码保护。我们不会上传您的任何创作内容。'
  },
  {
    question: '支持哪些文件格式？',
    answer: '支持导出为 Markdown、TXT、PDF 等多种格式，方便您分享和备份。'
  },
  {
    question: '如何备份我的项目？',
    answer: '项目文件保存在本地，您可以定期复制项目文件夹进行备份，或使用云同步服务。'
  },
  {
    question: '软件是免费的吗？',
    answer: '51mazi 是开源软件，完全免费使用。您可以在 GitHub 上查看源代码。'
  }
]

// SEO
useSeoMeta({
  title: '使用指南',
  description: '51mazi 使用指南 - 快速上手教程、功能使用说明和常见问题解答',
  ogTitle: '51mazi 使用指南',
  ogDescription: '快速上手教程、功能使用说明和常见问题解答'
})
</script>
