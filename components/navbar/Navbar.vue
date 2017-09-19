<template>
  <nav class="navbar">
    <div class="container">
        <div class="navbar-item is-one-third column has-text-left is-paddingless">
          <nuxt-link v-if="this.$route.path !== '/'" to="/" exact class="is-primary is-outlined is-arrowed left">
            <span class="text">Regresar</span>
          </nuxt-link>
        </div>

        <div class="navbar-item navbar-brand is-one-third column has-text-centered">
          <a href="/">
            <img src="/logo.png" alt="Ada">
          </a>
        </div>

        <div class="navbar-item is-one-third column has-text-right is-paddingless">
          <nuxt-link :to="{ name: 'new-job' }" class="button is-medium is-primary is-uppercase">
            <span class="is-bolder">Subí una oferta</span>
            <!-- <b-icon pack="fa" icon="upload"></b-icon> -->
          </nuxt-link>
        </div>
    </div>
  </nav>
</template>

<script></script>

<style lang="scss" scoped>
.navbar {
  height: 5rem;
  box-shadow: 0 2px 3px hsla(0,0%,4%,.1), 0 0 0 1px hsla(0,0%,4%,.1);

  & > .container {
    align-items: center;
  }

  .navbar-item {
    img {
      max-height: 3rem;
    }

    a {
      &.button {
        font-weight: 600;
      }
    }
  }
}
</style>
