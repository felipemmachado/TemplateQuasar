import axios from 'axios';
import { Dialog } from 'quasar';
import local from './local-storage';

// Add a request interceptor
axios.interceptors.request.use((configDefault) => {
  const config = configDefault;
  let sessao = null;
  if (sessionStorage.getItem(local.localSessao) != null) {
    sessao = JSON.parse(sessionStorage.getItem(local.localSessao));
    config.headers.Authorization = `Bearer ${sessao.token}`;
    config.headers['Content-Type'] = 'application/json';
  }
  return config;
}, (error) => Promise.reject(error));

// Add a response interceptor
axios.interceptors.response.use((response) => response, (error) => {
  let mesage = '';
  if (!error.response) {
    mesage = 'Você está sem internet.';
  } else if (error.request.status === 401) {
    this.$router.replace({ name: 'login' });
  } else if (error.request.status === 500
      || error.request.status === 0
      || error.request.status === 400
      || error.request.status === 404) {
    mesage = error.Error;
  }

  Dialog.create({
    title: '<div class="text-negative"> Algo deu errado.<div>',
    message: mesage,
    html: true,
  });
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axios;
