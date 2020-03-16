export default {
  setTimezones(context, payload) {
    context.commit('SET_TIMEZONE', payload);
  },

  setList(context, payload) {
    context.commit('SET_LIST', payload);
  },

  updateCliente(context, payload) {
    context.commit('UPDATE_CLIENTE', payload);
  },
};
