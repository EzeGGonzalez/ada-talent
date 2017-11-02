<template>
  <v-card class="coder-card" nuxt :to="{ name: 'coders-id', params: { id: coder._id } }">
    <v-card-text class="text-xs-center pb-0">
      <v-avatar size="100px">
        <img class="img-circle elevation-7" :src="coder.pic.secure_url" :alt="coder.fullname">
      </v-avatar>
    </v-card-text>

    <v-card-text primary-title class="text-xs-center">
      <h2 class="headline mb-0">{{coder.name.first}} {{coder.name.last}}</h2>
    </v-card-text>

    <v-card-text class="skills">
      <v-layout row>
        <v-flex xs4>
          <h5 class="body-2 mb-0 bolder">{{techAvg | percentage}}</h5>
          <h6 class="caption mb-0 uppercase">Tech Skills</h6>
        </v-flex>

        <v-flex xs4>
          <h5 class="body-2 mb-0 bolder text-xs-center">{{lifeAvg | percentage}}</h5>
          <h6 class="caption mb-0 text-xs-center uppercase">Life Skills</h6>
        </v-flex>

        <v-flex xs4>
          <h5 class="body-2 mb-0 bolder text-xs-right uppercase">{{englishLvl}}</h5>
          <h6 class="caption mb-0 text-xs-right uppercase">Inglés</h6>
        </v-flex>
      </v-layout>
    </v-card-text>

    <!-- <v-card-actions class="white">
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-card-actions> -->
  </v-card>
<!--   <article class="media coder-tile">
    <div class="media-left">
      <figure class="image">
        <img :src="coder.pic.secure_url" :alt="coder.fullname">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p class="title is-size-5 is-uppercase is-bolder">
              {{coder.name.first}} {{coder.name.last}}
            </p>

            <p class="subtitle">
              Frontend Developer
            </p>
          </div>

          <div class="column is-narrow">
            <div class="columns flex-end">
              <div class="column is-narrow">
                <box-skill :value="techAvg" title="Tech skills"></box-skill>
              </div>

              <div class="column is-narrow">
                <box-skill :value="lifeAvg" title="Life skills"></box-skill>
              </div>
              <div class="column is-narrow">
                <box-skill :value-text="englishLvl" title="English skills"></box-skill>
              </div>
            </div>
          </div>
        </div>

        <p class="is-uppercase is-size-7">
          Skills destacados
        </p>

        <b-taglist>
          <b-tag v-for="(tag, index) in coder.skills" type="is-light" :key="index">{{tag}}</b-tag>
        </b-taglist>

      </div>
    </div>

    <nuxt-link class="is-primary is-outlined is-arrowed right" :to="{ name: 'coders-id', params: { id: coder._id } }">
      <span class="text">Ver perfil</span>
    </nuxt-link>
  </article> -->
</template>

<script>
import BoxSkill from '~/components/BoxSkill.vue'

export default {
  computed: {
    techAvg () {
      return Object.values(this.coder.tech || {}).reduce((sum, val) => sum + val, 0) / Object.keys(this.coder.tech || []).length
    },
    lifeAvg () {
      return Object.values(this.coder.life || {}).reduce((sum, val) => sum + val, 0) / Object.keys(this.coder.tech || []).length
    },
    englishLvl () {
      return this.$store.state.english[this.coder.english]
    }
  },

  components: {
    BoxSkill
  },
  props: {
    coder: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="styl">
</style>