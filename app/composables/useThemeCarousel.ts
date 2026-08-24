/**
 * 主题轮播状态：自动播放、悬停暂停、切页隐藏暂停、减少动效时只允许手动切换
 */
export function useThemeCarousel(
  length: number,
  options: { intervalMs?: number } = {},
) {
  const { intervalMs = 5200 } = options

  const index = shallowRef(0)
  const hovered = shallowRef(false)
  const reduceMotion = usePreferredReducedMotion()
  const visibility = useDocumentVisibility()

  const nextIndex = computed(() => (index.value + 1) % length)
  const autoplayEnabled = computed(
    () =>
      reduceMotion.value !== 'reduce'
      && visibility.value === 'visible'
      && !hovered.value,
  )

  const { pause, resume } = useIntervalFn(
    () => {
      index.value = (index.value + 1) % length
    },
    intervalMs,
    { immediate: false },
  )

  watch(
    autoplayEnabled,
    (enabled) => {
      if (enabled) resume()
      else pause()
    },
    { immediate: true },
  )

  function goTo(target: number) {
    index.value = ((target % length) + length) % length
  }

  function next() {
    goTo(index.value + 1)
  }

  function prev() {
    goTo(index.value - 1)
  }

  function pauseAutoplay() {
    hovered.value = true
  }

  function resumeAutoplay() {
    hovered.value = false
  }

  return {
    index: readonly(index),
    nextIndex,
    reduceMotion,
    goTo,
    next,
    prev,
    pauseAutoplay,
    resumeAutoplay,
  }
}
