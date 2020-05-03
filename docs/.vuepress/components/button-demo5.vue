<template>
    <div>
        <funk-button :loading="true">加载按钮</funk-button>
    </div>
</template>

<script>
import Button from "../../../src/button";

export default {
    components: {
        "funk-button": Button
    },

    computed: {},

    data() {
        return {};
    },

    created() {},

    mounted() {},

    methods: {}
};
</script>
<style lang='scss' scoped>
</style>