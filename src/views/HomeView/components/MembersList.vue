<script setup lang="ts">
import IconAvatar from '@/components/icons/IconAvatar.vue'
import type IMember from '@/types/IMember'
defineProps<{
  members: IMember[]
}>()

const streetNormalize = (street: string) => {
  const [number, streetWithoutNumber] = street.trim().split(' rua ')
  return `Rua ${streetWithoutNumber}, ${number}`
}
</script>
<template>
  <ul class="members-list">
    <li v-for="member in members" :key="member.id" class="members-list__card">
      <img
        v-if="member.picture.large"
        :src="member.picture.large"
        :alt="`Foto do membro ${member.name.first}`"
        width="80"
        height="80"
        class="members-list__photo"
      >
      <IconAvatar v-else />
      <h4 class="members-list__title">
        {{ member.name.full }}
      </h4>
      <div class="members-list__adress">
        <p class="members-list__subtitle">{{ streetNormalize(member.location.street) }}</p>
        <p class="members-list__description">{{ member.location.city }}</p>
        <p class="members-list__description">{{ member.location.state }} - CEP: {{ member.location.postcode }}</p>
      </div>
    </li>
  </ul>
</template>
<style lang="scss">
  .members-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > :nth-child(3n+3) {
      margin-right: 0;
    }

    &__card {
      align-items: center;
      background: #ffffff;
      border: 1px solid $gray-6;
      border-radius: 4px;
      display: flex;
      width: 272px;
      flex-flow: column;
      font-weight: 400;
      height: 310px;
      margin-bottom: 16px;
      margin-right: 16px;
      padding: 35px 16px 40px;
    }

    &__photo {
      border-radius: 40px;
      margin-bottom: 24px;
    }

    &__title {
      font-size: $text-lg;
      font-weight: 700;
      margin-bottom: 16px;
      text-transform: capitalize;
    }

    &__adress {
      text-align: center;
      text-transform: capitalize;
    }

    &__subtitle {
      font-size: $text-sm;
      margin-bottom: 12px;
    }

    &__adress {
      font-size: $text-xs;
    }
  }
</style>
