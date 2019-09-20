<template>
  <div id="wrapper">
    <h1>Who is Rairai-chan?</h1>
    <img src="https://placehold.jp/240x240.png">
    <dl>
      <dt>NAME</dt>
      <dd>rairai chan</dd>

      <dt>PLANET</dt>
      <dd>Earth</dd>

      <dt>RACE</dt>
      <dd>human</dd>

      <dt>LANGUAGE</dt>
      <dd>Java[Struts2], C#.NET, VB.NET, Javascript, JQuer, Vue.js, Nuxt.js</dd>

      <dt>DATABASE</dt>
      <dd>Oracle, SQL Server</dd>

      <dt>GitHub</dt>
      <dd>rairailife</dd>

      <dt>Qiita</dt>
      <dd>rairailife</dd>

      <dt>twitter</dt>
      <dd>rairailife</dd>

      <dt>FINAL FANTASY</dt>
      <dd>
        My favorite FINAL FANTASY is IX and my first FINAL FANTASY is it.<br>
        I want to live in Lindbulm. I want to be a engineer of Flying boat.<br>
        My second favorite CRISIS CORE.<br>
        I love Aerith and Zax. I wish for their happiness.<br>
        When I clear it, I was too cry. The last is saddness.<br>
        I hold my dream. WE ARE HERO.<br>
      </dd>

      <dt>JOJO's bizzar adventure</dt>
      <dd>I love all JOJOs. I especially like Josuke Higashikata above all the JOJOs.</dd>
    </dl>

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
  text-align:     center;
}

img {
  border-radius: 120px;
  height:        120px;
  width:         120px;
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
