<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { conceptIcons } from '@/data/conceptIcons'

const items = conceptIcons.map((item) => ({ ...item, accent: 'a' as const }))

const activeIndex = ref(0)
const activeItem = computed(() => items[activeIndex.value]!)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % items.length
  }, 5000)
})

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="icon_showcase">
    <div class="icon_showcase_frame">
      <div class="icon_showcase_deco">
        <Transition name="icon_showcase_label" mode="out-in">
          <span :key="activeItem.label" class="icon_showcase_label">{{ activeItem.label }}</span>
        </Transition>
        <Transition name="icon_showcase_line" mode="out-in">
          <span :key="activeItem.label" class="icon_showcase_line" />
        </Transition>
      </div>
      <Transition name="icon_showcase_fade" mode="out-in">
        <span
          :key="activeItem.label"
          class="icon_showcase_icon"
          :class="`icon_showcase_icon_${activeItem.accent}`"
          v-html="activeItem.icon"
        />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.icon_showcase {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2.5rem 0;
  --icon_showcase_line_width: 100px;

  .icon_showcase_frame {
    position: relative;
    width: 350px;
    max-width: 100%;
  }

  .icon_showcase_deco {
    position: absolute;
    top: 0;
    left: calc(var(--icon_showcase_line_width) * -1 + 20px);
    z-index: 2;
  }

  .icon_showcase_label {
    display: block;
    width: max-content;
    color: var(--color-text-secondary);
    font-size: var(--font-size-label);
    font-weight: var(--font-weight-medium);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transform: translateX(calc(-50% + 1px));
  }

  .icon_showcase_line {
    display: block;
    width: var(--icon_showcase_line_width);
    height: 44px;
    border-bottom: 2px solid var(--color-text-secondary);
    border-left: 2px solid var(--color-text-secondary);
  }

  .icon_showcase_icon {
    display: flex;
    width: 100%;
    aspect-ratio: 1;
  }

  .icon_showcase_icon :deep(svg) {
    width: 100%;
    height: 100%;
  }

  .icon_showcase_icon_a {
    color: var(--color-primary-a);
  }

  .icon_showcase_icon_b {
    color: var(--color-primary-b);
  }

  .icon_showcase_label-enter-active,
  .icon_showcase_label-leave-active {
    transition:
      opacity 0.25s ease,
      transform 0.25s ease;
  }

  .icon_showcase_label-enter-active {
    transition-delay: 0.5s;
  }

  .icon_showcase_line-enter-active,
  .icon_showcase_line-leave-active {
    transition: opacity 0.25s ease;
  }

  .icon_showcase_line-enter-active {
    transition-delay: 0.25s;
  }

  .icon_showcase_line-enter-from,
  .icon_showcase_line-leave-to {
    opacity: 0;
  }

  .icon_showcase_label-enter-from {
    opacity: 0;
    transform: translateX(calc(-50% + 1px)) translateY(12px);
  }

  .icon_showcase_label-leave-to {
    opacity: 0;
  }

  .icon_showcase_fade-enter-active,
  .icon_showcase_fade-leave-active {
    transition:
      opacity 0.25s ease,
      transform 0.25s ease;
  }

  .icon_showcase_fade-enter-from {
    opacity: 0;
    transform: scale(0.7) rotate(-8deg);
  }

  .icon_showcase_fade-leave-to {
    opacity: 0;
    transform: scale(0.7) rotate(8deg);
  }
}
</style>
