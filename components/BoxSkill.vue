<template>
  <article class="tile is-child notification is-primary is-outlined has-text-centered">
    <p v-if="value" class="title is-size-6 is-bolder">{{value | percentage}}</p>
    <p v-if="valueText" class="title is-size-6 is-bolder is-uppercase">{{valueText}}</p>
    <p class="subtitle is-size-7 is-uppercase">{{title}}</p>
  </article>
</template>

<script>
export default {
  props: ['value', 'valueText', 'title']
}
</script>
