<template>
  <header-component></header-component>
  <slidebar-component></slidebar-component>
</template>

<script>

import SlidebarComponent from "@/components/SlidebarComponent";
import HeaderComponent from "@/components/HeaderComponent";


export default {
  name: 'App',
  components: {
    HeaderComponent,
    SlidebarComponent,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
