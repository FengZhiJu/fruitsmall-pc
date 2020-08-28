<!--  -->
<template>
  <div class='detail'>
    <full-page>
      <div class="content">
        <goods-params :params='params'></goods-params>
      </div>
      <goods :goodsList="goodsList" title='为您推荐'></goods>
    </full-page>
  </div>
</template>

<script>
import { getDetailData } from "network/detail"
import FullPage from "components/fullpage/FullPage"
import { elseGoods } from "network/cart";
import Goods from "components/goods/Goods";


import GoodsParams from "./children/GoodsParams"
export default {
  name: 'detail',
  components: {
    FullPage,
    GoodsParams,
    Goods
  },
  data() {
    return {
      params: {},
      goodsList: []
    };
  },
  methods: {
    sendData(id){
      getDetailData(id).then(res => {
        this.params = res[0];
      });
    }
  },
  created() {
    let id = this.$route.params.id;
    this.sendData(id);
    elseGoods().then(res => {
      this.goodsList = res;
    });
    this.$bus.$on('detailBus', (id) => {
      this.sendData(id);
    })
  },
};
</script>
<style scoped>
.content {
  margin-top: 30px;
  padding: 50px 0 30px 0;
  background-color: #faf9f9;
  border-top: 1px solid #eee;
}
</style>