<template>
  <section class="section" id="coder">
    
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <div class="box has-text-left profile-left">
            <figure class="image">
              <img :src="coder.pic.secure_url" :alt="coder.name.full">
            </figure>
            
            <p class="title is-size-5 is-uppercase is-bolder">{{coder | fullname}}</p>

            <hr>

            <p>{{coder.bio}}</p>

            <hr>

            <coder-profile-links :coder="coder"></coder-profile-links>
          </div>
        </div>

        <div class="column is-9">
          <div class="box">
            
            <b-tabs expanded>
              <b-tab-item label="Tech skills">
                <div class="skill-tab">
                  
                  <skill-progress :skill="{
                    'description': 'Estas son las habilidades socioemociones foco que buscamos desarrollar.'
                  }" :value-top="coder.techSkills" :value-bottom="0.75"></skill-progress>

                  <hr>

                  <skill-progress v-for="(skill, index) in techSkills" :key="index" :skill="skill" :value-top="coder.techSkills"></skill-progress>

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
import CoderProfileLinks from '~/components/CoderProfile/Links'
import SkillProgress from '~/components/CoderProfile/SkillProgress'
import { mapState } from 'vuex'

export default {
  name: 'coder',

  async asyncData ({ params, error }) {
    let { data: coder } = await axios.get(`/api/users/${params.id}`)
    return { coder }
  },

  computed: {
    ...mapState(['techSkills'])
  },

  head () {
    return {
      title: `Coder: ${this.coder.fullname}`
    }
  },
  components: {
    CoderProfileLinks,
    SkillProgress
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

    .columns {
      padding: 1rem 0;

      &.first-child {
        margin-top: 0.5rem;
      }
    }
  }
}

</style>