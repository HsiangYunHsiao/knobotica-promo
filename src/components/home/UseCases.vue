<script setup lang="ts">
import DialogueHeading from '@/components/common/DialogueHeading.vue'
import IconBadge from '@/components/common/IconBadge.vue'

const cases = [
  {
    title: '半導體業',
    desc: '製程搜尋與良率分析，快速比對歷史製程參數與異常紀錄。',
    icon: 'microchip',
    accent: 'a' as const,
    prefix: 'fas' as const,
  },
  {
    title: '製造業',
    desc: '故障診斷與資深工程師經驗傳承，讓退休即消失的 know-how 留下來。',
    icon: 'industry',
    accent: 'b' as const,
    prefix: 'fas' as const,
  },
  {
    title: '金融／顧問業',
    desc: '合規知識管理與風險評估，加速法規比對與案件審查效率。',
    icon: 'scale-balanced',
    accent: 'a' as const,
    prefix: 'fas' as const,
  },
]
</script>

<template>
  <section id="use_cases" class="use_cases">
    <div v-scroll-reveal class="use_cases_inner">
      <DialogueHeading
        question="這只能在實驗室裡跑？"
        answer="不，市場早就在等了。"
        accent="b"
      />

      <div class="use_cases_grid">
        <article
          v-for="item in cases"
          :key="item.title"
          class="use_cases_card"
          :class="`use_cases_card_${item.accent}`"
        >
          <IconBadge :icon="item.icon" :accent="item.accent" :prefix="item.prefix" />
          <h3 class="use_cases_title">{{ item.title }}</h3>
          <p class="use_cases_desc">{{ item.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.use_cases {
  padding: 4rem 1.5rem;
}

.use_cases_inner {
  max-width: 1180px;
  margin: 0 auto;
}

.use_cases_grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.use_cases_card {
  background-color: var(--color-surface);
  padding: var(--space-block-padding);
  border: var(--border-width-thick) solid var(--color-primary-a);
}

.use_cases_card_b {
  border-color: var(--color-primary-b);
}

.use_cases_title {
  margin: 1rem 0 0.6rem;
  font-size: var(--font-size-section-title);
  font-weight: var(--font-weight-medium);
}

.use_cases_desc {
  margin: 0;
  color: var(--color-text-secondary);
}

@media (max-width: 860px) {
  .use_cases_grid {
    grid-template-columns: 1fr;
  }
}
</style>
