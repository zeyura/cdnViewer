<template>
    <div class="cdn-box">

        <h1 class="page-title">CDN Packets</h1>

        <form @submit.prevent="submitHandler">
            <v-text-field
                    class="input-name"
                    v-model="name"
                    :error-messages="nameErrors"
                    label="Name"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
            >
            </v-text-field>

            <v-btn @click="submitHandler"
                    class="mr-4"
            >
                Submit
            </v-btn>
            <v-btn @click="clear">
                Clear
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
    import { validationMixin } from 'vuelidate'
    import { required } from 'vuelidate/lib/validators'

    export default {
        name: 'Home',
        components: {},
        mixins: [validationMixin],
        validations: {
            name: { required },
        },
        data: () => ({
            packets: [],
            name: ''

        }),
        async mounted() {

        },
        computed: {
            ...mapGetters(['PACKETS']),

           // this.store.dispatch('getPackets')

            nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.required && errors.push('Name is required')
                return errors
            }

        },
        methods: {

            async submitHandler() {
                if(this.$v.$invalid) { // if Form is in Invalid
                    this.$v.$touch();
                    return
                }
                this.packets = await this.$store.dispatch('getPackets', {
                    name: this.name
                });
            },

            clear() {
                this.$v.$reset()
                this.$store.commit('clearPackets')
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

    .input-name {
        margin-bottom: 10px;

        input {
            font-size: 50px;
        }
    }

    .packets-list-wrapper {
        margin: 30px 0;
    }

    .packets-list {

    }

</style>