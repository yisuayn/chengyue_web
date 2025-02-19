<template>
  <el-carousel
    :interval="autoplayInterval"
    :arrow="arrowvalue"
    :style="{ height: cardHeight }"
  >
    <!-- 遍历图片数组，渲染每一张图片 -->
    <el-carousel-item v-for="(image, index) in images" :key="index">
      <img :src="image" alt="carousel image" class="carousel-image" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    // 接收父组件传递的图片数组
    images: {
      type: Array,
      required: true,
    },
    // 接收父组件传递的自动播放间隔
    autoplayInterval: {
      type: Number,
      default: 3000,
    },
    arrowvalue: {
      type: String,
      default: "hover",
    },
    height: {
      type: String,
      default: "200px",
    },
  },
  computed: {
    cardHeight() {
      return this.height;
    },
  },
};
</script>

<style scoped lang="scss">
.carousel-image {
  width: 100%;
  height: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
