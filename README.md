# 51mazi 宣传网站

这是 **51mazi** 的官方宣传网站，使用 Nuxt 4 + Tailwind CSS 4 构建。

## 📖 关于 51mazi

**51mazi** 是一款基于 **Electron + Vue 3** 技术栈开发的桌面小说写作软件，专为小说创作者设计。它不仅提供了专业的写作环境，还集成了地图设计、关系图谱、人物档案等创作辅助工具，让小说创作变得更加高效和有趣。

### 核心特性

- ✅ **完全本地化存储**：所有数据都存储在本地，保护用户隐私，无需担心数据泄露
- ✅ **双重密码保护**：支持书架密码和书籍密码双重保护，确保创作内容安全
- ✅ **跨平台支持**：基于 Electron 框架，支持 Windows、macOS、Linux 等多个平台
- ✅ **专业写作体验**：基于 TipTap 的专业富文本编辑器，支持人物高亮、禁词提示、段落拖拽等智能功能
- ✅ **创作辅助工具**：专业地图设计、关系图谱、事序图、组织架构、词条字典等完整工具集

### 主要功能

- 📝 **专业编辑器**：基于 TipTap 的富文本编辑器，支持人物高亮、禁词提示等智能功能
- 🗺️ **地图设计**：专业级地图绘制工具，支持手绘、图层管理等
- 🔗 **关系图谱**：可视化人物关系网络，清晰展示角色间的复杂关系
- 📅 **事序图**：时间线管理工具，帮助整理故事的时间顺序
- 🏢 **组织架构**：管理小说中的组织、门派等机构结构
- 📚 **词条字典**：自定义词条和术语，构建完整的世界观体系

## 🌐 网站链接

- **官方网站**：[www.51mazi.com](https://www.51mazi.com)
- **GitHub 仓库**：[github.com/xiaoshengxianjun/51mazi](https://github.com/xiaoshengxianjun/51mazi)

## 💻 本项目技术栈

- **Nuxt 4** - Vue 3 全栈框架
- **Tailwind CSS 4** - 原子化 CSS 框架
- **TypeScript** - 类型安全
- **@nuxtjs/seo** - SEO 优化模块
- **@vueuse/nuxt** - Vue 组合式工具库

## 项目结构

```
51mazi-website/
├── app/                    # 前端应用代码
│   ├── assets/            # 静态资源（图片、样式、字体）
│   ├── components/        # Vue 组件
│   │   ├── common/        # 通用组件（Header, Footer 等）
│   │   ├── home/          # 首页组件
│   │   └── features/      # 功能页组件
│   ├── composables/       # 组合式函数
│   ├── layouts/           # 布局组件
│   ├── pages/             # 页面路由
│   └── utils/             # 工具函数
├── public/                 # 公共静态文件
├── server/                # 服务端代码（如需要）
└── nuxt.config.ts         # Nuxt 配置文件
```

## 开发

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
# 构建静态站点
pnpm generate

# 或构建 SSR 应用
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

## 📄 页面说明

网站包含以下页面，访问 [www.51mazi.com](https://www.51mazi.com) 查看更多：

- `/` - 首页（展示产品亮点和核心功能）
- `/features` - 功能特性列表（所有功能的概览）
- `/features/[slug]` - 功能详情页（具体功能详细介绍）
- `/download` - 下载页面（软件下载入口）
- `/guide` - 使用指南（产品使用教程）
- `/blog` - 博客列表（最新动态和文章）
- `/blog/[slug]` - 博客详情（具体文章内容）
- `/about` - 关于页面（项目介绍、开发理念、技术栈等）
- `/contact` - 联系我们（反馈与联系方式）

## 部署

### Vercel 部署（推荐）

项目已配置好 Vercel 部署，有两种方式：

#### 方式一：通过 Vercel Dashboard（最简单）

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "Add New Project"
3. 选择 GitHub 仓库 `51mazi-website`
4. Vercel 会自动检测 Nuxt 4 并配置
5. 点击 "Deploy" 即可

#### 方式二：通过 Vercel CLI

```bash
# 安装 Vercel CLI
pnpm add -g vercel

# 登录
vercel login

# 部署
vercel

# 生产环境部署
vercel --prod
```

详细部署指南请查看 [DEPLOY.md](./DEPLOY.md)

### 其他部署方式

#### 静态站点生成 (SSG)

```bash
pnpm generate
```

生成的静态文件在 `.output/public` 目录，可以部署到：
- GitHub Pages
- Netlify
- 自建服务器（Nginx）

#### Netlify 部署

1. 将代码推送到 GitHub
2. 在 Netlify 中导入项目
3. 构建命令：`pnpm generate`
4. 发布目录：`.output/public`

## 📋 注意事项

1. 所有前端代码都在 `app/` 目录下（Nuxt 4 新结构）
2. 组件、composables、utils 会自动导入，无需手动 import
3. 图片资源放在 `app/assets/images/` 目录
4. 使用 `useSeoMeta()` 为每个页面设置 SEO
5. 确保在 `nuxt.config.ts` 中配置正确的 `site.url`

## 🔗 相关链接

- **官方网站**：[www.51mazi.com](https://www.51mazi.com)
- **GitHub 主仓库**：[51mazi](https://github.com/xiaoshengxianjun/51mazi)（软件源码）
- **GitHub 网站仓库**：[51mazi-website](https://github.com/xiaoshengxianjun/51mazi-website)（本仓库）

## 📄 许可证

MIT
