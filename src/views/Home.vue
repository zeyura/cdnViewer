<template>
    <div class="cdn-box">

        <h1 class="page-title">CDN Packets</h1>

        <form>
            <v-text-field
                    v-model="name"
                    :error-messages="nameErrors"
                    label="enter name"
                    required
            >
            </v-text-field>

            <v-btn
                    class="mr-4"
                    @click="submit"
            >
                submit
            </v-btn>
            <v-btn @click="clear">
                clear
            </v-btn>
        </form>

        <ul class="packets-list">

        </ul>

    </div>
</template>

<script>
    // @ is an alias to /src
    //import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {},
        data: () => ({}),
        async mounted() {

        },
        computed: {},
        methods: {}
    }
</script>

<style lang="scss" scoped>

    .page-title {
        margin-bottom: 25px;
    }

    .cdn-box {
        margin-top: 100px;
    }

    .packets-list {

    }

</style>