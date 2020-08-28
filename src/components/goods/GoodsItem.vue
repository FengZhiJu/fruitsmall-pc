<!--  -->
<template>
  <div class="goods-item" v-if="Object.keys(goodsItem).length > 0">
    <ul class="goods-row">
      <li v-for="(item, index) in goodsItem" :key="index" @click="goodsDetail(item)">
        <el-card shadow='hover' :body-style='{padding: 0}'>
          <i v-if="item.decorate">-40%</i>
          <img v-lazy='item.img' alt />
          <h4 class="title">{{item.name}}</h4>
          <div class="price">
            <span class="new">￥{{item | price}}</span>
            <span class="old" v-if="item.decorate">￥{{item.price}}</span>
          </div>
        </el-card>
      </li>
      <li v-if="isMore" class="more" @click='getMore'>
        <span>查看更多</span>
        <i class="iconfont">&#xe611;</i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    goodsItem: {
      type: Array,
      default(){
        return [];
      }
    },
    isMore: {
      type: Number,
      default: false
    }
  },
  methods: {
    getMore(){
      this.$emit('more');
    },
    goodsDetail(item){
      this.$bus.$emit('detailBus', item.id);
      this.$router.push('/detail/' + item.id);
    }
  },
  filters: {
    price(item){
      return item.decorate ? (item.price * 0.6 * 1).toFixed(2) : (item.price * 1).toFixed(2);
    }
  },
};
</script>
<style scoped>
ul {
  display: flex;
}
ul li {
  position: relative;
  width: 252px;
  color: var(--font);
  text-align: center;
  margin: 20px 10px 20px 0;
  transition: all .3s;
}
ul li .title {
  margin-top: 10px;
  font-weight: normal;
}
ul li i:nth-child(1) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  padding: 3px 5px;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  background-color: var(--font);
}
ul li img {
  width: 100%;
  height: 150px;
}
ul li:nth-child(5) {
  margin-right: 0;
}
ul li:hover {
  cursor: pointer;
  transform: translateY(-2px);
}
.price {
  padding: 10px 0 10px 0;
  margin-bottom: 20px;
}
.old {
  color: var(--gray);
  font-size: 15px;
  text-decoration: line-through;
}
.new {
  font-size: 19px;
  margin-right: 3px;
  color: var(--font);
}

.more {
  height: 150px;
  margin: auto 0;
  font-size: 25px;    
  line-height: 150px;
  border: 1px solid #eee;
  background-color: #fff;
}
.more span {
  display: inline-block;
  margin-right: 10px;
  color: #333;
  transform: translateY(-11px);
}
.more .iconfont {
  font-size: 60px;
  color: var(--font);
}
</style>