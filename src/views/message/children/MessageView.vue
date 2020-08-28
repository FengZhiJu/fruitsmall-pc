<!--  -->
<template>
  <div class="message-view">
    <message-item v-for="(item, index) in allMessage" :key="index" :item='item'></message-item>
  </div>
</template>

<script>
import MessageItem from "./MessageItem"
export default {
  components: {
    MessageItem
  },
  data() {
    return {};
  },
  props: {
    allMessage: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {}
};
</script>
<style scoped>
.message-view {
  box-sizing: border-box;
  background-color: rgba(0,0,0,.1);
}
</style>