<template>
  <div class="columns is-vcentered">
    <div class="column is-half">
      <p v-if="skill.title" class="title is-size-5 is-uppercase is-bolder">{{skill.title}}</p>
      
      <p v-if="skill.description" :class="{ 'is-size-5': !skill.title }">{{skill.description}}</p>
    </div>

    <div class="column is-half">
      <div class="progress-container">
        <b-tooltip v-if="valueTop" type="is-info" :label="`Promedio: ${valueTop * 100} %`" always :style="{'margin-left': (valueTop * 100) + '%'}"></b-tooltip>

        <progress class="progress is-primary is-large is-marginless" :value="progressValue" max="1"></progress>

        <b-tooltip v-if="valueBottom" type="is-success" :label="`Empleable: ${valueBottom * 100} %`" always position="is-bottom" :style="{'margin-left': (valueBottom * 100) + '%'}"></b-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['skill', 'valueTop', 'valueBottom', 'progressValue']
  }
</script>

<style lang="scss" scoped>
.progress-container {
  position: relative;

  margin-top: 3rem;
  margin-bottom: 3rem; 

  & > span {
    position: absolute;

    &.is-bottom {
      bottom: -0.5rem;
    }

    &.is-top  {
      top: -0.5rem;
    }
  }
}
</style>