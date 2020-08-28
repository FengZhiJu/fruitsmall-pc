<!--  -->
<template>
  <div class="login">
    <login-head></login-head>
    <login-main></login-main>
  </div>
</template>

<script>
import LoginHead from "./children/LoginHead"
import LoginMain from "./children/LoginMain"
export default {
  components: {
    LoginHead,
    LoginMain
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
</style>