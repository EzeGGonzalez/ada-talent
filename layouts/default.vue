<template>
  <v-app>
    <v-toolbar app dark color="primary" class="elevation-0">
      <v-toolbar-title class="brand-logo"></v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>

      <v-toolbar-items class="hidden-sm-and-down white-text">
        <v-btn flat :to="{ name: 'new-job' }" nuxt>
          <v-icon left>add_circle_outline</v-icon>
          Subir propuesta laboral
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <v-content>
        <nuxt />
      </v-content>
    </main>

      <v-footer app id="footer" class="mt-5 pa-3">
        <v-spacer></v-spacer>
        <div>© {{ new Date().getFullYear() }}</div>
      </v-footer>
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

<style lang="styl">
  @require '~assets/style/theme.styl'

  nav.toolbar
    z-index: 2
    background-color: transparent!important

  #footer
    background-color: $primary-color
</style>
