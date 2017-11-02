<template>
  <div class="content">
    <header-plain></header-plain>
    
    <v-container grid-list-md>
      <v-layout row wrap>

        <v-flex xs3 v-for="(coder, index) in coders">
          <coder-tile :coder="coder"></coder-tile>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import HeaderPlain from '~/components/HeaderPlain.vue'

  export default {
    components: {
      HeaderPlain
    }
  }
</script>