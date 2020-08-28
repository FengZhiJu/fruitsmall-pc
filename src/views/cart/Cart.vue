<!--  -->
<template>
  <div class="cart">
    <full-page>
      <div class="content">
        <div class="if" v-if="this.$store.state.cart.length > 0">
          <cart-head></cart-head>
          <cart-goods></cart-goods>
          <cart-floor></cart-floor>
        </div>
        <div class="else" v-else>
          <cart-null></cart-null>
        </div>
        <goods :goodsList="goodsList" title='为您推荐'></goods>
      </div>
    </full-page>
  </div>
</template>

<script>
import { elseGoods } from "network/cart";

import FullPage from "components/fullpage/FullPage";
import Goods from "components/goods/Goods";

import CartHead from "./children/CartHead";
import CartGoods from "./children/CartGoods";
import CartNull from "./children/CartNull";
import CartFloor from "./children/CartFloor";

export default {
  components: {
    FullPage,
    Goods,
    CartHead,
    CartGoods,
    CartNull,
    CartFloor
  },
  data() {
    return {
      goodsList: []
    };
  },
  methods: {},
  created() {
    elseGoods().then(res => {
      this.goodsList = res;
    });
  }
};
</script>
<style scoped>
.content {
  position: relative;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #333;
  background-color: #f7f7f7;
}
.if {
  min-height: calc(100vh - 530px);
}
</style>