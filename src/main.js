import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import VueRouter from 'vue-router'
import iziToast from 'izitoast'
let VueProtoType = new Vue();
Vue.prototype.$eventHandelar = VueProtoType;
Vue.prototype.$iziToast = iziToast;

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
}).$mount('#app');