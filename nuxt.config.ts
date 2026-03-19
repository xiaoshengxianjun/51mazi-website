// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // 兼容性日期（必需，用于控制 Nitro、Image 等的行为）
  // 设置为当前日期，启用所有已发布的新功能
  compatibilityDate: "2026-01-15",
  
  // 开发工具（生产环境自动禁用）
  devtools: { enabled: true },

  // 模块配置
  modules: ["@nuxtjs/seo", "@vueuse/nuxt", "@nuxt/image"],

  // 图片优化配置 - 自动 WebP/AVIF、响应式尺寸、改善 LCP
  image: {
    format: ["webp", "avif"],
    quality: 80,
    // Vercel 部署时可使用 vercel 提供商以获得最佳 CDN 优化
    provider: 'vercel'
  },

  // 组件自动导入配置
  // Nuxt 4 默认会扫描 app/components 目录，无需显式配置
  // 如果需要自定义，可以使用对象形式：
  // components: {
  //   dirs: ['~/app/components'],
  //   pathPrefix: true  // 使用目录前缀（如 common/Header -> CommonHeader）
  // }
  // 当前使用默认行为，可以删除 components: true（因为它在 Nuxt 4 中无效）

  // SSR 配置（显式声明，虽然默认是 true）
  ssr: true,

  // Vite 配置（Tailwind CSS v4）
  vite: {
    plugins: [tailwindcss()]
  },

  // 运行时配置（可用于下载页等对接 51mazi-api）
  runtimeConfig: {
    public: {
      /** 51mazi-api 基址，用于获取当前版本与下载直链（如 https://api.51mazi.com） */
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "",
    },
  },

  // 站点配置（用于 SEO 模块）
  site: {
    // 部署到 Vercel 后会自动设置，或手动替换为实际域名
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://51mazi.com",
    name: "51mazi",
    description: "专为小说创作者设计的专业写作工具",
    defaultLocale: "zh-CN"
  },

  // SEO 配置
  seo: {
    fallbackTitle: true,
    automaticDefaults: true
  },

  // Robots 配置
  // 模块会自动读取项目根目录的 robots.txt 文件
  // 支持的位置：robots.txt (根目录)、assets/robots.txt、pages/robots.txt、public/_robots.txt
  // 当前使用根目录的 robots.txt，无需额外配置

  // 应用配置
  app: {
    // 页面过渡配置（Nuxt 4 推荐方式）
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      titleTemplate: "%s | 51mazi",
      htmlAttrs: {
        lang: "zh-CN"
      },
      link: [
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
        // 预连接 Vercel 分析服务，降低 TTFB 后续请求延迟
        { rel: "preconnect", href: "https://vitals.vercel-insights.com" },
        { rel: "dns-prefetch", href: "https://vitals.vercel-insights.com" }
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]
    }
  },

  // CSS 配置
  // ~ 别名指向包含 app/ 的目录，所以 ~/assets 等同于 app/assets
  css: ["~/assets/styles/main.css"],

  // 静态站点生成配置（SSG）- 预渲染关键路由以改善 TTFB
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/download", "/features", "/about", "/contact", "/guide", "/sitemap.xml", "/robots.txt"],
      ignore: ["/api/**"],
      failOnError: false
    }
  }
});
