<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import type IBreadcrumb from '@/types/IBreadcrumb'

const route = useRoute()
const breadcrumb = computed(
  () => (route.meta.breadcrumb || []) as IBreadcrumb[]
)
const isLastRoute = (index: number) => index === breadcrumb.value.length - 1
</script>
<template>
  <nav class="breadcrumb">
    <span v-for="(route, index) in breadcrumb" :key="route.routeName">
      <RouterLink
        :to="{ name: route.routeName }"
        class="breadcrumb__route"
        :class="{ 'breadcrumb__route--disabled': isLastRoute(index) }"
      >
        {{ route.name }}
      </RouterLink>
      <span v-if="!isLastRoute(index)" class="breadcrumb__separator"> > </span>
    </span>
  </nav>
</template>
<style scoped lang="scss">
.breadcrumb {
  font-size: $text-sm;

  &__route {
    &--disabled {
      cursor: default;
      font-weight: 500;
      font-size: $text-md;
    }
  }
}
</style>
