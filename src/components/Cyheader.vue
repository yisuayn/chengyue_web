<template>
  <div class="Cyheader">
    <div class="Cy_logo">
      <img src="" alt="" />
      <h1>晟玥科技</h1>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      :router="true"
    >
      <el-menu-item index="/">主页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">产品种类</template>
        <el-menu-item index="Winterquilt">冬季棉被</el-menu-item>
        <el-menu-item index="Weddingkit">婚庆套件</el-menu-item>
        <el-menu-item index="Coolingcomforter">夏凉被</el-menu-item>
      </el-submenu>
      <el-menu-item index="Cycontent">品牌动态</el-menu-item>
      <el-submenu index="4">
        <template slot="title">关于我们</template>
        <el-menu-item index="Companyprofile">公司简介</el-menu-item>
        <el-menu-item index="Developmenthistory">发展历程</el-menu-item>
        <el-menu-item index="Brandvision">品牌愿景</el-menu-item>
        <el-menu-item index="Joinus">加入我们</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss">
.Cyheader {
  position: fixed;
  background-color: #eee;
  width: 100%;
  z-index: 99999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .Cy_logo{
    display: flex;
    align-items: center;
  }
  .el-menu {
    background-color: transparent;
  }
  .el-menu.el-menu--horizontal{border: solid 1px transparent;}
}
</style>
