<template>
  <div id="wrapper">
    <h1 class="title">RaiRai-LifeLog</h1>
    <Menu/>
    <main class="articleList">
      <nuxt><!-- ここにlayoutを設定したpagesが表示される --></nuxt>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Footer,
    Menu
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin:  0;
  height:           100%;
  /* min-height:       100vh; */
  width:   100%;
}
*::selection {
  background: #C5545E;
  color:      #ff00de;
}

#wrapper {
  padding: 0;
  margin:  0;
  font-size:        16px;
  line-height:      1.5em;
  box-sizing:       border-box;
}

h1 {
  font-size:   32px;
  line-height: 1.2em;
}

.title {
	text-align:  center;
	text-shadow: 0px 2px 3px #ff00de;
  font-family: 'Changa', sans-serif;
}
/*
.articleList {
  margin-bottom: 50px;
} */
</style>
