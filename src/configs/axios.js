import { axios } from 'axios';
import local from './local-storage';

// Add a request interceptor
axios.interceptors.request.use((configDefault) => {
  const config = configDefault;

  // Do something before request is sent
  let sessao = null;

  if (sessionStorage.getItem(local.localSession) != null) {
    sessao = JSON.parse(sessionStorage.getItem(local.localSession));
    // config.headers.push({'Authorization': sessao.token});
    config.headers.Authorization = sessao.token;
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
}, (error) => Promise.reject(error));

// Add a response interceptor
axios.interceptors.response.use((response) => {
  // não autorizado
  if (response.status === 401) {
    this.$router.replace({ name: 'login' });
  }

  // internal server erro
  if (response.status === 500
    || response.status === 0
    || response.status === 400
    || response.status === 404) {
    console.log('error', response);
  }
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
},
(error) => {
  // $vue.$notify.loadOut();

  // não autorizado
  if (error.request.status === 401) {
    // $vue._sair();
    this.$router.replace({ name: 'login' });
  }

  // internal server erro
  if (error.request.status === 500
      || error.request.status === 0
      || error.request.status === 400
      || error.request.status === 404) {
    // $vue.$notify.erro(error.request, 'request');
  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axios;
