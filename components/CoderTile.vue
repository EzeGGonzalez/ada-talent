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
              {{coder.fullname}}
            </p>

            <p class="subtitle">
              Frontend Developer
            </p>
          </div>

          <div class="column">
            <div class="columns flex-end">
              <div class="column is-narrow">
                <box-skill :value="coder.techSkills" title="Tech skills"></box-skill>
              </div>

              <div class="column is-narrow">
                <box-skill :value="coder.lifeSkills" title="Life skills"></box-skill>
              </div>
              <div class="column is-narrow">
                <box-skill :value="coder.englishSkills" title="English skills"></box-skill>
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
