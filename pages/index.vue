<template>
  <div id="wrapper">
    <h1 class="title">R<span class="ani1">a</span>iRai-<span class="ani2">L</span>ifeLo<span class="ani3">g</span></h1>
    <main class="container">
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

    <Footer/>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer
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
  min-height:       100%;
  width:            100%;
  box-sizing:       border-box;
}

#wrapper {
  display:        flex;
  flex-direction: column;
  min-height:     100%;
  width:          100%;
}

h1 {
  font-size:   32px;
  line-height: 1.2em;
}

h2 {
  font-size:   24px;
  line-height: 1.2em;
}

/* .title {
	text-align:  center;
	text-shadow: 0 0 10px #C5545E, 0 0 20px #C5545E, 0 0 30px #C5545E, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;
  } */
.title {
  font-family: 'Changa', sans-serif;
	margin:      20px auto;
  display: inline-block;
  color: #fff;
  letter-spacing: .05em;
  text-shadow: 0 1px 30px #FB1684, 0 0 12px #fff, 2px 5px 60px #990a52;

  border: #fff 8px solid;
  border-radius: 16px;
  padding: .5em 1.5em;
  box-shadow: 0 0 10px lime, 0 0 20px lime, 0 0 30px lime, 0 0 40px lightgreen, 0 0 70px lightgreen, 0 0 80px lightgreen, 0 0 100px lightgreen, 0 0 150px lightgreen,
              0 0 10px lime inset, 0 0 20px lime inset, 0 0 30px lime inset, 0 0 40px lightgreen inset, 0 0 70px lightgreen inset, 0 0 80px lightgreen inset, 0 0 100px lightgreen inset, 0 0 150px lightgreen inset;
}

.title span.ani1 {
  animation: blink 3s infinite alternate;
}

.title span.ani2 {
  animation: blink2 2s infinite alternate;
}

.title span.ani3 {
  opacity: .4;
  /* transform:        rotate(10deg); */
  animation: blink3 10s infinite alternate;
}
@keyframes blink {
  40% {
    opacity: .85;
  }
  42% {
    opacity: .4;
  }
  43% {
    opacity: .85;
  }
  45% {
    opacity: .4;
  }
  46% {
    opacity: .85;
  }
}
@keyframes blink2 {
  10% {
    opacity: .85;
  }
  12% {
    opacity: .4;
  }
  40% {
    opacity: .85;
  }
  42% {
    opacity: .4;
  }
  43% {
    opacity: .85;
  }
  45% {
    opacity: .4;
  }
  46% {
    opacity: .85;
  }
}
@keyframes blink3 {
  10% {
    opacity: .85;
  }
  12% {
    opacity: .4;
  }
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
