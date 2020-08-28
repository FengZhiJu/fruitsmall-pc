<!--  -->
<template>
  <div class="cart-model" :style="{'height': height,'line-height': height }">
    <el-row>
      <el-col :span="3">
        <slot>
          <div :class="{'checkbox-all': true, 'select': isCheckAll}" v-if="checkedType" @click="setAll">
            <i class="iconfont" v-if="isCheckAll">&#xe643;</i>
          </div>
          <div :class="{'checkbox-goods': true, 'select': tick}" v-else @click="reverseItem">
            <i class="iconfont" v-if="tick">&#xe643;</i>
          </div>
        </slot>
      </el-col>
      <el-col :span="4">
        <div class="center">
          <slot name="goods-info"></slot>
        </div>
      </el-col>
      <el-col :span="17">
        <el-row>
          <div class="center">
            <slot name="goods-params"></slot>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      checked: true
    };
  },
  props: {
    checkedType: {
      type: Number,
      default: 1
    },
    height: {
      type: String,
      default: "70px"
    },
    tick: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isCheckAll(){
      return this.$store.getters.isCheckAll;
    }
  },
  methods: {
    reverseItem(){
      this.$emit('reverseItem')
    },
    setAll(){
      this.$store.commit('setAll', !this.isCheckAll)
    },
  }
};
</script>
<style scoped>
.center {
  text-align: center !important;
}
.cart-model {
  padding: 0 25px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #eee;
}
.checkbox-all,
.checkbox-goods {
  display: inline-block;
  margin-top: -1px;
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  vertical-align: middle;
}
.checkbox-all i,
.checkbox-goods i {
  position: absolute;
  left: 3px;
  top: 3px;
  line-height: 17px;
  font-size: 14px;
}
.checkbox-all:hover,
.checkbox-goods:hover {
  cursor: pointer;
}
.select {
  background-color: var(--font);
  border-color: var(--font);
  color: #fff;
}
.checkbox-all::after {
  position: absolute;
  content: "全选";
  width: 40px;
  line-height: 20px;
  left: 30px;
  color: #444;
}

</style>