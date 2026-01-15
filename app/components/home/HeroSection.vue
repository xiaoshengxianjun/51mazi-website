<template>
  <section class="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
    <!-- 动态背景装饰 -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float animate-delay-300"></div>
    </div>

    <!-- 粒子效果背景 - 只在客户端渲染以避免 SSR 不匹配 -->
    <ClientOnly>
      <div class="absolute inset-0 overflow-hidden">
        <div
          v-for="i in particles"
          :key="i.id"
          class="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
          :style="{
            left: `${i.left}%`,
            top: `${i.top}%`,
            animationDelay: `${i.delay}s`,
            animationDuration: `${i.duration}s`
          }"
        ></div>
      </div>
    </ClientOnly>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- 主标题 - 打字机效果 -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span class="inline-block">
            {{ typewriterText1 }}
            <span
              v-if="!typewriterComplete1"
              class="inline-block w-0.5 h-12 bg-white ml-1 animate-blink"
            ></span>
          </span>
          <span class="block text-primary-200 mt-2">
            {{ typewriterText2 }}
            <span
              v-if="typewriterComplete1 && !typewriterComplete2"
              class="inline-block w-0.5 h-12 bg-primary-200 ml-1 animate-blink"
            ></span>
          </span>
        </h1>

        <!-- 副标题 - 模糊揭示效果 -->
        <p
          class="text-xl sm:text-2xl text-primary-100 mb-8 leading-relaxed transition-all duration-1000"
          :class="subtitleVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-md'"
        >
          编辑器、地图设计、关系图谱、人物档案... 一切创作所需，尽在 51mazi
        </p>

        <!-- CTA 按钮 - 添加动画 -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animate-scale-in animate-delay-400">
          <NuxtLink
            to="/download"
            class="group px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-smooth shadow-lg hover:shadow-2xl hover-lift relative overflow-hidden"
          >
            <span class="relative z-10">立即下载</span>
            <span class="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </NuxtLink>
          <NuxtLink
            to="/features"
            class="px-8 py-4 bg-primary-500/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-primary-500/30 transition-smooth hover:border-white/50 hover-glow"
          >
            查看功能
          </NuxtLink>
        </div>

        <!-- 软件截图占位 - 添加动画 -->
        <div
          class="mt-16 rounded-lg overflow-hidden shadow-2xl border-4 border-white/20 hover-lift transition-all duration-500"
          :class="subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          style="transition-delay: 0.8s;"
        >
          <div class="bg-gray-800 aspect-video flex items-center justify-center relative group">
            <!-- 网格背景 -->
            <div class="absolute inset-0 animated-grid opacity-20"></div>
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p class="text-gray-400 relative z-10 text-lg">软件截图占位</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero Section 组件 - 带有丰富的动画效果

// 生成粒子数据（只在客户端）
const particles = ref<Array<{
  id: number
  left: number
  top: number
  delay: number
  duration: number
}>>([])

// 打字机效果
const typewriterText1 = ref('')
const typewriterText2 = ref('')
const typewriterComplete1 = ref(false)
const typewriterComplete2 = ref(false)
const subtitleVisible = ref(false)

const text1 = '专为小说创作者设计的'
const text2 = '专业写作工具'

onMounted(() => {
  // 只在客户端生成随机粒子位置，避免 SSR 不匹配
  particles.value = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2
  }))

  // 打字机效果 - 第一行
  let index1 = 0
  const typewriter1 = setInterval(() => {
    if (index1 < text1.length) {
      typewriterText1.value += text1[index1]
      index1++
    } else {
      clearInterval(typewriter1)
      typewriterComplete1.value = true
      
      // 延迟后开始第二行
      setTimeout(() => {
        let index2 = 0
        const typewriter2 = setInterval(() => {
          if (index2 < text2.length) {
            typewriterText2.value += text2[index2]
            index2++
          } else {
            clearInterval(typewriter2)
            typewriterComplete2.value = true
            
            // 显示副标题
            setTimeout(() => {
              subtitleVisible.value = true
            }, 500)
          }
        }, 80)
      }, 300)
    }
  }, 100)
})
</script>
