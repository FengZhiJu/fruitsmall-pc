<!--  -->
<template>
  <div class='order'>
    <full-page>
      <div class="content">
        <div class="if" v-if="this.$store.state.order.length > 0">
          <order-head></order-head>
          <order-goods></order-goods>
        </div>
        <div class="else" v-else>
          <order-null>您的订单是空的</order-null>
        </div>
        <goods :goodsList='goodsList' title='为您推荐'></goods>
      </div>
    </full-page>
  </div>
</template>

<script>
import { elseGoods } from "network/cart";
import FullPage from "components/fullpage/FullPage";
import OrderNull from "../cart/children/CartNull"
import Goods from "components/goods/Goods";

import OrderGoods from "./chlidren/OrderGoods"
import OrderHead from "./chlidren/OrderHead"
export default {
  components: {
    FullPage,
    OrderNull,
    Goods,
    OrderGoods,
    OrderHead
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