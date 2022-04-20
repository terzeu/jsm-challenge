<script setup lang="ts">
import { computed, type ComputedRef } from 'vue'
import IconChevronLeft from '@/components/icons/IconChevronLeft.vue'
import IconChevronRight from '@/components/icons/IconChevronRight.vue'

const props = defineProps<{
  activePage: number
  totalPages: number
}>()
const emits = defineEmits<{
  (e: 'update', value: number): void
}>()

const isFirstPage: ComputedRef<boolean> = computed(() => props.activePage === 0)
const isLastPage: ComputedRef<boolean> = computed(
  () => props.activePage === props.totalPages - 1
)
const pagesToShow: ComputedRef<number[]> = computed(() => {
  if (props.totalPages > 5) {
    let incrementFactor = 0

    // overflow cases
    if (props.activePage - 1 <= 0) {
      incrementFactor = 2 - props.activePage
    } else if (props.activePage >= props.totalPages - 2) {
      incrementFactor = props.totalPages - 3 - props.activePage
    }

    return [
      0,
      props.activePage - 1 + incrementFactor,
      props.activePage + incrementFactor,
      props.activePage + 1 + incrementFactor,
      props.totalPages - 1,
    ]
  } else {
    return [...Array(props.totalPages).keys()]
  }
})

const handleCallPage = (page: number) => {
  // filtering disabled clicks
  if (page <= props.totalPages - 1 && page >= 0 && page !== props.activePage) {
    emits('update', page)
  }
}
</script>
<template>
  <div class="pagination">
    <button
      class="pagination__nav pagination__nav--left"
      :class="{ 'pagination__nav--disabled': isFirstPage }"
      @click="handleCallPage(activePage - 1)"
    >
      <IconChevronLeft />
    </button>
    <button
      v-for="item in pagesToShow"
      :key="item"
      class="pagination__page"
      :class="{ 'pagination__page--active': activePage === item }"
      @click="handleCallPage(item)"
    >
      {{ item + 1 }}
      <span v-if="activePage === item" />
    </button>
    <button
      class="pagination__nav pagination__nav--right"
      :class="{ 'pagination__nav--disabled': isLastPage }"
      @click="handleCallPage(activePage + 1)"
    >
      <IconChevronRight />
    </button>
  </div>
</template>
<style scoped lang="scss">
.pagination {
  align-items: center;
  display: flex;

  &__nav {
    align-items: center;
    background: $gray-4;
    border-radius: 16px;
    color: white;
    display: flex;
    height: 32px;
    justify-content: center;
    width: 32px;

    &--disabled {
      background: $gray-6;
      cursor: default;
    }

    &--left {
      margin-right: 16px;
    }

    &--right {
      margin-left: 16px;
    }
  }

  &__page {
    align-items: center;
    color: $gray-3;
    display: flex;
    flex-direction: column;
    font-size: $text-sm;
    font-weight: 400;
    width: 32px;

    &--active {
      font-size: $text-md;
      font-weight: 700;
      cursor: default;

      span {
        background: $gray-3;
        border-radius: 9px;
        height: 4px;
        width: 100%;
      }
    }
  }
}
</style>
