<template>
  <div id="app">
    <h1>家纺产品展示</h1>
    <!-- 传递图片数组给 Carousel 组件 -->
    <Carousel :images="productImages" :autoplayInterval="5000" :arrowvalue="hover" :height="height" />
    <div class="webvideo">
      <VideoComponent ></VideoComponent>
    </div>
    <div class="card-container">
      <el-row>
        <el-col :span="6" v-for="(card, index) in cardsData" :key="index">
          <CardComponent :title="card.title" :description="card.description" :image="card.image"
            :showButton="card.showButton" :shadowvalue="card.shadowvalue" @button-click="handleButtonClick" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// 导入 Carousel 组件
import Carousel from '../components/Caiousel.vue';
import CardComponent from '../components/Webcard.vue';
import VideoComponent from '../components/Webvideo.vue';

export default {
  name: 'App',
  components: {
    Carousel,
    CardComponent,
    VideoComponent
  },
  data() {
    return {
      hover:"hover",
      height:"80vh",
      // 定义图片数组，可以根据需求替换为实际的产品图片链接
      productImages: [
        'https://image.evget.com/2025/02/12/CULTUREts5c3wpd47eyt78c.png',
        'https://image.evget.com/2025/02/12/CULTUREts5c3wpd47eyt78c.png',
        'https://image.evget.com/2025/02/12/CULTUREts5c3wpd47eyt78c.png'
      ],
      cardsData: [
        {
          title: 'Card 1',
          description: 'This is card 1',
          image: 'https://image.evget.com/2025/02/12/CULTUREts5c3wpd47eyt78c.png',
          showButton: true,
          shadowvalue:"hover"
        },
        {
          title: 'Card 2',
          description: 'This is card 2',
          image: 'https://image.evget.com/2025/02/12/CULTUREts5c3wpd47eyt78c.png',
          showButton: true,
          shadowvalue:"hover"
        },
        {
          title: 'Card 3',
          description: 'This is card 3',
          image: 'https://image.evget.com/2025/02/12/CULTUREts5c3wpd47eyt78c.png',
          showButton: true,
          shadowvalue:"hover"
        }
      ]
    };
  },
  methods: {
    handleButtonClick(title) {
      this.$message(`按钮点击：${title}`);
    }
  },
  computed:{

  }
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
  .el-row{
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
}
</style>
