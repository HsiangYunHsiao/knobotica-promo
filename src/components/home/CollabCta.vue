<script setup lang="ts">
import { ref } from 'vue'
import DialogueHeading from '@/components/common/DialogueHeading.vue'

const steps = ['企業出資導入', '地端封閉部署', '資料留企業端', '客製化系統']

const form = ref({
  name: '',
  organization: '',
  email: '',
  need: '',
})
</script>

<template>
  <section id="collab" class="collab">
    <div v-scroll-reveal class="collab_inner">
      <DialogueHeading
        question="想合作，但不知道從哪裡開始？"
        answer="誠徵產學合作夥伴，我們很樂意聊聊。"
        accent="b"
      />

      <ol class="collab_flow">
        <li v-for="(step, index) in steps" :key="step" class="collab_flow_step">
          <span class="collab_flow_index">{{ index + 1 }}</span>
          <span class="collab_flow_label">{{ step }}</span>
        </li>
      </ol>

      <p class="collab_desc">
        合作即可獲得一套<mark class="highlight_mark">專屬客製化的私有智慧知識平台</mark
        >，資料完全留在企業端，由團隊協助地端部署與客製化調整。
      </p>

      <form class="collab_form" @submit.prevent>
        <div class="collab_field">
          <label class="collab_label" for="collab-name">姓名</label>
          <input id="collab-name" v-model="form.name" class="collab_input" type="text" />
        </div>
        <div class="collab_field">
          <label class="collab_label" for="collab-org">單位</label>
          <input id="collab-org" v-model="form.organization" class="collab_input" type="text" />
        </div>
        <div class="collab_field">
          <label class="collab_label" for="collab-email">Email</label>
          <input id="collab-email" v-model="form.email" class="collab_input" type="email" />
        </div>
        <div class="collab_field collab_field_full">
          <label class="collab_label" for="collab-need">合作需求</label>
          <textarea id="collab-need" v-model="form.need" class="collab_textarea" rows="4" />
        </div>

        <div class="collab_field_full">
          <button class="collab_submit" type="submit" disabled>送出洽談需求（建置中）</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.collab {
  padding: 4rem 1.5rem;
}

.collab_inner {
  max-width: 720px;
  margin: 0 auto;
}

.collab_flow {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;
}

.collab_flow_step {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: var(--border-width-thin) solid var(--color-border-thin);
  padding: 0.6rem 1rem;
  font-size: var(--font-size-label);
}

.collab_flow_index {
  color: var(--color-primary-b-dark);
  font-weight: var(--font-weight-medium);
}

.collab_desc {
  color: var(--color-text-secondary);
  margin: 0 0 2.5rem;
}

.collab_form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  border: var(--border-width-thick) solid var(--color-primary-b);
  padding: var(--space-block-padding);
  background-color: var(--color-surface);
}

.collab_field_full {
  grid-column: 1 / -1;
}

.collab_label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: var(--font-size-label);
  color: var(--color-text-secondary);
}

.collab_input,
.collab_textarea {
  width: 100%;
  border: var(--border-width-thin) solid var(--color-border-thin);
  border-radius: var(--radius-none);
  padding: 0.6rem 0.75rem;
  font-family: inherit;
  font-size: var(--font-size-body);
  color: var(--color-text-primary);
  background-color: var(--color-bg);
}

.collab_input:focus,
.collab_textarea:focus {
  outline: none;
  border-color: var(--color-primary-b);
}

.collab_textarea {
  resize: vertical;
}

.collab_submit {
  width: 100%;
  border: var(--border-width-btn) solid var(--color-primary-b);
  border-radius: var(--radius-none);
  background: none;
  padding: 0.75rem 1.5rem;
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  cursor: not-allowed;
  opacity: 0.6;
}

@media (max-width: 640px) {
  .collab_form {
    grid-template-columns: 1fr;
  }
}
</style>
