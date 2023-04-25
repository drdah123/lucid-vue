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
  font-size: 2.5rem;
  position: fixed;
  top: 10%;
  color: #fff;
  text-align: center;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -100;
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
