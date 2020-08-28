<!--  -->
<template>
  <div class="bg">
    <div class="container"></div>
  </div>
</template>

<script>
import $ from "jquery"
import '../../assets/js/backgound/jparticle.min.js'
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    $(function() {
      $(".container").jParticle({
        background: "rgba(0,0,0,0)", //背景颜色
        color: "#fff", //粒子和连线的颜色
        particlesNumber: 100, //粒子数量
        // height: '900',
        //disableLinks:true,//禁止粒子间连线
        //disableMouse:true,//禁止粒子间连线(鼠标)
        particle: {
          minSize: 1, //最小粒子
          maxSize: 3, //最大粒子
          speed: 30 //粒子的动画速度
        }
      });
    });
  }
};
</script>
<style scoped>
.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: #fff;
  background: linear-gradient(
    -45deg,
    rgba(9, 69, 138, 0.2),
    rgba(68, 155, 255, 0.7),
    rgba(117, 113, 251, 0.7),
    rgba(68, 155, 255, 0.7),
    rgba(9, 69, 138, 0.2)
  );
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
}
@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
.container >>> canvas {
  height: 100% !important;
}
</style>