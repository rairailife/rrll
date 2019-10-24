<template>
  <ul class="flexbox">
    <li v-for="(category, index) in categories" :key=index>
      <a href="">{{ category.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      categories: [
        {title: 'プログラミング', url: ''},
        {title: '英語', url: ''},
        {title: '趣味', url: ''},
        {title: '日常', url: ''},
        {title: '業務連絡', url: ''},
        {title: '未分類', url: ''},
      ]
    }
  }
}
</script>

<style scoped>

ul {
  display:   flex;
}

li {
  margin:      5px;
  font-size:   13px;
  white-space: nowrap;
  text-align:  center;
}
li a {
  display:     block;
  font-weight: bold;
  color:       #222;
  text-shadow: 1px 1px 1px #666;
  padding:     5px;
  border:      1px solid #666;
  box-shadow:  1px 1px 1px #222, 1px 1px 1px #222 inset;
}
</style>