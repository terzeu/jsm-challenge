<script setup lang="ts">
import Breadcrumb from '@/components/Breadcrumb.vue'
defineProps<{
  title: string
}>()
</script>
<template>
  <section class="page-layout">
    <Breadcrumb class="page-layout__navigation" />
    <h2 class="page-layout__title">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>
<style scoped lang="scss">
.page-layout {
  flex: 1;
  padding: 24px $section-gap 80px;
  width: 100%;

  &__navigation {
    margin-bottom: 24px;
  }

  &__title {
    font-size: $text-xl;
    font-weight: 700;
    margin-bottom: 40px;
  }
}
</style>
