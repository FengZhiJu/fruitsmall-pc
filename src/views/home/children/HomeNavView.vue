<!--  -->
<template>
  <div class="nav-view" v-if="currentIndex >= 0" >
    <ul>
      <li v-for="(item, index) in currentCategory" :key="index" @click="navItem(item)">
        <img :src="item" alt="">
        <span>{{item | name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home-nav-view',
  components: {},
  data() {
    return {};
  },
  props: {
    currentIndex: {
      type: Number,
      default: -1
    },
    currentCategory: {
      type: Array,
      default: []
    }
  },
  methods: {
    navItem(item){
      this.$store.dispatch('searchHomeNav', item)
      this.$router.push('/search')
    }
  },
  computed: {
    path(){
      return this.currentCategory + '/';
    }
  },
  filters:{
    name(item){
      let regular = /[类|果]\/(.*?).jpg/
      return regular.exec(item)[1];
    }
  },
};
</script>
<style scoped>
.nav-view {
  position: absolute;
  box-sizing: border-box;
  left: 210px;
  padding-bottom: 30px;
  padding-right: 20px;
  width: 1090px;
  min-height: 500px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0px 1px 11px -2px rgba(0, 0,0,.3);
  transition: all .3s;
  z-index: 10;
}
ul {
  display: flex;
  flex-wrap: wrap;
}
ul li {
  width: 16.5%;
  margin-top: 30px;
  margin-left: 35px;
}
ul li:hover {
  cursor: pointer;
  color: var(--font); 
}
ul li img {
  width: 100px;
  height: 62px;
  vertical-align: middle;
}
</style>