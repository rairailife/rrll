<template>
  <div><!-- id="wrapper" -->
    <Header/>
    <Menu/>
    <!-- <main class="articleList"> -->
      <nuxt><!-- ここにlayoutを設定したpagesが表示される --></nuxt>
    <!-- </main> -->

    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Menu from '~/components/Menu.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Menu,
    Footer
  }
}
</script>

<style scoped>
/* #wrapper {
  padding: 0;
  margin:  0;
  font-size:        16px;
  line-height:      1.5em;
  box-sizing:       border-box;
} */
/*
.articleList {
  margin-bottom: 50px;
} */

header {
  margin-top:  .5em;
}
</style>
