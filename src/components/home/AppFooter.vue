<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer_inner">
      <p class="footer_brand">Knobotica</p>
      <p class="footer_team">由具備淡江大學學術研究背景的團隊開發，誠徵產學合作夥伴。</p>
      <p class="footer_contact">如有合作洽談需求，歡迎透過上方「洽談產學合作」表單與我們聯繫。</p>
      <p class="footer_copyright">&copy; {{ year }} Knobotica. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: var(--border-width-thin) solid var(--color-border-thin);
  padding: 3rem 1.5rem;
}

.footer_inner {
  max-width: 780px;
  margin: 0 auto;
  text-align: center;
}

.footer_brand {
  margin: 0 0 0.75rem;
  color: var(--color-primary-a-dark);
  font-size: var(--font-size-section-title);
  font-weight: var(--font-weight-medium);
}

.footer_team,
.footer_contact {
  margin: 0 0 0.5rem;
  color: var(--color-text-secondary);
  font-size: var(--font-size-label);
}

.footer_copyright {
  margin: 1.5rem 0 0;
  color: var(--color-text-secondary);
  font-size: var(--font-size-label);
}
</style>
