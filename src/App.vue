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
  metaInfo: {
    titleTemplate: 'Nuzze',
    meta: [
      { name: 'description', content: `Hi! I'm Nuzze, a front-end developer based in BA` },
      { name: 'keywords', content: `frontend,development,developer,programming,javascript` },
      { name: 'author', content: `Nuzze` },
    ]
  },
  components: {
    Header,
    Footer
  }
}
</script>
