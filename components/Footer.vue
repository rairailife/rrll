<template>
  <footer class="footer">
    <div>
      This is rairai chan's life log.<br>
      LinKs｜<a href="https://sai-test.netlify.com">sai</a>
    </div>
    <span>Copyright &copy; 2019 rairai-chan</span>
  </footer>
</template>

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

