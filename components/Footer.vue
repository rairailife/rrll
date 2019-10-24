<template>
  <footer class="footer">
    <div class="categories">
      <h3>Categories</h3>
      <Categories />
    </div>
    <div class="author">
      <h3>Author</h3>
      らいらいちゃん<br>
      How are you!?&nbsp;<nuxt-link to="/profile">...more&gt;</nuxt-link>
    </div>
    <div class="links">
      <h3>LinKs</h3>
      <a href="https://sai-tsurumi.netlify.com">sai</a>
    </div>
    <div class="copy">Copyright &copy; 2019 rairai-chan</div>
  </footer>
</template>

<script>
import Categories from '~/components/Categories.vue'

export default {
  components: {
    Categories
  }
}
</script>

<style scoped>
::selection {
  background: #222;
  color:      #474747;
}

.footer {
  background-color: #474747;
  color:            #666;
  box-sizing:       border-box;
  padding:          0 50px;
  font-size:        13px;
}

.footer h3 {
  color:          #474747;
  font-family:    'Changa', sans-serif;
  text-shadow:    -1px -1px 1px #222, 1px 1px #666;
  line-height:    2em;
  letter-spacing: 3px;
  margin-top:     .8em;
  font-size:      20px;
}

.copy {
  font-family:      'Changa', sans-serif;
  margin:           0 -50px;
  margin-top:       .8em;
  background-color: #222;
  width:            calc(100% + 100px);
	text-align:       center;
}

.links a {
  color:        #222;
  font-weight:  bold;
  text-shadow:  1px 1px 1px #666;
  position:     relative;
  padding-left: 22px;
}
.links a::before {
  position:      absolute;
  content:       '';
  width:         17px;
  height:        17px;
  background:    #474747;
  border-radius: 50%;
  box-shadow:    1px 1px 1px #666 inset, 1px 1px 1px #222;
  top:           50%;
  left:          0;
  margin-top:    -7px;
}
.links a::after {
  position:          absolute;
  content:           '';
  width:             5px;
  height:            5px;
  border-top:        solid 1px #222;
  border-right:      solid 1px #222;
  -webkit-transform: rotate(45deg);
  transform:         rotate(45deg);
  top:               50%;
  left:              5px;
  margin-top:        -1px;
}
</style>


