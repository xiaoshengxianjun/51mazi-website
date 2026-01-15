<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 返回按钮 -->
      <NuxtLink
        to="/features"
        class="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
      >
        <svg
          class="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        返回功能列表
      </NuxtLink>

      <!-- 功能详情 -->
      <div v-if="feature" class="max-w-4xl mx-auto">
        <!-- 标题 -->
        <div class="text-center mb-12">
          <div class="text-6xl mb-4">{{ feature.icon }}</div>
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {{ feature.title }}
          </h1>
          <p class="text-xl text-gray-600">
            {{ feature.description }}
          </p>
        </div>

        <!-- 功能截图占位 -->
        <div class="mb-12 rounded-lg overflow-hidden shadow-xl border border-gray-200">
          <div class="bg-gray-800 aspect-video flex items-center justify-center">
            <p class="text-gray-400">功能截图占位</p>
          </div>
        </div>

        <!-- 核心特性 -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">核心特性</h2>
          <ul class="space-y-4">
            <li
              v-for="(item, index) in feature.features"
              :key="index"
              class="flex items-start"
            >
              <svg
                class="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span class="text-gray-700 text-lg">{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- 使用场景 -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">使用场景</h2>
          <p class="text-gray-700 leading-relaxed text-lg">
            {{ feature.useCase }}
          </p>
        </div>

        <!-- 相关功能 -->
        <div v-if="relatedFeatures.length > 0">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">相关功能</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NuxtLink
              v-for="related in relatedFeatures"
              :key="related.slug"
              :to="`/features/${related.slug}`"
              class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <div class="flex items-center">
                <span class="text-2xl mr-3">{{ related.icon }}</span>
                <div>
                  <h3 class="font-semibold text-gray-900">{{ related.title }}</h3>
                  <p class="text-sm text-gray-600">{{ related.description }}</p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- 未找到功能 -->
      <div v-else class="text-center py-20">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">功能未找到</h1>
        <p class="text-gray-600 mb-8">抱歉，您访问的功能页面不存在。</p>
        <NuxtLink
          to="/features"
          class="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          返回功能列表
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

// 功能数据（实际应该从 API 或内容文件获取）
const featuresData: Record<string, any> = {
  editor: {
    slug: 'editor',
    title: '专业编辑器',
    icon: '✍️',
    description: '强大的富文本编辑器，支持 Markdown、代码高亮、笔记等功能',
    features: [
      '支持 Markdown 语法',
      '代码高亮显示',
      '笔记和标注功能',
      '章节管理',
      '搜索和替换',
      '字数统计',
      '导出多种格式'
    ],
    useCase: '专业编辑器是 51mazi 的核心功能，为小说创作者提供流畅的写作体验。无论是长篇小说的章节管理，还是短篇小说的快速创作，都能满足您的需求。'
  },
  map: {
    slug: 'map',
    title: '地图设计',
    icon: '🗺️',
    description: '可视化地图设计工具，轻松创建小说世界的地图和场景',
    features: [
      '多种绘图工具（画笔、矩形、圆形等）',
      '图层管理',
      '资源库支持',
      '缩放和平移',
      '导出高清图片',
      '自定义背景'
    ],
    useCase: '地图设计工具让您能够可视化地创建小说世界的地图。无论是奇幻世界的魔法大陆，还是科幻小说的星球布局，都能轻松绘制。'
  },
  relation: {
    slug: 'relation',
    title: '关系图谱',
    icon: '🕸️',
    description: '清晰展示人物关系，管理复杂的人物网络和剧情线索',
    features: [
      '节点式关系图',
      '自定义关系类型',
      '关系强度设置',
      '分组管理',
      '导出关系图',
      '搜索和筛选'
    ],
    useCase: '关系图谱功能帮助您理清复杂的人物关系网络。无论是家族关系、师徒关系，还是敌对关系，都能清晰展示。'
  },
  character: {
    slug: 'character',
    title: '人物档案',
    icon: '👤',
    description: '完善的人物档案系统，记录角色的详细信息',
    features: [
      '基本信息（姓名、年龄、性别等）',
      '外貌描述',
      '性格特点',
      '背景故事',
      '关联关系',
      '自定义字段'
    ],
    useCase: '人物档案系统让您能够系统地管理小说中的所有角色，确保角色设定的一致性和完整性。'
  },
  timeline: {
    slug: 'timeline',
    title: '时间线管理',
    icon: '📅',
    description: '时间线管理工具，帮助梳理故事的时间顺序',
    features: [
      '时间轴视图',
      '事件标记',
      '时间节点管理',
      '时间线筛选',
      '导出时间线'
    ],
    useCase: '时间线管理功能帮助您避免时间线混乱，确保故事的时间顺序清晰合理。'
  },
  events: {
    slug: 'events',
    title: '事序图管理',
    icon: '📊',
    description: '事序图管理功能，清晰展示事件发生的顺序和关联关系',
    features: [
      '事件节点',
      '事件关联',
      '时间顺序',
      '分组管理',
      '导出图表'
    ],
    useCase: '事序图管理功能帮助您梳理复杂的事件关系，确保剧情逻辑清晰。'
  },
  organization: {
    slug: 'organization',
    title: '组织架构',
    icon: '🏛️',
    description: '组织架构设计工具，管理小说中的各种组织和机构关系',
    features: [
      '层级结构',
      '组织关系',
      '成员管理',
      '自定义组织类型',
      '导出架构图'
    ],
    useCase: '组织架构工具帮助您管理小说中的各种组织，如门派、国家、公司等。'
  },
  dictionary: {
    slug: 'dictionary',
    title: '词条字典',
    icon: '📖',
    description: '自定义词条字典，记录小说中的专有名词、术语和设定',
    features: [
      '词条管理',
      '分类标签',
      '搜索功能',
      '关联引用',
      '导出字典'
    ],
    useCase: '词条字典功能帮助您统一管理小说中的专有名词和设定，确保术语使用的一致性。'
  },
  'random-name': {
    slug: 'random-name',
    title: '随机名字生成器',
    icon: '🎲',
    description: '智能随机名字生成器，快速生成符合设定的人物名字',
    features: [
      '多种名字风格',
      '自定义规则',
      '批量生成',
      '名字库管理',
      '导出名字列表'
    ],
    useCase: '随机名字生成器帮助您快速为角色生成合适的名字，节省创作时间。'
  }
}

const feature = featuresData[slug]

// 获取相关功能（排除当前功能）
const relatedFeatures = Object.values(featuresData)
  .filter((f: any) => f.slug !== slug)
  .slice(0, 2)

// SEO
useSeoMeta({
  title: feature ? feature.title : '功能详情',
  description: feature ? feature.description : '功能详情页面',
  ogTitle: feature ? `${feature.title} - 51mazi` : '功能详情',
  ogDescription: feature ? feature.description : '功能详情页面'
})
</script>
