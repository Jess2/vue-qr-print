import Vue from 'vue';
import App from './App.vue';
import VueQRPrint from './index.js';

Vue.use(VueQRPrint);

new Vue({
  el: '#app',
  render: h => h(App),
});
