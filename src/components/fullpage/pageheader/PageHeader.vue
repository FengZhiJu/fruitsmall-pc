<!--  -->
<template>
  <div class="page-header w">
    <h1 class="logo" @click="toHome">
      果喵喵
      <img src="~assets/imgs/logo.png" alt />
    </h1>
    <page-header-search></page-header-search>
    <page-header-cart></page-header-cart>
  </div>
</template>

<script>
import PageHeaderSearch from "./PageHeaderSearch";
import PageHeaderCart from "./PageHeaderCart";
export default {
  components: {
    PageHeaderSearch,
    PageHeaderCart
  },
  data() {
    return {};
  },
  methods: {
    toHome(){
      this.$router.push('/');
    }
  }
};
</script>
<style scoped>
.page-header {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
h1 {
  margin-top: 0;
  font-size: 0;
}
h1:hover {
  cursor: pointer;
}
</style>