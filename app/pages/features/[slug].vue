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

        <!-- 功能截图 - 首屏图片使用 eager 提升 LCP -->
        <div class="mb-12 rounded-lg overflow-hidden shadow-xl border border-gray-200" v-if="feature.image">
          <NuxtImg
            :src="feature.image"
            :alt="`${feature.title} - 51mazi`"
            class="w-full h-auto"
            loading="eager"
            fetchpriority="high"
            format="webp"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        <!-- 可选第二张截图（如人物档案的 AI 生成人物图） -->
        <div v-if="feature.secondImage" class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ feature.secondImageTitle || '功能截图' }}</h2>
          <div class="rounded-lg overflow-hidden shadow-xl border border-gray-200">
            <NuxtImg
              :src="feature.secondImage"
              :alt="feature.secondImageTitle ? `${feature.secondImageTitle} - 51mazi` : `${feature.title} - 51mazi`"
              class="w-full h-auto"
              loading="lazy"
              format="webp"
              sizes="(max-width: 768px) 100vw, 896px"
            />
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
                class="w-6 h-6 text-primary-600 mr-3 shrink-0 mt-0.5"
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
  bookshelf: {
    slug: 'bookshelf',
    title: '书架管理 & AI 封面',
    icon: '📚',
    image: '/images/ai_cover.png',
    description: '书架式多书籍管理 + 数据本地存储 + 双重密码保护，并支持封面管理与 AI 一键生成小说封面',
    features: [
      '书架式管理：支持创建、编辑、删除多本书籍，卡片式展示更直观',
      '完全本地化存储：所有数据存储在本地目录，隐私安全、可自行备份',
      '数据隔离：每本书独立存储，互不干扰',
      '书架密码保护：8-16 位数字或字母组合，可设置/修改/取消，支持密码提示',
      '书籍密码保护：单本书可设置密码（4-8 位数字或字母组合，可选）',
      '智能命名：自动创建默认章节，支持书名长度限制',
      '封面管理：支持选择本地封面图片 / 自定义封面颜色',
      'AI 生成封面：集成通义万相，按书名/笔名/风格提示词一键生成多张候选封面并可直接应用'
    ],
    useCase: '当你同时管理多本作品、世界观资料或不同系列时，书架管理可以让创作项目井井有条。配合双重密码保护和本地存储，你可以安心保存创作内容；封面管理与 AI 一键生成封面，让你的作品从书架开始就拥有更强的辨识度与仪式感。'
  },
  editor: {
    slug: 'editor',
    title: '专业编辑器',
    icon: '✍️',
    image: '/images/editor.png',
    description:
      '基于 TipTap 的专业富文本编辑器，集成 AI 润色、AI 续写与选段 AI 场景图（详见独立功能页），并提供人物高亮、禁词与段落拖拽等写作辅助',
    features: [
      '基于 TipTap 3.7.0 的专业富文本编辑器',
      '支持格式化文本、标题、段落等',
      '个性化设置：字体、字号、行高、加粗、倾斜',
      '实时统计：章节字数、书籍总字数、码字速度（每分钟/每小时）',
      '智能功能：自动保存、全文搜索、一键导出所有章节',
      '快捷键支持：Ctrl/Cmd + S 快速保存，Ctrl/Cmd + F 搜索',
      '多主题支持：亮色、暗色、护眼黄等多种主题模式',
      'AI 润色（DeepSeek）：一键润色选中文本或整章，优化表达与可读性，尽量保持原意与风格',
      'AI 续写（DeepSeek）：可填写续写要求，生成结果可复制或插入章节末尾；空章可承接上一章末尾；字数与目标章节字数联动提示',
      'AI 场景图：选中正文节选（有效字数约 100～1000），由通义万相生成场景插图并保存到本书 scene_images（配置项与封面/人物图共用通义万相 Key；可选 DeepSeek 提炼画面描述）',
      '人物高亮：支持在编辑器中高亮显示人物名称，方便追踪角色出场',
      '禁词提示：智能检测并标记禁词，支持自定义禁词列表，实时划线提示',
      '段落拖拽：支持拖拽调整段落顺序，灵活组织内容结构',
      '文本高亮：支持多颜色高亮标记，便于标注人物/地点/设定等关键信息'
    ],
    useCase:
      '正文创作是全书的核心。51mazi 在 TipTap 流畅编辑体验之上，用人物高亮、禁词与段落拖拽降低长篇维护成本；需要时再用 AI 润色、续写与场景图加速打磨与配图，且创作内容默认只保存在本地书籍目录。'
  },
  'ai-scene': {
    slug: 'ai-scene',
    title: 'AI 场景图',
    icon: '🖼️',
    image: '/images/ai_scene.png',
    description:
      '在章节编辑页选中一段正文描写，通过右侧抽屉配置参数，由通义万相生成场景插图并保存到本地；可选 DeepSeek 将节选压缩为更适合文生图的短描述',
    features: [
      '入口位置：章节编辑区右上角「AI 场景图」（位于「AI 续写」相关操作区域下方）',
      '选区要求：节选有效字数约 100～1000（与软件字数统计规则一致，不含空白）',
      '输出尺寸：横版 1280×720（默认）或方图 1280×1280',
      '画面控制：画风、景别、环境、光线等维度可选；画面描述打开时可按节选智能预填，最多约 500 字',
      'AI 提炼画面（DeepSeek，可选）：将整段节选压缩为适合文生图的短描述，需在设置中配置 DeepSeek API Key',
      '反向提示词：可选，用于减少模糊、畸形、水印等常见问题',
      '生成与保存：图片由通义万相生成，成功后保存到本书目录下 scene_images 文件夹（如 scene_时间戳.png）；抽屉内可预览大图并复制完整本地路径',
      '同一会话可多次「再生成一张」；通义万相 API Key 为必需（与 AI 封面、人物图共用设置项）'
    ],
    useCase:
      '当你已经写好一段环境或场面描写，希望快速得到一张「对照正文」的场景插图用于参考、分享或归档时，AI 场景图可以直接把节选变成可视化素材，并统一落在本书目录中，便于备份与版本管理。'
  },
  map: {
    slug: 'map',
    title: '地图设计',
    icon: '🗺️',
    image: '/images/maps.png',
    description: '专业级 Canvas 绘图引擎，提供完整的地图绘制能力和资源管理',
    features: [
      '画笔工具 (P)：自由手绘，支持自定义大小和透明度，流畅的绘制体验',
      '橡皮擦工具 (E)：精确擦除，可调节擦除范围',
      '形状工具 (G)：支持线条、矩形、圆形、圆角矩形、五角星、箭头等多种形状',
      '油漆桶工具：快速填充区域，支持自定义颜色，智能边界检测',
      '文字工具 (T)：添加文字标注，支持字体、字号、颜色自定义',
      '资源工具：内置丰富的资源图标库，支持拖拽添加建筑、地标等地图元素',
      '背景工具：设置画布背景色，打造个性化地图风格',
      '选框工具 (V)：选择、移动、调整大小、旋转已绘制元素',
      '移动工具 (H)：平移画布视图，支持空格键快速切换',
      '缩放控制：支持画布缩放（Ctrl/Cmd + 滚轮）、平移、重置视图',
      '撤销/重做：完整的历史记录管理，支持多步撤销和重做',
      '保存导出：自动生成地图预览图，支持保存为 PNG 格式'
    ],
    useCase: '地图设计工具是 51mazi 的一大亮点，提供了专业级的地图绘制能力。无论是奇幻世界的魔法大陆，还是科幻小说的星球布局，都能轻松绘制。内置丰富的资源图标库，支持拖拽添加建筑和地标，让地图设计更加高效。'
  },
  relation: {
    slug: 'relation',
    title: '关系图谱',
    icon: '🕸️',
    image: '/images/relation.png',
    description: '基于 relation-graph-vue3 的可视化关系图谱，清晰展示人物关系网络',
    features: [
      '可视化组件：基于 relation-graph-vue3 的可视化展示',
      '节点管理：人物节点的增删改查，支持自定义节点样式',
      '头像支持：支持为人物节点设置头像（本地图片或网络图片）',
      '动态字体：根据节点层级自动调整字体大小',
      '连线编辑：关系连线的类型和描述',
      '缩略图生成：自动生成关系图预览',
      '数据持久化：本地文件存储，确保数据安全',
      '多关系图管理：支持创建多个独立的关系图谱'
    ],
    useCase: '关系图谱功能帮助您理清复杂的人物关系网络。无论是家族关系、师徒关系，还是敌对关系，都能清晰展示。支持为人物节点设置头像，让关系图更加直观生动。'
  },
  character: {
    slug: 'character',
    title: '人物档案',
    icon: '👤',
    image: '/images/character-profile.png',
    secondImage: '/images/ai_character.png',
    secondImageTitle: 'AI 生成人物图',
    description: '人物档案（人物谱）系统化管理角色信息，支持双视图、人物图列表与通义万相 AI 生成竖版全身人物图',
    features: [
      '双视图模式：支持卡片模式与表格模式切换，按书籍记忆上次选择',
      '抽屉式编辑：创建/编辑人物采用右侧抽屉，表单与列表同屏不遮挡',
      '基础信息：姓名、性别、年龄、身高、形象介绍、生平介绍、标签、标记色',
      '头像：支持图片链接或本地选择，用于列表与卡片小图展示',
      '人物图列表：支持多张竖版全身人物图，可展示不同风格或不同姿态；表格模式有人物图列，卡片模式在卡片下方展示',
      'AI 生成人物图：集成通义万相，在编辑抽屉中可选画风（日系动画、吉卜力、写实摄影、国风插画等）、填写形象描述与构图姿态，生成多张竖版全身图（720×1280），选择一张确认使用即可加入该人物的人物图列表',
      '人物图管理：编辑时可选择本地图片或 AI 生成人物图追加到列表，每张可单独删除；人物图保存在书籍目录 character_images 文件夹',
      '拖拽排序：表格模式下支持拖拽行调整人物顺序，自动保存',
      '词条字典关联：人物可关联词条字典中的标签，实现词汇与角色的关联'
    ],
    useCase: '人物档案让您系统化管理小说中的角色，确保设定一致。配合人物图列表与 AI 生成人物图，可为同一角色保存多张不同风格或姿态的竖版全身图，让角色形象更直观、创作更有代入感。'
  },
  timeline: {
    slug: 'timeline',
    title: '时间线管理',
    icon: '📅',
    image: '/images/timeline.png',
    description: '多条并列时间线 + 时间轴节点，适合梳理纪年、剧情阶段与关键节点；数据按书籍本地保存',
    features: [
      '多时间线：支持新增多条时间线，每条可单独删除（带确认提示）',
      '标题编辑：点击时间线标题可改为自定义名称（最多约 20 字）',
      '时间轴展示：基于 Element Plus 时间轴组件，节点上方显示节点标题（可作时间或阶段名）',
      '节点内容：每个节点包含标题与描述，在卡片中展示；悬停节点可编辑或删除',
      '新增节点：可在时间线末尾追加，或在某一节点处插入/编辑（对话框表单）',
      '数据持久化：随书籍保存到本地，修改后自动写入，无需手动导出'
    ],
    useCase:
      '适合整理「世界纪年 / 朝代更迭」「主角成长阶段」「多线叙事对照」等：用多条时间线并行展示不同线索，用节点标题与描述记录关键事件，比纯大纲更直观。'
  },
  events: {
    slug: 'events',
    title: '事序图管理',
    icon: '📊',
    image: '/images/events-sequence.png',
    description: '时间轴可视化管理工具，直观展示事件时间轴和进度',
    features: [
      '时间轴可视化：基于时间单元格的可视化事件展示',
      '事件管理：支持创建、编辑、删除事件，包含简介、详情、进度等信息',
      '拖拽调整：直观的拖拽操作调整事件时间位置，智能区分点击和拖拽操作',
      '进度跟踪：事件进度条显示，支持0-100%进度管理，可视化进度条效果',
      '多事序图：支持创建多个独立的事序图，满足不同章节或故事线需求',
      '面板控制：支持折叠/展开左侧面板，优化界面布局',
      '颜色管理：丰富的颜色选择，支持自定义事件颜色',
      '悬停提示：鼠标悬停显示完整事件详情',
      '数据持久化：本地文件存储，确保数据安全'
    ],
    useCase: '事序图功能为小说创作提供了强大的时间轴管理能力。通过可视化的事件展示和进度跟踪，帮助您梳理复杂的事件关系，确保剧情逻辑清晰。支持拖拽调整事件时间位置，操作直观便捷。'
  },
  organization: {
    slug: 'organization',
    title: '组织架构',
    icon: '🏛️',
    image: '/images/organization.png',
    description: '可视化组织架构管理，清晰展示组织结构和层级关系',
    features: [
      '层级结构：支持多层级组织架构，清晰展示上下级关系',
      '节点管理：支持创建、编辑、删除组织节点，包含名称、描述等信息',
      '可视化展示：基于关系图谱的可视化组件，直观展示组织架构',
      '颜色区分：不同层级使用不同颜色，便于区分和理解',
      '拖拽调整：支持拖拽操作调整组织架构布局',
      '多组织管理：支持创建多个独立的组织架构，满足不同故事需求',
      '数据持久化：本地文件存储，确保数据安全'
    ],
    useCase: '组织架构功能为小说创作提供了强大的组织管理能力。通过可视化展示组织结构和层级关系，帮助您管理小说中的各种组织，如门派、国家、公司等，让复杂的组织关系一目了然。'
  },
  dictionary: {
    slug: 'dictionary',
    title: '词条字典',
    icon: '📖',
    description: '树形结构词条字典，支持多层级分类和拖拽排序',
    features: [
      '树形结构：支持多层级词条分类，清晰组织词汇体系',
      '词条管理：支持创建、编辑、删除词条，包含名称、描述等信息',
      '拖拽排序：支持拖拽调整词条顺序和层级关系',
      '快速搜索：支持关键词搜索，快速定位目标词条',
      '数据持久化：本地文件存储，确保数据安全',
      '人物档案集成：词条可作为人物标签，实现词汇与角色的关联'
    ],
    useCase: '词条字典功能为小说创作提供了强大的词汇管理能力。通过树形结构清晰组织词汇体系，支持拖拽排序和快速搜索，帮助您统一管理小说中的专有名词和设定，确保术语使用的一致性。'
  },
  'random-name': {
    slug: 'random-name',
    title: '随机名字生成器',
    icon: '🎲',
    image: '/images/random-name.png',
    description: 'AI + 本地双模式随机起名，支持多种类型与参数设置，一次生成 24 个名字',
    features: [
      '多种类型支持：中国人名、日本人名、西方人名、势力名称、地名、秘籍名、法宝名、灵药名称等',
      '参数自定义：姓氏/性别/名字长度/中间字等，精确控制生成结果',
      '批量生成：一次可生成 24 个名字，快速筛选更高效',
      'AI 智能起名（DeepSeek）：理解类型与参数，生成更自然、更有文化适配的名字',
      '文化适配：日本人名与西方人名自动转换为中文音译，确保全中文输出',
      '智能降级：AI 失败自动降级到本地生成，保证可用性',
      '本地生成：无网络也能用，可在 AI / 本地之间无缝切换',
      '频率限制：智能控制调用频率，避免过度请求'
    ],
    useCase: '当你卡在起名、需要符合特定文化背景（古风/日式/西式）或要批量生成组织/地名/法宝名时，随机名字生成器能迅速提供大量可选方案，既省时间也更能激发灵感。'
  },
  'novel-download': {
    slug: 'novel-download',
    title: '下载小说',
    icon: '📥',
    image: '/images/novelDownload.png',
    description: '多书源搜索、下载并加入书架或导出 TXT，正文去广告，仅供个人学习研究',
    features: [
      '多书源支持：内置多个书源，支持切换书源搜索',
      '搜索与选择：输入书名或作者关键词，展示搜索结果列表，点击「下载」获取目录',
      '下载并加入书架：一键将全书章节下载并写入本地书籍目录，自动加入当前书架',
      '导出为 TXT：将整本书导出为单个 TXT 文件，保存到自选目录',
      '底部悬浮操作卡：选中书籍后，操作区固定悬浮在页面底部，滚动列表时仍可查看进度',
      '正文去广告：自动过滤常见站内推广与广告文案，导出内容更干净',
      '免责声明：页面内提供醒目免责说明，提醒用户合规使用'
    ],
    useCase: '当你需要将网络小说保存到本地阅读、作为创作参考或个人备份时，下载小说功能可快速按书名或作者搜索，选择书源后下载并加入书架或导出为 TXT。正文去广告让内容更干净，底部悬浮操作区便于随时查看下载进度。请遵守当地法律法规，仅供个人学习研究使用。'
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
