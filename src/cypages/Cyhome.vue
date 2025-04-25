<template>
  <div>
    <!-- 传递图片数组给 Carousel 组件 -->
    <Carousel
      :images="productImages"
      :autoplayInterval="5000"
      :arrowvalue="hover"
      :height="height"
    />
    <Cycontent />
    <div class="webvideo">
      <VideoComponent></VideoComponent>
    </div>
    <div class="card-container">
      <el-row>
        <el-col :span="6" v-for="(card, index) in cardsData" :key="index">
          <CardComponent
            :title="card.title"
            :description="card.description"
            :image="card.image"
            :showButton="card.showButton"
            :shadowvalue="card.shadowvalue"
            @button-click="handleButtonClick"
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Cycontent from '../components/Cycontent.vue';
import image1 from '../../public/LogoImage/28.jpeg';
import image2 from '../../public/LogoImage/29.jpeg';
import image3 from '../../public/LogoImage/30.jpeg';
import image4 from '../../public/LogoImage/31.jpeg';
import image5 from '../../public/LogoImage/32.jpeg';
import image6 from '../../public/LogoImage/50.jpeg';
import image7 from '../../public/LogoImage/56.jpeg';
import image8 from '../../public/LogoImage/59.jpeg';
export default {
  name: "App",
  components: {
    Cycontent,
  },
  data() {
    return {
      hover: "hover",
      height: "90vh",//定义板块的轮播图高度
      // 定义图片数组，可以根据需求替换为实际的产品图片链接
      productImages: [
        image1,image2,image3,image4,image5,
      ],
      cardsData: [
        {
          title: "Card 1",
          description: "This is card 1",
          image: image6,
          showButton: true,
          shadowvalue: "hover",
        },
        {
          title: "Card 2",
          description: "This is card 2",
          image: image7,
          showButton: true,
          shadowvalue: "hover",
        },
        {
          title: "Card 3",
          description: "This is card 3",
          image: image8,
          showButton: true,
          shadowvalue: "hover",
        },
      ],
    };
  },
  methods: {
    handleButtonClick(title) {
      this.$message(`按钮点击：${title}`);
    },
  },
  computed: {},
};
</script>

<style lang="scss">
#app {
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}
.card-container {
  .el-row {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
}
</style>
