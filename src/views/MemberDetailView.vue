<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageLayout from '@/components/PageLayout.vue'
import { useMembersStore } from '@/stores/members'
import RoundedAvatar from '@/components/RoundedAvatar.vue'
import ESize from '@/types/ESize'

const membersStore = useMembersStore()
const route = useRoute()
const memberId = computed(() => Number(route.params.id))

membersStore.fetchMember(memberId.value)

const member = computed(() => membersStore.member)
const pageTitle = computed(() => {
  return member.value
    ? member.value.name.title + '. ' + member.value.name.full
    : member.value === undefined
    ? '...'
    : ''
})
const photo = computed(() => member.value?.picture.large || '')
const photoAlt = computed(
  () => `Foto do membro ${member.value?.name.first || ''}`
)
</script>
<template>
  <PageLayout :title="pageTitle" class="member-detail">
    <div v-if="member" class="member-detail__content">
      <div class="member-detail__data">
        <div class="member-detail__info">
          <h4 class="member-detail__subtitle">Telefone:</h4>
          <span>{{ member.cell }}</span>
        </div>
        <div class="member-detail__info">
          <h4 class="member-detail__subtitle">Email:</h4>
          <span>{{ member.email }}</span>
        </div>
        <div class="member-detail__info">
          <h4 class="member-detail__subtitle">Gênero:</h4>
          <span>{{ member.gender }}</span>
        </div>
        <div class="member-detail__info">
          <h4 class="member-detail__subtitle">Registro:</h4>
          <span>{{ member.registered.date }}</span>
        </div>
        <div class="member-detail__info">
          <h4 class="member-detail__subtitle">Cidade:</h4>
          <span
            >{{ member.location.city + ' - ' + member.location.state }}
          </span>
        </div>
        <div class="member-detail__info">
          <h4 class="member-detail__subtitle">Rua:</h4>
          <span>{{ member.location.street }}</span>
        </div>
        <div class="member-detail__info">
          <h4 class="member-detail__subtitle">CEP:</h4>
          <span>{{ member.location.postcode }}</span>
        </div>
      </div>
      <div>
        <RoundedAvatar
          :alt="photoAlt"
          :photo="photo"
          :size="ESize.LG"
          class="member-detail__photo"
        />
      </div>
    </div>
    <div v-else-if="member === null" class="member-detail__error">
      <h1 class="member-detail__title">404!</h1>
      <p class="member-detail__description">
        Membro não encontrato, volte para a página anterior
      </p>
    </div>
  </PageLayout>
</template>
<style scoped lang="scss">
.member-detail {
  &__content {
    display: flex;
    flex-wrap: wrap;
  }

  &__data {
    flex: 1;
  }

  &__info {
    display: flex;
    font-size: $text-lg;
    margin-bottom: 10px;
  }

  &__subtitle {
    font-weight: 500;
    margin-right: 8px;
    width: 100px;
  }

  &__error {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &__title {
    font-size: 60px;
    font-weight: 700;
  }

  &__description {
    font-size: $text-lg;
    margin-top: 20px;
  }

  :deep(.page-layout__title) {
    text-transform: capitalize;
  }
}
</style>
