import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';

Vue.use(VueResource);
Vue.config.productionTip = false;

sync(store, router);

new Vue({
	store,
	router,
  render: h => h(App),
}).$mount('#app');
