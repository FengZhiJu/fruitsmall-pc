<!--  -->
<template>
  <div class='page-footer'>
    <page-footer-serve></page-footer-serve>
    <page-footer-list></page-footer-list>
  </div>
</template>

<script>
import PageFooterServe from "./PageFooterServe"
import PageFooterList from "./PageFooterList"
export default {
  components: {
    PageFooterServe,
    PageFooterList
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.page-footer {
  background-color: #eee;
}
</style>