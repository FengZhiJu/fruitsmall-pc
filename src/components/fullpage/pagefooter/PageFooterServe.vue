<!--  -->
<template>
  <div class="fotter-serve w">
    <div class="serve-item" v-for="item in serveArr" :key="item.icon">
      <p class="iconfont">{{item.icon}}</p>
      <h4 class="title">{{item.title}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      serveArr: [
        {
          icon: "\ue626",
          title: "免费服务"
        },
        {
          icon: "\ue64d",
          title: "满199包邮"
        },
        {
          icon: "\ue604",
          title: "质量保障"
        },
        {
          icon: "\ue8b6",
          title: "72小时发货"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.fotter-serve {
  display: flex;
  padding: 30px 0;
  justify-content: space-around;
  border-bottom: 1px solid #bbb;
}
.serve-item .iconfont {
  margin-bottom: 10px;
  font-size: 50px;
  text-align: center;
}
</style>