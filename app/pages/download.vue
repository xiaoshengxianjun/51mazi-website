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
            本版桌面端新增 App 扫码同步，并修复已知问题。
          </p>
          <p class="text-sm text-gray-600">
            桌面端启动后会自动检查更新；Android 可在本页直接下载 APK。
          </p>
          <p v-if="appVersion" class="text-sm text-gray-500 mt-2">
            Android 当前稳定版 {{ appVersion }}
          </p>
          <NuxtLink to="/blog/phone-sync" class="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium">
            了解扫码同步 →
          </NuxtLink>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">桌面端</h2>
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

      <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">手机端</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
        <div
          v-for="card in mobileCards"
          :key="card.id"
          class="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
        >
          <div class="flex justify-center mb-4">
            <CommonPlatformIcon :platform="card.id" size="md" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2 text-center">{{ card.label }}</h3>
          <p class="text-gray-600 mb-6 text-center">{{ card.requirement }}</p>
          <a
            v-if="card.href"
            :href="card.href"
            class="block w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold text-center"
          >
            {{ card.cta }}
          </a>
          <NuxtLink
            v-else-if="card.to"
            :to="card.to"
            class="block w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold text-center"
          >
            {{ card.cta }}
          </NuxtLink>
          <p
            v-else
            class="block w-full px-6 py-3 bg-gray-100 text-gray-500 rounded-lg font-semibold text-center"
          >
            {{ card.cta }}
          </p>
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
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="font-semibold text-gray-900 mb-3">Android</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Android 7.0 或更高版本</li>
              <li>• 官网 APK，首次安装需允许「未知应用」</li>
              <li>• 与电脑同一 Wi-Fi 时可扫码同步</li>
            </ul>
          </div>
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="font-semibold text-gray-900 mb-3">iOS</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• 目前仅开放内测</li>
              <li>• 请通过 QQ 群或邮箱联系客服申请</li>
              <li>• 扫码同步需与桌面端同一局域网</li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-6 text-center">
          桌面提供 Windows 与 macOS 官方安装包；Android 走官网 APK；iOS 请联系客服申请内测。
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
          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-3">Android</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-700">
              <li>下载 APK，在系统设置中允许此浏览器安装未知应用</li>
              <li>打开安装包完成安装</li>
              <li>不连电脑也可写章节与笔记；与电脑同步需同一 Wi-Fi 扫码</li>
            </ol>
          </div>
          <div class="bg-white rounded-lg p-6 border border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-3">iOS</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-700">
              <li>打开「联系我们」，加入 QQ 群或发送邮件</li>
              <li>说明需要申请 iOS 内测</li>
              <li>通过客服指引安装后，即可在手机上写作；与电脑同步需同一 Wi-Fi 扫码</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { version, getDownloadUrl, getFileSize } = useStableRelease()
const { version: appVersion, androidUrl, androidSize, hasAndroid } = useAppStableRelease()

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

const mobileCards = computed(() => {
  const androidHref = hasAndroid.value ? androidUrl.value : ''
  return [
    {
      id: 'android' as const,
      label: 'Android',
      requirement: 'Android 7.0 及以上，官网 APK',
      href: androidHref || undefined,
      cta: androidHref ? '下载 APK' : '即将提供安装包',
      sizeHint: androidSize.value,
    },
    {
      id: 'ios' as const,
      label: 'iOS',
      requirement: '目前仅开放内测，请联系客服申请',
      to: '/contact',
      cta: '联系客服申请内测',
      sizeHint: '',
    },
  ]
})

usePageSeo({
  title: '下载 51码字（Windows / macOS / Android）',
  description:
    '下载 51码字官方安装包：Windows、macOS 桌面端，以及 Android 手机写作伴侣。iOS 请联系客服申请内测。本地写作，数据保存在你指定的目录。',
  ogTitle: '下载 51码字',
  ogDescription: 'Windows、macOS 与 Android 官方安装包；iOS 内测请联系客服。',
})

useSoftwareAppSchema()
</script>
