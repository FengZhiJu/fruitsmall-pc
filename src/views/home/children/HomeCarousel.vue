<!--  -->
<template>
  <div class="carousel w" v-if="carousels.length > 0">
    <el-carousel :interval="3000" arrow="hover"  trigger="click" height='500px'>
      <el-carousel-item v-for="(item, index) in carousels" :key="index">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'home-carousel',
  components: {},
  data() {
    return {};
  },
  methods: {},
  props: {
    carousels: {
      type: Array,
      default: [],
    }
  },
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
.carousel {
  margin-top: 1px;
  margin-bottom: 20px;
}
.carousel >>>  .el-icon-arrow-left:before,
.carousel >>>  .el-icon-arrow-right:before{
  font-size: 20px;
}
.carousel >>>  .el-carousel__arrow {
  width: 50px;
  height: 50px;
  margin-left: 210px;
  background-color: rgba(31,45,61,.25);
}
</style>