<!--  -->
<template>
  <div class="message-item">
    <div class="user-head">
      <el-avatar icon="el-icon-user-solid" class="icon" size="medium"></el-avatar>
    </div>
    <div class="content">
      <h3 class="username">{{item.user}}</h3>
      <div class="text">{{item.message}}</div>
      <div class="timestamp">{{item.timestamp}}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {}
};
</script>
<style scoped>
.message-item {
  height: 100px;
  padding: 15px;
  border: 1px solid #333;
  border-collapse: collapse;
}
.message-item:nth-child(n+2) {
  margin-top: -1px;
}
.user-head {
  float: left;
}
.content {
  position: relative;
  float: left;
  height: 100%;
  width: 90%;
  margin: 5px 10px;
}
.username {
  margin-bottom: 15px;
  font-weight: normal;
  font-size: 20px;
}
.text {
  font-size: 16px;
  /* color: #fff; */
}
.timestamp {
  position: absolute;
  width: 100%;
  bottom: -2px;
  color: #777;
  font-size: 14px;
}
</style>