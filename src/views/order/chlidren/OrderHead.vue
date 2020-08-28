<!--  -->
<template>
  <div class='order-head w'>
    <order-model>
      <template>交易时间</template>
      <template #goods-info>商品</template>
      <template #goods-params>
        <el-col :span='5'>单价</el-col>
        <el-col :span='4'>数量</el-col>
        <el-col :span='4'>小计</el-col>
        <el-col :span='7'>地址</el-col>
        <el-col :span='4'>操作</el-col>
      </template>
    </order-model>
  </div>
</template>

<script>
import OrderModel from "../../cart/children/CartModel"

export default {
  components: {
    OrderModel,
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
</style>