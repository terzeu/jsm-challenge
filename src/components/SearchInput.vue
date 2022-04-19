<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue'

defineEmits<{
  (e: 'search', value: Event): void
}>()
</script>
<template>
  <div class="search-input">
    <IconSearch class="search-input__icon" />
    <input
      @input="$emit('search', $event)"
      type="text"
      placeholder="Buscar aqui"
      class="search-input__input"
    />
  </div>
</template>
<style scoped lang="scss">
.search-input {
  align-items: center;
  background: white;
  border: 1px solid $gray-7;
  border-radius: 32px;
  box-sizing: border-box;
  display: flex;
  position: relative;

  &__icon {
    position: absolute;
    left: 16px;
  }

  &__input {
    padding-left: 50px;
    padding-right: 20px;
    border-radius: 32px;
  }
}
</style>
