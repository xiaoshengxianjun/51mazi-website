<script setup lang="ts">
import { THEME_SLIDES } from '~/data/themes'
import type { ThemeSlide } from '~/data/themes'

const emit = defineEmits<{
  change: [slide: ThemeSlide]
}>()

const {
  index,
  nextIndex,
  reduceMotion,
  goTo,
  next,
  prev,
  pauseAutoplay,
  resumeAutoplay,
} = useThemeCarousel(THEME_SLIDES.length)

const currentSlide = computed(() => THEME_SLIDES[index.value]!)
const prefersReducedMotion = computed(() => reduceMotion.value === 'reduce')
/** 刚切走的那一张，保留到淡出结束，避免跳选时闪白 */
const outgoingIndex = shallowRef(0)

watch(index, (_next, prev) => {
  outgoingIndex.value = prev ?? 0
})

/** 当前张 + 下一张预取 + 淡出中的上一张 */
const mountedSlides = computed(() => {
  const indexes = new Set([index.value, nextIndex.value, outgoingIndex.value])
  return THEME_SLIDES.filter((_, i) => indexes.has(i))
})

const carouselRef = useTemplateRef<HTMLElement>('carousel')
const slideLabelId = useId()

watch(
  currentSlide,
  (slide) => {
    emit('change', slide)
  },
  { immediate: true },
)

useSwipe(carouselRef, {
  threshold: 48,
  onSwipeEnd(_e, direction) {
    if (direction === 'left') next()
    if (direction === 'right') prev()
  },
})

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    next()
  }
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    prev()
  }
}

function isActive(slide: ThemeSlide) {
  return slide.id === currentSlide.value.id
}

function isEager(slide: ThemeSlide) {
  return slide.id === THEME_SLIDES[0]?.id
}
</script>

<template>
  <div
    ref="carousel"
    class="theme-carousel"
    role="region"
    aria-roledescription="carousel"
    aria-labelledby="theme-carousel-label"
    tabindex="0"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
    @focusin="pauseAutoplay"
    @focusout="resumeAutoplay"
    @keydown="onKeydown"
  >
    <p id="theme-carousel-label" class="sr-only">
      51码字主题预览，可用左右方向键切换
    </p>

    <div
      class="theme-carousel__stage"
      :style="{ backgroundColor: currentSlide.surface }"
    >
      <NuxtImg
        v-for="slide in mountedSlides"
        :key="slide.id"
        :src="slide.src"
        :alt="`51码字「${slide.name}」主题：本地书架与码字统计`"
        class="theme-carousel__image"
        :class="{
          'theme-carousel__image--active': isActive(slide),
          'theme-carousel__image--instant': prefersReducedMotion,
        }"
        :preload="isEager(slide)"
        :loading="isEager(slide) ? 'eager' : 'lazy'"
        :fetchpriority="isEager(slide) ? 'high' : 'low'"
        format="webp"
        quality="78"
        width="1600"
        height="1113"
        sizes="(max-width: 1024px) 100vw, 640px"
        :aria-hidden="!isActive(slide)"
      />
    </div>

    <div class="theme-carousel__controls">
      <p :id="slideLabelId" class="theme-carousel__caption" aria-live="polite">
        {{ currentSlide.name }}
        <span class="theme-carousel__caption-desc">{{ currentSlide.description }}</span>
      </p>

      <div class="theme-carousel__dots" role="group" aria-label="主题配色">
        <button
          v-for="(slide, i) in THEME_SLIDES"
          :key="slide.id"
          type="button"
          class="theme-carousel__dot"
          :class="{ 'theme-carousel__dot--active': isActive(slide) }"
          :aria-current="isActive(slide) ? 'true' : undefined"
          :aria-label="`${slide.name}，${slide.description}`"
          :style="{
            backgroundColor: slide.primary,
            boxShadow: isActive(slide) ? `0 0 0 2px #fff, 0 0 0 4px ${slide.primary}` : undefined,
          }"
          @click="goTo(i)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.theme-carousel {
  outline: none;
}

.theme-carousel:focus-visible {
  border-radius: 16px;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary-500) 45%, transparent);
}

.theme-carousel__stage {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1600 / 1113;
  border-radius: 16px;
  border: 1px solid rgb(228 228 231);
  box-shadow:
    0 18px 40px rgb(28 25 23 / 0.1),
    0 2px 6px rgb(28 25 23 / 0.04);
}

.theme-carousel__image,
:deep(img) {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.theme-carousel__image {
  opacity: 0;
  transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.theme-carousel__image--active {
  opacity: 1;
}

.theme-carousel__image--instant {
  transition: none;
}

.theme-carousel__controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
}

.theme-carousel__caption {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #44403c;
}

.theme-carousel__caption-desc {
  margin-left: 8px;
  color: #78716c;
}

.theme-carousel__dots {
  display: flex;
  align-items: center;
  gap: 12px;
}

.theme-carousel__dot {
  position: relative;
  width: 12px;
  height: 12px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.theme-carousel__dot::before {
  content: "";
  position: absolute;
  inset: -10px;
}

.theme-carousel__dot:hover {
  transform: scale(1.12);
}

.theme-carousel__dot:active {
  transform: scale(0.96);
}

.theme-carousel__dot--active {
  transform: scale(1.08);
}

.theme-carousel__dot:focus-visible {
  outline: 2px solid #3d6b9e;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .theme-carousel__image,
  .theme-carousel__dot {
    transition: none;
  }
}
</style>
