<template>
    <li class="packets-list-item" >
        <h3 class="name">{{data.name}}</h3>
        <h5 class="description">{{data.description}}</h5>
        <span class="lastversion">Last version: {{data.lastversion}}</span>

        <v-col cols="auto">
            <v-dialog
                    transition="dialog-top-transition"
                    max-width="600"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            color="primary"
                            v-bind="attrs"
                            v-on="on"
                    >Details</v-btn>
                </template>
                <template v-slot:default="dialog">
                    <v-card>
                        <v-toolbar
                                color="primary"
                                dark
                                class="text-h5"
                        >{{data.name}}</v-toolbar>

                        <v-card-text>
                            <div class="text-h6 pa-0 description">{{data.description}}</div>


                            <div class="other">
                                <p><strong>Author:</strong> {{data.author}}</p>
                                <p><strong>Homepage:</strong> <a :href='data.homepage' target="_blank">{{data.homepage}}</a> </p>
                                <p><strong>Github:</strong> <a :href='data.github' target="_blank">{{data.github}}</a> </p>
                                <p><strong>Mainfile:</strong> {{data.mainfile}}</p>
                                <p><strong>Created:</strong> {{created}}</p>

                            </div>

                            <div class="text-h6 pa-0 lastversion">Last version: {{data.lastversion}}</div>


                        </v-card-text>

                        <v-card-actions class="justify-end">
                            <v-btn
                                    text
                                    @click="dialog.value = false"
                            >Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </v-col>

    </li>

</template>

<script>
   // import Modal from './Modal'

    export default {
        name: "packets-list-item",
        components: {
           // Modal
        },
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        data: () => ({

        }),
        computed: {
            created() {
                let t = new Date(this.data.meta.created)
                return t.toLocaleString()
            }
        }

    }
</script>

<style lang="scss" scoped>

    .packets-list-item {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px dashed #bbb;

        .name {
            font-size: 20px;
            color: #333;
            cursor: pointer;
            margin-bottom: 5px  ;
        }

        .description {
            font-weight: normal;
            font-size: 90%;
            margin-bottom: 10px;
        }

        .lastversion {
            font-size: 80%;
            opacity: .75;
        }
    }

</style>