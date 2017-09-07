<template>
  <div>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">
            <h1 class="title">
              Register an Account
            </h1>
            <div class="box">

              <div class="field">
                <label class="label">Email</label>
                <p class="control">
                  <input class="input" type="email" placeholder="Email">
                </p>
              </div>

              <div class="field">
                <label class="label">Contraseña</label>
                <p class="control">
                  <input class="input" type="password" placeholder="Password">
                </p>
              </div>

              <div class="field is-grouped is-grouped-right">
                <p class="control">
                  <a class="button is-primary">
                    Ingresar
                  </a>
                </p>
              </div>

            </div>
            <p class="has-text-centered">
              <a href="login.html">Login</a>
              |
              <a href="#">Need help?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout () {
    return 'guest'
  }
}
</script>

<style lang="scss">

</style>
