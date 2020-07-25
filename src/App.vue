<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
