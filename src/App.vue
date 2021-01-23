<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main >

        <Home />

    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home';

export default {
  name: 'App',

  components: {
      Home
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>

  .v-main {
    width: 600px;
    margin: auto;
  }







</style>