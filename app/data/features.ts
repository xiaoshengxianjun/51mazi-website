/** 官网功能文案，与桌面端写作指南对齐 */
export interface FeatureDetail {
  slug: string
  title: string
  icon: string
  description: string
  image?: string
  secondImage?: string
  secondImageTitle?: string
  features: string[]
  useCase: string
  related?: string[]
}

export const FEATURES: FeatureDetail[] = [
  {
    slug: 'bookshelf',
    title: '书架与码字统计',
    icon: '📚',
    image: '/images/ai_cover.png',
    description: '本地书架管理多本作品，可选 AI 封面；首页汇总近 30 日码字图',
    features: [
      '新建 / 编辑 / 删除书籍，卡片展示书名、类型、简介、目标字数与封面',
      '单击或双击打开独立编辑器窗口；同一本书再次点击会聚焦已有窗口',
      '数据保存在你指定的书籍主目录，每本书独立文件夹，互不干扰',
      '书架密码：打开应用后先验证，8～16 位字母或数字（需试用或已激活）',
      '书籍密码：打开、编辑或删除单本书时验证，4～8 位字母或数字',
      '封面：本地图片、自定义底色，或用图像 AI 生成后确认落盘',
      '首页书架下方展示近 30 日全部书籍净增字数柱状图',
      '九套主题 + 跟随系统，界面字号小 / 中 / 大，多窗口同步',
    ],
    useCase:
      '适合同时推进多部作品。先选好稳定可备份的本地目录，再建书开写；封面与码字图帮你保持节奏，密码保护可选叠加。',
    related: ['editor', 'outline', 'character'],
  },
  {
    slug: 'editor',
    title: '智能编辑器',
    icon: '✍️',
    image: '/images/editor.png',
    description: '章节纯文本、笔记富文本（含表格）；自动保存、校对、排版与章节助手',
    features: [
      '每本书独立窗口，可同时打开多本对照写作',
      '章节为纯文本写作，笔记为富文本（标题、列表、表格、粗斜体等）',
      '笔记可插入表格，支持调整列宽、换行，以及右键增删行列',
      '自动保存：停笔约 30 秒；持续输入最多约 1 分钟强制保存；关窗前落盘',
      '按卷组织章节，自动编号（阿拉伯 / 汉字），后缀可选章 / 集 / 回 / 节 / 部 / 卷',
      '菜单栏：撤销重做、搜索替换、字体字号、行高段距、高亮、一键排版',
      '章节标题行可开关：人物高亮、禁词提示、显示伏笔',
      '菜单栏「伏 / 错 / 语」：添加伏笔、错字检查、语病检查',
      '章节助手：选区或整章润色、按目标字数续写（流式）、选中 100～1000 字生成场景插图',
      '底部实时统计本章字数、目标进度与码字速度',
      '手机预览、全书导出、左下角回收站（可恢复或彻底删除）',
    ],
    useCase:
      '正文就在本地目录里写。人物高亮和禁词提示盯一致性，伏笔与灵感随手记下；需要时再用润色、续写和校对，不必离开当前章节。',
    related: ['outline', 'foreshadow', 'inspiration'],
  },
  {
    slug: 'outline',
    title: '大纲管理',
    icon: '🧭',
    description: '树形规划卷、章与节拍；AI 完善 / 拆分、Agent 整书规划、章纲生章',
    features: [
      '树形结构规划卷、章与节拍，支持完善或拆分选中节点',
      'AI Agent 可按整书目标多步规划，可参考人物、设定、时间线，审阅后再写入',
      '选中章纲可生成正文，覆盖已有章节前会确认差异',
      '小屏嵌入：缩小窗口后可贴在编辑器旁，不必离开正文',
      '从工具页返回时，编辑器正文与未保存状态会保留',
    ],
    useCase:
      '先拆章再动笔。需要草稿时用 Agent 或章纲生章起头，统一审阅后再写入，避免直接覆盖你已写好的内容。',
    related: ['setting', 'editor', 'character'],
  },
  {
    slug: 'setting',
    title: '设定管理',
    icon: '🗂️',
    description: '按分类维护世界观、体系与势力，表格编辑，可用 AI 完善介绍',
    features: [
      '树形分类 + 表格维护设定条目',
      '拖拽排序，适合世界观、力量体系、势力与规则',
      '可用文本 AI 完善条目介绍',
      '数据随本书保存在本地，与正文隔离',
    ],
    useCase:
      '长篇开写前先把世界规则写清楚。设定表和人物、大纲、时间线一起用，能减少前后矛盾。',
    related: ['character', 'outline', 'dictionary'],
  },
  {
    slug: 'random-name',
    title: '随机起名',
    icon: '🎲',
    image: '/images/random-name.png',
    description: '本地规则或文本 AI 批量起名，覆盖人名、地名、势力与物品',
    features: [
      '本地规则：中 / 日 / 英人名，以及势力、地名、秘籍、法宝、灵药等（每次约 40 个）',
      'AI 模式：按类型与约束批量起名，需已配置并验证文本 Key',
      '无网络时可用本地模式，两种方式可切换',
      '适合卡在起名时快速筛一批再用',
    ],
    useCase:
      '人名、地名或法宝名卡住时，先本地批量刷一页，再用 AI 按设定约束收窄。',
    related: ['character', 'setting', 'dictionary'],
  },
  {
    slug: 'character',
    title: '人物图谱',
    icon: '👤',
    image: '/images/character-profile.png',
    secondImage: '/images/ai_character.png',
    secondImageTitle: 'AI 形象图',
    description: '角色与实体档案，卡片 / 迷你 / 表格视图，可选 AI 形象图',
    features: [
      '五类档案：人物 / 坐骑 / 怪兽 / 妖兽 / 宝器',
      '卡片、迷你、表格三种视图，可设标记色',
      '基础信息：名称、外貌、生平、标签等',
      '图像 AI 生成形象图，确认后才写入档案',
      '小屏嵌入：可贴在编辑器旁对照设定',
      '人物高亮依赖档案中的名称与标记色',
    ],
    useCase:
      '把出场角色和关键实体建档后，正文里打开人物高亮，就能按标记色追踪谁在场。',
    related: ['relation', 'editor', 'ai-scene'],
  },
  {
    slug: 'map',
    title: '设计地图',
    icon: '🗺️',
    image: '/images/maps.png',
    description: '在画布上绘制世界或区域地图，支持图层、地点与导出',
    features: [
      '画布编辑，约 3 秒自动保存',
      '多种地图类型；图层含背景、绘线、地点、标注',
      '工具栏：移动、选择、画笔、形状、文字、地点、路线',
      '参考底图、网格吸附',
      '导出 PNG / SVG；右上角「?」查看说明与快捷键',
      '试用结束后无证最多 2 张地图',
    ],
    useCase:
      '需要空间感时，把大陆、城池或秘境画出来，地点可与词条、设定对照，避免地名写乱。',
    related: ['setting', 'dictionary', 'organization'],
  },
  {
    slug: 'dictionary',
    title: '词条字典',
    icon: '📖',
    description: '分类维护专有名词与术语，树与表格可拖拽排序',
    features: [
      '树形分类 + 表格维护词条',
      '拖拽调整顺序与分类',
      '统一专有名词、术语和别称，写作时对照用词',
      '数据按书籍本地保存',
    ],
    useCase:
      '功法、地名、称谓容易前后不一致。词条字典用来统一用词，再配合搜索替换扫一遍正文。',
    related: ['setting', 'editor', 'character'],
  },
  {
    slug: 'foreshadow',
    title: '伏笔记录',
    icon: '🧵',
    description: '正文选区一键记下伏笔，全书表格检索，章节旁可查看本章相关项',
    features: [
      '在章节中选中文字（最多 500 字），点菜单栏「伏」即可创建',
      '全书伏笔以表格搜索、排序、编辑、删除',
      '章节标题行打开「显示伏笔」，可在编辑器旁查看本章相关伏笔',
      '选区与描述各最多 500 字',
    ],
    useCase:
      '长篇最怕埋了忘收。写到关键句随手记一笔，过稿时打开伏笔表逐条核对。',
    related: ['editor', 'inspiration', 'timeline'],
  },
  {
    slug: 'inspiration',
    title: '灵感随笔',
    icon: '💡',
    description: '快捷键或写作助手随时记下，写入本书「灵感随笔」笔记本',
    features: [
      '应用在前台时：Mac 用 Cmd+Shift+I，Windows 用 Ctrl+Alt+I 打开捕获小窗',
      '写作助手「灵感随笔」会切到笔记、展开该笔记本，并打开捕获弹窗',
      '内容写入本书「笔记 / 灵感随笔」，可在笔记树中整理、重命名或删除（走回收站）',
      '小窗内 Ctrl/Cmd+Enter 保存，Esc 取消；切到后台时快捷键不会弹出',
    ],
    useCase:
      '写到一半冒出对白、设定或下章念头，不必离开当前章节。记完继续写，之后在笔记本里慢慢整理。',
    related: ['editor', 'foreshadow', 'outline'],
  },
  {
    slug: 'relation',
    title: '关系图',
    icon: '🕸️',
    image: '/images/relation.png',
    description: '中心布局人际网络，可保存多张图并导出缩略图',
    features: [
      '以中心人物展开人际网络',
      '支持多张独立关系图',
      '可导出缩略图',
      '试用结束后无证最多 2 张，单张最多 20 个节点',
    ],
    useCase:
      '人物一多，谁亲谁仇谁瞒着谁，用关系图比纯文字名单更清楚。',
    related: ['character', 'organization', 'outline'],
  },
  {
    slug: 'organization',
    title: '组织架构',
    icon: '🏛️',
    image: '/images/organization.png',
    description: '树形图梳理门派、朝廷、公司等层级，可保存多张图',
    features: [
      '树形层级图，适合门派、朝廷、公司、军团',
      '支持多张独立组织图，可导出缩略图',
      '试用结束后无证最多 2 张；单张最多 20 节点、4 层',
    ],
    useCase:
      '势力线复杂时，先画层级再写朝堂或门派戏，职务和从属不容易写反。',
    related: ['relation', 'setting', 'map'],
  },
  {
    slug: 'timeline',
    title: '时间线',
    icon: '📅',
    image: '/images/timeline.png',
    description: '多条时间线并列，事件节点可增删改与拖拽排序',
    features: [
      '可创建多条时间线，梳理纪年、成长阶段或对照线索',
      '事件节点支持标题、描述，以及增删改与拖拽排序',
      '数据按书籍本地保存',
      '试用结束后无证最多 2 条时间线',
    ],
    useCase:
      '多线叙事或跨年剧情，用并列时间线对照「这一年各线发生了什么」。',
    related: ['events', 'outline', 'foreshadow'],
  },
  {
    slug: 'events',
    title: '事序图',
    icon: '📊',
    image: '/images/events-sequence.png',
    description: '甘特式编排并行线索与先后顺序，适合多线叙事',
    features: [
      '甘特式并行线索，查看事件重叠与先后',
      '支持多张事序图，事件表格与进度编辑',
      '数据按书籍本地保存',
      '试用结束后无证最多 2 张',
    ],
    useCase:
      '几条线索同时推进时，事序图能看出谁在等谁、哪条线该先收束。',
    related: ['timeline', 'outline', 'foreshadow'],
  },
  {
    slug: 'ai-scene',
    title: 'AI 辅助',
    icon: '🖼️',
    image: '/images/ai_scene.png',
    description: '自备 Key：文本润色 / 续写 / 校对 / 大纲；图像封面、形象与场景图',
    features: [
      '文本模型：DeepSeek 或 Kimi；图像模型：通义万相或 Gemini Imagen',
      'Key 保存在本机，支持一键验证',
      '文本：润色、续写、错字 / 语病检查、设定完善、起名、大纲 Agent、章纲生章',
      '图像：书架封面、人物 / 实体形象图、章节选区场景插图（约 100～1000 字）',
      '场景描述会先由文本 AI 提炼 prompt，确认后才落盘',
      '使用任何 AI 前需在首页「AI 设置」选好模型并验证 Key',
      '试用结束后 AI 能力需激活许可证',
    ],
    useCase:
      'AI 是可选项，不是云创作平台。Key 你自己配，结果请审阅后再写入正文或覆盖封面。',
    related: ['editor', 'character', 'bookshelf'],
  },
  {
    slug: 'novel-download',
    title: '下载小说',
    icon: '📥',
    image: '/images/novelDownload.png',
    description: '多书源搜索、抓取章节，导入本地书架或导出 TXT；仅供个人学习对照',
    features: [
      '多书源搜索书名，抓取章节后导入书架或导出 TXT',
      '书源为第三方站点，可用性可能变化',
      '使用前请阅读页面免责声明，遵守版权与站点规则',
      '不能把下载内容当作自己的作品发布',
      '该功能需试用或已激活许可证',
    ],
    useCase:
      '仅用于个人学习、对照或本地改稿练习。51码字不提供、不存储、不运营任何网络小说内容或书源站点。',
    related: ['bookshelf', 'editor', 'dictionary'],
  },
]

export function getFeatureBySlug(slug: string): FeatureDetail | undefined {
  return FEATURES.find((item) => item.slug === slug)
}

export function getRelatedFeatures(slug: string): FeatureDetail[] {
  const current = getFeatureBySlug(slug)
  if (!current) {
    return []
  }
  if (current.related?.length) {
    return current.related
      .map((item) => getFeatureBySlug(item))
      .filter((item): item is FeatureDetail => Boolean(item))
  }
  return FEATURES.filter((item) => item.slug !== slug).slice(0, 2)
}
