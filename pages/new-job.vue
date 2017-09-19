<template>
  <section class="section" id="new-job">
    <div class="container">

      <div class="columns">
        <div class="column is-5">
          <div class="box">
            <h2 class="is-size-3 is-uppercase is-bolder">Publicá una oferta</h2>
            <p class="is-size-5 mb-4">Si te interesa contratar a una de las coders de <span class="has-text-primary">Ada</span>, completá el siguiente formulario</p>

            <h2 class="is-size-4 is-uppercase is-bolder mb-4">Información de la oferta</h2>

            <form id="new-job-form" v-on:submit.prevent="onSubmit">
              <b-field label="Empresa">
                <b-input required></b-input>
              </b-field>

              <b-field label="Dirección">
                <b-input></b-input>
              </b-field>

              <b-field label="Descripción de tu empresa (y por qué trabajar con ustedes)">
                <b-input type="textarea" required></b-input>
              </b-field>

              <b-field label="CUIT">
                <b-input></b-input>
              </b-field>

              <b-field label="Habilidades técnicas más importantes para tu empresa:">
                <div class="block">
                  <div class="checkbox-wrapper" v-for="tech in techSkills">
                    <b-checkbox v-model="form.techSkills"
                      :native-value="tech">
                      {{tech}}
                    </b-checkbox>
                  </div>
                </div>
              </b-field>

              <b-field label="Habilidades socioemocionales más importantes para tu empresa">
                <div class="block">
                  <div class="checkbox-wrapper" v-for="life in lifeSkills">
                    <b-checkbox v-model="form.lifeSkills"
                      :native-value="life">
                      {{life}}
                    </b-checkbox>
                  </div>
                </div>
              </b-field>

              <b-field label="En caso ya tengas identificados los perfiles que quieras evaluar, escribe sus nombres aquí">
                  <b-input></b-input>
              </b-field>

              <b-field label="Contacto en la empresa (nombre y apellido)">
                  <b-input required></b-input>
              </b-field>

              <b-field label="Email de contacto">
                  <b-input type="email" required></b-input>
              </b-field>

              <b-field label="Teléfono de contacto">
                  <b-input></b-input>
              </b-field>

              <br>

              <div class="field">
                <b-checkbox v-model="form.acceptTerms">Sí, he leído y acepto los términos y condiciones propuestas por <span class="has-text-primary">Ada</span> (mostrados al lado derecho)</b-checkbox>
              </div>

              <div class="field">
                <b-checkbox v-model="form.acceptFee">Acepto el pago del fee de contratación a <span class="has-text-primary">Ada</span> en caso de contratar a una coder (más detalles en los Términos y Condiciones de la derecha)</b-checkbox>
              </div>

              <div class="field mt-5" v-if="form.acceptTerms && form.acceptFee">
                <div class="control">
                  <button type="submit" class="button is-primary is-fullwidth is-medium">
                    Enviar oferta
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>

        <div class="column is-7">
          <div class="box terms">
            <h3 class="is-size-3 is-uppercase is-bolder">términos y condiciones</h3>

            <p>Al enviar esta oferta de trabajo, tendrás que aceptar los términos y condiciones del uso del servicio, detallados a continuación:</p>

            <h5 class="is-size-5 is-uppercase is-bolder">tiempo de respuesta</h5>

            <p>
              Después de publicar la oferta laboral, <span class="has-text-primary">Ada</span> enviará los perfiles de la(s) postulante(s) al correo indicado como contacto en el formulario.
            </p>
            <p>
              Desde este momento, tendrás 5 días útiles para contactarte con la(s) postulante(s) y programar entrevista(s) con ella(s). Luego, 5 días útiles adicionales para hacer una propuesta laboral o programar una segunda entrevista.
            </p>
            <p>
              <span class="has-text-primary">Ada</span> hará seguimiento al proceso de selección. De no obtener respuesta de la empresa por más de 5 días útiles, <u>se asumirá que este proceso se detuvo</u>. El perfil de la(s) postulante(s) quedará libre nuevamente.
            </p>

            <h5 class="is-size-5 is-uppercase is-bolder">fee de contratación</h5>

            <p>
              Deberás evaluar a conciencia a la(s) candidata(s) interesada(s) en la vacante que publicaste. Si en este grupo encuentras a la(s) postulante(s) que buscas, deberás hacerle(s) una propuesta laboral formal.
            </p>
            <p>
              Si ella(s) acepta(n) tu oferta laboral, deberás pagar a <span class="has-text-primary">Ada</span> el Fee de Contratación. Este <u>equivale al 50% del primer mes de trabajo completo más I.V.A.</u> de cada contratada.
            </p>

            <h5 class="is-size-5 is-uppercase is-bolder">prioridad en las contrataciones</h5>

            <p>
              Las empresas que participaron del Talent Fest de <span class="has-text-primary">Ada</span> tienen prioridad en la contratación de las coders. Si hacen una oferta laboral <u>hasta una semana después</u> del término del Talent Fest, estarán eximidas de pagar el <i>Fee de Contratación</i>.
            </p>
            <p>
              Las empresas que se unen al proceso de contratación después del Talent Fest podrán hacer seguimiento al estado de las contrataciones de las coders en la plataforma.
            </p>

            <h5 class="is-size-5 is-uppercase is-bolder">rango salarial ofrecido</h5>

            <p>
              La empresa se compromete a hacer una propuesta laboral a la(s) postulante(s) con un salario equivalente o superior al del rango salarial escogido en el formulario. De lo contrario, <u>la oferta será rechazada</u>.
            </p>

            <h5 class="is-size-5 is-uppercase is-bolder">prioridad en las contrataciones</h5>

            <p>
              Dentro del plan de Monitoreo y Evaluación de <span class="has-text-primary">Ada</span>, está contemplado hacer encuestas de seguimiento a las empresas para evaluar el desempeño de la(s) contratada(s) en sus centros laborales.
            </p>
            <p>
              Al aceptar estos Términos y Condiciones, deberás cooperar con este seguimiento, brindando la información requerida en estas encuestas.
            </p>
            <p>
              <span class="has-text-primary">Ada</span> tendrá potestad de comunicar las evaluaciones realizadas por las empresas a la(s) alumna(s) contratada(s) y de mostrar esta información de manera agregada, donde considere pertinente. Para hacer pública información específica (ej. hacer una cita textual), <span class="has-text-primary">Ada</span> pedirá permiso a quien corresponda.
            </p>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

export default {
  name: 'new-job',
  head () {
    return {
      title: 'Subí una oferta'
    }
  },
  methods: {
    onSubmit () {
      document.getElementById('new-job-form').reset()
      this.$store.commit('alerts/addNotification', 'Mensaje enviado exitosamente.')
      window.scrollTo(0, 0)
      this.form = {
        acceptFee: false,
        acceptTerms: false
      }
    }
  },
  data () {
    return {
      techSkills: [
        'Ajax',
        'CSS',
        'Git',
        'HTML5',
        'JavaScript',
        'ReactJS',
        'VueJS',
        'AngularJS',
        'NodeJS',
        'jQuery',
        'JSON',
        'User Testing',
        'UX Design'
      ],
      lifeSkills: [
        'Comunicación',
        'Trabajo en equipo',
        'Excelencia',
        'Manejo de estrés',
        'Asistencia y puntualidad'
      ],
      form: {
        acceptFee: false,
        acceptTerms: false
      }
    }
  }
}
</script>

<style lang="sass">
  .field:not(:last-child)
    margin-bottom: 1.5rem

    .checkbox-wrapper:not(:last-child)
      margin-bottom: 0.5rem

  .terms
    h3
      margin-bottom: 1.25rem
    h5
      margin-bottom: 1.25rem
    p
      margin-bottom: 1rem
</style>