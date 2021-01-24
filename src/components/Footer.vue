<template>
    <v-footer
            dark
            padless
    >
        <v-card
                class="flex"
                flat

        >
            <v-card-title class="footer-top white">
                <img src="../../public/img/author.jpg" alt="" class="img-author-footer" />

                <a href="https://zeyura.github.io/" target="_blank" class="subheading">https://zeyura.github.io/</a>

                <v-spacer></v-spacer>

                <v-btn
                        v-for="(icon,i) in icons"
                        :key="i"
                        class="mx-2"
                        icon
                >
                    <a :href="icon.url" target="_blank" class="sozLink">
                    <v-icon size="32px">
                        {{ icon.name }}
                    </v-icon>
                    </a>
                </v-btn>
            </v-card-title>

            <v-card-text class="py-1 white--text text-center footer-bottom">
                {{ new Date().getFullYear() }} — Vuetify
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "footer",
        data: () => ({
            icons: [
                {name: 'mdi-github', url: 'https://github.com/zeyura'},
                {name: 'mdi-linkedin', url: 'https://www.linkedin.com/in/%D1%8E%D1%80%D0%B0-%D0%B7%D0%B5%D0%BB%D0%B5%D0%B7-4a48651b5/'},
                {name: 'mdi-facebook', url: 'https://www.facebook.com/zeyura/'}
            ],
        }),
    }
</script>

<style lang="scss" scoped>

    .v-sheet.v-card {
        border-radius: 0px;
    }

    .v-footer {
        border-top: 1px solid #999;
    }
    .footer-top {
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .v-btn.v-btn--icon , .subheading , .sozLink {
       color: #444;
        &:hover {
            color:#000;
        }
    }

    .subheading {
        font-size: 1.1rem;
    }

    .img-author-footer {
        width: 70px;
        border: 1px solid #666;
        border-radius: 50%;
        margin-right: 30px;
        margin-left: 10px;
    }

    .footer-bottom {
        background-color: #222;
    }

    @media (max-width: 550px) {

        .footer-top {
            padding: 10px;
        }

        .img-author-footer {
            margin-right: 20px;
        }

        .subheading {
            font-size: 1.0rem;
        }
    }

    @media (max-width: 479px) {

        .subheading {
            display: none;
        }
    }

</style>