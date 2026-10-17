<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navItems = [
  { label: '產品總覽', href: '#hero' },
  { label: '核心模組', href: '#modules' },
  { label: '產業解決方案', href: '#use_cases' },
  { label: '資安與架構', href: '#tech-highlights' },
  { label: '洽談合作', href: '#collab' },
]

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="app_header">
    <div class="app_header_bar">
      <a class="app_header_logo" href="#hero" @click="closeMenu">Knobotica</a>

      <button
        class="app_header_toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="開啟導覽選單"
        @click="isMenuOpen = !isMenuOpen"
      >
        <font-awesome-icon :icon="isMenuOpen ? ['far', 'circle-xmark'] : ['fas', 'bars']" />
      </button>

      <nav class="app_header_nav" :class="{ 'app_header_nav_open': isMenuOpen }">
        <a
          v-for="item in navItems"
          :key="item.href"
          class="app_header_link"
          :href="item.href"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
        <a class="app_header_cta" href="#collab" @click="closeMenu">洽談產學合作</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app_header {
  position: sticky;
  top: 0;
  z-index: 40;
  background-color: var(--color-bg-gray);
}

.app_header_bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1180px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
}

.app_header_logo {
  color: var(--color-primary-a-dark);
  font-size: var(--font-size-section-title);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
}

.app_header_toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.3rem;
  color: var(--color-text-primary);
  cursor: pointer;
}

.app_header_nav {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.app_header_link {
  color: var(--color-text-primary);
  font-size: var(--font-size-body);
  text-decoration: none;
}

.app_header_link:hover {
  color: var(--color-primary-a-dark);
}

.app_header_cta {
  border: var(--border-width-btn) solid var(--color-primary-a);
  color: var(--color-primary-a-dark);
  padding: 0.5rem 1.25rem;
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  white-space: nowrap;
}

.app_header_cta:hover {
  background-color: var(--color-primary-a-light);
}

@media (max-width: 860px) {
  .app_header_toggle {
    display: block;
  }

  .app_header_nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background-color: var(--color-bg);
    border-bottom: var(--border-width-thin) solid var(--color-border-thin);
    display: none;
  }

  .app_header_nav_open {
    display: flex;
  }

  .app_header_link,
  .app_header_cta {
    padding: 0.9rem 1.5rem;
    border: none;
    text-align: left;
  }

  .app_header_cta {
    border-top: var(--border-width-thin) solid var(--color-border-thin);
  }
}
</style>
