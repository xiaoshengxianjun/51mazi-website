// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // 模块配置
  modules: ["@nuxtjs/seo", "@vueuse/nuxt"],

  // 组件自动导入配置（Nuxt 4 默认扫描 app/components，但显式配置更安全）
  components: true,

  // Vite 配置（Tailwind CSS v4）
  vite: {
    plugins: [tailwindcss()]
  },

  // 站点配置（用于 SEO 模块）
  site: {
    url: "https://51mazi.com", // 替换为实际域名
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
    head: {
      titleTemplate: "%s | 51mazi",
      htmlAttrs: {
        lang: "zh-CN"
      },
      link: [{ rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }]
    }
  },

  // CSS 配置
  css: ["~/assets/styles/main.css"],

  // 静态站点生成配置
  nitro: {
    prerender: {
      routes: ["/"]
    }
  }
});
