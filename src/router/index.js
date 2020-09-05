import Vue from "vue";
import VueRouter from "vue-router";
import { verifyLoginto } from "network/user";

Vue.use(VueRouter);
let Home = () => import("views/home/Home");
let Cart = () => import("views/cart/Cart");
let Detail = () => import("views/detail/Detail");
let Login = () => import("views/login/Login");
let Message = () => import("views/message/Message");
let Search = () => import("views/search/Search");
let Signup = () => import("views/signup/Signup");
let Order = () => import("views/order/Order");

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/message",
    component: Message,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/order",
    component: Order,
  },
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeResolve(async (to, from, next) => {
  const store = router.app.$store;
  if (!store.state.user.isLogin) {
    let result = await verifyLoginto();
    if (result.isLogin) {
      store.commit("setLogin", result);
    }
  }

  next();
});

export default router;
