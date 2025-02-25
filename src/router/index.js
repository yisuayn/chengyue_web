import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import store from "@/store";

Vue.use(VueRouter);

const DEFAULT_TDK = {
  title: "Vue 企业门户网站 - 首页",
  description:"这是一个基于 Vue.js 构建的企业门户网站，提供产品展示、新闻资讯等功能。",
  keywords: "企业门户, Vue, Vue2, CMS, 网站建设",
};

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/",
        name: "Cyhome",
        component: () => import("../cypages/Cyhome.vue"),
        meta: {
          requiresAuth: true,
          title: "",
          description: "",
          keywords: "",
        },
      },
      {
        path: "/Winterquilt",
        name: "Winterquilt",
        component: () => import("../cypages/Winterquilt.vue"),
        meta:{},
      },
      {
        path: "/Weddingkit",
        name: "Weddingkit",
        component: () => import("../cypages/Weddingkit.vue"),
        meta:{},
      },
      {
        path: "/Coolingcomforter",
        name: "Coolingcomforter",
        component: () => import("../cypages/Coolingcomforter.vue"),
        meta:{},
      },
      {
        path:'/Cycontent',
        name:'Cycontent',
        component:()=>import("../cypages/Cycontent.vue"),
        meta:{}
      },
      {
        path:'/Brandvision',
        name:'Brandvision',
        component:()=>import("../cypages/about/Brandvision.vue"),
        meta:{}
      },
      {
        path:'/Companyprofile',
        name:'Companyprofile',
        component:()=>import("../cypages/about/Companyprofile.vue"),
        meta:{}
      },
      {
        path:'/Developmenthistory',
        name:'Developmenthistory',
        component:()=>import("../cypages/about/Developmenthistory.vue"),
        meta:{}
      },{
        path:'/Joinus',
        name:'Joinus',
        component:()=>import("../cypages/about/Joinus.vue"),
        meta:{}
      }
    ],
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  //添加路由守卫实现tdk的切换，优化网站的seo,通过meta设置网站的页面的TDK
  // if (to.meta.requiresAuth && !store.state.auth.isAuthenticated) {
  //   return next("/login"); // 未登录则跳转到登录页
  // }
  // 🔹 2. 设置 TDK
  if (!to.meta.title) {
    document.title = to.meta.title || DEFAULT_TDK.title;
  }
  if (!to.meta.description) {
    updateMetaTag(
      "description",
      to.meta.description || DEFAULT_TDK.description
    );
  }
  if (!to.meta.keywords) {
    updateMetaTag("keywords", to.meta.keywords || DEFAULT_TDK.keywords);
  }

  next();
});
// **修改 meta 标签的方法**
function updateMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (tag) {
    tag.setAttribute("content", content);
  } else {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    tag.setAttribute("content", content);
    document.head.appendChild(tag);
  }
}
export default router;
