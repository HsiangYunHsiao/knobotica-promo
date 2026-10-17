<script setup lang="ts">
import AppHeader from '@/components/home/AppHeader.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import VisionSection from '@/components/home/VisionSection.vue'
import TechHighlights from '@/components/home/TechHighlights.vue'
import ModulesOverview from '@/components/home/ModulesOverview.vue'
import UseCases from '@/components/home/UseCases.vue'
import ResultsShowcase from '@/components/home/ResultsShowcase.vue'
import CollabCta from '@/components/home/CollabCta.vue'
import AppFooter from '@/components/home/AppFooter.vue'
</script>

<template>
  <div class="home">
    <AppHeader />
    <main>
      <HeroSection />
      <VisionSection />
      <TechHighlights />
      <ModulesOverview />
      <UseCases />
      <ResultsShowcase />
      <CollabCta />
    </main>
    <AppFooter />
  </div>
</template>
