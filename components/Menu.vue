<template>
  <div class="menu">
    <nav v-for="(menu, index) in menuList" :key=index>
      <nuxt-link :to="menu.url">{{ menu.title }}</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        {title: 'profile', url: '/profile'},
        {title: 'かてごりー２', url: ''},
        // {title: 'かてごりー３', url: ''},
        // {title: 'かてごりー４', url: ''},
        // {title: 'かてごりー５', url: ''},
        // {title: 'かてごりー６', url: ''},
        // {title: 'かてごりー７', url: ''},
        // {title: 'かてごりー８', url: ''},
        // {title: 'かてごりー９', url: ''},
        // {title: 'かてごりー０', url: ''},
      ]
    }
  }
}
</script>

<style scoped>
/* * {
  padding:    0;
  margin:     0;
  width:      100%;
} */

/* .menu, a {
  color: #000000;
} */
</style>

