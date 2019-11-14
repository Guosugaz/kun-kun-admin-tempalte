import Vue from 'vue';
import './plugins';
import router from './router';
import store from './store';
import "@/assets/style/index.less";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h("router-view")
}).$mount('#app');
