export default {
  setSession(context, payload) {
    context.commit('SET_SESSION', payload);
  },

  setConfig(context, payload) {
    context.commit('SET_CONFIG', payload);
  },
};
