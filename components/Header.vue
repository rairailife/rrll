<template>
  <header class="header">
    <h1 class="logo">
      <div class="logo-title">{{ siteTitle }}</div>
      <div class="logo-subtitle">{{ description }}</div>
    </h1>
  </header>
</template>

<script>
export default {
  data () {
    return {
      siteTitle:  'rairai Life Log',
      description: 'rairai-chang\'s portfolio'
    }
  }
}
</script>

<style scoped>
</style>

