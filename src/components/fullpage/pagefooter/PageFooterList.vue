<!--  -->
<template>
  <div class="footer-list w">
    <div class="list-item" v-for="item in lists" :key="item.title">
      <dl>
        <dt class="title">
          <h4>{{ item.title }}</h4>
        </dt>
        <dd
          class="data"
          v-for="(item, index) in item.data"
          :key="index"
          @click="toUser(item)"
        >
          {{ item }}
        </dd>
        <dd v-if="item.title == '下载APP'" class="data">
          <img src="~assets/imgs/QR.png" alt="" class="QR" />
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      lists: [
        {
          title: "关于此作品",
          data: [
            "此商城为个人作品，不具备任何盈利和商业性质，此作品的所有资料、产品以及功能均为虚拟，仅供观赏，所有资料及图片来源于互联网，如有侵权，请联系我们，我们会第一时间删除",
          ],
        },
        {
          title: "服务",
          data: ["7日无理由退货", "质量问题15日内换货", "购物指南"],
        },
        {
          title: "帮助中心",
          data: ["用户注册", "用户登录", "查看订单"],
        },
        {
          title: "联系我们",
          data: ["邮箱", "2653336905@qq.com"],
        },
        {
          title: "下载APP",
        },
      ],
    };
  },
  methods: {
    toUser(item) {
      if (item == "用户注册") {
        this.$router.push("/signup");
      } else if (item == "用户登录") {
        this.$router.push("/login");
      } else if (item == "查看订单") {
        this.$router.push("/order");
      }
    },
  },
};
</script>
<style scoped>
.footer-list {
  display: flex;
  padding: 25px 0 40px 0;
  justify-content: space-around;
}
.list-item dl {
  max-width: 300px;
}
.list-item .title {
  font-size: 18px;
}
.list-item:nth-child(1) .title {
  text-align: center;
}
.list-item:nth-child(n + 2) {
  text-align: center;
}

.list-item .data {
  margin-top: 12px;
  font-size: 14px;
  color: var(--gray);
}
.list-item:nth-child(3) .data:hover {
  color: var(--font);
  cursor: pointer;
}
.QR {
  width: 150px;
  height: 150px;
}
</style>
