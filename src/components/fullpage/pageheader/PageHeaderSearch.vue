<!--  -->
<template>
  <div class="header-search">
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
      :hide-loading="true"
      :trigger-on-focus="false"
      value-key="name"
      @keyup.native.enter="toSearch"
      class="search"
    ></el-autocomplete>
    <el-button size="medium" @click="toSearch">
      <i class="iconfont">&#xe610;</i>
    </el-button>
  </div>
</template>

<script>
import { getSearchEntry } from "network/search";
export default {
  name: 'home-header-search',
  components: {},
  data() {
    return {
      state: "",
      timeout: null,
      flag: true,
      select: {}
    };
  },
  methods: {
    loadAll() {
      return [];
    },
    querySearchAsync(queryString, cb) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(async () => {
        this.loadAll = await getSearchEntry(queryString);
        cb(this.loadAll);
      }, 300);
    },
    handleSelect(item) {
      this.select = item;
    },
    toSearch() {
      if (this.state.trim() == "") {
        if (this.flag) {
          this.flag = false;
          this.$message.error("搜索内容不能为空哦");
          setTimeout(() => (this.flag = true), 3000);
        }
      } else {
        this.$store.dispatch('searchHomeBar', this.state)
        this.$router.push("/search");
      }
    }
  },

  beforeRouteLeave(to, from, next) {
    this.select = {};
    next();
  }
};
</script>
<style scoped>
.header-search {
  margin-top: 15px;
}
.header-search .search {
  position: relative;
  z-index: 1;
}
.header-search .search >>> .el-input--small .el-input__inner {
  width: 500px;
  height: 45px;
}
.el-button--medium {
  position: relative;
  top: 2px;
  left: -1px;
  height: 45px;
  padding: 10px 19px;
}
.iconfont {
  font-size: 20px;
}
</style>