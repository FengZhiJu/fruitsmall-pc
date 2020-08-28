import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store/index"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from "vue-lazyload"

Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(VueLazyload, {
  preLoad: 1,
  attempt: 1
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')