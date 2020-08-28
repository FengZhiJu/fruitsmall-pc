<!--  -->
<template>
  <div class="counter">
    <div class="content">
      <button class="decrement" @click="decrement" :disabled="isRmo">-</button>
      <input type="text" :value="num" @change="getValue" ref="input"/>
      <button class="increment" @click="increment" :disabled="isAdd">+</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      before: 1,  
    };
  },
  computed: {
    isRmo() {
      return this.num <= 1;
    },
    isAdd() {
      return this.num >= this.max;
    },
  },
  watch: {
    num(newValue, oldValue) {
      if (/^\d*?$/.test(newValue) && newValue < this.max) {
        this.before = newValue;
      }
    },
  },
  props: {
    max: {
      type: Number,
      default: 50
    },
    num: {
      type: Number,
      default: 1
    },
  },
  methods: {
    decrement() {
      if(this.num > 1) {
        this.$emit('updateCount', 2)
      }
    },
    increment() {
      if(this.num < this.max) {
        this.$emit('updateCount', 1)
      }
      
    },
    getValue(e) {
      let value = e.target.value.trim() * 1;
      if (value == "") {
        this.$emit('updateCount', 0, 1)
        this.$refs.input.value = 1;
      }else if (isNaN(value) || value > this.max) {
        this.$emit('updateCount', 0, this.before)
        this.$refs.input.value = this.before;
      }else {
        this.$emit('updateCount', 0, value)
      }
    }
  }
};
</script>
<style scoped>
.counter {
  height: 100px;
}
.content {
  position: relative;
  top: 7px;
  display: flex;
  margin: 0 auto;
  height: 40px;
  width: 180px;
  background-color: #000;
  transform: translateY(50%);
  border: 1px solid #eee;
  transition: all 0.4s;
}
.content input {
  flex: 5;
  width: 78px;
  height: 40px;
  margin: 0;
  border: 0;
  outline: none;
  vertical-align: middle;
  text-align: center;
  font-size: 14px;
  transition: all 0.4s;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.content button {
  flex: 2.5;
  color: #86888b;
  background-color: #f5f7fa;
  border: 0;
  outline: none;
  font-size: 21px;
  transition: all 0.4s;
}
.content:hover,
.content button:hover,
.content input:hover {
  cursor: pointer;
  border-color: #bbb;
}
</style>