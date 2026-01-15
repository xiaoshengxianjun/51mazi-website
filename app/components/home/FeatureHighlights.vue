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
    description: '强大的富文本编辑器，支持 Markdown、代码高亮、笔记等功能',
    icon: '✍️',
    link: '/features/editor'
  },
  {
    id: 2,
    title: '地图设计',
    description: '可视化地图设计工具，轻松创建小说世界的地图和场景',
    icon: '🗺️',
    link: '/features/map'
  },
  {
    id: 3,
    title: '关系图谱',
    description: '清晰展示人物关系，管理复杂的人物网络和剧情线索',
    icon: '🕸️',
    link: '/features/relation'
  },
  {
    id: 4,
    title: '智能创作辅助',
    description: '人物档案、时间线、事序图等工具，让创作更高效',
    icon: '✨',
    link: '/features/more'
  }
]
</script>
