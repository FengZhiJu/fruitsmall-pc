<!--  -->
<template>
  <div class="decorate-img w" v-if="decorates.length > 0">
    <ul>
      <li v-for="item in decorates" :key="item">
        <el-card :body-style="{ padding: '0px' , height: '200px'}" class="card">
          <img :src="item" alt />
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home-decorate-imgs',
  components: {},
  data() {
    return {};
  },
  methods: {},
  props:{
    decorates: {
      type: Array,
      default: []
    }
  },
};
</script>
<style scoped>
.decorate-img {
  margin-bottom: 20px;
}
ul {
  display: flex;
  justify-content: space-between;
}
ul li {
  flex: 1;
  margin-right: 15px;
}
ul li:nth-child(4) {
  margin-right: 0;
}
ul li .card img {
  width: 100%;
  height: 100%;
}
</style>