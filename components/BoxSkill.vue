<template>
  <article class="tile is-child notification is-primary has-text-centered">
    <p class="title is-size-6 is-bolder">{{value | percentage}}</p>
    <p class="subtitle is-size-7 is-uppercase">{{title}}</p>
  </article>
</template>

<script>
export default {
  props: ['value', 'title']
}
</script>
