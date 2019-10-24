<template>
  <div class="container">
    <h2 v-if="error.statusCode === 404">ページが見つかりません</h2>
    <h2 v-else>{{ error.statusCode }}エラーが発生しました</h2>
    <p>{{ error.message }}</p>
    <nuxt-link to="/">ホーム</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>