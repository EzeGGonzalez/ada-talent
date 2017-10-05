<template>
  <div>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">
            <h1 class="title">
              Ingresar
            </h1>

            <div class="box">
              <div class="box-login-form pt-5 px-5">
                <div class="field">
                  <label class="label">Email</label>
                  <p class="control">
                    <input v-model="credentials.email" class="input" type="email" placeholder="Email">
                  </p>
                </div>

                <div class="field">
                  <label class="label">Contraseña</label>
                  <p class="control">
                    <input v-model="credentials.password" class="input" type="password" placeholder="Password">
                  </p>
                </div>

                <div class="field is-grouped is-grouped-right mt-4">
                  <p class="control">
                    <a class="button is-primary" @click="login">
                      Ingresar
                    </a>
                  </p>
                </div>

                <p class="has-text-centered">
                  <a href="login.html">¿Olvidaste tu contraseña?</a>
                </p>
              </div>

              <div class="ask-for-demo mt-5 p-4 has-text-centered">
                <small>¿Todavía no te registraste?</small>
                <p class="mt-3">
                  ¿Quieres utilizar nuestro producto en tu empresa?
                  <a href="#">Solicitá una demo</a>
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('session/login', {
          email: this.credentials.email,
          password: this.credentials.password
        })

        this.$store.commit('alerts/addNotification', 'Iniciaste sesión correctamente.')
        this.$router.replace({ path: '/' })
      } catch (e) {
        this.$store.commit('alerts/addError', 'Usuario o contraseña incorrecta.')
      }
    }
  },
  layout () {
    return 'guest'
  },
  fetch ({ store, redirect }) {
    if (store.state.session.user) {
      return redirect('/')
    }
  }
}
</script>

<style lang="sass">
h1.title
  color: white

.box
  padding: 0

  .ask-for-demo
    border-radius: 0 0 5px 5px
    background-color: #f5f5f5
</style>
