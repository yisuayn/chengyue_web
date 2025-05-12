<template>
  <div class="wedding-set-page">
    <!-- 顶部Banner区域 -->
    <div class="banner">
      <video autoplay muted loop playsinline>
        <source src="../../public/LogoImage/1.mp4" type="video/mp4" />
      </video>
      <div class="banner-text">
        <h1>婚庆套件系列</h1>
        <p>为爱而生 · 为你而选</p>
      </div>
    </div>

    <!-- 产品介绍区域 -->
    <div class="intro-section">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="12">
          <video controls width="100%">
            <source src="../../public/LogoImage/2.mp4" type="video/mp4" />
          </video>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12">
          <h2>匠心打造的婚庆系列</h2>
          <p>精选高密度贡缎面料，结合中式婚礼的红色美学，营造幸福仪式感。每一套婚庆套件都是匠心呈现，为新婚夫妇带来浪漫与品质的完美结合。</p>
        </el-col>
      </el-row>
    </div>

    <!-- 产品特色亮点 -->
    <div class="features-section">
      <h2>产品特色</h2>
      <el-row :gutter="20">
        <el-col :xs="12" :sm="8" v-for="(item, i) in features" :key="i">
          <div class="feature-item">
            <img :src="item.icon" class="feature-icon" />
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 图片展示区域 -->
    <div class="image-gallery">
      <h2>更多实拍图</h2>
      <el-carousel :interval="5000" type="card" height="300px">
        <el-carousel-item v-for="(img, index) in images" :key="index">
          <img :src="img" class="carousel-img" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 婚房搭配推荐 -->
    <div class="recommend-section">
      <h2>婚房搭配推荐</h2>
      <el-row :gutter="20">
        <el-col :sm="12" :xs="24" v-for="item in recommend" :key="item.title">
          <el-card :body-style="{ padding: '10px' }">
            <img :src="item.img" style="width: 100%" />
            <div style="padding: 10px 0">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 常见问题 FAQ -->
    <div class="faq-section">
      <h2>常见问题</h2>
      <el-collapse>
        <el-collapse-item title="婚庆套件怎么清洗？" name="1">
          <p>建议使用冷水轻柔手洗或低温机洗，不可使用漂白剂。</p>
        </el-collapse-item>
        <el-collapse-item title="婚庆套件是否支持定制？" name="2">
          <p>支持姓名刺绣等定制服务，联系客服获取详情。</p>
        </el-collapse-item>
      </el-collapse>
    </div>

    <!-- 咨询表单 -->
    <div class="consult-section">
      <h2>在线咨询</h2>
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="留言" prop="message">
          <el-input type="textarea" v-model="form.message"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交咨询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 移动端客服 -->
    <div class="contact-box" v-if="isMobile">
      <img src alt="联系客服" class="qrcode" />
      <a :href="'tel:' + phone" class="call-btn">📞 一键电话咨询</a>
    </div>
  </div>
</template>
<script>
export default {
  metaInfo() {
    return {
      title: "婚庆套件 - 晟玥家纺",
      meta: [
        {
          name: "keywords",
          content: "婚庆四件套, 红色床品, 喜庆床上用品, 高端家纺",
        },
        {
          name: "description",
          content:
            "晟玥家纺婚庆套件系列，以东方红为灵感，传承婚礼文化，精选高支高密面料，打造幸福仪式感。",
        },
      ],
    };
  },
  data() {
    return {
      isMobile: window.innerWidth < 768,
      phone: "400-800-1234",
      images: [],
      recommend: [],
      features: [],
      form: {
        name: "",
        phone: "",
        message: "",
      },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        phone: [
          { required: true, message: "请输入电话", trigger: "blur" },
          {
            pattern: /^1\d{10}$/,
            message: "手机号格式不正确",
            trigger: "blur",
          },
        ],
        message: [{ required: true, message: "请输入留言", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message.success("提交成功，我们会尽快联系您！");
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.wedding-set-page {
  font-family: 'PingFang SC', sans-serif;
  padding-top: 60px;
}
.banner {
  position: relative;
  height: 90vh;
  overflow: hidden;
}
.banner video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.banner-text {
  position: absolute;
  top: 40%;
  left: 10%;
  color: #fff;
}
.intro-section, .features-section, .image-gallery, .recommend-section, .consult-section, .faq-section {
  padding: 40px 20px;
}
.faq-section{
    width: 1200px;
    margin: auto;
}
.consult-section{
    width: 500px;
    margin: auto;
}
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.feature-item {
  text-align: center;
  padding: 10px;
}
.feature-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}
.contact-box {
  text-align: center;
  margin: 20px 0;
}
.qrcode {
  width: 150px;
  height: 150px;
}
.call-btn {
  display: block;
  margin-top: 10px;
  color: #e53935;
  font-size: 16px;
  font-weight: bold;
}
@media screen and (max-width: 768px) {
  .banner-text h1 {
    font-size: 24px;
  }
  .el-col {
    width: 100% !important;
  }
  .intro-section {
    flex-direction: column;
    text-align: center;
  }
}
</style>