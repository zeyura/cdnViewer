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

                <h1 class="site-title">CDN Packages Viewer</h1>

            </div>

            <v-spacer></v-spacer>

        </v-app-bar>

        <v-main>

            <Home/>

        </v-main>

        <FooterComponent />

    </v-app>
</template>

<script>
    import Home from './views/Home';
    import FooterComponent from './components/FooterComponent'

    export default {
        name: 'App',

        components: {
            Home, FooterComponent
        },

        data: () => ({}),
    };
</script>

<style lang="scss" scoped>

    .v-main {
        width: 600px;
        margin: auto;
    }

    .cdn-box {
        margin-top: 80px;
        margin-bottom: 60px;
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
            margin-bottom: 50px;
        }
    }

</style>