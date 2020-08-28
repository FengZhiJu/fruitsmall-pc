<!--  -->
<template>
  <div class="signup-form">
    <div class="center">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="450px"
        class="demo-ruleForm"
      >
        <el-form-item label prop="username" class="item">
          <el-input
            type="text"
            v-model.trim="ruleForm.username"
            autocomplete="off"
            maxlength="16"
            minlength="2"
            placeholder="用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label prop="pass" class="item">
          <el-input
            type="password"
            v-model.trim="ruleForm.pass"
            autocomplete="off"
            maxlength="16"
            minlength="5"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item label prop="checkPass" class="item">
          <el-input
            type="password"
            v-model.trim="ruleForm.checkPass"
            autocomplete="off"
            maxlength="16"
            minlength="8"
            placeholder="确认密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code" class="item">
          <el-input
            type="text"
            v-model.trim="ruleForm.code"
            autocomplete="off"
            maxlength="16"
            minlength="8"
            placeholder="验证码"
          ></el-input>
          <verify-code @codeText="codeText" ref="code"></verify-code>
        </el-form-item>
        <el-form-item class="button">
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <br />
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <button class="toLogin" @click.prevent="toLogin">已有账号？去登录</button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { signup, findUsername } from "network/user";
import VerifyCode from "components/code/VerifyCode";
export default {
  components: {
    VerifyCode
  },
  data() {
    var username = async (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length > 16 || value.length < 2) {
        callback(new Error("用户名不能大于16位,不能小于两位"));
      } else {
        let result = await findUsername(value);
        if (result.length > 0) {
          callback(new Error("用户名已被注册"));
        } else {
          callback();
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 5 || value.length > 16) {
        callback(new Error("密码不能不能小于5位或大于16位"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var verifyCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (
        value.toUpperCase() !== this.correctCode.toUpperCase() &&
        value.toLowerCase() !== this.correctCode.toLowerCase()
      ) {
        this.$refs.code.codeImg();
        callback(new Error("验证码输入错误"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        pass: "",
        checkPass: "",
        code: ""
      },
      rules: {
        username: [{ validator: username, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        code: [{ validator: verifyCode, trigger: "blur" }]
      },
      correctCode: ""
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          signup(this.ruleForm.username, this.ruleForm.pass);
          this.$emit("signupSucceed");
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    codeText(text) {
      this.correctCode = text;
    },
    toLogin() {
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
.center {
  margin-top: 20px;
}
.demo-ruleForm {
  text-align: center;
  transform: translate(-35%, 1%);
}
.item {
  margin-bottom: 25px;
}

.center >>> .el-form-item__error {
  padding-top: 5px !important;
}
.center .button {
  margin: 35px 0 0 0 !important;
}
.center >>> .el-button--small,
.el-button--small.is-round {
  width: 300px;
  height: 40px;
  margin-bottom: 20px;
  font-size: 14px;
}
.center >>> .el-input--small .el-input__inner {
  width: 300px;
  height: 40px;
}
.center >>> .el-input__suffix {
  right: -45px;
}
.signup-form .center .item:nth-child(4) >>> .el-input--small .el-input__inner {
  transform: translateX(-33px);
  width: 185px;
}
.button >>> .el-button--primary {
  background-color: var(--font);
  border-color: var(--font);
}
.toLogin {
  transform: translate(22px, -8px);
  background-color: #fff;
  color: var(--font);
  border: 0;
  outline: none;
}
.toLogin:hover {
  cursor: pointer;
}
</style>