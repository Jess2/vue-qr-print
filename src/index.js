import qrPrint from './components/QrPrint.vue';

const QR = {
  install (Vue) {
    Vue.component(qrPrint.name, qrPrint);
  }
};
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(QR);
}
export default QR;
