<script setup lang="ts">
import SearchInput from '@/components/SearchInput.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import { useHeaderStore } from '@/stores/header'
import { debounce } from '@/utils'

const headerStore = useHeaderStore()
const debounceSearch = debounce(headerStore.updateSearch, 300)

const search = (event: Event) => {
  const { value } = event.target as HTMLInputElement

  debounceSearch(value)
}
</script>
<template>
  <header class="header-app">
    <img
      alt="Juntos Somos Mais logo"
      class="header-app__logo"
      src="@/assets/jsm_logo.png"
    />
    <div class="header-app__actions">
      <SearchInput @search="search" class="header-app__search" />
      <a
        href="https://www.linkedin.com/in/matheus--soares-rosa/"
        target="_blank"
        class="header-app__icon icon--social-midia"
      >
        <IconLinkedin />
      </a>
      <a
        href="https://github.com/terzeu"
        target="_blank"
        class="header-app__icon icon--social-midia"
      >
        <IconGithub />
      </a>
    </div>
  </header>
</template>
<style scoped lang="scss">
.header-app {
  align-items: center;
  background-color: $gray-1;
  display: flex;
  justify-content: space-between;
  height: $header-height;
  left: 0;
  padding: 0 $section-gap;
  position: fixed;
  top: 0;
  width: 100%;

  &__logo {
    height: 40px;
    width: 148px;
  }

  &__actions {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: end;
    margin-left: 140px;
    margin-right: 16px;
  }

  &__search {
    height: 48px;
    max-width: 464px;
    flex: 1;
  }

  &__icon {
    margin-left: 16px;
  }
}
</style>
