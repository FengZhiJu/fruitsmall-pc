<!--  -->
<template>
  <div class='order-goods'>
    <order-goods-item v-for="(item, index) in order" :key="index" :orderitem='item'></order-goods-item>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import OrderGoodsItem from "./OrderGoodsItem"
export default {
  components: {
    OrderGoodsItem
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState(['order'])
  },
};
</script>
<style scoped>
</style>