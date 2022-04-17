<template>
  <header class="header-app">
    <div class="header-app__logo"></div>
    <input class="header-app__search" />
    <div class="header-app__others"></div>
  </header>
</template>
<style scoped lang="scss">
.header-app {
  background-color: $gray-1;
  display: flex;
  height: $header-height;
  position: fixed;
  top: 0;
  width: 100%;

  &__logo {
    height: 40px;
    width: 148px;
  }

  &__search {
    height: 48px;
    max-width: 464px;
  }
}
</style>
