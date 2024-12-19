<template>
  <TopImg></TopImg>
  <router-view v-slot="{ Component }" class="px-3">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <LinkPages></LinkPages>
</template>
<script>
import LinkPages from './components/LinkPages.vue';
import TopImg from './components/TopImg.vue';
export default {
  components: {
    TopImg,
    LinkPages
  },
  setup() {
    return {

    }
  }
}

</script>
<style>
body {
  height: 100vh;
  background: url("/public/images/background.png") no-repeat center center;
  background-size: cover;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
  z-index: 10;
  /* تنظیم z-index برای جلوگیری از تداخل انیمیشن‌ها */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>