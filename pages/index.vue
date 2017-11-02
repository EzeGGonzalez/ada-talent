<template>
  <div class="content">
    <header-skew></header-skew>

    <v-container grid-list-md class="coders-container">
      <v-layout row wrap>

        <v-flex xs3 v-for="(coder, index) in coders">
          <coder-tile :coder="coder"></coder-tile>
        </v-flex>

      </v-layout>
    </v-container>

  </div>
</template>

<script>
import axios from '~/plugins/axios'
import HeaderSkew from '~/components/HeaderSkew.vue'
import CoderTile from '~/components/CoderTile.vue'

export default {
  data () {
    return {
      filters: { skills: [] }
    }
  },
  components: {
    HeaderSkew,
    CoderTile
  },
  async asyncData () {
    let { data: coders } = await axios.get('/api/users')
    let { data: skills } = await axios.get('/api/users/skills')

    return { coders, skills }
  },
  head () {
    return {
      title: 'Coders'
    }
  },
  computed: {
    token () {
      return axios
    },
    filteredCoders () {
      return this.filters.skills.length ? this.coders.filter(c => c.skills.some(s => this.filters.skills.indexOf(s) >= 0)) : this.coders
    }
  }
}
</script>

<style lang="styl">
  .coders-container
    margin-top: -64px
</style>