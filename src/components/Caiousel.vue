<template>
    <div class="carousel-container">
        <div class="carousel">
            <!-- 当前显示的图片 -->
            <img :src="currentImage" alt="carousel image" class="carousel-image" />
        </div>

        <!-- 图片指示器（可以根据需要开启） -->
        <div class="indicators">
            <span v-for="(image, index) in images" :key="index"
                :class="['indicator', { active: currentIndex === index }]" @click="goToImage(index)"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    props: {
        // 接收父组件传递的图片数组
        images: {
            type: Array,
            required: true
        },
        // 接收父组件传递的自动播放间隔
        autoplayInterval: {
            type: Number,
            default: 3000
        }
    },
    data() {
        return {
            currentIndex: 0,  // 当前显示的图片索引
            timer: null       // 定时器用于自动切换
        };
    },
    computed: {
        // 当前显示的图片
        currentImage() {
            return this.images[this.currentIndex];
        }
    },
    methods: {
        // 切换到指定索引的图片
        goToImage(index) {
            this.currentIndex = index;
        },
        // 自动切换到下一个图片
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        // 启动自动播放
        startAutoplay() {
            this.timer = setInterval(this.nextImage, this.autoplayInterval);
        },
        // 停止自动播放
        stopAutoplay() {
            clearInterval(this.timer);
        }
    },
    mounted() {
        this.startAutoplay(); // 组件挂载时开始自动播放
    },
    beforeDestroy() {
        this.stopAutoplay(); // 组件销毁时停止自动播放
    }
};
</script>

<style scoped>
.carousel-container {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 8px;
}

.carousel {
    position: relative;
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
}

.indicator {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    cursor: pointer;
}

.indicator.active {
    background-color: #fff;
}
</style>