<!--  -->
<template>
  <div class="top-bar">
    <div class="w">
      <div class="top-bar-left" @click="toMessage">留言板</div>
      <ul v-if="!user.isLogin" class="top-bar-right">
        <li>您好，请登录！</li>
        <li @click="toLogin">登录</li>
        <li @click="toSignup">注册</li>
      </ul>
      <div class="user" v-else @mouseover="setShow" @mouseout="setShow">
        <el-avatar icon="el-icon-user-solid" class="icon" size="small"></el-avatar>
        <span>{{user.username}}</span>
        <el-collapse-transition>
          <div v-show="isshow" class="user-list">
            <ul>
              <li @click="logout">登出</li>
              <li @click="cut">切换账号</li>
              <li @click="toOrder">我的订单</li>
            </ul>
          </div>
        </el-collapse-transition>
        <i class="el-icon-arrow-down"></i>
      </div>
      <div class="home" @click="toHome">回到首页</div>
    </div>
  </div>
</template>

<script>
import { sendLogout } from "network/user";
import { mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      isshow: false
    };
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    toSignup() {
      this.$router.push("/signup");
    },
    toLogin() {
      this.$router.push("/login");
    },
    setShow() {
      this.isshow = !this.isshow;
    },
    logout() {
      sendLogout();
      this.$store.commit("logout");
      location.reload();
    },
    cut() {
      this.$router.push("/login");
    },
    toOrder() {
      this.$router.push("/order");
    },
    toMessage() {
      this.$router.push("/message");
    },
    toHome(){
      this.$router.push('/home')
    }
  }
};
</script>
<style scoped>
.top-bar {
  position: relative;
  height: 40px;
  background-color: var(--black);
}
.top-bar-right,
.top-bar-left {
  height: 100%;
  font-size: 14px;
  color: var(--gray-font);
}
.top-bar-left {
  float: left;
  line-height: 40px;
  margin-left: 25px;
  transition: all 0.3s;
}
.top-bar-right {
  float: right;
  height: 100%;
  font-size: 14px;
}
.top-bar-right li {
  float: left;
  margin-right: 15px;
  line-height: 40px;
  transition: all 0.3s;
  overflow: hidden;
}
.top-bar-right li:hover:nth-child(n + 2),
.top-bar-left:hover,
.home:hover {
  color: #fff;
  cursor: pointer;
}
.user {
  position: relative;
  margin-right: 20px;
  float: right;
  line-height: 40px;
  color: var(--gray-font) !important;
}
.user i {
  margin: 0 5px;
  font-size: 14px;
}
.user:hover {
  cursor: default;
}
.icon {
  margin: -3px 5px 0 0;
  vertical-align: middle;
}
.user-list {
  position: absolute;
  top: 40px;
  right: -2px;
  font-size: 14px;
  box-shadow: 0 1px 10px -4px rgba(0, 0, 0);
  transition: all 0.3s;
  z-index: 2;
}
.user-list ul {
  width: 76px;
  padding: 0 7px;
  text-align: center;
  background-color: #fff;
}
.user-list ul li {
  width: 100%;
  height: 35px;
  color: #777;
  line-height: 35px !important;
  border-bottom: 1px solid #eee;
}
.user-list ul li:hover {
  cursor: pointer;
  color: #777 !important;
}
.home {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: var(--gray-font);
  font-size: 14px;
  transition: all .3s;
}
</style>