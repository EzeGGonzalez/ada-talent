<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand nav-center">
        <a class="navbar-item" href="#">
          <img src="/logo.png" alt="Ada">
        </a>
      </div>
    </div>
  </nav>
</template>

<script></script>

<style lang="scss" scoped>
.navbar {
  height: 5rem;
  box-shadow: 0 2px 3px hsla(0,0%,4%,.1), 0 0 0 1px hsla(0,0%,4%,.1);

  .navbar-item {
    img {
      max-height: 3rem;
    }
  }
}
</style>
