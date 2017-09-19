<template>
  <article class="media coder-tile">
    <div class="media-left">
      <figure class="image">
        <img :src="coder.pic.secure_url" :alt="coder.fullname">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column is-narrow">
            <p class="title is-size-5 is-uppercase is-bolder">
              {{coder.name.first}} {{coder.name.last}}
            </p>

            <p class="subtitle">
              Frontend Developer
            </p>
          </div>

          <div class="column">
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
  </article>
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

<style lang="scss">
article.coder-tile {
  position: relative;

  .image {
    img {
      max-width: 160px;
    }
  }

  & > a {
    position: absolute;
    bottom: 0;
    right: 0;

    align-items: center;
    display: flex;
  }
}
</style>
