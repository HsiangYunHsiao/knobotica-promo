import type { Directive } from 'vue'

const scrollReveal: Directive<HTMLElement> = {
  mounted(el, binding) {
    el.classList.add(binding.arg === 'left' ? 'scroll_reveal_left' : 'scroll_reveal')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add('is_visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
  },
}

export default scrollReveal
