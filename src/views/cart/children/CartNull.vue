<!--  -->
<template>
  <div class="cart-null">
    <img src="~assets/imgs/cartNull.png" alt />
    <h3><slot>您的购物车还是空的！</slot></h3>
    <button @click="goHome">去购物</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    goHome(){
      this.$router.push('/home');
    }
  }
};
</script>
<style scoped>
.cart-null {
  position: relative;
  height: 500px;
}
img {
  margin-top: 100px;
  margin-left: 550px;
}
h3 {
  position: absolute;
  top: 170px;
  display: inline;
  margin-left: 30px;
  color: var(--gray);
  font-size: 30px;
}
button {
  position: absolute;
  bottom: 200px;
  left: 950px;
  width: 172px;
  height: 50px;
  background-color: var(--font);
  outline: none;
  border: 0;
  color: #fff;
}
button:hover {
  cursor: pointer;
}
</style>