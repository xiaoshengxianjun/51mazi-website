# 51mazi 宣传网站

这是 51mazi 的官方宣传网站，使用 Nuxt 4 + Tailwind CSS 4 构建。

## 技术栈

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

## 页面说明

- `/` - 首页
- `/features` - 功能特性列表
- `/features/[slug]` - 功能详情页
- `/download` - 下载页面
- `/guide` - 使用指南
- `/blog` - 博客列表
- `/blog/[slug]` - 博客详情
- `/about` - 关于页面
- `/contact` - 联系我们

## 部署

### 静态站点生成 (SSG)

```bash
pnpm generate
```

生成的静态文件在 `.output/public` 目录，可以部署到：
- GitHub Pages
- Vercel
- Netlify
- 自建服务器（Nginx）

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. Vercel 会自动检测 Nuxt 并配置部署

### Netlify 部署

1. 将代码推送到 GitHub
2. 在 Netlify 中导入项目
3. 构建命令：`pnpm generate`
4. 发布目录：`.output/public`

## 注意事项

1. 所有前端代码都在 `app/` 目录下（Nuxt 4 新结构）
2. 组件、composables、utils 会自动导入，无需手动 import
3. 图片资源放在 `app/assets/images/` 目录
4. 使用 `useSeoMeta()` 为每个页面设置 SEO
5. 确保在 `nuxt.config.ts` 中配置正确的 `site.url`

## 许可证

MIT
