import Vue from 'vue';
import {{ name }} from '../src/{{name}}.vue';

Vue.component('{{ name }}', {{ name }});

var vm = new Vue({
    el: '#app',
    data: function(){
        return {
            title: '{{ name }}',
            value: Date.now()
        }
    }
})