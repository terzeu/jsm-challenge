<script setup lang="ts">
import { computed, ref } from 'vue'
import IconCheckboxBlank from '../components/icons/IconCheckboxBlank.vue'
import IconCheckboxChecked from '../components/icons/IconCheckboxChecked.vue'
import type ICheckbox from '../types/ICheckbox'

const props = defineProps<{
  title: string
  filters: ICheckbox[]
}>()

const showAll = ref(false)
const showAllButton = computed(() =>
  showAll.value ? 'Mostrar menos' : 'Ver todos'
)
const clearFiler = () => {
  props.filters.forEach((item) => {
    item.checked = false
  })
}
</script>
<template>
  <section class="checkbox-filter">
    <div class="checkbox-filter__header">
      <h4 class="checkbox-filter__title">
        {{ title }}
      </h4>
      <button @click="clearFiler()" class="checkbox-filter__clear btn--link">
        Limpar filtro
      </button>
    </div>
    <div
      :class="{ 'checkbox-filter__filters--full': showAll }"
      class="checkbox-filter__filters"
    >
      <button
        v-for="checkbox in filters"
        :key="checkbox.name"
        @click="checkbox.checked = !checkbox.checked"
        class="checkbox-filter__input-group"
      >
        <IconCheckboxChecked
          v-if="checkbox.checked"
          class="checkbox-filter__check"
        />
        <IconCheckboxBlank v-else class="checkbox-filter__check" />
        <input
          v-model="checkbox.checked"
          type="checkbox"
          :id="checkbox.name"
          :name="checkbox.name"
          class="checkbox-filter__input"
        />
        <label
          :for="checkbox.name"
          @click="checkbox.checked = !checkbox.checked"
          class="checkbox-filter__label"
        >
          {{ checkbox.label }} ({{ checkbox.total }})
        </label>
      </button>
    </div>
    <button
      @click="showAll = !showAll"
      class="checkbox-filter__show-all btn--link"
    >
      {{ showAllButton }}
    </button>
  </section>
</template>
<style scoped lang="scss">
.checkbox-filter {
  background: #ffffff;
  border: 1px solid $gray-6;
  border-radius: 4px;
  font-size: $text-md;
  font-weight: 400;
  height: 474px;
  overflow: auto;
  padding: 24px 27px;
  width: 272px;

  &__filters {
    margin-bottom: 13px;
    max-height: 172px;
    overflow: hidden;

    &--full {
      max-height: max-content;
      overflow: auto;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  &__title {
    font-size: $text-lg;
    font-weight: 500;
  }

  &__input-group {
    align-items: center;
    display: flex;

    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  &__input {
    display: none;
  }

  &__label {
    cursor: pointer;
    line-height: 17px;
    margin-left: 11px;
    overflow: hidden;
    text-align: initial;
    text-overflow: ellipsis;
    text-transform: capitalize;
    white-space: nowrap;
    width: 164px;
  }
}
</style>
