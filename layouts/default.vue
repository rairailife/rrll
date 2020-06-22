<template>
  <div class="wrapper">
    <!-- .gnav -->
    <Menu/>
    <!-- /.gnav -->

    <!-- .header -->
    <Header/>
    <!-- /.header -->

    <main class="content">
      <nuxt><!-- ここにlayoutを設定したpagesが表示される --></nuxt>
    </main>
    <!-- </main> -->

    <!-- .footer -->
    <Footer/>
    <!-- /.footer -->
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Menu,
    Header,
    Footer
  },
  head () {
    return {
      script: [
        { src: '/js/script.js' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
