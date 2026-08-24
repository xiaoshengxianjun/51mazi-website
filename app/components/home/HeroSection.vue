<script setup lang="ts">
import { THEME_SLIDES } from '~/data/themes'
import type { ThemeSlide } from '~/data/themes'

const currentSlide = shallowRef<ThemeSlide>(THEME_SLIDES[0]!)

const heroStyle = computed(() => ({
  backgroundColor: currentSlide.value.wash,
}))

function onThemeChange(slide: ThemeSlide) {
  currentSlide.value = slide
}
</script>

<template>
  <section class="hero" :style="heroStyle">
    <div class="hero__inner">
      <div class="hero__copy">
        <p class="hero__eyebrow">
          本地优先
        </p>
        <h1 class="hero__title">
          专为小说创作者<br>
          设计的本地写作工具
        </h1>
        <p class="hero__sub">
          书籍保存在你指定的目录，断网可写。
        </p>
        <div class="hero__actions">
          <NuxtLink to="/download" class="hero__btn hero__btn--primary">
            立即下载
          </NuxtLink>
          <NuxtLink to="/features" class="hero__btn hero__btn--ghost">
            查看功能
          </NuxtLink>
        </div>
      </div>

      <div class="hero__visual">
        <HomeThemeCarousel @change="onThemeChange" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  transition: background-color 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero__inner {
  display: grid;
  gap: 2rem;
  align-items: center;
  max-width: 72rem;
  margin: 0 auto;
  padding: 3.5rem 1rem 3rem;
}

.hero__copy {
  text-align: center;
}

.hero__eyebrow {
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--color-primary-700);
}

.hero__title {
  margin: 0 0 0.75rem;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  color: #1c1917;
}

.hero__sub {
  max-width: 28rem;
  margin: 0 auto 1.5rem;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #57534e;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.hero__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0.7rem 1.5rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
}

.hero__btn:active {
  transform: scale(0.98);
}

.hero__btn--primary {
  background: var(--color-primary-600);
  color: #fff;
}

.hero__btn--primary:hover {
  background: var(--color-primary-700);
}

.hero__btn--ghost {
  background: #fff;
  color: var(--color-primary-700);
  border: 1px solid var(--color-primary-200);
}

.hero__btn--ghost:hover {
  background: var(--color-primary-50);
}

@media (min-width: 1024px) {
  .hero__inner {
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.18fr);
    gap: 3.5rem;
    padding: 4.5rem 2rem 4rem;
  }

  .hero__copy {
    text-align: left;
  }

  .hero__title {
    font-size: 3rem;
  }

  .hero__sub {
    margin-left: 0;
    margin-right: 0;
    font-size: 1.125rem;
  }

  .hero__actions {
    justify-content: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero,
  .hero__btn {
    transition: none;
  }
}
</style>
