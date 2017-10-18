<template>
  <v-app light>
    <v-toolbar>
      <v-toolbar-title class="brand-logo"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
    </main>
  </v-app>

<!--   <div>
    <navbar></navbar>

    <div class="container mt-5">
      <b-notification type="is-success" v-for="(msg, index) in $store.state.alerts.notifications"
        :key="index"  v-delay="() => { $store.commit('alerts/removeNotification', msg) }">
        {{msg}}
      </b-notification>
    </div>

    <nuxt/>
  </div> -->
</template>

<script>
import Navbar from '~/components/navbar/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
