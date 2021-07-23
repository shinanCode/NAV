<template>
  <a-layout class="height-100">
    <a-layout-sider>
      <LeftSide></LeftSide>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <Search></Search>
      </a-layout-header>
      <a-layout-content class="flex flex-column">
          <app-main></app-main>
      </a-layout-content>
      <a-layout-footer>
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "./components/Search.vue";
import HelloWorld from "./components/HelloWorld.vue";
import LeftSide from "./views/layout/LeftSide.vue";
import Footer from "./views/layout/Footer.vue";
import AppMain from "./views/AppMain.vue";

export default defineComponent({
  name: "App",
  components: {
    Search,
    Footer,
    AppMain,
    HelloWorld,
    LeftSide,
  },
});
</script>

<style lang="less">
@import "./styles/index.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  .ant-layout-footer {
    padding: 10px;
  }
}
</style>
