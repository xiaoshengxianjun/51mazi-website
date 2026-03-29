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
              <strong>（可选）设置书架密码：</strong>为整个书架设置密码保护（8-16 位数字或字母组合），启动时需输入密码验证，确保所有书籍数据安全。支持设置、修改、取消书架密码，密码提示功能帮助记忆。
            </p>
            <p class="text-gray-700">
              <strong>创建第一本书籍：</strong>点击“新建书籍”按钮，输入书籍名称和保存位置。您也可以为单本书籍设置密码保护（4-8 位数字或字母组合，可选），双重保护确保创作内容安全。
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
              <li>使用 <strong>AI 润色</strong>、<strong>AI 续写</strong>（需在设置中配置 DeepSeek API Key）</li>
              <li>选中一段正文（约 100～1000 有效字）使用 <strong>AI 场景图</strong>：通义万相 Key 必填，可选 DeepSeek 提炼画面描述</li>
            </ul>
            <p class="text-gray-700">
              探索时间线、地图设计、关系图谱、事序图、组织架构、词条字典、人物档案等功能，让世界观与剧情线索更清晰。
            </p>
            <p class="text-gray-700 mt-4">
              <strong>（可选）AI 与配图：</strong>设置中配置 <strong>DeepSeek</strong>（起名、润色、续写、场景图画面提炼）与 <strong>通义万相</strong>（封面、人物全身图、章节选段场景图）。封面在「新建/编辑书籍」中生成；人物图在「人物档案」编辑抽屉中生成。
            </p>
            <p class="text-gray-700 mt-4">
              <strong>内置用户指南：</strong>通过左侧菜单打开「用户指南」，可查阅功能说明、操作步骤与常见问题。
            </p>
            <p class="text-gray-700 mt-4">
              <strong>（可选）下载小说：</strong>左侧菜单进入「下载小说」，选择书源、输入书名或作者搜索，选中书籍后可「下载并加入书架」或「导出为 TXT」，操作区悬浮在页面底部便于查看进度；仅供个人学习研究，请遵守当地法律法规。
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
    slug: 'bookshelf',
    title: '书架与 AI 封面',
    icon: '📚',
    description: '多书籍管理、书架/书籍密码、本地封面与通义万相一键生成封面'
  },
  {
    slug: 'editor',
    title: '编辑器使用教程',
    icon: '✍️',
    description: 'TipTap 编辑、AI 润色与续写、选段 AI 场景图，以及人物高亮、禁词与段落拖拽'
  },
  {
    slug: 'ai-scene',
    title: 'AI 场景图',
    icon: '🖼️',
    description: '在章节中选中节选，配置画风与尺寸，生成并保存到本书 scene_images'
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
    slug: 'timeline',
    title: '时间线教程',
    icon: '📅',
    description: '多条时间线与时间轴节点，梳理纪年、阶段与关键事件'
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
  },
  {
    slug: 'character',
    title: '人物档案',
    icon: '👤',
    description: '卡片/表格视图、人物图列表与通义万相 AI 生成竖版全身图'
  },
  {
    slug: 'random-name',
    title: '随机名字生成器',
    icon: '🎲',
    description: 'DeepSeek 与本地词库双模式，批量生成与类型参数'
  },
  {
    slug: 'novel-download',
    title: '下载小说',
    icon: '📥',
    description: '多书源搜索、下载并加入书架或导出 TXT，正文去广告，仅供个人学习研究'
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
    answer: '编辑器基于 TipTap，支持格式化文本、标题、段落与实时字数/码字速度。可选 DeepSeek：AI 润色、AI 续写。可选通义万相：选中节选（约 100～1000 有效字）生成 AI 场景图并保存到本书 scene_images。另支持人物高亮、禁词、段落拖拽、文本高亮与多主题（亮/暗/护眼黄等）。'
  },
  {
    question: 'DeepSeek 和通义万相分别做什么？',
    answer: 'DeepSeek 可用于随机起名、正文润色与续写，以及在 AI 场景图中可选「提炼画面描述」。通义万相用于生成小说封面、人物档案中的竖版全身人物图，以及章节选段场景图；需在设置中填写对应 API Key，且场景图与封面、人物图共用通义万相配置。'
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
  description:
    '51mazi 使用指南：安装与书籍目录、编辑器 AI 润色/续写/场景图、DeepSeek 与通义万相配置、时间线与事序图等模块入口，以及常见问题解答。',
  ogTitle: '51mazi 使用指南',
  ogDescription: '快速上手、各功能教程链接与常见问题（含 AI Key 说明）。'
})
</script>
