<script setup lang="ts">
import DialogueHeading from '@/components/common/DialogueHeading.vue'
import { conceptIcons } from '@/data/conceptIcons'
import IconBadge from '@/components/common/IconBadge.vue'

const painPoints = [
  {
    title: '知識碎片化與流失',
    desc: '檔案散落於硬碟、信箱與通訊軟體；資深員工離職導致核心經驗（無 SOP 的 know-how）蒸發。',
    icon: 'folder-open',
    accent: 'a' as const,
  },
  {
    title: '檢索效率極低',
    desc: '員工每日耗費 1～2 小時尋找檔案與數據，生產力被大量消耗。',
    icon: 'clock',
    accent: 'a' as const,
  },
  {
    title: '資安疑慮',
    desc: '使用公有雲 AI 餵入公司機密資料，有極高洩密風險，令企業卻步。',
    icon: 'shield-halved',
    accent: 'a' as const,
    prefix: 'fas' as const,
  },
]

const bgIcons = Array.from({ length: 24 }, (_, i) => conceptIcons[(i + Math.floor(i / 6)) % conceptIcons.length]!)
</script>

<template>
  <section id="vision" class="vision">
    <div class="vision_bg" aria-hidden="true">
      <div v-for="(item, index) in bgIcons" :key="index" class="vision_bg_item">
        <span class="vision_bg_icon" v-html="item.icon" />
      </div>
    </div>
    <div v-scroll-reveal class="vision_inner">
      <DialogueHeading
        question="知識正在悄悄流失，你發現了嗎？"
        answer="是時候正視了！"
        blink
      />

      <div class="vision_grid">
        <article
          v-for="point in painPoints"
          :key="point.title"
          class="vision_card"
          :class="`vision_card_${point.accent}`"
        >
          <IconBadge :icon="point.icon" :accent="point.accent" :prefix="point.prefix" />
          <h3 class="vision_card_title">{{ point.title }}</h3>
          <p class="vision_card_desc">{{ point.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vision {
  position: relative;
  overflow: hidden;
  padding: 7rem 1.5rem;
  background-color: var(--color-primary-a);
  color: var(--color-surface);
}

.vision :deep(.dialogue_heading_question),
.vision :deep(.dialogue_heading_answer),
.vision :deep(.dialogue_heading_label) {
  color: var(--color-surface);
}

.vision_bg {
  --vision_bg_tone: color-mix(in srgb, var(--color-primary-a), black 5%);
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 4rem;
  align-content: space-around;
  color: var(--vision_bg_tone);
  pointer-events: none;
}

.vision_bg_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
}

.vision_bg_icon {
  display: flex;
  width: 96px;
  aspect-ratio: 1;
}

.vision_bg_icon :deep(svg) {
  width: 100%;
  height: 100%;
}


.vision_inner {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
}

.vision_grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.vision_card {
  padding: var(--space-block-padding);
  border: var(--border-width-thick) solid var(--color-surface);
}

.vision_card_title {
  margin: 1rem 0 0.6rem;
  font-size: var(--font-size-section-title);
  font-weight: var(--font-weight-medium);
}

.vision_card_desc {
  margin: 0;
}

@media (max-width: 860px) {
  .vision_bg {
    grid-template-columns: repeat(3, 1fr);
  }

  .vision_grid {
    grid-template-columns: 1fr;
  }
}
</style>
