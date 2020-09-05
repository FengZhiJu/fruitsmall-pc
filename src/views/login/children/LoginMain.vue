<!--  -->
<template>
  <div class="login-main">
    <div class="main" @keydown.enter="login">
      <h4>账号登录</h4>
      <div class="input">
        <el-input
          v-model.trim="username"
          placeholder="用户名"
          class="item"
        ></el-input>
        <el-input
          type="password"
          v-model.trim="password"
          placeholder="密码"
          class="item"
        ></el-input>
        <el-input
          v-model.trim="code"
          placeholder="验证码"
          class="item"
        ></el-input>
        <button class="signup" @click="toSignup">注册账号</button>
      </div>
      <verify-code
        class="verify-code"
        @codeText="codeText"
        ref="imgCode"
      ></verify-code>
      <p class="hint" v-if="isVerify == 1">用户名或密码错误</p>
      <p class="hint" v-if="isVerify == 2">请输入账号</p>
      <p class="hint" v-if="isVerify == 3">请输入密码</p>
      <p class="hint" v-if="isVerify == 4">验证码错误</p>
      <button @click="login" class="login">
        登录
      </button>
    </div>
  </div>
</template>

<script>
import { sendLogin } from "network/user";
import VerifyCode from "components/code/VerifyCode";

export default {
  components: {
    VerifyCode,
  },
  data() {
    return {
      username: "",
      password: "",
      code: "",
      correctCode: "",
      isVerify: false,
    };
  },
  methods: {
    login() {
      if (this.username === "") this.isVerify = 2;
      else if (this.password === "") this.isVerify = 3;
      else if (
        this.code.toUpperCase() !== this.correctCode.toUpperCase() &&
        this.code.toLowerCase() !== this.correctCode.toLowerCase()
      ) {
        this.isVerify = 4;
        this.$refs.imgCode.codeImg();
      } else {
        sendLogin(this.username, this.password).then((res) => {
          if (res.isLogin) {
            this.$store.commit("setLogin", res);
            this.$router.push("/home");
          } else {
            this.isVerify = !res.isLogin;
          }
        });
      }
    },
    codeText(text) {
      this.correctCode = text;
    },
    toSignup() {
      this.$router.push("/signup");
    },
  },
};
</script>
<style scoped>
.login-main {
  position: relative;
  width: 100vw;
  height: calc(100vh - 138px);
  background: url(~assets/imgs/bg.jpg) no-repeat;
  background-size: 100% 100%;
}
.main {
  position: absolute;
  right: 300px;
  top: 20%;
  width: 400px;
  height: 378px;
  background-color: #fff;
  text-align: center;
}
h4 {
  margin: 20px 0;
  font-size: 25px;
  color: var(--font);
  font-weight: normal;
}
.main >>> .el-input--small .el-input__inner {
  width: 80%;
  height: 45px;
  margin-bottom: 25px;
  border-radius: 0;
}
.login {
  width: 80%;
  height: 45px;
  outline: none;
  border: 0;
  background-color: var(--font);
  color: #fff;
}
button:hover {
  cursor: pointer;
}
.hint {
  text-align: left;
  color: var(--font);
  font-size: 14px;
  transform: translate(10%, -54%);
}

.err-border {
  border: 1px solid var(--font);
}
.input .item:nth-child(3) >>> .el-input__inner {
  width: 200px;
  transform: translateX(-60px);
}
.verify-code {
  position: absolute;
  transform: translate(-90px, 210px);
}
.signup {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #fff;
  color: var(--font);
  outline: none;
  border: 0;
}
</style>
