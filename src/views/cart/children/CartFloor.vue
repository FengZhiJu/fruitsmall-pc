<!--  -->
<template>
  <div class="cart-floor w">
    <div class="right">
      <div class="total-price">
        <span>合计：</span>
        <h4>￥{{this.$store.getters.totalPrice}}</h4>
      </div>
      <button @click="buy" :class="{'disable': isDisable}">购买</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      notify: ""
    };
  },
  computed: {
    ...mapGetters(["tickGoods"]),
    isDisable() {
      return this.tickGoods.length <= 0 ? true : false;
    }
  },
  methods: {
    buy() {
      if (!this.isDisable) {
        if (this.notify) this.notify.close();
        this.notify = this.$notify({
          title: "购买成功",
          message: "已添加到订单",
          type: "success"
        });
        this.$store.dispatch("buyGoods", this.tickGoods);
      }
    }
  }
};
</script>
<style scoped>
.cart-floor {
  position: relative;
  margin-top: 30px;
  height: 70px;
  line-height: 70px;
  background-color: #fff;
}

.right {
  float: right;
  display: flex;
  height: 100%;
}
.total-price {
  display: flex;
  margin-right: 30px;
  font-size: 17px;
  color: var(--font);
}
.total-price h4 {
  font-weight: normal;
  font-size: 25px;
}
button {
  width: 200px;
  height: 100%;
  color: #fff;
  font-size: 20px;
  background-color: var(--font);
  outline: none;
  border: 0;
}
button:hover {
  cursor: pointer;
}
.disable {
  background-color: #ddd;
}
</style>