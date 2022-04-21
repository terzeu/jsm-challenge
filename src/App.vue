<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderApp from '@/components/HeaderApp.vue'
import FooterApp from '@/components/FooterApp.vue'
</script>

<template>
  <HeaderApp />
  <RouterView />
  <FooterApp />
</template>

<style lang="scss">
@import '@/assets/_base.scss';
@import '@/assets/_fonts.scss';
@import '@/assets/_normalize.scss';
@import '@/assets/_variables.scss';

body {
  background: white;
  color: $black;
  font-weight: normal;
  line-height: 1.5;
  text-rendering: optimizeLegibility;
  transition: color 0.5s, background-color 0.5s;
  font-family: $font-main;
}

body,
#app {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  place-items: center;
}

#app {
  flex-direction: column;
  justify-content: start;
  padding-top: $header-height;

  @media (max-width: 850px) {
    padding-top: calc($header-height * 2);

    .header-app {
      padding: 0 20px;
      justify-content: space-evenly;
      flex-direction: column;
      height: calc($header-height * 2);

      &__actions {
        flex: initial;
        margin: 0;
      }
    }

    .home-view__content {
      flex-wrap: wrap;
    }
  }
}
</style>
