<!--  -->
<template>
  <div class="effect-item w" v-if="Object.keys(floor).length > 0">
    <div class="banner">
      <img :src="floor.banner" alt />
    </div>
    <div class="item-hd">
      <div class="title">
        <h3>{{floor.effect}}</h3>
      </div>
    </div>
    <goods :goodsList='floor.fruits' :source='1'></goods>
  </div>
</template>

<script>
import Goods from "components/goods/Goods"
export default {
  name: 'home-effect-item',
  components: {
    Goods
  },
  data() {
    return {};
  },
  props: {
    floor: {
      type: Object,
      default: {}
    }
  },
  methods: {
    rowFruits(num){
      if(this.floor.fruits.length >= 5 && num == 0) {
        return this.floor.fruits.slice(num, 5);
      }else if(num == 1 && this.floor.fruits.length >= 9) {
        return this.floor.fruits.slice(5, 9);
      }
      return this.floor.fruits.slice(num * 5);
    }
  },
  computed: {
    
  },
};
</script>
<style scoped>
.banner {
  margin: 40px 0;
}
.banner img {
  width: 100%;
  height: 120px;
}
h3 {
  font-weight: normal;
  font-size: 27px;
}
.item-hd {
  display: flex;
  justify-content: space-between;
}
.item-hd ul li {
  float: left;
  margin-right: 20px;
}
.item-hd ul li:last-child {
  margin-right: 0;
}

</style>