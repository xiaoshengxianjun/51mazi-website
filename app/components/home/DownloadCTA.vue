<template>
  <section class="py-20 bg-primary-700 text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">
          开始在本地写作
        </h2>
        <p class="text-lg text-primary-100 mb-8">
          下载 51码字，数据保存在你指定的目录。新安装享有 7 天完整试用。
        </p>

        <div class="flex flex-wrap justify-center gap-8 mb-8">
          <div
            v-for="platform in platforms"
            :key="platform.id"
            class="flex flex-col items-center"
          >
            <CommonPlatformIcon :platform="platform.id" size="lg" variant="dark" />
            <span class="text-sm font-medium mt-3">{{ platform.label }}</span>
          </div>
        </div>

        <NuxtLink
          to="/download"
          class="inline-flex items-center gap-2 px-10 py-4 bg-white text-primary-700 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors"
        >
          <span>立即下载</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </NuxtLink>

        <p class="mt-4 text-primary-200 text-sm">
          当前版本 {{ version }} · 官方安装包支持 Windows、macOS
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { version } = useStableRelease()

const platforms = [
  { id: 'windows' as const, label: 'Windows' },
  { id: 'macos' as const, label: 'macOS' },
]
</script>
