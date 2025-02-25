import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Carousel from "./components/Caiousel.vue";
import CardComponent from "./components/Webcard.vue";
import VideoComponent from "./components/Webvideo.vue";

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(ElementUI);

Vue.component('Carousel',Carousel);
Vue.component('CardComponent',CardComponent);
Vue.component('VideoComponent',VideoComponent);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
