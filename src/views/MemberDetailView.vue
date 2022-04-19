<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue'

</script>
<template>
  <PageLayout title="Lista de membros" class="home-view">
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </PageLayout>
</template>
<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
}
</style>
