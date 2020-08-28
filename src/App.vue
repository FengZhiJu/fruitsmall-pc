<template>
  <div id="app">
    <!-- <keep-alive include="home"> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
};
</script>

<style>
@import "assets/css/normalize.css";
@import "assets/css/base.css";
</style>
