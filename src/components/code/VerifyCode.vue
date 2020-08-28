<!--  -->
<template>
  <div class='code' ref="imgCode" @click="codeImg">
  </div>
</template>

<script>
import { code } from "network/user";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    async codeImg(){
      let result = await code();
      this.$refs.imgCode.innerHTML = result.data
      this.$emit('codeText', result.text)
    }
  },
  created() {
    this.codeImg();
  },
};
</script>
<style scoped>
.code {
  position: absolute;
  right: -49px;
  top: 0px;
  width: 100px;
  height: 40px;
}
.code:hover {
  cursor: pointer;
}
</style>  