<!--  -->
<template>
  <div class="head">
    <div class="w">
      <img src="~assets/imgs/logo.png" alt="" @click="toHome">
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    toHome(){
      this.$router.push('/home');
    }
  }
};
</script>
<style scoped>
.head {
  padding: 20px 0 ;
  box-shadow: 0 1px 10px -1px rgba(0,0,0,.3);
}
img:hover {
  cursor: pointer;
}
</style>