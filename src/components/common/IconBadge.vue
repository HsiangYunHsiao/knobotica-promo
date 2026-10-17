<script setup lang="ts">
withDefaults(
  defineProps<{
    icon: string
    accent?: 'a' | 'b'
    prefix?: 'far' | 'fas'
  }>(),
  { accent: 'a', prefix: 'far' },
)
</script>

<template>
  <span class="icon_badge" :class="`icon_badge_${accent}`">
    <font-awesome-icon :icon="[prefix, icon]" />
  </span>
</template>

<style scoped>
.icon_badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  font-size: 1.4rem;
  animation: icon_pop 0.4s ease-out;
  transition: transform 0.2s ease-out;
}

.icon_badge:hover {
  transform: scale(1.15) rotate(-4deg);
}

.icon_badge_a {
  background-color: var(--color-primary-a-light);
  color: var(--color-primary-a-dark);
}

.icon_badge_b {
  background-color: var(--color-primary-b-light);
  color: var(--color-primary-b-dark);
}

@keyframes icon_pop {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  70% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
</style>
