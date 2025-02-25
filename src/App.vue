<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script src="./assets/iconfont.js"></script>

<style lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}
.el-carousel__container {
  height: 100% !important;
}
h1{margin-bottom: 0px !important;}
</style>
