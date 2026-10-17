<script setup lang="ts">
defineProps<{
  title: string
  label: string
  desc: string
  highlight: string
  accent: 'a' | 'b'
}>()
</script>

<template>
  <article class="module_card" :class="`module_card_${accent}`">
    <h3 class="module_card_title">{{ title }}</h3>
    <p class="module_card_label">{{ label }}</p>
    <p class="module_card_highlight">{{ highlight }}</p>
    <p class="module_card_desc">{{ desc }}</p>
  </article>
</template>

<style scoped>
.module_card {
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem 2rem;
  border: var(--border-width-thick) solid var(--color-primary-a);
  background-color: var(--color-surface);
  --module_card_accent: var(--color-primary-a);
}

.module_card_b {
  border-color: var(--color-primary-b);
  --module_card_accent: var(--color-primary-b-dark);
}

.module_card_title {
  margin: 0;
  font-size: var(--font-size-section-title);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.1em;
  text-align: center;
}

.module_card_label {
  margin: 0.6rem 0 1.5rem;
  font-size: var(--font-size-label);
  letter-spacing: 0.12em;
  text-align: center;
  text-transform: uppercase;
}

.module_card_desc {
  min-height: 120px;
  text-align: center;
  margin: 0;
  letter-spacing: 0.04em;
}

.module_card_highlight {
  margin: 0 0 1rem;
  text-align: center;
  color: var(--module_card_accent);
  font-size: var(--font-size-section-title);
  font-weight: var(--font-weight-medium);
}

</style>
