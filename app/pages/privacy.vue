<template>
  <LegalArticle :doc="PRIVACY_POLICY" />
</template>

<script setup lang="ts">
import LegalArticle from '~/components/legal/LegalArticle.vue'
import { PRIVACY_POLICY } from '~/data/legal'

usePageSeo({
  title: '隐私政策',
  description: '51码字隐私政策：说明账号、许可证、邮件验证码与本地文稿相关的信息处理方式。',
  ogTitle: '51码字隐私政策',
  ogDescription: '账号、许可证与联网功能相关的信息如何收集与使用。',
})
</script>
