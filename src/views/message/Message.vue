<!--  -->
<template>
  <div class='message'>
    <backgound></backgound>
    <div class="w">
      <message-view :allMessage='allMessage'></message-view>
      <message-floor @sendMessage='sendMessage'></message-floor>
    </div>
  </div>
</template>

<script>
import MessageView from "./children/MessageView"
import MessageFloor from "./children/MessageFloor"
import Backgound from "components/backgound/Backgound"

import { sendMessage, getAllMessage } from 'network/message'

export default {
  components: {
    MessageView,
    MessageFloor,
    Backgound,
  },
  data() {
    return {
      allMessage: []
    };
  },
  methods: {
    sendMessage(message){
      sendMessage(message).then(res => this.allMessage = res);
    }
  },
  created() {
    getAllMessage().then(res => this.allMessage = res)
  },
};
</script>
<style scoped>
.w {
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: 20px;
}
.message{
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}
</style>