<template>
    <li class="packets-list-item" >
        <h3 class="name">{{data.name}}</h3>
        <h5 class="description">{{data.description}}</h5>
        <span class="lastversion">Last version: {{data.lastversion}}</span>
    </li>
</template>

<script>
    export default {
        name: "packets-list-item",
        props: {
            data: {
                type: Object,
                required: true
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