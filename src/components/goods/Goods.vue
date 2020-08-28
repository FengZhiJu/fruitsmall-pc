<!--  -->
<template>
  <div class="goods w" v-if="goodsList.length > 0">
    <div class="title"  v-if="title != ''">
      <h3>{{title}}</h3>
    </div>
    <goods-item 
    v-for="(item, index) in rowCount" 
    :key="index" :goodsItem='getRow(index)' 
    :isMore='source && index'
    @more='getMore'
    ></goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem"
export default {
  components: {
    GoodsItem
  },
  data() {
    return {};
  },
  methods: {
    getRow(index){
      return this.goods.slice(index * 5, (index + 1) * 5);
    },
    getMore(){
      this.$store.commit('updateSearch', this.goodsList)
      this.$router.push('/search')   
    }
  },
  props: {
    goodsList: {
      type: Array,
      default(){
        return [];
      }
    },
    source: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    goods(){
      return this.source ? this.goodsList.slice(0, 9) : this.goodsList;
    },
    rowCount(){
      let row = Math.floor(this.goods.length / 5);
      return this.goods.length % 5 == 0 ? row : row + 1;
    },
  },
};
</script>
<style scoped>
.title {
  height: 70px;
  line-height: 70px;
}
h3 {
  font-weight: normal;
  font-size: 28px;
  color: #757575;
  text-align: center;
}
h3::before,
h3::after {
  display: inline-block;
  content: '';
  height: 1px;
  width: 250px;
  margin: 0 20px;
  vertical-align: middle;
  background-color: #ccc;
}
</style>