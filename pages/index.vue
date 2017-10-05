<template>
  <section class="section" id="coders">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <div class="box is-paddingless">
            <a href="/proceso" class="button is-medium is-primary is-fullwidth">
              <span class="text">Conocé nuestro proceso<br>de contratación</span>
            </a>
          </div>

          <div class="box">
            <p class="title is-size-5 is-uppercase is-bolder">Skills destacados:</p>

            <div class="field" v-for="(skill, index) in skills">
              <b-checkbox v-model="filters.skills" :native-value="skill">{{skill}}</b-checkbox>
            </div>
          </div>
        </div>

        <div class="column is-9">
          <div class="box">
            <p class="is-size-4 is-uppercase is-bolder">
              Frontend Developers
            </p>
            <p>
              Expone la data y habilita las funcionalidades que un site necesite, interactuando mucho con las UIDev. Usan catálogos de servicio para extraer data de bases de datos de terceros.
            </p>

            <!-- <hr>

            <p class="is-size-5 is-uppercase is-bolder">
              Salario sugerido
            </p>

            <p>
              Estos montos son sugeridos en base a un análisis hecho con los salarios que recibieron nuestras estudiantes en el último proceso de inserción laboral hecho en cada país.
            </p> -->
          </div>

          <div class="box" v-for="(coder, index) in filteredCoders">
            <coder-tile :coder="coder"></coder-tile>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import Logo from '~/components/Logo.vue'
import CoderTile from '~/components/CoderTile.vue'

export default {
  data () {
    return {
      filters: { skills: [] }
    }
  },
  components: {
    Logo,
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

<style lang="sass">

.box
  .is-medium
    height: auto

.tile
  padding: 1rem

.title:not(.is-spaced)+.subtitle
  margin-top: -1rem

</style>
