<template>
  <div id="app">
    <Cyheader />
    <router-view />
    <Cyfooter />
  </div>
</template>

<script>
import Cyheader from "../components/Cyheader.vue"
import Cyfooter from "../components/Cyfooter.vue"
export default {
  name: 'App',
  components: {
    Cyheader,
    Cyfooter
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {

  }
};
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
