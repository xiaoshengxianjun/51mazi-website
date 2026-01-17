# 51mazi 网站部署指南

## 🚀 部署到 Vercel

### 方式一：通过 Vercel Dashboard（推荐）

1. **准备 GitHub 仓库**
   - 确保代码已推送到 GitHub
   - 仓库地址：`https://github.com/xiaoshengxianjun/51mazi-website`

2. **在 Vercel 中导入项目**
   - 访问 [Vercel Dashboard](https://vercel.com/dashboard)
   - 点击 "Add New Project"
   - 选择 GitHub 仓库 `51mazi-website`
   - Vercel 会自动检测 Nuxt 4 项目

3. **配置项目设置**
   - **Framework Preset**: Nuxt.js（自动检测）
   - **Build Command**: `pnpm run build`（或 `npm run build`）
   - **Output Directory**: 留空（Vercel 会自动处理）
   - **Install Command**: `pnpm install`（或 `npm install`）

4. **环境变量（可选）**
   - 如果需要自定义域名，可以添加：
     - `NUXT_PUBLIC_SITE_URL`: 你的实际域名（如 `https://51mazi.com`）

5. **部署**
   - 点击 "Deploy"
   - 等待构建完成
   - 部署成功后，Vercel 会提供一个预览 URL

### 方式二：通过 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   # 或
   pnpm add -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署**
   ```bash
   cd 51mazi-website
   vercel
   ```

4. **生产环境部署**
   ```bash
   vercel --prod
   ```

## 📝 部署前检查清单

- [x] 代码已推送到 GitHub
- [x] `vercel.json` 配置文件已创建
- [x] `robots.txt` 文件已修复
- [x] `.npmrc` 配置文件已创建（支持 pnpm）
- [x] `package.json` 中已指定 Node.js 和 pnpm 版本
- [x] 所有图片资源已添加到 `public/images/` 目录
- [ ] 更新 `nuxt.config.ts` 中的 `site.url` 为实际域名（部署后）
- [ ] 测试本地构建：`pnpm run build` 和 `pnpm run preview`

## 🔧 构建测试

在部署前，建议先在本地测试构建：

```bash
# 安装依赖
pnpm install

# 构建项目
pnpm run build

# 预览构建结果
pnpm run preview
```

## 🌐 自定义域名

部署成功后，可以在 Vercel Dashboard 中：

1. 进入项目设置
2. 选择 "Domains"
3. 添加你的自定义域名（如 `51mazi.com`）
4. 按照提示配置 DNS 记录

## ⚙️ 环境变量配置

如果需要配置环境变量，在 Vercel Dashboard 中：

1. 进入项目设置
2. 选择 "Environment Variables"
3. 添加变量：
   - `NUXT_PUBLIC_SITE_URL`: 你的实际域名

## 📊 部署后优化

1. **更新 SEO 配置**
   - 部署后，更新 `nuxt.config.ts` 中的 `site.url` 为实际域名
   - 重新部署以更新 sitemap 和 robots.txt

2. **性能监控**
   - 使用 Vercel Analytics 监控网站性能
   - 检查 Core Web Vitals 指标

3. **CDN 优化**
   - Vercel 自动提供全球 CDN
   - 图片已配置长期缓存

## 🐛 常见问题

### 构建失败

1. **检查 Node.js 版本**
   - Vercel 默认使用 Node.js 20.x
   - 如需指定版本，在 `package.json` 中添加：
     ```json
     "engines": {
       "node": ">=20.0.0"
     }
     ```

2. **检查依赖安装**
   - 确保 `pnpm-lock.yaml` 已提交
   - 或使用 `npm` 而不是 `pnpm`

### 样式丢失

- 确保 Tailwind CSS 配置正确
- 检查 `app/assets/styles/main.css` 是否正确导入

### 图片不显示

- 确保图片在 `public/images/` 目录
- 检查图片路径是否正确

## 📚 相关链接

- [Vercel 部署文档](https://vercel.com/docs)
- [Nuxt 4 部署指南](https://nuxt.com/docs/getting-started/deployment)
- [Vercel + Nuxt 最佳实践](https://vercel.com/docs/frameworks/nuxt)
