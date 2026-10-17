<script setup lang="ts"></script>

<template>
  <div class="enterprise_placeholder">
    <p class="enterprise_placeholder_text">企業分頁建置中，敬請期待。</p>
    <router-link class="enterprise_placeholder_link" to="/">回首頁</router-link>
  </div>
</template>

<style scoped>
.enterprise_placeholder {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--color-text-secondary);
}

.enterprise_placeholder_link {
  color: var(--color-primary-a-dark);
}
</style>
