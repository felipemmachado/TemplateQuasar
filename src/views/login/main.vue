<template>
  <div>
    <q-layout>
      <q-page-container>
        <q-page class="window-height window-width row justify-center items-center">
          <div class="column animated fadeInDown">
            <div class="row">
              <q-form class="q-gutter-m d">
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
                        @click="clickLogin"
                        class="full-width"
                        label="Entrar" />
              </q-form>
            </div>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>

export default {
  data() {
    return {
      login: '',
      password: '',
    };
  },
  methods: {
    clickLogin() {
      const loginPass = this.$refs.password.validate();
      const passwordPass = this.$refs.login.validate();
      if (!loginPass && !passwordPass) {
        this.$q.notify({
          type: 'negative',
          position: 'top-right',
          message: 'Corrija os campos em vermelho.',
        });
      }
    },
  },
};
</script>

<style>
.q-card {
  min-width: 22em;
}
</style>
