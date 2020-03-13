import jwt from 'jwt-decode';
import storage from '../../configs/local-storage';

export default {
  SET_SESSION(state, token) {
    if (token == null) {
      sessionStorage.removeItem(storage.localSession);
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
      sessionStorage.setItem(storage.localSession, string);
    }
  },

  SET_BASE_URL(state, baseURL) {
    const string = JSON.stringify(baseURL);
    sessionStorage.setItem(storage.localBaseURL, string);
    state.baseURL = baseURL;
  },


  SET_CONFIG(state, config) {
    console.log('set', config);

    const string = JSON.stringify(config);
    sessionStorage.setItem(storage.localConfig, string);
    state.config = config;
  },
};
