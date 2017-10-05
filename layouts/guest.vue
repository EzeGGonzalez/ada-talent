<template>
  <section class="hero is-fullheight">
    <section id="guest">
      <navbar-guest></navbar-guest>

      <div class="container mt-5">
        <b-notification type="is-success" v-for="(msg, index) in $store.state.alerts.notifications"
          :key="index"  v-delay="() => { $store.commit('alerts/removeNotification', msg) }">
          {{msg}}
        </b-notification>

        <b-notification type="is-danger" v-for="(msg, index) in $store.state.alerts.errors"
          :key="index"  v-delay="() => { $store.commit('alerts/removeError', msg) }">
          {{msg}}
        </b-notification>
      </div>

      <nuxt/>
    </section>

    <footer></footer>
  </section>
</template>

<script>
import NavbarGuest from '~/components/navbar/NavbarGuest.vue'

export default {
  components: {
    NavbarGuest
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
