<script setup lang="ts">
import ExpandMore from '@/components/icons/ExpandMore.vue'
import ExpandLess from '@/components/icons/ExpandLess.vue'

defineProps<{
  isDesc: boolean
  showing: number
  total: number
  sortParam: string
}>()
defineEmits<{
  (e: 'update:isDesc', value: boolean): void
}>()
</script>
<template>
  <section class="header-to-sort">
    <div class="header-to-sort__info">
      Exibindo {{ showing }} de {{ total }} itens
    </div>
    <button
      @click="$emit('update:isDesc', !isDesc)"
      class="header-to-sort__order"
    >
      <span class="header-to-sort__label">Ordenar por:</span>
      <span class="header-to-sort__param">{{ sortParam }}</span>
      <ExpandMore class="header-to-sort__icon" v-if="isDesc" />
      <ExpandLess class="header-to-sort__icon" v-else />
    </button>
  </section>
</template>
<style scoped lang="scss">
.header-to-sort {
  align-items: center;
  background: #ffffff;
  border: 1px solid $gray-6;
  border-radius: 4px;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 18px;

  &__info {
    font-size: $text-md;
    font-weight: 400;
  }

  &__order {
    align-items: center;
    display: flex;
    font-size: $text-sm;
  }

  &__label {
    font-weight: 500;
  }

  &__param {
    margin-left: 8px;
    text-transform: capitalize;
  }

  &__icon {
    margin-left: 24px;
  }
}
</style>
