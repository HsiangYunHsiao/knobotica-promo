<script setup lang="ts">
import DialogueHeading from '@/components/common/DialogueHeading.vue'
import ModuleCard from '@/components/home/ModuleCard.vue'

const modules = [
  {
    title: '智慧路由與判別系統',
    label: 'Smart Router',
    desc: '輸入自然語言，系統自動判別意圖並導引至對應工作區，不需記憶複雜的檔案結構。',
    highlight: 'AI 數位交通警察',
  },
  {
    title: '文件型知識檢索',
    label: 'Document Retrieval',
    desc: '支援 PDF、Word、PowerPoint、Excel 等原生格式，自動萃取文件結構並生成可互動的心智圖。',
    highlight: '全格式文件互動分析',
  },
  {
    title: '影像知識檢索',
    label: 'Video Search',
    desc: '以口語描述畫面或事件即可搜尋長影片，列出相關段落並跳轉到指定時間點。',
    highlight: '秒級精準影像定位',
  },
  {
    title: '軟體元件分析',
    label: 'Code Analysis',
    desc: '依資安密級與領域權限過濾程式碼，僅基於當前原始碼回答，並支援即時串流輸出。',
    highlight: 'Code Review 助手',
  },
  {
    title: '圖像知識檢索',
    label: 'Image Search',
    desc: '回答附帶來源檔案連結，可開啟原始高解析度圖片，並自動生成流程圖。',
    highlight: '高效檢索與視覺佐證',
  },
  {
    title: '協同創新與貝氏推理',
    label: 'Bayesian Inference',
    desc: '問答可沉澱為企業知識資產，並以互動式貝氏機率網絡輔助故障診斷。',
    highlight: '高階決策推理',
  },
]
</script>

<template>
  <section id="modules" class="modules">
    <div v-scroll-reveal class="modules_inner">
      <DialogueHeading
        question="平台包含哪些核心模組？"
        answer="六大模組，各司其職。"
      />

      <div class="modules_grid">
        <ModuleCard
          v-for="(mod, index) in modules"
          :key="mod.title"
          v-bind="mod"
          :accent="index % 2 === 0 ? 'a' : 'b'"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.modules {
  padding: 4rem 1.5rem;
  background-color: var(--color-bg-gray);
}

.modules_inner {
  max-width: 1180px;
  margin: 0 auto;
}

.modules_grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 960px) {
  .modules_grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .modules_grid {
    grid-template-columns: 1fr;
  }
}
</style>
