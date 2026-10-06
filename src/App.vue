<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />

  <button type="button" class="scroll-top" aria-label="Subir al inicio" @click="scrollToTop">
    ↑
  </button>
</template>

<style scoped>
.scroll-top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 2000;
  width: 46px;
  height: 46px;
  border: none;
  border-radius: 50%;
  background: #f20000;
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(164, 0, 0, 0.707);
}
</style>
