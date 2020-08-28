<!--  -->
<template>
  <div class="header-cart">
    <el-badge :value="count" :max="99" :hidden="isbadge" class="item">
      <el-button plain size="small" class="button" type="info" @click="toCart"><i class="iconfont">&#xe633;</i> 购物车</el-button>
    </el-badge>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    count(){
      return this.$store.state.cart.length;
    },
    isbadge(){
      return this.count == 0 ? true : false;
    },
    
  },
  methods: {
    toCart(){
      this.$router.push('/cart')
    }
  },
};

</script>
<style scoped>
.item {
  margin: 20px 46px 0 0;
}
.button {
  width: 120px;
  height: 40px;
  font-size: 15px;
}
.button i {
  margin-right: 5px;
  font-size: 18px;
}
.el-button--info.is-plain {
  background-color: #fff;
  transition: all .3s;
}
.el-button--info.is-plain:focus, .el-button--info.is-plain:hover {
  background-color: #eee;
  border-color: #ddd;
  color: #909399;
}
</style>