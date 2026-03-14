<template>
  <section class="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <h2
          class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          :class="titleVisible ? 'animate-fade-in animate-slide-down' : 'opacity-0'"
        >
          <span class="inline-block bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            核心功能亮点
          </span>
        </h2>
        <p
          class="text-lg text-gray-600 max-w-2xl mx-auto"
          :class="subtitleVisible ? 'animate-fade-in animate-slide-up' : 'opacity-0'"
          style="animation-delay: 0.2s;"
        >
          强大的功能集合，满足小说创作与阅读参考的各种需求
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        <div
          v-for="(feature, index) in features"
          :key="feature.id"
          :ref="el => setCardRef(el, index)"
          class="opacity-0 transform translate-y-10 flex"
        >
          <CommonFeatureCard
            :title="feature.title"
            :description="feature.description"
            :icon="feature.icon"
            :link="feature.link"
          />
        </div>
      </div>

      <!-- 查看全部功能 -->
      <div class="text-center mt-12">
        <NuxtLink
          to="/features"
          class="inline-flex items-center gap-2 px-6 py-3 text-primary-600 hover:text-primary-700 font-medium rounded-lg border-2 border-primary-200 hover:border-primary-400 hover:bg-primary-50/50 transition-colors"
        >
          <span>查看全部功能</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'

const { observeElement } = useScrollAnimation()
const cardRefs = ref<(Element | null)[]>([])
const titleVisible = ref(false)
const subtitleVisible = ref(false)

const setCardRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  // 提取实际的 DOM 元素
  const element = el && '$el' in el ? (el.$el as Element) : (el as Element | null)
  
  if (element) {
    cardRefs.value[index] = element
    
    // 使用 Intersection Observer 触发动画
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.classList.remove('opacity-0', 'translate-y-10')
            target.classList.add('animate-fade-in', 'animate-slide-up')
            target.style.animationDelay = `${index * 0.1}s`
            observer.unobserve(target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )
    
    observer.observe(element)
  }
}

onMounted(() => {
  // 标题动画
  setTimeout(() => {
    titleVisible.value = true
  }, 100)
  
  setTimeout(() => {
    subtitleVisible.value = true
  }, 300)
})

const features = [
  {
    id: 1,
    title: '专业编辑器',
    description: '基于 TipTap 的专业编辑器，支持人物高亮、禁词提示、段落拖拽、文本高亮等智能功能',
    icon: '✍️',
    link: '/features/editor'
  },
  {
    id: 2,
    title: 'AI 智能起名',
    description: '集成 DeepSeek AI，智能生成符合文化背景的角色名字，支持多种类型和参数设置',
    icon: '🤖',
    link: '/features/random-name'
  },
  {
    id: 3,
    title: '书架管理 & AI 封面',
    description: '多书籍书架式管理，支持书架/书籍密码保护、封面管理，并集成通义万相 AI 一键生成小说封面',
    icon: '📚',
    link: '/features/bookshelf'
  },
  {
    id: 4,
    title: '地图设计',
    description: '专业级 Canvas 绘图引擎，内置资源库，支持画笔、形状、文字、油漆桶等多种工具',
    icon: '🗺️',
    link: '/features/map'
  },
  {
    id: 5,
    title: '关系图谱',
    description: '可视化关系图谱，支持头像设置和动态字体，清晰展示人物关系网络',
    icon: '🕸️',
    link: '/features/relation'
  },
  {
    id: 6,
    title: '事序图管理',
    description: '时间轴可视化管理，支持拖拽调整事件位置，进度跟踪（0-100%），直观展示事件顺序',
    icon: '📊',
    link: '/features/events'
  },
  {
    id: 7,
    title: '组织架构',
    description: '可视化组织架构管理，支持多层级结构，清晰展示组织关系和层级',
    icon: '🏛️',
    link: '/features/organization'
  },
  {
    id: 8,
    title: '词条字典',
    description: '树形结构词条字典，支持多层级分类和拖拽排序，统一管理专有名词和术语',
    icon: '📖',
    link: '/features/dictionary'
  },
  {
    id: 9,
    title: '人物档案',
    description: '卡片/表格双视图，人物图列表，集成通义万相 AI 生成竖版全身人物图，多画风可选',
    icon: '👤',
    link: '/features/character'
  },
  {
    id: 10,
    title: '下载小说',
    description: '多书源搜索，下载并加入书架或导出 TXT，正文去广告，仅供个人学习研究',
    icon: '📥',
    link: '/features/novel-download'
  }
]
</script>
