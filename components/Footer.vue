<template>
  <footer class="footer">
    <div class="gradation"></div>
    <div class="categories">
      <h3>Categories</h3>
      <ul v-for="(category, index) in categories" :key=index>
        <li>{{ category.title }}</li>
      </ul>
    </div>
    <div class="contacts">
      <h3>Contacts</h3>
      連絡を取りたいのなら...
    </div>
    <div class="links">
      <h3>LinKs</h3>
      <a href="https://sai-tsurumi.netlify.com">sai</a>
    </div>
    <div class="author">
      <h3>Author</h3>
      らいらいちゃん<br>
      How are you!?&nbsp;<nuxt-link to="/profile">...more&gt;</nuxt-link>
    </div>
    <span class="copy">Copyright &copy; 2019 rairai-chan</span>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      categories: [
        {title: 'かてごりー１', url: ''},
        {title: 'かてごりー２', url: ''},
        {title: 'かてごりー３', url: ''},
        {title: 'かてごりー４', url: ''},
        {title: 'かてごりー５', url: ''},
        {title: 'かてごりー６', url: ''},
        {title: 'かてごりー７', url: ''},
        {title: 'かてごりー８', url: ''},
        {title: 'かてごりー９', url: ''},
        {title: 'かてごりー０', url: ''},
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
}
*/

::selection {
  background: #222;
  color:      #474747;
}
.footer {
  background-color: #474747;
  color:            #666;
  width:            100%;
  box-sizing:       border-box;
/*
  height:           100%;
  min-height:       100%;
  margin-top:       auto;
  padding-bottom:   0;
  */
}
.gradation {
  height:     50px;
  background: linear-gradient(#222222, #474747);
}

.footer div {
  padding:       0 50px;
  margin-bottom: 2em;
}

.footer h3 {
  color:          #474747;
  text-shadow:    -1px -1px 1px #222, 1px 1px #666;
  line-height:    2em;
  letter-spacing: 3px;
}

/*
ul {
  list-style: none;
	margin:     20px;
	padding:    0;
  display:    flex;
}
li {
	padding: 8px 20px 6px;
	border:  1px solid #ddd;
}
li:not(:first-child) {
	border-left: none;
} */

.copy {
  color: #222;
}
</style>

