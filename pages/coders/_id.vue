<template>
  <div class="content">
    <header-plain></header-plain>
    
    <v-container id="container-coder" grid-list-md>
      <v-layout row wrap>

        <v-flex xs3 class="py-0">
          <v-card class="elevation-12">
            <v-card-media :src="coder.pic.secure_url" height="200px">
        </v-card-media>
           <!--  <v-card-text class="text-xs-center">
              <v-avatar size="150px" tile>
                <img class="img-circle elevation-7" :src="coder.pic.secure_url" :alt="coder.fullname">
              </v-avatar>
            </v-card-text> -->
            
            <v-card-title primary-title>
              <div>{{coder.bio}}</div>
            </v-card-title>
            
            <v-card-text class="coder-links">
              <a class="d-flex align-center mb-2" target="_blank" :href="coder.linkedin">
                <img src="/linkedin_icon.svg"/>
                <span>Linkedin</span>
              </a>
              <a class="d-flex align-center mb-2" target="_blank" :href="coder.github">
                <img src="/github_icon.svg"/>
                <span>Github</span>
              </a>
            </v-card-text>

          </v-card>
        </v-flex>

        <v-flex xs9 class="py-0 pl-5">
          <div>
            <h2 class="white--text display-3">{{coder | fullname}}</h2>
          </div>

          <v-tabs dark grow>
            <v-toolbar class="elevation-0">
              <v-tabs-bar>
                <v-tabs-slider></v-tabs-slider>
                <v-tabs-item
                  v-for="(item, i) in items"
                  :key="i"
                  :href="'#tab-' + (i + 1)"
                >
                  {{ item }}
                </v-tabs-item>
              </v-tabs-bar>
            </v-toolbar>
            <v-tabs-items>
              <v-tabs-content
                v-for="i in 5"
                :key="i"
                :id="'tab-' + i"
              >
                <v-card class="elevation-12">
                  <v-card-text>{{ text }}</v-card-text>
                </v-card>
              </v-tabs-content>
            </v-tabs-items>
          </v-tabs>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import HeaderPlain from '~/components/HeaderPlain.vue'
  import axios from '~/plugins/axios'
  import { mapState } from 'vuex'

  export default {
    name: 'coder',

    data () {
      return {
        coder: {},
        items: [
          'web', 'shopping', 'videos', 'images', 'news'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },

    async asyncData ({ params, error }) {
      let { data: coder } = await axios.get(`/api/users/${params.id}`)
      return { coder }
    },

    computed: {
      techAvg () {
        return Object.values(this.coder.tech || {}).reduce((sum, val) => sum + val, 0) / Object.keys(this.coder.tech || []).length
      },
      lifeAvg () {
        return Object.values(this.coder.life || {}).reduce((sum, val) => sum + val, 0) / Object.keys(this.coder.tech || []).length
      },
      englishLevel () {
        return ['elemental', 'basic', 'intermediate', 'advanced'].indexOf(this.coder.english)
      },
      ...mapState(['techSkills', 'lifeSkills', 'averages'])
    },

    head () {
      return {
        title: this.coder && this.coder.name ? `Coder: ${this.coder.name.first} ${this.coder.name.last}` : 'Coder profile'
      }
    },
    components: {
      HeaderPlain
    }
  }
</script>

<style lang="styl">
  #container-coder
    padding-top: 0
    margin-top: -136px

    .tabs
      margin-top: -11px

      .tabs__slider
        height: 3px
        background-color: #2b1c30
        border-color: #2b1c30

      .tabs__bar
        margin-left: 0
        margin-right: 0
        background-color: transparent

    .coder-links
      a
        text-decoration: none;
        width: 100%
        font-size: 1.1rem
        color: rgba(0,0,0,.87)

        span
          border-bottom: 1px solid #bc3b69
          flex: 0

        img
          max-width: 21px
          margin-right: 10px
</style>