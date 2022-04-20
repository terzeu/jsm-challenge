<script setup lang="ts">
import { computed, ref, watch, type ComputedRef, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import CheckboxFilter from '@/components/CheckboxFilter.vue'
import HeaderToSort from '@/components/HeaderToSort.vue'
import MembersList from './components/MembersList.vue'
import PageLayout from '@/components/PageLayout.vue'
import Pagination from '@/components/Pagination.vue'
import { useMembersStore } from '@/stores/members'
import { useHeaderStore } from '@/stores/header'
import EOrder from '@/types/EOrder'
import type ICheckbox from '@/types/ICheckbox'
import type IMember from '@/types/IMember'
import type IPagination from '@/types/IPagination'
import type IStates from '@/types/IStates'

const membersStore = useMembersStore()
const headerStore = useHeaderStore()
const router = useRouter()

const membersList: ComputedRef<IMember[]> = computed(
  () => membersStore.membersList
)
const membersPagination: ComputedRef<IPagination> = computed(
  () => membersStore.pagination
)
const states: ComputedRef<IStates[]> = computed(() => membersStore.states)
const searchHeader: ComputedRef<string> = computed(() => headerStore.search)
const statesToFilter: Ref<ICheckbox[]> = ref([])
const isDesc: Ref<boolean> = ref(true)
const activePage: Ref<number> = ref(0)

const getMembersList = () => {
  const order: EOrder = isDesc.value ? EOrder.DESC : EOrder.ASC
  membersStore.fetchMembers(
    activePage.value,
    order,
    statesToFilter.value,
    searchHeader.value
  )
}

const updatePage = (page: number) => {
  activePage.value = page
}

const pushDetailRoute = (id: number) => {
  router.push({ name: 'memberDetail', params: { id } })
}

membersStore.fetchStates()
getMembersList()

watch(states, (newStates) => {
  statesToFilter.value = newStates.map((state) => ({
    checked: false,
    label: state.state,
    name: state.state,
    total: state.total,
    value: state.state,
  }))
})

watch(
  statesToFilter,
  (newValue, oldValue) => {
    if (oldValue.length) {
      getMembersList()
    }
  },
  { deep: true }
)

watch(isDesc, () => {
  getMembersList()
})

watch(searchHeader, () => {
  getMembersList()
})

watch(activePage, () => {
  getMembersList()
})
</script>

<template>
  <PageLayout title="Lista de membros" class="home-view">
    <div class="home-view__content">
      <CheckboxFilter
        :filters="statesToFilter"
        title="Por Estado"
        class="home-view__states"
      />
      <div class="home-view__members">
        <HeaderToSort
          v-model:isDesc="isDesc"
          :showing="membersPagination.elementsOfPage"
          :total="membersPagination.totalElements"
          :sortParam="'nome'"
          class="home-view__sort"
        />
        <MembersList
          :members="membersList"
          class="home-view__list"
          @callDetail="pushDetailRoute"
        />
        <Pagination
          :activePage="activePage"
          :totalPages="membersPagination.totalPages"
          @update="updatePage"
          class="home-view__pagination"
        />
      </div>
    </div>
  </PageLayout>
</template>
<style scoped lang="scss">
.home-view {
  &__content {
    display: flex;
    flex-wrap: wrap;
  }

  &__members {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 16px;
  }

  &__sort {
    margin-bottom: 16px;
  }

  &__pagination {
    margin-top: 40px;
  }

  &__list,
  &__sort {
    width: 100%;
  }

  @media (max-width: 883px) {
    &__content {
      justify-content: center;
    }

    &__states {
      margin-bottom: 16px;
    }
  }
}
</style>
