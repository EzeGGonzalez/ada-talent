<template>
  <div>
    <navbar></navbar>

    <div class="container mt-5">
      <b-notification type="is-success" v-for="(msg, index) in $store.state.alerts.notifications"
        :key="index"  v-delay="() => { $store.commit('alerts/removeNotification', msg) }">
        {{msg}}
      </b-notification>
    </div>

    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/navbar/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
