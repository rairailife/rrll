<template>
  <div id="wrapper">
    <h1 class="title">RaiRai-LifeLog</h1>

    <main class="container">
      <!-- <app-logo/> -->
      らいらい！<br>
      惑星RRLLより通信中。<br>
      こちらは艦長のらいらいちゃんだ。<br>
      地上の民よ、我らが蒼き星は健全かね？
    </main>

    <footer class="footer">
      <div>
        This is rairai chan's life log.<br>
        Linl
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
.footer::selection {
  background: #222;
  color:      #474747;
}
</style>

