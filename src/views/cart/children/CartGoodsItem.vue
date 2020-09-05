<!--  -->
<template>
  <div class="cart-goods-item" v-if="Object.keys(cartGoods).length > 0">
    <cart-model
      :checkedType="0"
      height="100px"
      :tick="cartGoods.tick"
      @reverseItem="reverseItem"
    >
      <template #goods-info>
        <div class="goods-info">
          <img :src="cartGoods.img" alt />
          <h3 class="fruits">{{ cartGoods.name }}</h3>
        </div>
      </template>
      <template #goods-params>
        <el-col :span="5">
          <div class="price">￥{{ cartGoods | price }}</div>
        </el-col>
        <el-col :span="5">
          <counter :num="cartGoods.count" @updateCount="updateCount"></counter>
        </el-col>
        <el-col :span="5">
          <div class="total-price">￥{{ cartGoods.totalPrice }}</div>
        </el-col>
        <el-col :span="6" class="site">
          <div>
            <span>{{ cartGoods.site }}</span>
          </div>
        </el-col>
        <el-col :span="3">
          <el-tooltip
            class="item"
            effect="dark"
            content="删除不可恢复"
            placement="bottom"
          >
            <span @click="removeCart" class="remove">×</span>
          </el-tooltip>
        </el-col>
      </template>
    </cart-model>
  </div>
</template>

<script>
import CartModel from "./CartModel";
import Counter from "./Counter";
export default {
  components: {
    CartModel,
    Counter,
  },
  data() {
    return {};
  },
  props: {
    cartGoods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    updateCount(TAG, newValue) {
      if (TAG == 0) {
        this.$store.dispatch("setGoodsCount", {
          goods: this.cartGoods,
          count: newValue,
        });
      } else if (TAG == 1) {
        this.$store.dispatch("setGoodsCount", {
          goods: this.cartGoods,
          count: this.cartGoods.count + 1,
        });
      } else if (TAG == 2) {
        this.$store.dispatch("setGoodsCount", {
          goods: this.cartGoods,
          count: this.cartGoods.count - 1,
        });
      }
    },
    removeCart() {
      this.$store.dispatch("removeCart", this.cartGoods);
    },
    reverseItem() {
      this.$store.commit("reverseItem", this.cartGoods);
    },
  },
  filters: {
    price(item) {
      return item.decorate
        ? (item.price * 0.6 * 1).toFixed(2)
        : (item.price * 1).toFixed(2);
    },
  },
};
</script>
<style scoped>
.cart-goods-item {
  background-color: #fff;
}
.goods-info {
  display: flex;
  align-items: center;
}
.goods-info h3 {
  font-weight: normal;
}
.goods-info img {
  margin: 0 23px;
  width: 80px;
  height: 80px;
}
.price {
  color: #333 !important;
}
.price,
.total-price {
  font-size: 18px;
  color: var(--font);
}
.remove {
  font-size: 20px;
}
.remove:hover {
  cursor: pointer;
}
.site div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  line-height: normal;
}
</style>
