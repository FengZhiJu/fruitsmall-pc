<!--  -->
<template>
  <div class="seckill w" v-if="seckill.length > 0">
    <h3>限时秒杀</h3>
    <goods :goodsList='seckill'></goods>
    
  </div>
</template>

<script>
import Goods from "components/goods/Goods"
export default {
  name: 'home-seckill',
  components: {
    Goods
  },
  data() {
    return {};
  },
  props:{
    seckill: {
      type: Array,
      default: [],
    }
  },
  filters: {
    discount(item) {
      return (item * 0.6).toFixed(2)
    }
  },
  methods: {}
};
</script>
<style scoped>
h3 {
  font-weight: normal;
  font-size: 27px;
}
h4 {
  margin-top: 10px;
  color: var(--black);
  font-weight: normal;
  font-size: 20px;
}

</style>