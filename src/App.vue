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
  min-width: 100vw;
  place-items: center;
}

#app {
  flex-direction: column;
  justify-content: start;
  padding-top: $header-height;
}
</style>
