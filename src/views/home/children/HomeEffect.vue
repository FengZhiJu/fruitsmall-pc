<!--  -->
<template>
  <div class="effects" v-if="Object.keys(effects).length > 0">
    <home-effect-item v-for="(item, index) in effects" :key="index" :floor='item' ></home-effect-item>
  </div>
</template>

<script>
import HomeEffectItem from "./HomeEffectItem"
export default {
  name: 'home-effects',
  components: {
    HomeEffectItem
  },
  props:{
    effects: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
</style>