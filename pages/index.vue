<template>
  <div id="wrapper">
    <h1 class="title">RaiRai-LifeLog</h1>

    <main class="container">
      <!-- <app-logo/> -->
      <div class="demo" augmented-ui="tl-clip br-clip exe">
        らいらい！<br>
        惑星RRLLより通信中。<br>
        こちらは艦長のらいらいちゃんだ。<br>
        地上の民よ、我らが蒼き星は健全かね？
      </div>

      <nav><nuxt-link to="/profile">Profile</nuxt-link>｜｜｜｜｜</nav>
      <!-- <hr> -->
      <!-- <div class="a-container" :class="{ 'is-loaded' : isLoaded }">
          <input type="radio" v-for="(project, k) in projects" :key="project.id" class="a-slide__label" :id="'slide'+(k+1)" :name="'slide'+k" :value="project.id" v-model="current" />

          <main class="l-main">
              <article v-for="project in projects" :key="project.id" class="m-article" :id="'project'+project.id">
                  <figure class="m-media"><img :src="project.src" /></figure>
                  <h2 class="m-ttl">{{ project.title }}</h2>
                  <dl class="m-list--dl">
                      <div class="m-list__item">
                          <dt>リリース/作成時期：</dt>
                          <dd>{{ project.release }}</dd>
                      </div>
                      <div class="m-list__item">
                          <dt>担当など詳細：</dt>
                          <dd>{{ project.more }}</dd>
                      </div>
                  </dl>
              </article>
          </main>

          <nav class="l-nav">
              <div class="a-slide__prev-next">
                  <label v-for="(project, k) in projects" :key="project.id" class="a-slide__btn" :for="'slide'+(k+1)" />
              </div>
          </nav>
      </div> -->
      <!-- <hr> -->
    </main>

    <footer class="footer">
      <div>
        This is rairai chan's life log.<br>
        LinKs｜<a href="https://sai-test.netlify.com">sai</a>
      </div>
      <span>Copyright &copy; 2019 rairai-chan</span>
    </footer>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data() {
    return {
        isLoaded: true,
        current: '200706',
        projects: [
            {
            id: 200706,
            title: "タイトルイチ",
            src: require("assets/img/mwam.jpg"),
            release: "2007年9月",
            more: "ダミーテキストイチ"
            },
            {
            id: 200803,
            title: "タイトルニ",
            src: require("assets/img/Gogh_1888_Nuit.jpg"),
            release: "2008年3月",
            more: "ダミーテキスト二"
            },
            {
            id: 200805,
            title: "タイトルサン",
            src: require("assets/img/Gogh_1889_Nuit.jpg"),
            release: "2008年6月",
            more: "ダミーテキストサン"
            }
        ]
    };
  }
}
</script>

<style>
* {
  padding: 0;
  margin:  0;
}

.title::selection, .container::selection {
  background: #C5545E;
  color:      #ff00de;
}

body {
  background-color: #000;
  color:            #F3E5E6;
	text-shadow:      0px 2px 3px #ff00de;
  font-size:        16px;
  line-height:      1.5em;
  display:          flex;
  justify-content : center;
  align-items:      center;
  text-align:       center;
  min-height:       100vh;
  width:            100vw;
}

#wrapper {
  display:        flex;
  flex-direction: column;
  min-height:     100vh;
  width:          100vw;
}

h1 {
  font-size:   32px;
  line-height: 1.2em;
}

h2 {
  font-size:   24px;
  line-height: 1.2em;
}

.title {
  font-family: 'Changa', sans-serif;
	text-align:  center;
	margin:      20px auto;
	color:       #fff;
	text-shadow: 0 0 10px #C5545E, 0 0 20px #C5545E, 0 0 30px #C5545E, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
}

.footer {
  margin-top:       auto;
  background-color: #474747;
  color:            #222;
  text-shadow:      0px 2px 3px #666;
}

.footer a {
	color:            #C5545E;
  text-decoration: none;
  transition: all 0.1s ease 0.2s;
  text-shadow: none;
}
.footer a:hover {
	color:       #F3E5E6;
	text-shadow: 0 0 10px #C5545E, 0 0 20px #C5545E, 0 0 30px #C5545E, 0 0 40px #ff00de, 0 0 70px #F3E5E6, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #F3E5E6;
}
.footer::selection {
  background: #222;
  color:      #474747;
}


          div.demo {
            display: inline-block;
            /* width: 110px; */
            /* height: 110px; */
            margin: 10px;
            --aug-border: 5px;
            --aug-inset: 5px;
            padding: 10px; /* mind the gap */
            text-align: center;
            --aug-border-bg: gold;
            --aug-inset-bg: gold;
          }
</style>

