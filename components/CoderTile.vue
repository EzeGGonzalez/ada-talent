<template>
  <article class="media coder-tile">
    <div class="media-left">
      <figure class="image">
        <img :src="`/api/image/${coder.photo.thumbnail}`" :alt="coder.name">
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
                <article class="tile is-child notification is-primary has-text-centered">
                  <p class="title is-size-6 is-bolder">91 %</p>
                  <p class="subtitle is-size-7 is-uppercase">Algo Acá</p>
                </article>
              </div>
                <div class="column is-narrow">
                  <article class="tile is-child notification is-primary has-text-centered">
                    <p class="title is-size-6 is-bolder">91 %</p>
                    <p class="subtitle is-size-7 is-uppercase">Algo Acá</p>
                  </article>
                </div>
              <div class="column is-narrow">
                <article class="tile is-child notification is-primary has-text-centered">
                  <p class="title is-size-6 is-bolder">91 %</p>
                  <p class="subtitle is-size-7 is-uppercase">Algo Acá</p>
                </article>
              </div>
            </div>
          </div>
        </div>

        <p class="is-uppercase is-size-7">
          Skills destacados
        </p>

        <div class="tags">
          <span v-for="(tag, i) in coder.skills" class="tag is-light">{{tag}}</span>
        </div>

      </div>
    </div>

    <router-link class="button is-primary is-outlined" :to="{ name: '', params: {} }">Ver perfil</router-link>
  </article>
</template>

<script>
export default {
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

  & > .button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
