<!--  -->
<template>
  <div class="order-item w">
    <order-model height="100px">
      <template>{{orderitem.timestamp}}</template>
      <template #goods-info>
        <div class="goods-info">
          <img :src="orderitem.img" alt />
          <h3 class="fruits">{{orderitem.name}}</h3>
        </div>
      </template>
      <template #goods-params>
        <el-col :span="5">
          <div class="price">￥{{orderitem | price}}</div>
        </el-col>
        <el-col :span="4">{{orderitem.count}}</el-col>
        <el-col :span="4">
          <div class="total-price">￥{{orderitem.totalPrice.toFixed(2)}}</div>
        </el-col>
        <el-col :span="7">
          <div class="site"><span>{{orderitem.site}}</span></div>
        </el-col>
        <el-col :span="4">
          <div class="remove">
            <el-tooltip class="item" effect="dark" content="删除不可恢复" placement="bottom">
              <span @click="removeOrder">×</span>
            </el-tooltip>
          </div>
        </el-col>
      </template>
    </order-model>
  </div>
</template>

<script>
import OrderModel from "../../cart/children/CartModel";
export default {
  components: {
    OrderModel
  },
  data() {
    return {};
  },
  methods: {
    removeOrder() {
      this.$store.dispatch("removeCart", this.orderitem);
    }
  },
  props: {
    orderitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    price(item) {
      return item.decorate
        ? (item.price * 0.6 * 1).toFixed(2)
        : (item.price * 1).toFixed(2);
    }
  }
};
</script>
<style scoped>
.goods-info img {
  margin: 0 23px;
  width: 80px;
  height: 80px;
}
.goods-info {
  display: flex;
  align-items: center;
}
.goods-info h3 {
  font-weight: normal;
}
.price,
.total-price {
  font-size: 18px;
  color: var(--font);
}
.price {
  color: #333;
}
.remove span:hover {
  cursor: pointer;
}
.remove {
  font-size: 20px;
}
.site {
  position: relative;
  height: 100px;
  max-height: 100px;
  overflow: hidden;
  line-height: normal;

}
.site span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  display: inline-block;
  vertical-align: middle;
}
</style>