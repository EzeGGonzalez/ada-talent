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
                    'description': 'Estas son las habilidades técnicas que las estudiantes han aprendido.'
                  }" :value-top="averages.tech" :value-bottom="averages.techEmployable" :progress-value="techAvg"></skill-progress>

                  <hr>

                  <skill-progress v-for="(skill, index) in techSkills" :key="index" :skill="skill" :value-top="coder.techSkills"
                    :progress-value="coder.tech[skill.prop]"></skill-progress>

                </div>
              </b-tab-item>

              <b-tab-item label="Life skills">
                <div class="skill-tab">
                  
                  <skill-progress :skill="{
                      'description': 'Estas son las habilidades socioemociones foco que buscamos desarrollar.'
                    }" :value-top="averages.life" :value-bottom="averages.lifeEmployable"
                    :progress-value="lifeAvg"></skill-progress>

                  <hr>

                  <skill-progress v-for="(skill, index) in lifeSkills" :key="index" :skill="skill" :value-top="coder.techSkills"
                    :progress-value="coder.life[skill.prop]"></skill-progress>

                </div>
              </b-tab-item>

              <b-tab-item label="English skills">
                <div class="skill-tab english-skills">
                  
                  <p class="mt-5 is-size-5">Este es el nivel de inglés que tienen las coders en el programa.</p>

                  <div class="tabs is-toggle is-fullwidth mt-5">
                    <ul>
                      <li :class="{ 'is-active': coder.english === 'elemental' }">
                        <a>
                          <span>ELEMENTAL</span>
                        </a>
                      </li>
                      <li :class="{ 'is-active': coder.english === 'basic' }">
                        <a>
                          <span>BÁSICO</span>
                        </a>
                      </li>
                      <li :class="{ 'is-active': coder.english === 'intermediate' }">
                        <a>
                          <span>INTERMEDIO</span>
                        </a>
                      </li>
                      <li :class="{ 'is-active': coder.english === 'advanced' }">
                        <a>
                          <span>AVANZADO</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="box" v-if="coder.english === 'elemental'">
                    <p>
                      Conozco muy poco del idioma.
                    </p>
                  </div>

                  <div class="box" v-if="coder.english === 'basic'">
                    <p>
                      Conozco el idioma inglés pero no me sentiría cómoda trabajando en ese idioma.
                    </p>
                  </div>

                  <div class="box" v-if="coder.english === 'intermediate'">
                    <p>
                      Entiendo el idioma inglés y podría comunicarme con los demás en mi trabajo, pero no podría trabajar sólo en ese idioma.
                    </p>
                  </div>

                  <div class="box" v-if="coder.english === 'advanced'">
                    <p>
                      Me siento totalmente cómoda con el inglés y podría trabajar en una empresa en donde se comuniquen sólo en ese idioma.
                    </p>
                  </div>

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
      title: `Coder: ${this.coder.name.first} ${this.coder.name.last}`
    }
  },
  components: {
    CoderProfileLinks,
    SkillProgress
  }
}
</script>

<style lang="sass">

#coder
  figure.image
    margin-bottom: 1.5rem

  .b-tabs
    .tabs
      a
        span
          text-transform: uppercase

    .tab-content
      .skill-tab
        padding: 2rem

        .columns
          padding: 1rem 0

          &.first-child
            margin-top: 0.5rem

        &.english-skills
          .box
            border: 1px solid hsla(0,0%,4%,.1)
            border-radius: 0px 0px 5px 5px

          li
            &:not(.is-active)
              background-color: hsla(0,0%,4%,.05)

            a
              font-weight: 900

</style>