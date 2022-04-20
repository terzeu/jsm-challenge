<script setup lang="ts">
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
</script>
<template>
  <footer class="footer-app">
    <img
      alt="Juntos Somos Mais logo"
      class="footer-app__logo"
      src="@/assets/jsm_white_logo.png"
    />
    <p class="footer-app__title">Juntos Somos Mais Fidelização S.A.</p>
    <section class="footer-app__social-midia">
      <p class="footer-app__description">Siga-nos nas redes sociais:</p>
      <div class="footer-app__nav">
        <a
          href="https://www.facebook.com/juntossomosmais/"
          target="_blank"
          class="footer-app__icon icon--social-midia"
        >
          <IconFacebook />
        </a>
        <a
          href="https://www.linkedin.com/company/juntos-somos-mais/"
          target="_blank"
          class="footer-app__icon icon--social-midia"
        >
          <IconLinkedin />
        </a>
        <a
          href="https://www.instagram.com/juntossomosmais/"
          target="_blank"
          class="footer-app__icon icon--social-midia"
        >
          <IconInstagram />
        </a>
      </div>
    </section>
  </footer>
</template>
<style scoped lang="scss">
.footer-app {
  align-items: center;
  background-color: $gray-5;
  color: white;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  height: $footer-height;
  padding: 32px 20px;
  width: 100%;

  &__title {
    font-size: $text-md;
    font-weight: 500;
    margin: 24px 0;
  }

  &__description {
    font-size: $text-sm;
    margin-bottom: 20px;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    width: 152px;
    margin: auto;
  }
}
</style>
