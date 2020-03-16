export default {
  SET_TIMEZONE(state, list) {
    state.timezones = list;
  },

  SET_LIST(state, list) {
    state.list = list;
  },

  UPDATE_CLIENTE(state, cliente) {
    let idx = -1;
    state.list.map((item, index) => {
      if (cliente.id === item.id) {
        idx = index;
      }
      return item;
    });

    if (idx === -1) {
      state.list.push(cliente);
    } else {
      state.list[idx] = cliente;
    }
  },
};
