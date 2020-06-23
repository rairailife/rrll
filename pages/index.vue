<template>
  <div class="wrapper">
      <!-- .works-section -->
      <Works/>
      <!-- /.works-section -->

      <!-- .feature-section -->
      <Feature/>
      <!-- /.feature-section -->

      <!-- .about-section -->
      <About/>
      <!-- /.about-section -->

      <!-- .skill-section -->
      <Skills/>
      <!-- /.skill-section -->

      <!-- .contact-section -->
      <Contact/>
      <!-- /.contact-section -->


    <!-- カラー<br>
    #E8E7E3 R 232 G 231 B 227:<span style="color:#E8E7E3;">■<b>薄緑寄りグレー</b></span><br>
    #C3C3BA R 195 G 195 B 186:<span style="color:#C3C3BA;">■<b>グレーグリーン？</b></span><br>
    #F9D1CD R 249 G 209 B 205:<span style="color:#F9D1CD;">■<b>ピンク系</b></span><br>
    #645154 R 100 G  81 B  84:<span style="color:#645154;">■<b>茶色系</b></span><br> -->

  </div>
</template>

<script>
import Works from '~/pages/Works.vue'
import Feature from '~/pages/Feature.vue'
import About from '~/pages/About.vue'
import Skills from '~/pages/Skills.vue'
import Contact from '~/pages/Contact.vue'

export default {
  components: {
    Works,
    Feature,
    About,
    Skills,
    Contact
  }
}
</script>

<style scoped>
</style>