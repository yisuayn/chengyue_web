<template>
  <div class="Cyheader">
    <div>
      <img src="" alt="" />
      <h1>晟玥科技</h1>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router="true"
    >
      <el-menu-item index="/">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">产品种类</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="/login">消息中心</el-menu-item>
      <el-submenu index="4">
        <template slot="title">关于我们</template>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-menu-item index="4-2">选项2</el-menu-item>
        <el-menu-item index="4-3">选项3</el-menu-item>
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
  .el-menu {
    background-color: transparent;
  }
  .el-menu.el-menu--horizontal{border: solid 1px transparent;}
}
</style>
