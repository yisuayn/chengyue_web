import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Carousel from "./components/Caiousel.vue";
import CardComponent from "./components/Webcard.vue";
import VideoComponent from "./components/Webvideo.vue";
import Cycontent from "./components/Cycontent.vue";

Vue.use(ElementUI);

Vue.component('Carousel',Carousel);
Vue.component('CardComponent',CardComponent);
Vue.component('VideoComponent',VideoComponent);
Vue.component('Cycontent',Cycontent);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
