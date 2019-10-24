<template>
  <header>
    <h1>{{ title }}</h1>
    <span>{{ description }}</span>
  </header>
</template>

<script>
export default {
  data () {
    return {
      title: 'RaiRai-LifeLog',
      description: 'Best day of my life!'
    }
  }
}
</script>

<style scoped>
header {
	text-align:  center;
}

h1 {
	text-shadow: 0px 2px 3px #ff00de;
  font-family: 'Changa', sans-serif;
}

span {
  font-family: 'Changa', sans-serif;
	color:       #ff00de;
}
</style>

