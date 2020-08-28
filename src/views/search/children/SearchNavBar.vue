<!--  -->
<template>
  <div class="nav-bar clearfix">
    <div class="w">
      <ul v-if="searchGoods.length > 0">
        <li>分类：</li>
        <li :class="{current: currentIndex == -1}" @click="setCurrent(-1)">全部</li>
        <li
          v-for="(item, index) in goods"
          :key="index"
          @click="setCurrent(index)"
          :class="{current: currentIndex == index}"
        >{{item.belong}}</li>
      </ul>
      <div v-else class="null">该商品已售窰</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currentIndex: -1
    };
  },
  computed: {
    goods() {
      let newGoods = this.searchGoods.filter((item, index, obj) => {
        if (index == 0) return true;
        return item.belong != obj[index - 1].belong;
      });
      return newGoods;
    }
  },
  props: {
    searchGoods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    setCurrent(index) {
      this.currentIndex = index;
      let belong = index == -1 ? "全部" : this.goods[index].belong;
      this.$emit("setCurrentIndex", belong);
    }
  }
};
</script>
<style scoped>
.null {
  font-size: 20px;
  margin-left: 30px;
}
.nav-bar {
  margin: 20px 0;
}
ul li {
  float: left;
  height: 40px;
  line-height: 40px;
  margin-left: 40px;
  font-size: 20px;
  color: #666;
}
ul li:nth-child(n + 2):hover {
  cursor: pointer;
  color: var(--font);
}
ul li:nth-child(1) {
  font-size: 15px;
}
.current {
  color: var(--font);
}
</style>