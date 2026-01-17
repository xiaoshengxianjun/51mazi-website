// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // 兼容性日期（必需，用于控制 Nitro、Image 等的行为）
  // 设置为当前日期，启用所有已发布的新功能
  compatibilityDate: "2026-01-15",
  
  // 开发工具（生产环境自动禁用）
  devtools: { enabled: true },

  // 模块配置
  modules: ["@nuxtjs/seo", "@vueuse/nuxt"],

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
      link: [{ rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]
    }
  },

  // CSS 配置
  // ~ 别名指向包含 app/ 的目录，所以 ~/assets 等同于 app/assets
  css: ["~/assets/styles/main.css"],

  // 静态站点生成配置（SSG）
  nitro: {
    prerender: {
      // 启用链接爬取，自动发现所有路由
      crawlLinks: true,
      // 手动添加需要预渲染的路由（如 sitemap.xml, robots.txt 等）
      routes: ["/sitemap.xml", "/robots.txt"],
      // 忽略不需要预渲染的路由
      ignore: ["/api/**"],
      // 错误处理：构建时如果预渲染失败是否中断构建
      failOnError: false
    }
  }
});
