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
              安装后启动「51码字」。新安装自动开始 7 天试用。
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
              可选：在「书架密码」设置 8～16 位字母或数字；建书时可设 4～8 位书籍密码。密码能力需处于试用或已激活状态。
            </p>
          </div>

          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">3. 建书并打开编辑器</h3>
            <p class="text-gray-700 mb-4">
              在书架新建书籍，填写书名、类型、简介和目标字数。单击或双击封面打开独立编辑器窗口。
            </p>
            <ul class="text-gray-700 mb-4 list-disc list-inside space-y-1 ml-4">
              <li>章节为纯文本，笔记为富文本</li>
              <li>自动保存：停笔约 30 秒；持续输入最多约 1 分钟强制保存</li>
              <li>右侧「写作助手」打开大纲、设定、人物、地图等工具</li>
              <li>标题行可开人物高亮、禁词提示、显示伏笔</li>
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
import { CONTACT_EMAIL, LICENSE_QQ, QQ_GROUP } from '~/utils/product'

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
    answer: `新安装有 7 天完整试用。试用结束后进入受限模式：书架最多 2 本，地图 / 组织 / 关系 / 时间线 / 事序图等有数量上限；AI、下载小说和部分高级工具需激活。可在「许可证激活」粘贴 20 位短码；累计打赏满 50 元可联系 QQ ${LICENSE_QQ} 凭付款截图兑换。`,
  },
  {
    question: '章节和笔记有什么区别？',
    answer: '章节是纯文本写作；笔记是富文本，适合素材、灵感和设定摘录。删除的章节或笔记会进入左下角回收站。',
  },
  {
    question: 'AI 需要什么？',
    answer: '在「AI 设置」分别配置文本模型（DeepSeek 或 Kimi）和图像模型（通义万相或 Gemini Imagen），并验证 Key。Key 存在本机。试用过期后还需激活许可证。',
  },
  {
    question: '人物高亮不生效？',
    answer: '先在人物图谱中为角色填写名称，再打开章节标题行「人物高亮」。名称按档案标记色显示。试用结束后该能力可能随许可证受限。',
  },
  {
    question: '如何添加伏笔？',
    answer: '在章节中选中相关句子，点菜单栏「伏」，填写说明后保存。全书列表在「伏笔记录」；本章相关项可在标题行打开「显示伏笔」。',
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
    answer: 'Ctrl/Cmd + S 保存，Ctrl/Cmd + F 搜索，Ctrl/Cmd + G 下一个，Esc 关闭搜索。Mac 用 Command，Windows 用 Ctrl。地图快捷键见地图页右上角「?」。',
  },
  {
    question: '如何联系开发者？',
    answer: `邮箱 ${CONTACT_EMAIL}；QQ 群 ${QQ_GROUP}；也可在应用内使用「意见反馈」（需已激活，每日最多 3 次）。`,
  },
]

useSeoMeta({
  title: '使用指南',
  description:
    '51码字使用指南：安装、选择书籍目录、编辑器与写作助手、AI 设置、许可证与常见问题。',
  ogTitle: '51码字使用指南',
  ogDescription: '从选目录到写作助手、AI 与备份的完整说明。',
})
</script>
