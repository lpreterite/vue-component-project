<template>
    <div class="{{ name }}">
        <p>value: \{{ value }}<button @click="change">change</button></p>
    </div>
</template>
<style{{#sass}} lang="scss"{{/sass}} scoped>
    .{{ name }}{
        padding: 1em;
        background: #eee;
    }
</style>
<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    data(){
        return {
        }
    },
    mounted(){
        console.log('init {{ name }}');
    },
    beforeDestroy: function(){
        console.log('destroy {{ name }}');
    },
    methods:{
        change(){
            this.$emit('input', Date.now().toString());
        }
    }
}
</script>