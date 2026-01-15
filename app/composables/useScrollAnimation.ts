/**
 * 滚动动画组合式函数
 * 用于实现元素进入视口时的动画效果
 */
export const useScrollAnimation = () => {
  const observer = ref<IntersectionObserver | null>(null)
  const animatedElements = ref<Set<Element>>(new Set())

  const setupObserver = () => {
    if (typeof window === 'undefined') return

    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedElements.value.has(entry.target)) {
            const element = entry.target as HTMLElement
            element.classList.remove('opacity-0')
            element.classList.add('animate-fade-in', 'animate-slide-up')
            animatedElements.value.add(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )
  }

  const observeElement = (element: Element | null) => {
    if (!element || !observer.value) return
    if (animatedElements.value.has(element)) return

    observer.value.observe(element)
  }

  const unobserveElement = (element: Element | null) => {
    if (!element || !observer.value) return
    observer.value.unobserve(element)
  }

  onMounted(() => {
    setupObserver()
  })

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })

  return {
    observeElement,
    unobserveElement
  }
}
