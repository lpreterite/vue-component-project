import Vue from 'vue';
import component from '../src/';

Vue.component('{{ name }}', component);

var vm = new Vue({
    el: '#app',
    data: function(){
        return {
            title: '{{ name }}',
            value: Date.now().toString()
        }
    }
})