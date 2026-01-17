<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- 页面标题 -->
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            联系我们
          </h1>
          <p class="text-xl text-gray-600">
            有任何问题或建议？欢迎联系我们
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- 联系方式 -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">联系方式</h2>
            <div class="space-y-6">
              <!-- QQ 群 -->
              <div class="bg-white rounded-lg p-6 border border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">QQ 群</h3>
                <div class="flex items-start space-x-4">
                  <div class="bg-gray-100 rounded-lg p-4 shrink-0 cursor-pointer hover:opacity-80 transition-opacity" @click="showQRCodeModal = true">
                    <img src="/images/qq_qrcode.jpg" alt="51mazi QQ 群二维码" class="w-32 h-32 rounded object-cover"
                      loading="lazy" />
                  </div>
                  <div>
                    <p class="text-gray-700 mb-2 font-semibold">群号: <span class="text-primary-600">777690109</span></p>
                    <p class="text-sm text-gray-600">
                      加入 QQ 群，与其他创作者交流使用经验，获取最新更新信息，反馈问题或建议。
                    </p>
                    <p class="text-xs text-gray-500 mt-2">💡 点击二维码可放大查看</p>
                  </div>
                </div>
              </div>

              <!-- 邮箱 -->
              <div class="bg-white rounded-lg p-6 border border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">邮箱</h3>
                <a href="mailto:fomazi@163.com" class="text-primary-600 hover:text-primary-700 font-medium text-lg">
                  fomazi@163.com
                </a>
                <p class="text-sm text-gray-600 mt-2">
                  发送邮件反馈问题、建议、报告 Bug 或商务合作
                </p>
              </div>

              <!-- GitHub Issues -->
              <div class="bg-white rounded-lg p-6 border border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">GitHub Issues</h3>
                <a href="https://github.com/xiaoshengxianjun/51mazi/issues" target="_blank" rel="noopener noreferrer"
                  class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  提交 Issue
                </a>
                <p class="text-sm text-gray-600 mt-2">
                  在 GitHub 上提交 Bug 报告或功能建议，参与项目开发
                </p>
              </div>
            </div>
          </div>

          <!-- 反馈表单（可选） -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">反馈表单</h2>
            <div class="bg-white rounded-lg p-6 border border-gray-200">
              <p class="text-gray-600 mb-4">
                您可以通过以下方式联系我们：
              </p>
              <ul class="space-y-2 text-gray-700 mb-6">
                <li>• 发送邮件至 <a href="mailto:fomazi@163.com"
                    class="text-primary-600 hover:text-primary-700">fomazi@163.com</a></li>
                <li>• 在 <a href="https://github.com/xiaoshengxianjun/51mazi/issues" target="_blank"
                    class="text-primary-600 hover:text-primary-700">GitHub Issues</a> 提交问题</li>
                <li>• 加入 QQ 群（777690109）进行交流</li>
              </ul>
              <p class="text-sm text-gray-500">
                我们会在收到反馈后尽快回复您。
              </p>
            </div>

            <!-- 社区链接 -->
            <div class="mt-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">社区链接</h3>
              <div class="space-y-3">
                <a href="https://github.com/xiaoshengxianjun/51mazi" target="_blank" rel="noopener noreferrer"
                  class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <div>
                    <p class="font-medium text-gray-900">GitHub 仓库</p>
                    <p class="text-sm text-gray-600">查看源代码和贡献</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 二维码放大模态框 -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showQRCodeModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        @click.self="showQRCodeModal = false"
      >
        <!-- 关闭按钮 -->
        <button
          @click="showQRCodeModal = false"
          class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10"
          aria-label="关闭"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- 放大的二维码 -->
        <div class="relative bg-white rounded-lg p-6 shadow-2xl max-w-md mx-4">
          <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">51mazi QQ 群二维码</h3>
          <img
            src="/images/qq_qrcode.jpg"
            alt="51mazi QQ 群二维码"
            class="w-full h-auto rounded-lg"
          />
          <p class="text-center text-gray-600 mt-4 text-sm">群号: <span class="font-semibold text-primary-600">777690109</span></p>
          <p class="text-center text-gray-500 mt-2 text-xs">使用手机 QQ 扫描二维码加入群聊</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
// 二维码模态框状态
const showQRCodeModal = ref(false)

// 监听 ESC 键关闭模态框
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && showQRCodeModal.value) {
    showQRCodeModal.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})

// SEO
useSeoMeta({
  title: '联系我们',
  description: '联系 51mazi 团队 - QQ 群、邮箱、GitHub Issues 等多种联系方式',
  ogTitle: '联系我们 - 51mazi',
  ogDescription: 'QQ 群、邮箱、GitHub Issues 等多种联系方式'
})
</script>
