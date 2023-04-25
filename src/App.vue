<script setup lang="ts">
import NavbarVue from "./components/NavbarVue.vue";
import BannerVue from "./components/BannerVue.vue";
import CarsProjectVueVue from "./components/CarsProjectVue.vue";
import OurVisionVue from "./components/OurVision.vue";
import OurStoriesVue from "./components/OurStories.vue";
import NewsLetterVue from "./components/NewsLetter.vue";
import CompareCarsVue from "./components/CompareCars.vue";
import FooterCopmonentVue from "./components/FooterCopmonent.vue";
</script>

<template>
  <header>
    <NavbarVue />
  </header>

  <main>
    <BannerVue />
    <CarsProjectVueVue />
    <OurVisionVue />
    <OurStoriesVue />
    <NewsLetterVue />
    <CompareCarsVue />
    <FooterCopmonentVue />
  </main>
</template>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
html {
  scroll-behavior: smooth;
}
ul {
  list-style: none;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
a {
  text-decoration: none !important;
}
</style>
