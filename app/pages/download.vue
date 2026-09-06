<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">下载 51码字</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          选择平台安装包，安装后即可开始写作。
        </p>
      </div>

      <div class="max-w-2xl mx-auto mb-12 text-center">
        <div class="bg-primary-50 border border-primary-200 rounded-lg p-6">
          <p class="text-sm text-primary-700 mb-2">当前稳定版</p>
          <p class="text-3xl font-bold text-primary-900 mb-2">{{ version }}</p>
          <p class="text-sm text-gray-700 mb-2">
            本版新增签约评审，并修复已知问题。
          </p>
          <p class="text-sm text-gray-600">
            应用启动后会自动检查更新；也可在首页侧栏手动「检查更新」。
          </p>
          <NuxtLink to="/blog/signing-review" class="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium">
            了解签约评审 →
          </NuxtLink>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
        <div
          v-for="card in platformCards"
          :key="card.id"
          class="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
        >
          <div class="flex justify-center mb-4">
            <CommonPlatformIcon :platform="card.id" size="md" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2 text-center">{{ card.label }}</h3>
          <p class="text-gray-600 mb-6 text-center">{{ card.requirement }}</p>
          <div class="space-y-3">
            <a
              v-for="arch in card.arches"
              :key="arch.key"
              :href="arch.href"
              class="block w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold text-center"
            >
              {{ arch.label }}
            </a>
          </div>
          <p v-if="card.sizeHint" class="text-sm text-gray-500 mt-4 text-center">
            {{ card.sizeHint }}
          </p>
        </div>
      </div>

      <div class="max-w-4xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">系统要求</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="font-semibold text-gray-900 mb-3">Windows</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Windows 10 或更高版本</li>
              <li>• x64 或 ARM64</li>
              <li>• 需安装 WebView2（多数系统已自带）</li>
              <li>• 建议 4 GB 以上内存</li>
            </ul>
          </div>
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="font-semibold text-gray-900 mb-3">macOS</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• 支持较新的 macOS 版本</li>
              <li>• Apple Silicon 与 Intel 均提供安装包</li>
              <li>• 首次打开可能需在系统设置中允许运行</li>
              <li>• 建议 4 GB 以上内存</li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-6 text-center">
          目前提供 Windows 与 macOS 官方安装包。
        </p>
      </div>

      <div class="max-w-4xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">安装说明</h2>
        <div class="space-y-6">
          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-3">Windows</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-700">
              <li>下载对应架构的安装包（.exe）</li>
              <li>双击运行安装向导</li>
              <li>从开始菜单启动「51码字」</li>
              <li>首次启动请在系统设置中选择书籍主目录</li>
            </ol>
          </div>
          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-3">macOS</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-700">
              <li>下载对应芯片的 .dmg</li>
              <li>将应用拖到「应用程序」</li>
              <li>首次运行如被拦截，请在系统设置中允许</li>
              <li>启动后选择书籍主目录即可开始建书</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { version, getDownloadUrl, getFileSize } = useStableRelease()

const platformCards = computed(() => [
  {
    id: 'windows' as const,
    label: 'Windows',
    requirement: 'Windows 10 及以上，x64 / ARM64',
    sizeHint: getFileSize('windows-x86_64') || getFileSize('windows-aarch64'),
    arches: [
      { key: 'windows-x86_64', label: '下载 x64（.exe）', href: getDownloadUrl('windows-x86_64') },
      { key: 'windows-aarch64', label: '下载 ARM64（.exe）', href: getDownloadUrl('windows-aarch64') },
    ],
  },
  {
    id: 'macos' as const,
    label: 'macOS',
    requirement: 'Apple Silicon 与 Intel',
    sizeHint: getFileSize('darwin-aarch64') || getFileSize('darwin-x86_64'),
    arches: [
      { key: 'darwin-aarch64', label: '下载 Apple Silicon（.dmg）', href: getDownloadUrl('darwin-aarch64') },
      { key: 'darwin-x86_64', label: '下载 Intel（.dmg）', href: getDownloadUrl('darwin-x86_64') },
    ],
  },
])

usePageSeo({
  title: '下载 51码字（Windows / macOS）',
  description:
    '下载 51码字小说写作软件官方安装包：Windows x64 / ARM64，macOS Apple Silicon / Intel。本地写作，数据保存在你指定的目录。',
  ogTitle: '下载 51码字',
  ogDescription: 'Windows 与 macOS 官方安装包，本地优先的小说写作软件。',
})

useSoftwareAppSchema()
</script>
