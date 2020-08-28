import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutation";

Vue.use(Vuex);

const state = {
  cart: [],
  order: [],
  searchGoods: [],
  user: {},
};

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});

export default store;
