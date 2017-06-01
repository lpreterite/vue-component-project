<template>
    <div class="{{ name }}" @click="changed">
        <h1>{{ name }} is vue component!</h1>
        <p>value: {{ value }}</p>
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
        changed(){
            this.$emit('input', Date.now());
        }
    }
}
</script>