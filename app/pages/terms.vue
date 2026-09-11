<template>
  <LegalArticle :doc="USER_AGREEMENT" />
</template>

<script setup lang="ts">
import LegalArticle from '~/components/legal/LegalArticle.vue'
import { USER_AGREEMENT } from '~/data/legal'

usePageSeo({
  title: '用户协议',
  description: '51码字用户协议：可选云账号、本地写作、许可证与使用规范。',
  ogTitle: '51码字用户协议',
  ogDescription: '可选云账号、本地优先写作与许可证使用约定。',
})
</script>
