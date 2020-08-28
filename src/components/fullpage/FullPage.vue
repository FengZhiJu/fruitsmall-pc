<!--  -->
<template>
  <div class="full-page">
    <page-top-bar></page-top-bar>
    <page-header></page-header>
    <slot></slot>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageTopBar from "./pageheader/PageTopBar"
import PageHeader from "./pageheader/PageHeader"
import PageFooter from "./pagefooter/PageFooter"

export default {
  components: {
    PageTopBar,
    PageHeader,
    PageFooter
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
</style>