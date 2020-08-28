import { getSearchData } from "network/search";
import { baseCart, removeCart, buyGoods } from "network/cart"

import Vue from "vue"
export default {
  searchHomeNav(context, fruitsImg) {
    let regular = /[类|果]\/([\u4E00-\u9FA5]*?).jpg/;
    let result = regular.exec(fruitsImg);
    getSearchData(result[1]).then(res => context.commit('updateSearch', res));
  },

  searchHomeBar(context, fruitsStr) {
    getSearchData(fruitsStr).then(res => context.commit('updateSearch', res));
  },

  isCart(context, { goods, count, site, isFinish }) {
    let TAG = context.state.cart.find(item => item.id == goods.id);
    if (isFinish) {
      baseCart('addCart', goods, count, site, isFinish).then(res => context.commit('setCart', res))
    } else if (TAG) {
      baseCart('setCount', TAG, TAG.count + count).then(res => context.commit('setCart', res));
    } else {
      baseCart('addCart', goods, count, site, isFinish).then(res => context.commit('setCart', res))
    }
  },

  buyGoods(context, goods) {
    buyGoods(goods).then(res => context.commit('setCart', res))
  },

  setGoodsCount(context, { goods, count }) {
    baseCart('setCount', goods, count).then(res => context.commit('setCart', res));
  },

  removeCart(context, goods) {
    removeCart(goods).then(res => { context.commit('setCart', res) })
  }
}