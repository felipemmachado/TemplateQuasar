import Vue from 'vue';
import App from './views/main.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './quasar';
import components from './components/main';
import filters from './filters/main';

Vue.config.productionTip = false;
Object.keys(components).forEach((key) => Vue.component(key, components[key]));
Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
