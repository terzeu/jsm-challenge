<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import PageLayout from "@/components/PageLayout.vue"
import { useMembersStore } from '@/stores/members'
import type IMember from '@/types/IMember'

const membersStore = useMembersStore()
membersStore.fetchMembers()

const membersList: ComputedRef<IMember[]> = computed(() => membersStore.members);
</script>

<template>
  <PageLayout title="Lista de membros">
    <ul>
      <li>
        <div>
          {{ membersList }}
        </div>
      </li>
    </ul>
  </PageLayout>
</template>
