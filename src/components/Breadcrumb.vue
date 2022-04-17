<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <nav class="breadcrumb">
    <RouterLink to="/">Navitagtion</RouterLink> >
    <RouterLink to="/about">Breadcrumb</RouterLink>
  </nav>
</template>
<style scoped lang="scss">
.breadcrumb {
  font-size: $text-xs;
}
</style>
