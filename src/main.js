import Vue from 'vue';
import App from './App.vue';
import VueQRPrint from './index.js';
import VueQrcode from 'vue-qrcode';

Vue.use(VueQRPrint);
Vue.component('vue-qr-code', VueQrcode);

new Vue({
  el: '#app',
  render: h => h(App),
});
