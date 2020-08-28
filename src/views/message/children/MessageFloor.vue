<!--  -->
<template>
  <div class="message-floor">
    <div class="main">
      <div class="mask-layer" v-if="!user.isLogin">请 <a href="javascript:;" @click="toLogin"> 登录 </a> 后留言</div>
      <textarea maxlength="200" v-model="content" cols="30" rows="10" class="textarea" placeholder="写点什么吧"></textarea>
      <button class="send" @click="send">发送</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  data() {
    return {
      content: "",
      flag: true,
      notify: '',
    };
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    toLogin(){
      this.$router.push('/login')
    },
    send(){
      if(this.flag) {
        this.flag = false;
        location.reload();
        window.setTimeout(() => this.flag = true, 15000)
        this.$emit('sendMessage', this.content);
      }else {
        if(this.notify) this.notify.close();
        this.notify = this.$notify({
          title: '操作过于频繁',
          message: '请15秒后再留言',
          type: 'warning'
        });
      }
    }
  }
};
</script>
<style scoped>
.message-floor {
  height: 220px;
}
.main {
  position: absolute;
  bottom: 20px;
  width: 100%;
}
.textarea {
  box-sizing: border-box;
  width: 100%;
  height: 170px;
  padding: 20px;
  color: #000;
  background-color: rgba(0, 0, 0, 0.1);
  border: 0;
  outline: none;
  resize: none;
  overflow: hidden;
}
.send {
  position: absolute;
  right: 0;
  bottom: 4px;
  width: 200px;
  height: 50px;
  color: #aaa;
  outline: none;
  border: 0;
  transition: all .3s;
  background-color: rgba(0, 0, 0, 0.3);
}
.send:hover {
  cursor: pointer;
  color: #fff;
}
.mask-layer {
  position: absolute;
  top: 0;
  width: 100%;
  height: 99%;
  line-height: 160px;
  z-index: 10;
  color: #ddd;
  text-align: center;
  background-color: rgba(0,0,0,.5);
}
.mask-layer a {
  color: var(--font);
}
</style>