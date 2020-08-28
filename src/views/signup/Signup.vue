<!--  -->
<template>
  <div class="signup">
    <div class="content">
      <div class="logo"><img src="~assets/imgs/logo.png" alt=""></div>
      <signup-succeed v-if="isSucceed"></signup-succeed>
      <signup-form @signupSucceed='signupSucceed' v-else></signup-form>
    </div>
  </div>
</template>

<script>
import SignupForm from "./children/SignupForm"
import SignupSucceed from "./children/SignupSucceed"
export default {
  components: {
    SignupForm,
    SignupSucceed
  },
  data() {
    return {
      isSucceed: false,
    };
  },
  methods: {
    signupSucceed(){
      this.isSucceed = true;
    }
  }
};
</script>
<style scoped>
.signup {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: #eee;
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 700px;
  height: 570px;
  border: 1px solid #ccc;
  background-color: #fff;
  transform: translate(-50%, -60%);
}
.logo {
  margin-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}
.logo img {
  vertical-align: bottom;
}
</style>