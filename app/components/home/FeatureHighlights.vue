<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in animate-slide-down">
          核心功能亮点
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in animate-slide-up animate-delay-200">
          强大的功能集合，满足小说创作的各种需求
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="feature.id"
          :ref="el => setCardRef(el, index)"
          class="opacity-0"
        >
          <CommonFeatureCard
            :title="feature.title"
            :description="feature.description"
            :icon="feature.icon"
            :link="feature.link"
            :style="{ animationDelay: `${index * 0.1}s` }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { observeElement } = useScrollAnimation()
const cardRefs = ref<(Element | null)[]>([])

const setCardRef = (el: Element | null, index: number) => {
  if (el) {
    cardRefs.value[index] = el
    observeElement(el)
  }
}

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
