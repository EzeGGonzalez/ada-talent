<template>
  <section class="section" id="coders">
    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <div class="box has-text-left">
            <p class="title is-size-5 is-uppercase is-bolder">¿Cómo contrato?</p>

            <p>
              Entiende nuestro proceso de contratación.
            </p>
          </div>

          <div class="box">
            <h2>Hello World</h2>
          </div>
        </div>

        <div class="column is-8">
          <div class="box">
            <p class="is-size-4 is-uppercase is-bolder">
              Frontend Developers
            </p>
            <p>
              Expone la data y habilita las funcionalidades que un site necesite, interactuando mucho con las UIDev. Usan catálogos de servicio para extraer data de bases de datos de terceros.
            </p>

            <br /><br />

            <p class="is-size-5 is-uppercase is-bolder">
              Salario sugerido
            </p>

            <p>
              Estos montos son sugeridos en base a un análisis hecho con los salarios que recibieron nuestras estudiantes en el último proceso de inserción laboral hecho en cada país.
            </p>
          </div>

          <div class="box" v-for="(coder, index) in coders">
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
  components: {
    Logo,
    CoderTile
  },
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { coders: data }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style lang="scss">
.tile {
  padding: 1rem;
}

.title:not(.is-spaced)+.subtitle {
  margin-top: -1rem;
}
</style>
