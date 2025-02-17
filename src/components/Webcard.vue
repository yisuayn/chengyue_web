<template>
    <el-card :body-style="{ padding: '20px' }" class="card" :shadow="shadowvalue">
        <div class="card-content">
            <img :src="image" alt="image" v-if="image" class="card-image" />
            <time class="time">{{ currentDate }}</time>
            <p>{{ description }}</p>
        </div>
        <div slot="header" class="clearfix">
            <span>{{ title }}</span>
            <el-button v-if="showButton" type="text" size="small" @click="handleButtonClick">点击</el-button>
        </div>
    </el-card>
</template>

<script>
export default {
    data(){
        return{
            currentDate: new Date()
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            default: ''
        },
        showButton: {
            type: Boolean,
            default: false
        },
        shadowvalue:{
            type:String,
            default:"hover"
        }
    },
    methods: {
        handleButtonClick() {
            this.$emit('button-click', this.title);
        }
    }
}
</script>

<style scoped>
.card {
    width: 100%;
    margin-bottom: 20px;
}

.card-image {
    width: 100%;
    height: auto;
}
</style>