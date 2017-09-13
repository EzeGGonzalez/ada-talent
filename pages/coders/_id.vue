<template>
  <section class="section" id="coder">
    
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <div class="box has-text-left">
            <figure class="image">
              <img :src="`/api/image/${coder.photo.thumbnail}`" :alt="coder.fullname">
            </figure>
            
            <p class="title is-size-5 is-uppercase is-bolder">{{coder.fullname}}</p>

            <hr>

            <p>{{coder.bio}}</p>
          </div>
        </div>

        <div class="column is-9">
          <div class="box">
            
            <b-tabs expanded>
              <b-tab-item label="Tech skills">
                <div class="skill-tab">
                  <progress class="progress is-danger" :value="coder.techSkills" max="1">{{coder.techSkills | percentage}}</progress>
                </div>
              </b-tab-item>

              <b-tab-item label="Life skills">
                <div class="skill-tab">
                  <progress class="progress is-danger" :value="coder.lifeSkills" max="1">{{coder.lifeSkills | percentage}}</progress>
                </div>
              </b-tab-item>

              <b-tab-item label="English skills">
                <div class="skill-tab">
                  <progress class="progress is-danger" :value="coder.englishSkills" max="1">{{coder.englishSkills | percentage}}</progress>
                </div>
              </b-tab-item>
            </b-tabs>

          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'coder',

  async asyncData ({ params, error }) {
    let { data: coder } = await axios.get(`/api/users/${params.id}`)
    return { coder }
  },

  head () {
    return {
      title: `User: ${this.coder.fullname}`
    }
  }
}
</script>

<style lang="scss" scoped>
figure.image {
  margin-bottom: 1.5rem;
}

.tabs {
  a {
    span {
      text-transform: uppercase;
    }
  }
}

.tab-content {
  .skill-tab {
    padding: 2rem;
  }
}
</style>