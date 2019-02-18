import Vue from 'vue'
import App from './App.vue'
import Skills from './Skills.vue'

new Vue({
  el: '#app',
  ...App
});

new Vue({
  el: '#skills__holder',
  ...Skills
})
