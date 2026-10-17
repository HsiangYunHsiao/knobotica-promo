<script setup lang="ts">
import tightDeadlinePerson from '@/assets/images/tightDeadlinePerson.svg'
import IconBadge from '@/components/common/IconBadge.vue'

const highlights = [
  {
    title: '貝氏機率推理網絡',
    englishLabel: 'Bayesian Network',
    desc: '以貝氏機率圖模型進行根因推論與決策支援，是最具學術辨識度的核心技術。',
    icon: 'chart-line',
    accent: 'a' as const,
    prefix: 'fas' as const,
  },
  {
    title: '地端部署的私有 AI',
    englishLabel: 'On-Premise Deployment',
    desc: '模型與資料完全留在企業內部運算，同時兼顧資安與推論效能，解決公有雲的兩難。',
    icon: 'server',
    accent: 'b' as const,
    prefix: 'fas' as const,
  },
  {
    title: '多模態知識檢索',
    englishLabel: 'Multimodal Retrieval',
    desc: '文件、影像、圖像、程式碼全涵蓋，用同一套檢索引擎打通所有知識形式。',
    icon: 'layer-group',
    accent: 'a' as const,
    prefix: 'fas' as const,
  },
  {
    title: '來源可追溯的回答機制',
    englishLabel: 'Source-Grounded',
    desc: '回答僅依據企業既有資料與原始內容產生，並可回溯引用來源，降低無依據輸出的風險。',
    icon: 'circle-check',
    accent: 'b' as const,
  },
  {
    title: 'SSE 即時串流',
    englishLabel: 'Real-time Streaming',
    desc: '分析與對話回覆即時流式輸出，操作起來如同真人對話般順暢。',
    icon: 'bolt',
    accent: 'a' as const,
    prefix: 'fas' as const,
  },
]
</script>

<template>
  <section id="tech-highlights" class="tech">
    <div v-scroll-reveal class="tech_inner">
      <div class="tech_stage">
        <div class="tech_content">
          <div class="tech_bubble">
            <p class="tech_bubble_keyword">TECHNOLOGY</p>
            <p class="tech_bubble_text">推理可追溯，資料留在企業內部</p>
          </div>

          <ul v-scroll-reveal:left class="tech_list">
            <li v-for="item in highlights" :key="item.title" class="tech_item">
              <IconBadge :icon="item.icon" :accent="item.accent" :prefix="item.prefix" />
              <div class="tech_text">
                <h3 class="tech_title">
                  {{ item.title }}
                  <span class="tech_label">{{ item.englishLabel }}</span>
                </h3>
                <p class="tech_desc">{{ item.desc }}</p>
              </div>
            </li>
          </ul>
        </div>
        <img class="tech_person" :src="tightDeadlinePerson" alt="" />
      </div>
    </div>

    <svg class="tech_wave" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 96 C240 16 480 24 720 78 S1200 160 1440 56 V160 H0 Z" />
    </svg>
    <div class="tech_quiet" />
  </section>
</template>

<style scoped>
.tech {
  padding-top: 4rem;
  background-color: var(--color-primary-b-dark);
  color: var(--color-surface);
}

.tech_inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.tech_stage {
  position: relative;
  min-height: 560px;
}

.tech_content {
  width: min(640px, 100%);
  margin-left: auto;
}

.tech_person {
  position: absolute;
  bottom: -90px;
  left: -2rem;
  z-index: 3;
  width: 560px;
  height: auto;
  pointer-events: none;
}

.tech_bubble {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 685.2 / 380;
  margin: 0 0 1rem;
  padding: 0 8% 6%;
  background: url('@/assets/images/speechBubble.svg') center / 100% 100% no-repeat;
  text-align: center;
}

.tech_bubble_keyword {
  margin: 0 0 0.5rem;
  color: var(--color-primary-b-dark);
  font-family: var(--font-family-display);
  font-size: calc(var(--font-size-hero) * 1.7);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.02em;
  line-height: 1.2;
}

.tech_bubble_text {
  max-width: 24em;
  margin: 0;
  text-wrap: balance;
  color: var(--color-text-primary);
  font-size: var(--font-size-body);
}

.tech_wave {
  display: block;
  width: 100%;
  height: 160px;
  fill: var(--color-bg-gray);
}

.tech_quiet {
  height: 9rem;
  background-color: var(--color-bg-gray);
}

.tech_list {
  position: relative;
  z-index: 4;
  list-style: none;
  margin: 0;
  padding: 0;
}

.tech_item {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.5rem 0;
  border-bottom: var(--border-width-thin) solid rgba(255, 255, 255, 0.35);
}

.tech_item:last-child {
  border-bottom: none;
}

.tech_title {
  margin: 0 0 0.4rem;
  font-size: var(--font-size-section-title);
  font-weight: var(--font-weight-medium);
}

.tech_label {
  margin-left: 0.6rem;
  color: var(--color-surface);
  opacity: 0.8;
  font-size: var(--font-size-label);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.tech_desc {
  margin: 0;
  opacity: 0.9;
}

@media (max-width: 860px) {
  .tech_stage {
    min-height: 0;
  }

  .tech_content {
    width: 100%;
  }

  .tech_person {
    position: relative;
    bottom: auto;
    left: auto;
    display: block;
    width: min(380px, 80%);
    margin: 2rem auto -60px;
  }

  .tech_bubble_keyword {
    font-size: calc(var(--font-size-hero) * 1.2);
  }
}
</style>
