<!--  -->
<template>
  <div class="home">
    <full-page>
      <home-nav :categoryFruits="category"></home-nav>
      <home-carousel :carousels="carousels"></home-carousel>
      <home-decorate-imgs :decorates="decorates"></home-decorate-imgs>
      <div class="bg">
        <home-seckill :seckill="seckill"></home-seckill>
        <home-effect :effects="effects"></home-effect>
      </div>
    </full-page>
  </div>
</template>

<script>
import FullPage from "components/fullpage/FullPage";

import { getHomeShowData } from "network/home";

import HomeNav from "./children/HomeNav";
import HomeCarousel from "./children/HomeCarousel";
import HomeSeckill from "./children/HomeSeckill";
import HomeDecorateImgs from "./children/HomeDecorateImgs";
import HomeEffect from "./children/HomeEffect";
export default {
  name: "home",
  components: {
    FullPage,
    HomeNav,
    HomeCarousel,
    HomeSeckill,
    HomeDecorateImgs,
    HomeEffect,
  },
  data() {
    return {
      category: {},
      carousels: [],
      decorates: [],
      effects: [],
      seckill: [],
    };
  },
  methods: {},
  created() {
    getHomeShowData().then((res) => {
      this.category = res.category;
      this.carousels = res.carousels;
      this.decorates = res.decorates;
      this.effects = res.effects;
      this.seckill = res.seckill;
    });
  },
};
</script>
<style scoped>
.bg {
  margin-top: 30px;
  padding: 20px 0 30px 0;
  background-color: #faf9f9;
}
</style>
