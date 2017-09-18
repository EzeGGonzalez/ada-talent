<template>
  <div class="coder-profile-links">
    <a :href="coder.github" class="is-primary is-outlined">
      <b-icon pack="fa" icon="github"></b-icon>

      <span>Github</span>
    </a>

    <a :href="coder.linkedin" class="is-primary is-outlined">
      <b-icon pack="fa" icon="linkedin-square"></b-icon>

      <span>LinkedIn</span>
    </a>

    <a v-if="coder.portfolio" :href="coder.portfolio" class="is-primary is-outlined">
      <b-icon pack="fa" icon="link"></b-icon>

      <span>Portfolio</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'coder-profile-links',
    props: ['coder']
  }
</script>

<style lang="scss">
  .coder-profile-links {
    a {
      display: block;

      .icon {
        margin-right: 0.5rem;
      }

      &:not(:last-child) {
        margin-bottom: 0.75rem;
      }
    }
  }
</style>