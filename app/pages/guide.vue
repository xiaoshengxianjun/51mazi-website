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
            <h3 class="text-xl font-semibold text-gray-900 mb-3">2. 设置书籍主目录</h3>
            <p class="text-gray-700 mb-4">
              启动软件后，首先需要设置书籍主目录，这是所有书籍数据的存储位置。
            </p>
            <p class="text-gray-700 mb-4">
              <strong>（可选）设置书架密码：</strong>为整个书架设置密码保护，启动时需输入密码验证，确保所有书籍数据安全。支持设置、修改、取消书架密码，密码提示功能帮助记忆。
            </p>
            <p class="text-gray-700">
              <strong>创建第一本书籍：</strong>点击"新建书籍"按钮，输入书籍名称和保存位置。您也可以为单本书籍设置密码保护，双重保护确保创作内容安全。
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">3. 开始创作</h3>
            <p class="text-gray-700 mb-4">
              在编辑器中开始写作，使用快捷键 <code class="bg-gray-100 px-2 py-1 rounded">Ctrl/Cmd + S</code> 快速保存。
            </p>
            <p class="text-gray-700 mb-4">
              <strong>编辑器高级功能：</strong>
            </p>
            <ul class="text-gray-700 mb-4 list-disc list-inside space-y-1 ml-4">
              <li>开启人物高亮，追踪角色出场</li>
              <li>设置禁词列表，避免敏感词汇（使用快捷键 <code class="bg-gray-100 px-2 py-1 rounded">Ctrl/Cmd + F</code> 搜索）</li>
              <li>使用段落拖拽，灵活组织内容结构</li>
              <li>实时查看字数统计和码字速度</li>
            </ul>
            <p class="text-gray-700">
              探索地图设计、关系图谱、事序图、组织架构、词条字典等功能，让创作更加高效。
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
    description: '学习如何使用专业编辑器进行创作，掌握人物高亮、禁词提示等智能功能'
  },
  {
    slug: 'map',
    title: '地图设计教程',
    icon: '🗺️',
    description: '掌握地图设计工具的使用方法，学习画笔、形状、资源工具等'
  },
  {
    slug: 'relation',
    title: '关系图谱教程',
    icon: '🕸️',
    description: '了解如何创建和管理人物关系，设置头像和关系类型'
  },
  {
    slug: 'events',
    title: '事序图教程',
    icon: '📊',
    description: '学习使用事序图管理事件时间轴和进度，拖拽调整事件位置'
  },
  {
    slug: 'dictionary',
    title: '词条字典教程',
    icon: '📖',
    description: '掌握词条字典的树形结构管理，学习拖拽排序和分类'
  },
  {
    slug: 'organization',
    title: '组织架构教程',
    icon: '🏛️',
    description: '了解如何创建和管理组织架构，展示层级关系'
  }
]

const faqs = [
  {
    question: '如何安装 51mazi？',
    answer: '访问下载页面，选择您的操作系统（Windows、macOS、Linux），下载对应的安装包并按照安装向导完成安装。Windows 用户下载 .exe 文件，macOS 用户下载 .dmg 文件，Linux 用户下载 .AppImage 文件。'
  },
  {
    question: '数据是否安全？',
    answer: '所有数据都存储在本地，完全保护您的创作隐私。支持书架密码和书籍密码双重保护，确保创作内容安全。我们不会上传您的任何创作内容，所有数据都在您的本地设备上。'
  },
  {
    question: '支持哪些平台？',
    answer: '51mazi 基于 Electron 框架开发，支持 Windows 10+、macOS 10.15+ 和主流 Linux 发行版（Ubuntu 18.04+ / Debian 10+ 等）。'
  },
  {
    question: '如何备份我的书籍？',
    answer: '书籍文件保存在本地，您可以定期复制书籍文件夹进行备份，或使用云同步服务（如 OneDrive、iCloud、Dropbox 等）自动同步备份。'
  },
  {
    question: '软件是免费的吗？',
    answer: '51mazi 是完全开源免费的软件，您可以免费使用所有功能。源代码托管在 GitHub 上，欢迎查看和参与贡献。'
  },
  {
    question: '编辑器支持哪些功能？',
    answer: '编辑器基于 TipTap，支持格式化文本、标题、段落等。还支持人物高亮、禁词提示、段落拖拽、文本高亮等智能功能。支持多主题模式（亮色、暗色、护眼黄等）。'
  },
  {
    question: '地图设计工具有哪些功能？',
    answer: '地图设计工具提供画笔、橡皮擦、形状（线条、矩形、圆形、五角星、箭头等）、油漆桶、文字、资源工具等多种绘图工具。内置丰富的资源图标库，支持拖拽添加建筑和地标。完整的历史记录和撤销/重做功能。'
  },
  {
    question: '如何设置书架密码？',
    answer: '在软件设置中可以设置书架密码，密码长度为 8-16 位数字或字母组合。设置后，每次启动软件都需要输入密码验证。支持密码提示功能，帮助记忆密码。'
  },
  {
    question: '快捷键有哪些？',
    answer: '编辑器支持 Ctrl/Cmd + S 快速保存，Ctrl/Cmd + F 搜索。地图设计中支持 P（画笔）、E（橡皮擦）、G（形状）、T（文字）、V（选框）、H（移动）等快捷键。空格键可快速切换到移动工具。'
  },
  {
    question: '如何联系开发者？',
    answer: '您可以通过以下方式联系我们：QQ 群（777690109）、邮箱（fomazi@163.com）、GitHub Issues（https://github.com/xiaoshengxianjun/51mazi/issues）。我们会在收到反馈后尽快回复。'
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
