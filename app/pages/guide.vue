<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          使用指南
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          与应用内「写作指南」一致：从选目录到写作助手、AI 与备份
        </p>
      </div>

      <div class="max-w-4xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">快速开始</h2>
        <div class="space-y-6">
          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">1. 安装软件</h3>
            <p class="text-gray-700 mb-4">
              打开
              <NuxtLink to="/download" class="text-primary-600 hover:text-primary-700">下载页面</NuxtLink>
              ，按系统与芯片下载安装包。
            </p>
            <p class="text-gray-700">
              安装后启动「51码字」，在系统设置中选择书籍主目录即可建书。
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">2. 选择书籍主目录</h3>
            <p class="text-gray-700 mb-4">
              所有书籍都保存在你指定的本地文件夹。请选一个稳定、方便备份的位置，例如文档目录下的独立文件夹。
            </p>
            <p class="text-gray-700 mb-4">
              入口：首页左侧「系统设置」。目录必须存在且可读写。首次启动未设置时会自动弹出。
            </p>
            <p class="text-gray-700">
              可选：在「书架密码」设置 8～16 位字母或数字；建书时可设 4～8 位书籍密码。
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">3. 建书并打开编辑器</h3>
            <p class="text-gray-700 mb-4">
              在书架新建书籍，填写书名、类型、简介和目标字数。单击或双击封面打开独立编辑器窗口。
            </p>
            <ul class="text-gray-700 mb-4 list-disc list-inside space-y-1 ml-4">
              <li>章节为纯文本，笔记为富文本（含表格）</li>
              <li>自动保存：停笔约 30 秒；持续输入最多约 1 分钟强制保存</li>
              <li>右侧「写作助手」打开大纲、设定、人物、地图、灵感随笔等工具</li>
              <li>标题行可开人物高亮、禁词提示、显示伏笔</li>
              <li>Ctrl/Cmd+Shift+F 全书搜索笔记、章节与写作助手</li>
              <li>菜单栏可导入 txt / docx 文件或文件夹</li>
              <li>菜单栏「伏 / 错 / 语」记伏笔、错字检查、语病检查</li>
            </ul>
            <p class="text-gray-700">
              使用 AI 前，到首页「AI 设置」选择文本 / 图像模型并验证 Key。Key 存在本机，不经过 51码字中转正文。
            </p>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">功能教程</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NuxtLink
            v-for="tutorial in tutorials"
            :key="tutorial.slug"
            :to="`/features/${tutorial.slug}`"
            class="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div class="text-3xl mb-3">{{ tutorial.icon }}</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ tutorial.title }}</h3>
            <p class="text-gray-600">{{ tutorial.description }}</p>
          </NuxtLink>
        </div>
      </div>

      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">常见问题</h2>
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white rounded-lg p-6 border border-gray-200"
          >
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ faq.question }}</h3>
            <p class="text-gray-700 whitespace-pre-line">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FEATURES } from '~/data/features'
import { CONTACT_EMAIL, QQ_GROUP } from '~/utils/product'

const tutorials = FEATURES.map((item) => ({
  slug: item.slug,
  title: item.title,
  icon: item.icon,
  description: item.description,
}))

const faqs = [
  {
    question: '如何安装 51码字？',
    answer: '打开下载页，按 Windows / macOS 与芯片架构下载安装包。Linux 暂无官方安装包。',
  },
  {
    question: '数据是否上传云端？',
    answer: '不会。正文、设定与各工具数据都在你指定的书籍目录里。应用没有账号体系，也不会自动同步到云端。请定期备份整个书籍目录。',
  },
  {
    question: '软件是免费的吗？',
    answer: '可以下载使用，安装后即可开始写作。',
  },
  {
    question: '章节和笔记有什么区别？',
    answer: '章节是纯文本写作；笔记是富文本，可插入标题、列表和表格，适合素材、灵感和设定摘录。删除的章节或笔记会进入左下角回收站。',
  },
  {
    question: 'AI 需要什么？',
    answer: '在「AI 设置」分别配置文本模型（DeepSeek 或 Kimi）和图像模型（通义万相或 Gemini Imagen），并验证 Key。Key 存在本机。',
  },
  {
    question: '人物高亮不生效？',
    answer: '先在人物图谱中为角色填写名称，再打开章节标题行「人物高亮」。名称按档案标记色显示。',
  },
  {
    question: '如何添加伏笔？',
    answer: '在章节中选中相关句子，点菜单栏「伏」，填写说明后保存。全书列表在「伏笔记录」；本章相关项可在标题行打开「显示伏笔」。',
  },
  {
    question: '如何搜索整本书？',
    answer:
      '在编辑器中按 Ctrl/Cmd+Shift+F，或点左侧栏的搜索按钮。可检索当前书的笔记、章节和写作助手。当前章节内查找仍用 Ctrl/Cmd+F。',
  },
  {
    question: '如何导入已有文稿？',
    answer:
      '打开一本书后，在菜单栏选择「导入文件」或「导入文件夹」，支持 txt 与 docx。当前在章节则导入为章节，在笔记则导入为笔记。导入章节时会按正文设置自动补上「第 N 章」前缀。',
  },
  {
    question: '如何记下灵感随笔？',
    answer:
      '应用在前台时，Mac 用 Cmd+Shift+I，Windows 用 Ctrl+Alt+I；也可打开写作助手「灵感随笔」。内容写入本书「笔记 / 灵感随笔」笔记本，可在笔记树中整理。小窗内 Ctrl/Cmd+Enter 保存，Esc 取消。',
  },
  {
    question: '下载的小说能当自己的书发布吗？',
    answer: '不能。下载功能仅供个人学习、对照或本地改稿练习。请尊重原作者版权。',
  },
  {
    question: '如何备份或换电脑？',
    answer: '备份整个书籍目录。迁移时把目录拷到新电脑，在系统设置中选中该目录即可继续写。',
  },
  {
    question: '快捷键有哪些？',
    answer:
      'Ctrl/Cmd + S 保存，Ctrl/Cmd + F 当前章节或笔记内搜索，Ctrl/Cmd + Shift + F 全书搜索，Ctrl/Cmd + G 下一个，Esc 关闭搜索。Mac 用 Cmd+Shift+I、Windows 用 Ctrl+Alt+I 打开灵感随笔（应用需在前台）；小窗内 Ctrl/Cmd+Enter 保存。Mac 用 Command，Windows 用 Ctrl。地图快捷键见地图页右上角「?」。',
  },
  {
    question: '如何联系开发者？',
    answer: `邮箱 ${CONTACT_EMAIL}；QQ 群 ${QQ_GROUP}；也可在应用内使用「意见反馈」。`,
  },
]

usePageSeo({
  title: '使用指南',
  description:
    '51码字使用指南：安装、选择书籍目录、编辑器与写作助手、灵感随笔、AI 设置与常见问题。',
  ogTitle: '51码字使用指南',
  ogDescription: '从选目录到写作助手、AI 与备份的完整说明。',
})

useSchemaOrg([
  {
    '@type': 'FAQPage',
    name: '51码字使用指南',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
])
</script>
