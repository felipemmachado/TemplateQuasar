import Vue from 'vue';
import Vuex from 'vuex';
import sessao from './sessao/main';
import cliente from './cliente/main';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sessao,
    cliente,
  },
});
