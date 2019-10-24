<template>
  <div class="titleList">
    <div class="article" v-for="(article, index) in articles" :key=index>
      <h2>{{ article.title }}</h2>
      <span>{{ article.date }}</span>
      <p>
        <!-- <img :srcset=article.img> -->
        {{ article.details }}<br>
        <a :href=article.url>more</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data () {
    return {
      articles: [
        {title: 'たいとる１', date: '2019/10/01', details: '記事内容最初の数文字...', img: 'entry/20190101/img/eyecatch.jpg', url: '/entry/20190101/entry.html'},
        {title: 'たいとる２', date: '2019/09/01', details: '記事内容最初の数文字...', img: 'entry/20190101/img/eyecatch.jpg', url: '/entry/20190101/entry.html'}
      ]
    }
  }
}
</script>

<style scoped>
/* .titleList { */
  /* background-color: #222;
  color:            #F3E5E6; */
  /* padding:    0;
  margin:     0;
  width:      100%; */
/* } */

/* .article {
  color: #474747;
} */
/* h2 {
  color:       #222;
  text-shadow: -1px -1px 1px #474747, 1px 1px #000000;
} */
</style>