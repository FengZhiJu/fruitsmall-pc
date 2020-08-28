<!--  -->
<template>
  <div class='signup-succeed'>
    <h2>注册成功</h2>
    <button @click="toLogin">去登录</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    toLogin(){
      this.$router.push('/login');
    }
  }
};
</script>
<style scoped>
.signup-succeed {
  margin-top: 100px;
  text-align: center;
}
h2 {
  margin-bottom: 40px;
  font-weight: normal;
  font-size: 35px;
}
button {
  width: 200px;
  height: 50px;
  background-color: var(--font);
  outline: none;
  border: 0;
  font-size: 16px;
  color: #fff;
}
button:hover {
  cursor: pointer;
}
</style>