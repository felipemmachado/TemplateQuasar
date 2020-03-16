import Vue from 'vue';
import App from './views/main.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './quasar';
import components from './components/main';
import filters from './filters/main';
import local from './configs/local-storage';

Vue.config.productionTip = false;
Object.keys(components).forEach((key) => Vue.component(key, components[key]));
Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]));

new Vue({
  router,
  store,
  render: (h) => h(App),
  computed: {
    config() {
      return this.$store.state.sessao.config;
    },
    sessao() {
      return this.$store.state.sessao.user;
    },
  },
  beforeMount() {
    if (this.config == null) {
      if (sessionStorage.getItem(local.localConfig) != null) {
        const config = JSON.parse(sessionStorage.getItem(local.localConfig));
        this.$store.dispatch('setConfig', config);
      }
    }
    if (this.sessao == null) {
      // se existir config do cliente
      if (sessionStorage.getItem(local.localSessao) != null) {
        const { token } = JSON.parse(sessionStorage.getItem(local.localSessao));
        this.$store.dispatch('setSession', token);
      }
    }
  },
}).$mount('#app');
