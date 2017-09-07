<template>
  <section class="hero is-fullheight">
    <section id="guest">
      <nuxt/>
    </section>

    <footer></footer>
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/sass/_colors.scss";

#guest {
  background: -webkit-gradient(linear, left bottom, left top, color-stop(50%, #fbfbfb), color-stop(50%, $primary)) no-repeat;
  background: linear-gradient(0deg, #fbfbfb 50%, $primary 50%) no-repeat;
}
</style>
