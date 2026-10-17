<script setup lang="ts">
import DialogueHeading from '@/components/common/DialogueHeading.vue'
</script>

<template>
  <section id="results" class="results">
    <div v-scroll-reveal class="results_inner">
      <DialogueHeading question="想先了解系統在做什麼？" answer="從系統介紹影片開始。" />

      <div class="results_frame">
        <iframe
          class="results_video"
          src="https://www.youtube-nocookie.com/embed/AFYGhyWPQ98?list=PLZA-4TCDegqg"
          title="KNOBOTICA 系統介紹影片播放清單"
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.results {
  padding: 4rem 1.5rem;
}

.results_inner {
  max-width: 860px;
  margin: 0 auto;
}

.results_frame {
  aspect-ratio: 16 / 9;
  border: var(--border-width-thick) solid var(--color-primary-a);
  background-color: var(--color-surface);
}

.results_video {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
