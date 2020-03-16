import jwt from 'jwt-decode';
import storage from '../../configs/local-storage';

export default {
  SET_SESSION(state, token) {
    if (token == null) {
      sessionStorage.removeItem(storage.localSessao);
      state.user = null;
    } else {
      const dados = jwt(token);
      const user = {
        token,
        id: dados.id,
        nome: dados.name,
        login: dados.login,
        id_customer_application: dados.id_customer_application,
        hash_customer_application: dados.hash_customer_application,
        // exp: dados.exp,
        role: dados.role,
      };

      state.user = user;

      const string = JSON.stringify(user);
      sessionStorage.setItem(storage.localSessao, string);
    }
  },

  SET_CONFIG(state, config) {
    const string = JSON.stringify(config);
    sessionStorage.setItem(storage.localConfig, string);
    state.config = config;
  },
};
