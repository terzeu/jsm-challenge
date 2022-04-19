<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue'
import type { ComputedRef } from 'vue'
import CheckboxFilter from '@/components/CheckboxFilter.vue'
import HeaderToSort from '@/components/HeaderToSort.vue'
import PageLayout from '@/components/PageLayout.vue'
import { useMembersStore } from '@/stores/members'
import type IMember from '@/types/IMember'
import type IStates from '@/types/IStates'
import type ICheckbox from '@/types/ICheckbox'

const membersStore = useMembersStore()
membersStore.fetchMembers()
membersStore.fetchStates()

const membersList: ComputedRef<IMember[]> = computed(() => membersStore.members)
const states: ComputedRef<IStates[]> = computed(() => membersStore.states)
const statesToFilter: Ref<ICheckbox[]> = ref([])
const isDesc: Ref<boolean> = ref(true)

watch(states, (newStates) => {
  statesToFilter.value = newStates.map((state) => ({
    checked: false,
    label: state.state,
    name: state.state,
    total: state.total,
    value: state.state,
  }))
})
</script>

<template>
  <PageLayout title="Lista de membros" class="home-view">
    <div class="home-view__content">
      <CheckboxFilter title="Por Estado" :filters="statesToFilter" />
      <div class="home-view__members">
        <HeaderToSort
          v-model:isDesc="isDesc"
          :showing="9"
          :total="25"
          :sortParam="'nome'"
          class="home-view__sort"
        />
      </div>
    </div>
  </PageLayout>
</template>
<style scoped lang="scss">
.home-view {
  &__content {
    display: flex;
  }

  &__members {
    margin-left: 16px;
    flex: 1;
  }
}
</style>
