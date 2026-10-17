<script setup lang="ts">
import IconShowcase from '@/components/home/IconShowcase.vue'
</script>

<template>
  <section id="hero" class="hero">
    <div v-scroll-reveal class="hero_inner">
      <div class="hero_wrapper">
        <IconShowcase />
        <p class="hero_desc">
          <span>企業知識管理</span>
          <span>地端安全部署</span>
        </p>
        <h1 class="hero_marquee" aria-label="解鎖企業知識寶庫，打造私有智慧大腦">
          <span class="hero_marquee_track" aria-hidden="true">
            <span v-for="n in 4" :key="n" class="hero_marquee_text">
              解鎖企業知識寶庫，打造私有智慧大腦
            </span>
          </span>
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 5rem 1.5rem;
  overflow-x: hidden;
  background-color: var(--color-bg-gray);
}

.hero_inner {
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
}

.hero_wrapper {
  position: relative;
  display: flow-root;
}

.hero_marquee {
  position: relative;
  z-index: 2;
  overflow: hidden;
  margin: -100px calc(50% - 50vw) 0;
  color: var(--color-surface);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: var(--font-weight-medium);
  line-height: 1.3;
  white-space: nowrap;
  opacity: 0.8;
}

.hero_marquee_track {
  display: flex;
  width: max-content;
  animation: hero_marquee 24s linear infinite;
}

.hero_marquee_text {
  padding-right: 4rem;
}

@keyframes hero_marquee {
  to {
    transform: translateX(-25%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero_marquee_track {
    animation: none;
  }
}

.hero_desc {
  position: absolute;
  top: calc(2.5rem + 175px);
  left: calc(50% + 175px + 2rem);
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0;
  color: var(--color-text-primary);
  font-size: var(--font-size-section-title);
  font-weight: 700;
  text-align: left;
  transform: translateY(-50%);
}







@media (max-width: 860px) {
  .hero_wrapper {
    display: flex;
    flex-direction: column;
  }

  .hero_desc {
    position: static;
    order: 2;
    align-items: center;
    margin: 1rem 0 2rem;
    text-align: center;
    transform: none;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 3.5rem 1.25rem;
  }
}
</style>
