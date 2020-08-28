<!--  -->
<template>
  <div class="cart-Goods w">
    <cart-goods-item v-for="(item, index) in cart" :key="index" :cartGoods='item'></cart-goods-item>
  </div>
</template>

<script>
import CartGoodsItem from "./CartGoodsItem"
import { mapGetters , mapState} from "vuex";
export default {
  components: {
    CartGoodsItem
  },
  data() {
    return {};
  },
  methods: {
    
  },
  computed: {
    ...mapGetters(["getCart"]),
    ...mapState(['cart']),
  }
};
</script>
<style scoped>
.cart-Goods {
  min-height: 150px;
}

</style>