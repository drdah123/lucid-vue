<script lang="ts">
export default {
  data() {
    return { scrolled: false };
  },
  methods: {
    onScroll() {
      if (window.scrollY > 1000 && window.scrollY < 1500) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<template>
  <div class="our-vision-container">
    <p class="our-vision-container-p" v-if="scrolled">
      At Lucid, we believe in the dream ahead. Our relentless focus on ahead.
      Our relentless focus on innovation, luxury, and sustainability innovation,
      luxury, and sustainability moves us toward a future where you no moves us
      toward a future where you no longer have to choose between doing longer
      have to choose between doing great things and doing the right thing.
    </p>
  </div>
</template>

<style scoped>
.our-vision-container-p {
  position: absolute;
  top: 0;
  font-size: 2rem;
  color: #fff;
  width: 50%;
  left: 25%;
  top: 25%;
  font-weight: 500;
  text-align: center;
}
.our-vision-container-p {
  font-size: 2.5rem;
  position: fixed;
  top: 10%;
  z-index: -10000;
}
@media (max-width: 1020px) {
  .our-vision-container-p {
    font-size: 1.2rem;
  }
}
.our-vision-container {
  background-image: url("@/assets/assets/vision-background-1-70.webp");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 100wh;
  height: 100vh;
  z-index: -101;
}
</style>
