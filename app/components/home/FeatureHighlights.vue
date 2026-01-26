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
          强大的功能集合，满足小说创作的各种需求
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="feature.id"
          :ref="el => setCardRef(el, index)"
          class="opacity-0 transform translate-y-10"
        >
          <CommonFeatureCard
            :title="feature.title"
            :description="feature.description"
            :icon="feature.icon"
            :link="feature.link"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { observeElement } = useScrollAnimation()
const cardRefs = ref<(Element | null)[]>([])
const titleVisible = ref(false)
const subtitleVisible = ref(false)

const setCardRef = (el: Element | null, index: number) => {
  if (el) {
    cardRefs.value[index] = el
    
    // 使用 Intersection Observer 触发动画
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            element.classList.remove('opacity-0', 'translate-y-10')
            element.classList.add('animate-fade-in', 'animate-slide-up')
            element.style.animationDelay = `${index * 0.1}s`
            observer.unobserve(element)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )
    
    observer.observe(el)
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
    title: '双重密码保护',
    description: '书架密码和书籍密码双重保护，确保创作内容安全，8-16位数字或字母组合',
    icon: '🔒',
    link: '/features'
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
  }
]
</script>
