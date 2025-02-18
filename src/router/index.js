import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from '@/store'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  //添加路由守卫实现tdk的切换，优化网站的seo,通过meta设置网站的页面的TDK
  if (to.meta.requiresAuth && !store.state.auth.isAuthenticated) {
    return next('/login'); // 未登录则跳转到登录页
  }
  if (to.meta.description) {
    updateMetaTag('description', to.meta.description);
  }
  if (to.meta.keywords) {
    updateMetaTag('keywords', to.meta.keywords);
  }

  next();
});
// **修改 meta 标签的方法**
function updateMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (tag) {
    tag.setAttribute('content', content);
  } else {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    tag.setAttribute('content', content);
    document.head.appendChild(tag);
  }
}
export default router;
