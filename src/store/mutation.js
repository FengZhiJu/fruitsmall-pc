import Vue from "vue"
export default {

  updateSearch(state, newSearchGoods) {
    state.searchGoods = Array.isArray(newSearchGoods) ? newSearchGoods : [newSearchGoods];
  },

  setCart(state, cart) {
    state.cart = cart.filter(item => !item.isFinish);
    state.order = cart.filter(item => item.isFinish);
  },

  reverseItem(state, goods) {
    goods.tick = !goods.tick
  },

  setAll(state, current) {
    state.cart.forEach(item => item.tick = current)
  },

  setLogin(state, user) {
    state.user = user;
    state.cart = user.cart.filter(item => !item.isFinish)
    state.order = user.cart.filter(item => item.isFinish);
  },

  logout(state) {
    state.user = {};
    state.cart = [];
    state.order = [];
  }
}