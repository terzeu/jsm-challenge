<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageLayout from '@/components/PageLayout.vue'
import { useMembersStore } from '@/stores/members'
import RoundedAvatar from '@/components/RoundedAvatar.vue'
import { streetNormalize } from '@/utils'
import ESize from '@/types/ESize'
import EGender from '@/types/EGender'

const membersStore = useMembersStore()
const route = useRoute()
const memberId = computed(() => Number(route.params.id))
const genderTranslate = {
  [EGender.MALE]: 'Masculino',
  [EGender.FEMALE]: 'Femenino',
  [EGender.OTHERS]: 'Outros',
}

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
const gender = computed(() =>
  member.value ? genderTranslate[member.value.gender as EGender] : ''
)
const registeredDate = computed(() =>
  member.value
    ? new Date(member.value.registered.date).toLocaleDateString()
    : ''
)
const street = computed(() =>
  member.value ? streetNormalize(member.value.location.street) : ''
)
const city = computed(() =>
  member.value
    ? member.value.location.city + ' - ' + member.value.location.state
    : ''
)
const photoAlt = computed(
  () => `Foto do membro ${member.value?.name.first || ''}`
)
</script>
<template>
  <PageLayout :title="pageTitle" class="member-detail">
    <div v-if="member" class="member-detail__content">
      <div class="member-detail__photo">
        <RoundedAvatar :alt="photoAlt" :photo="photo" :size="ESize.LG" />
      </div>
      <div class="member-detail__data">
        <div class="member-detail__info">
          <h4 class="member-detail__subtitle">Telefone:</h4>
          <span class="member-detail__value">{{ member.cell }}</span>
        </div>
        <div class="member-detail__info">
          <h4 class="member-detail__subtitle">Email:</h4>
          <span class="member-detail__value">{{ member.email }}</span>
        </div>
        <div class="member-detail__info">
          <h4 class="member-detail__subtitle">Gênero:</h4>
          <span class="member-detail__value">{{ gender }}</span>
        </div>
        <div class="member-detail__info">
          <h4 class="member-detail__subtitle">Registro:</h4>
          <span class="member-detail__value">{{ registeredDate }}</span>
        </div>
        <div class="member-detail__info">
          <h4 class="member-detail__subtitle">Cidade:</h4>
          <span class="member-detail__value txt-overflow txt-capitalize">{{
            city
          }}</span>
        </div>
        <div class="member-detail__info">
          <h4 class="member-detail__subtitle">Rua:</h4>
          <span class="member-detail__value txt-capitalize">{{ street }}</span>
        </div>
        <div class="member-detail__info">
          <h4 class="member-detail__subtitle">CEP:</h4>
          <span class="member-detail__value">{{
            member.location.postcode
          }}</span>
        </div>
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

  &__photo {
    margin-right: 100px;
    margin-bottom: 50px;
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

  &__value {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :deep(.page-layout__title) {
    text-transform: capitalize;
  }
}
</style>
