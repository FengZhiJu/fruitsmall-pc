export default {
  isCheckAll(state, getters) {
    return state.cart.find((item) => {
      return !item.tick;
    })
      ? false
      : true;
  },

  getCart(state, getters) {
    return state.cart;
  },

  tickGoods(state, getters) {
    return state.cart.filter((item) => !item.isFinish && item.tick);
  },

  totalPrice(state, getters) {
    let total = 0;
    state.cart.forEach((item) => {
      let discount = item.decorate ? 0.6 : 1;
      item.totalPrice = (item.price * item.count * discount).toFixed(2);
      if (item.tick) total += parseFloat(item.totalPrice);
    });
    return total.toFixed(2);
  },
};
