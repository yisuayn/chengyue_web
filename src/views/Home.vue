<template>
  <div id="app">
    <h1>家纺产品展示</h1>

    <!-- 传递图片数组给 Carousel 组件 -->
    <Carousel :images="productImages" :autoplayInterval="5000" />
  </div>
</template>

<script>
// 导入 Carousel 组件
import Carousel from './components/Carousel.vue'

export default {
  name: 'App',
  components: {
    Carousel
  },
  data() {
    return {
      // 定义图片数组，可以根据需求替换为实际的产品图片链接
      productImages: [
        'https://example.com/images/product1.jpg',
        'https://example.com/images/product2.jpg',
        'https://example.com/images/product3.jpg'
      ]
    };
  }
};
</script>

<style>
#app {
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}
</style>
