<template>
  <header id="skew" class="elevation-7">
    <v-container fill-height>
      <v-layout align-center class="white--text">
        <v-flex>
          <h3 class="display-2">Curabitur a felis in nunc fringilla tristique.</h3>
          <h4 class="headline">Nulla consequat massa quis enim. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</h4>
        </v-flex>
      </v-layout>
    </v-container>
  </header>
</template>

<style>

header#skew {
  height: 314px;
  background-color: #1976d2;
  background: linear-gradient(145deg,#99224A,#E15B91);
  background-image: url('/static/background.jpg');
  background-size: cover;
  /*clip-path: polygon( 0 0, 100% 0, 100% calc(100% - 5vw), 0 100% );*/
  margin-top: -64px;
}

header h3, header h4 {
  text-shadow: 1px 1px #212121;
}

</style>