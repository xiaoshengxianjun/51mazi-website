<template>
  <div class="py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            联系我们
          </h1>
          <p class="text-xl text-gray-600">
            使用问题、功能建议或商务合作，欢迎来信或加群
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">联系方式</h2>
            <div class="space-y-6">
              <div class="bg-white rounded-lg p-6 border border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">QQ 群</h3>
                <div class="flex items-start space-x-4">
                  <div
                    class="bg-gray-50 rounded-lg p-3 shrink-0 cursor-pointer hover:opacity-90 transition-opacity border border-gray-100"
                    @click="showQRCodeModal = true"
                  >
                    <NuxtImg
                      src="/images/qq_qrcode.png"
                      alt="51码字交流群 QQ 群二维码，群号 777690109"
                      class="w-36 h-auto max-h-44 rounded-lg object-contain"
                      loading="lazy"
                      width="144"
                      format="webp"
                    />
                  </div>
                  <div>
                    <p class="text-gray-700 mb-1 font-semibold">51码字交流群</p>
                    <p class="text-gray-700 mb-2 text-sm">
                      群号: <span class="text-primary-600">{{ QQ_GROUP }}</span>
                    </p>
                    <p class="text-sm text-gray-600">
                      交流使用经验、获取更新信息、反馈问题。
                    </p>
                    <p class="text-xs text-gray-500 mt-2">点击二维码可放大</p>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-lg p-6 border border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">邮箱</h3>
                <a :href="`mailto:${CONTACT_EMAIL}`" class="text-primary-600 hover:text-primary-700 font-medium text-lg">
                  {{ CONTACT_EMAIL }}
                </a>
                <p class="text-sm text-gray-600 mt-2">
                  问题反馈、建议或商务合作
                </p>
              </div>

              <div class="bg-white rounded-lg p-6 border border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">许可证客服</h3>
                <p class="text-gray-700 mb-2">
                  累计打赏满 50 元后，联系 QQ <span class="text-primary-600 font-medium">{{ LICENSE_QQ }}</span> 凭付款截图兑换短码。
                </p>
                <p class="text-sm text-gray-600">
                  也可在应用首页「许可证激活」粘贴已有的 20 位短码。
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">其他渠道</h2>
            <div class="bg-white rounded-lg p-6 border border-gray-200 mb-8">
              <ul class="space-y-2 text-gray-700">
                <li>• 应用内「意见反馈」（需已激活许可证，每日最多 3 次，不超过 500 字）</li>
                <li>• 应用内「帮助中心」查看联系方式</li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">赞助作者</h3>
              <p class="text-sm text-gray-600 mb-4">
                可通过微信或支付宝打赏。满 50 元可联系客服兑换激活短码。
              </p>
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <p class="text-sm font-medium text-gray-700 mb-2">微信赞赏</p>
                  <NuxtImg
                    src="/images/WeChatPayQRCode.png"
                    alt="微信赞赏码"
                    class="w-full max-w-[180px] h-auto mx-auto rounded-lg"
                    loading="lazy"
                    format="webp"
                  />
                </div>
                <div class="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <p class="text-sm font-medium text-gray-700 mb-2">支付宝</p>
                  <NuxtImg
                    src="/images/AliPayQRCode.png"
                    alt="支付宝赞赏码"
                    class="w-full max-w-[180px] h-auto mx-auto rounded-lg"
                    loading="lazy"
                    format="webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        @click.self="showQRCodeModal = false"
      >
        <button
          class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10"
          aria-label="关闭"
          @click="showQRCodeModal = false"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="relative bg-white rounded-xl p-6 shadow-2xl max-w-sm mx-4">
          <h3 class="text-xl font-semibold text-gray-900 mb-4 text-center">51码字交流群</h3>
          <NuxtImg
            src="/images/qq_qrcode.png"
            alt="51码字交流群 QQ 群二维码，群号 777690109"
            class="w-full h-auto rounded-lg object-contain"
            format="webp"
            sizes="(max-width: 384px) 100vw, 384px"
          />
          <p class="text-center text-gray-600 mt-4 text-sm">
            群号: <span class="font-semibold text-primary-600">{{ QQ_GROUP }}</span>
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { CONTACT_EMAIL, LICENSE_QQ, QQ_GROUP } from '~/utils/product'

const showQRCodeModal = shallowRef(false)

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && showQRCodeModal.value) {
    showQRCodeModal.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
})

useSeoMeta({
  title: '联系我们',
  description: '联系 51码字：QQ 群、邮箱、许可证客服与赞助作者。',
  ogTitle: '联系我们 - 51码字',
  ogDescription: 'QQ 群、邮箱、许可证兑换与赞助。',
})
</script>
