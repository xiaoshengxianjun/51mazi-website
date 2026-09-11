<template>
  <article class="py-20">
    <div class="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <header class="mb-12">
        <h1 class="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          {{ doc.title }}
        </h1>
        <p class="text-sm text-gray-500">
          更新日期：{{ doc.updatedAt }}
        </p>
      </header>
      <p class="mb-10 leading-relaxed text-gray-700">
        {{ doc.intro }}
      </p>
      <section
        v-for="section in doc.sections"
        :key="section.heading"
        class="mb-8"
      >
        <h2 class="mb-3 text-xl font-semibold text-gray-900">
          {{ section.heading }}
        </h2>
        <p
          v-for="(paragraph, index) in section.paragraphs"
          :key="index"
          class="mb-3 leading-relaxed text-gray-700"
        >
          {{ paragraph }}
        </p>
      </section>
      <p class="text-sm text-gray-500">
        相关文件：
        <NuxtLink
          v-if="doc.slug === 'terms'"
          to="/privacy"
          class="text-primary-600 hover:underline"
        >
          隐私政策
        </NuxtLink>
        <NuxtLink
          v-else
          to="/terms"
          class="text-primary-600 hover:underline"
        >
          用户协议
        </NuxtLink>
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { LegalDoc } from '~/data/legal'

defineProps<{
  doc: LegalDoc
}>()
</script>
