<template>
    <div class="cdn-box">

        <h1 class="page-title">CDN Packets</h1>

        <form @submit.prevent="submitHandler">
            <v-text-field
                    v-model="name"
                    label="enter name"
                    required

                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
            >
            </v-text-field>

            <v-btn @click="submitHandler"
                    class="mr-4"
            >
                submit
            </v-btn>
            <v-btn @click="clear">
                clear
            </v-btn>
        </form>

        <div class="packets-list-wrapper">
            <ul class="packets-list">
                <li :key="" v-for="p in PACKETS" >{{p.name}}</li>
            </ul>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'Home',
        components: {},
        data: () => ({
            packets: [],
            name: 'lod'

        }),
        async mounted() {

            if( this.packets.length ) {
               // this.Categories = this.categories;
            } else {
                this.packets = await this.$store.dispatch('getPackets', {
                   name: this.name
                });
            }

        },
        computed: {
            ...mapGetters(['PACKETS']),

           // this.store.dispatch('getPackets')

        },
        methods: {

            async submitHandler() {

                this.packets = await this.$store.dispatch('getPackets', {
                    name: this.name
                });


            },

            clear() {
                this.name = ''
            }

        }
    }
</script>

<style lang="scss" scoped>

    .page-title {
        margin-bottom: 25px;
    }

    .cdn-box {
        margin-top: 100px;
    }

    .packets-list-wrapper {
        margin: 30px 0;
    }

    .packets-list {

    }

</style>