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

        <h1 class="site-title">CDN Packets Viewer</h1>

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

  .cdn-box {
    margin-top: 100px;
  }

  .site-title {
    font-size: 21px;
    letter-spacing: 1px;
    color: #cff0ff;
    margin-left: 10px;
  }

  @media (max-width: 639px) {
    .v-main {
      width: 92%;
    }
    .cdn-box {
      margin-top: 50px;
    }
  }

</style>