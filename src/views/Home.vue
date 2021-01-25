<template>
    <div class="cdn-box">

        <h1 class="page-title"></h1>

        <form @submit.prevent="submitHandler">
            <v-text-field
                    class="input-name"
                    v-model.trim="name"
                    :error-messages="nameErrors"
                    label="Name"
                    required
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
            >
            </v-text-field>

            <v-btn @click="submitHandler"
                   class="mr-4"
                   color="primary"
            >
                Search
            </v-btn>
            <v-btn @click="clear">
                Clear
            </v-btn>
        </form>

        <Loader v-if="loading" />

        <div class="packets-list-wrapper" v-if="!loading">
            <ul class="packets-list">
                <PacketsListItem
                        v-for="(p, index) in PACK"
                        :key="index"
                        :data=p
                />
            </ul>
        </div>

        <div class="paginator text-center" v-if="!loading && pages > 1">
            <v-pagination
                    v-model=page
                    :length=pages
                    :total-visible="7"
                    @input="pressNumber"

            ></v-pagination>
        </div>

        <div class="packetsCount" :class="{active: packetsCountShow}">
            Found: {{ PACKETS.length }}
        </div>

    </div>
</template>

<script>
    import PacketsListItem from '../components/PacketsListItem'
    import Loader from '../components/Loader'

    import {mapGetters} from 'vuex'
    import {validationMixin} from 'vuelidate'
    import {required} from 'vuelidate/lib/validators'

    export default {
        name: 'Home',
        components: {
            PacketsListItem,
            Loader
        },
        mixins: [validationMixin],
        validations: {
            name: {required},
        },
        data: () => ({
            loading: false,
            packets: [],
            name: '',
            page: 1,
            packetsCountShow: false

        }),
        async mounted() {
        },
        computed: {
            ...mapGetters(['PACKETS', 'ITEMS_IN_PAGE']),

            pages() {
                if (!this.PACKETS) return 0
                return Math.ceil(this.PACKETS.length / this.ITEMS_IN_PAGE)
            },

            PACK() {
                return this.PACKETS.filter((p, i) => {
                    let start = (this.page - 1) * this.ITEMS_IN_PAGE
                    let end = start + this.ITEMS_IN_PAGE
                    return i >= start && i < end
                })
            },

            nameErrors() {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.required && errors.push('Name is required')
                return errors
            }

        },
        methods: {

            async submitHandler() {
                if (this.$v.$invalid) {
                    this.$v.$touch();
                    return
                }

                this.loading = true
                this.packets = await this.$store.dispatch('getPackets', {
                    name: this.name
                });
                this.page = 1
                this.loading = false
                this.packetsCountShow = true
                setTimeout(() => {
                    this.packetsCountShow = false
                }, 2400)
            },

            clear() {
                this.$v.$reset()
                this.$store.commit('clearPackets')
                this.name = ''
                this.packetsCountShow = false
            },

            pressNumber(n) {
                this.page = n
            }

        }
    }
</script>

<style lang="scss" scoped>

    .page-title {
        margin-bottom: 25px;
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
        padding: 0;
        list-style: none;
    }

    .packetsCount {
        position: fixed;
        right: 20px;
        top: 80px;
        padding: 10px 15px;
        background-color: rgba(1, 1, 1, .8);
        color: white;
        transform: scale(0);
        transition: transform .2s;

        &.active {
            transform: scale(1);
        }
    }

    @media (max-width: 639px) {

        .packetsCount {
            top: 75px;
        }

    }

    @media (min-width: 1024px) {

        .packetsCount {
            top: 90px;
        }

    }

</style>