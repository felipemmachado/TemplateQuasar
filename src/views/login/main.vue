<template>
  <div>
    <q-layout>
      <q-page-container>
        <q-page class="window-height window-width row justify-center items-center">
          <div class="column animated fadeInDown">
            <div class="row">
              <h3 class="text-center text-negative" icon="error" v-if="clienteNaoIdentificado">
                <q-icon style="font-size:1.3em" name="error_outline" />
                <br/> Cliente não identificado.
              </h3>
              <q-form v-if="!clienteNaoIdentificado && exibeForm"
                      @submit="clickLogin"
                      :greedy="true"
                      class="q-gutter-m d">
                <img class="q-pb-lg" style="width: 22em"  src="../../assets/stories.png" />
                <q-input
                  outlined
                  v-model="login"
                  ref="login"
                  class="q-pb-lg"
                  type="text"
                  :rules="[val => !!val || 'O login é obrigatório']"
                  label="login">
                    <template v-slot:append>
                        <q-icon name="account_circle" />
                    </template>
                </q-input>

                <q-input
                  v-model="password"
                  outlined
                  ref="password"
                  :rules="[val => !!val || 'A senha é obrigatório']"
                  class="q-pb-xl"
                  type="password"
                  label="senha">
                    <template v-slot:append>
                        <q-icon name="vpn_key" />
                    </template>
                </q-input>

                <q-btn color="light-blue-7"
                        size="lg"
                        type="submit"
                        :loading="entrando"
                        class="full-width"
                        label="Entrar">
                </q-btn>
              </q-form>
            </div>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import isNil from 'lodash/isNil';
import axios from '../../configs/axios';
import urlService from '../../services/url';

export default {
  props: ['hash'],

  data() {
    return {
      login: '',
      password: '',
      clienteNaoIdentificado: false,
      load: false,
      exibeForm: false,
      entrando: false,
    };
  },

  computed: {
    config() {
      return this.$store.state.sessao.config;
    },
  },

  mounted() {
    if (!isNil(this.hash)) {
      this.$q.loading.show({ message: 'Carregando...' });
      axios.get(urlService.baseURL(`application/${this.hash}`)).then((response) => {
        this.$q.loading.hide();
        this.load = false;
        if (response.data.customer != null) {
          this.$store.dispatch('setConfig', response.data);
          this.$router.push({ name: 'login' });
          this.clienteNaoIdentificado = false;
          this.exibeForm = true;
        } else {
          this.clienteNaoIdentificado = true;
        }
      });
    } else if (this.config == null) {
      this.clienteNaoIdentificado = true;
    } else {
      this.clienteNaoIdentificado = false;
      this.exibeForm = true;
    }
  },
  methods: {

    clickLogin() {
      const loginPass = this.$refs.password.validate();
      const passwordPass = this.$refs.login.validate();
      if (!loginPass || !passwordPass) {
        this.$q.notify({
          type: 'negative',
          position: 'top-right',
          message: 'Corrija os campos em vermelho.',
        });
      } else {
        this.efatuaLogin();
      }
    },

    efatuaLogin() {
      const post = {
        idCustomerApplication: this.config.customer.id,
        login: this.login,
        password: this.password,
      };
      this.entrando = true;
      axios.post(urlService.baseURL('login'), post).then((response) => {
        this.entrando = false;
        if (response.data.success) {
          this.$store.dispatch('setSession', response.data.data);
          this.$router.push({ name: 'inicio' });
        } else {
          this.$q.notify({
            type: 'negative',
            position: 'top-right',
            message: response.data.message,
          });
        }
      });
    },
  },
};
</script>

<style>
.q-card {
  min-width: 22em;
}
</style>
