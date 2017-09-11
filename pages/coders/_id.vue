<template>
  <section class="section" id="coder">
    
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <div class="box has-text-left">
            <figure class="image">
              <img :src="`/api/image/${coder.photo.thumbnail}`" :alt="coder.fullname">
            </figure>
            
            <p class="title is-size-5 is-uppercase is-bolder">{{coder.fullname}}</p>
          </div>
        </div>

        <div class="column is-9">
          <div class="box">
            {{coder.skills}}
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'coder',

  async asyncData ({ params, error }) {
    let { data: coder } = await axios.get(`/api/users/${params.id}`)
    return { coder }
  },

  head () {
    return {
      title: `User: ${this.coder.fullname}`
    }
  }
}
</script>