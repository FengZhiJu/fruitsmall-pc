<!--  -->
<template>
  <div class="search">
    <full-page>
      <div class="content">
        <search-nav-bar
          :searchGoods="searchGoods"
          @setCurrentIndex="setCurrentIndex"
        ></search-nav-bar>
        <goods :goodsList="goods"></goods>
      </div>
    </full-page>
  </div>
</template>

<script>
import { getSearchData } from "network/search";

import FullPage from "components/fullpage/FullPage";
import Goods from "components/goods/Goods";

import SearchNavBar from "./children/SearchNavBar";
export default {
  name: "search",
  components: {
    FullPage,
    Goods,
    SearchNavBar,
  },
  data() {
    return {
      currentFruits: "全部",
    };
  },
  computed: {
    searchGoods() {
      return this.$store.state.searchGoods;
    },
    goods() {
      let goods = this.searchGoods;
      if (this.currentFruits == "全部") {
        return goods;
      } else {
        return goods.filter((item) => item.belong == this.currentFruits);
      }
    },
  },
  methods: {
    setCurrentIndex(belong) {
      this.currentFruits = "";
      setTimeout(() => (this.currentFruits = belong), 0);
    },
  },
};
</script>
<style scoped>
.content {
  position: relative;
  min-height: calc(100vh - 40px - 115px - 20px - 315px - 41px);
  margin-top: 20px;
  padding: 20px 0;
  border-top: 1px solid #eee;
  background-color: #faf9f9;
}
</style>
