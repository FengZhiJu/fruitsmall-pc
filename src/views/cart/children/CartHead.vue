<!--  -->
<template>
  <div class="cart-head w">
    <cart-model>
      <template #goods-info>商品名称</template>
      <template #goods-params>
        <el-col :span="5">单价</el-col>
        <el-col :span="5">数量</el-col>
        <el-col :span="5">小计</el-col>
        <el-col :span="6">地址</el-col>
        <el-col :span="3">操作</el-col>
      </template>
    </cart-model>
  </div>
</template>

<script>
import CartModel from "./CartModel";
export default {
  components: {
    CartModel
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
</style>