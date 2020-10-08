<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <Navbar />
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <Hero />
        <About />
        <Gallery :cars="cars"/>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import About from "../../components/about";
import Gallery from "../../components/gallery";

export default {
  name: "HomeLayout",
  components: {
    Navbar,
    Hero,
    About,
    Gallery
  },
  props: ['cars']
}
</script>

<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
