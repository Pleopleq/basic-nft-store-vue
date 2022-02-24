import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  namespace: true,
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  getters,
  actions,
  mutations,
};
