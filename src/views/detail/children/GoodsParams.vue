<!--  -->
<template>
  <div class="goods-params" v-if="Object.keys(params).length > 0">
    <div class="w clearfix">
      <img :src="params.img" alt />
      <div class="params">
        <h3>{{params.name}}</h3>
        <div class="price">
          <span class="new-price">￥{{price}}</span>
          <span class="old-price" v-if="params.decorate">￥{{(params.price * 1).toFixed(2)}}</span>
          <div class="desc">{{params.name}}{{params.desc}}</div>
        </div>
        <div class="area">
          <el-cascader size="large" :options="options" v-model="selectedOptions" separator="   " class=""></el-cascader>
          <el-input v-model="areaInput" placeholder="输入街道、乡镇、小区或商圈名称" class="area-input"></el-input>
        </div>
        <div class="count">
          <el-input-number v-model.trim="count" :min="1" size="large" :max='50'></el-input-number>
        </div>
        <div class="total-price">总计：{{totalPrice}}</div>
        <div class="button">
          <button v-if="!this.$store.state.user.isLogin" @click="toLogin" class="buy">登录后购买</button>
          <button class="buy" @click="addCart(true, true)" v-else>立即购买</button>
          <button v-if="!this.$store.state.user.isLogin" @click="toLogin">登录后加入购物车</button>
          <button class="cart" @click="addCart" v-else>加入购物车</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { regionData, CodeToText } from "element-china-area-data";
export default {
  components: {},
  data() {
    return {
      options: regionData,
      selectedOptions: [],
      areaInput: "",
      count: 1,
      notify: null
    };
  },
  props: {
    params: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  watch: {
    count(newValue, oldVlue) {
      if(newValue == undefined) {
        this.count = 1;
      }
    }
  },
  computed: {
    totalPrice() {
      return (this.count * this.price).toFixed(2);
    },

    price() {
      return this.params.decorate
        ? (this.params.price * 0.6).toFixed(2)
        : (this.params.price * 1).toFixed(2);
    },

    site() {
      let str = "";
      this.selectedOptions.forEach(item => (str += CodeToText[item]));
      return str + this.areaInput;
    },

  },
  methods: {
    addCart(e, isFinish=false) {
      if (this.notify) this.notify.close();
      if (this.site == "") {
        this.notify = this.$notify.error({
          title: "地址未填写",
          message: "请填写地址",
        });
      } else {
        let message = isFinish ? '已添加到订单' : '已添加到购物车';
        this.notify = this.$notify({
          title: "添加成功",
          message: message,
          type: "success"
        });
        this.$store.dispatch("isCart", {
          goods: this.params,
          count: this.count,
          site: this.site,
          isFinish
        });
      }
    },


    toLogin() {
      this.$router.push("/login");
    },
  },
  filters: {
    price(item) {
      return item.decorate
        ? (item.price * 0.6 * 1).toFixed(2)
        : (item.price * 1).toFixed(2);
    }
  }
};
</script>
<style scoped>
.goods-params {
  background-color: #fff;
}
.w {
  display: flex;
  padding: 30px 20px 30px 0;
  justify-content: space-between;
  background-color: #fff;
}
img {
  margin: 0 30px;
  width: 500px;
  height: 500px;
}
.params {
  flex: 1;
  padding-top: 25px;
  margin-left: 80px;
}
.params h3 {
  margin-bottom: 20px;
  font-size: 27px;
  font-weight: normal;
}
.price,
.total-price {
  font-size: 32px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  color: var(--font);
  border-bottom: 1px solid #eee;
}
.price .old-price {
  margin-left: 10px;
  color: #ccc;
  font-size: 25px;
  text-decoration: line-through;
}
.desc {
  margin-top: 20px;
  padding-top: 20px;
  color: #999;
  font-size: 15px;
  border-top: 1px solid #eee;
}
.area {
  position: relative;
  height: 100px;
  padding: 20px;
  margin-bottom: 20px;
  vertical-align: middle;
  background-color: #fafafa;
  border: 1px solid #eee;
}
.area >>> .el-input__inner {
  position: relative;
  border: transparent;
  width: 225px;
  margin-bottom: 15px;
  font-size: 15px;
  background-color: #fafafa;
}
.area >>> .el-icon-arrow-down:before {
  display: none;
}

.total-price {
  margin: 25px 0;
  padding-top: 20px;
  font-size: 25px;
  border-top: 1px solid #eee;
}
.button button {
  padding: 25px 50px;
  background-color: var(--font);
  color: #fff;
  border: 0;
  outline: none;
  font-size: 17px;
  margin-right: 20px;
}
.button .buy {
  background-color: #ffefed;
  color: var(--font);
  border: 1px solid var(--font);
}
.button button:hover {
  cursor: pointer;
}
</style>