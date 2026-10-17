<script setup lang="ts">
defineProps<{
  question: string
  answer: string
  englishLabel?: string
  accent?: 'a' | 'b'
  blink?: boolean
}>()
</script>

<template>
  <div class="dialogue_heading" :class="`dialogue_heading_${accent ?? 'a'}`">
    <p class="dialogue_heading_question">{{ question }}</p>
    <p class="dialogue_heading_answer" :class="{ dialogue_heading_blink: blink }">
      {{ answer }}
      <span v-if="englishLabel" class="dialogue_heading_label">{{ englishLabel }}</span>
    </p>
  </div>
</template>

<style scoped>
.dialogue_heading {
  margin-bottom: 1.5rem;
}

.dialogue_heading_question {
  margin: 0 0 0.4rem;
  color: var(--color-text-secondary);
  font-size: var(--font-size-section-title);
}

.dialogue_heading_answer {
  margin: 0;
  color: var(--color-text-primary);
  font-size: calc(var(--font-size-hero) * 1.4);
  font-weight: var(--font-weight-medium);
}

.dialogue_heading_label {
  margin-left: 0.6rem;
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.dialogue_heading_a .dialogue_heading_label {
  color: var(--color-primary-a-dark);
}

.dialogue_heading_b .dialogue_heading_label {
  color: var(--color-primary-b-dark);
}

.dialogue_heading_blink {
  animation: dialogue_heading_blink 1.4s ease-in-out infinite;
}

@keyframes dialogue_heading_blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dialogue_heading_blink {
    animation: none;
  }
}
</style>
