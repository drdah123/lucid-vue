<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";

import CarCardProjectVue from "./CarCardProject.vue";
import { carsProject } from "@/assets/assets/data/data";

export default {
  components: {
    Swiper,
    SwiperSlide,
    CarCardProjectVue,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
  data() {
    return { carsProject: carsProject };
  },
};
</script>

<template>
  <Swiper
    :slidesPerView="2"
    :spaceBetween="200"
    :loop="true"
    :speed="2000"
    :pagination="{
      type: 'progressbar',
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper2"
  >
    <template v-for="car of carsProject" :key="car.name">
      <SwiperSlide v-slot="{ isActive }">
        <CarCardProjectVue
          :name="car.name"
          :desc="car.desc"
          :image="car.image"
          :isActive="isActive"
        />
      </SwiperSlide>
    </template>
  </Swiper>
</template>

<style>
.mySwiper2 {
  background-image: url("../assets/assets/Screenshot 2022-11-13 041856.jpg");

  width: 100%;
  height: 100vh;
  position: relative;
  margin-top: -6px;
  width: 100vw;
}

.swiper-name h3 {
  color: #e4dfd4;
  position: absolute;
  top: -100vh;
  font-family: SchnyderSDemi, Georgia, Times, Times New Roman, serif,
    Apple Color Emoji, Segoe UI Emoji;
  font-size: 3rem;
  left: 87.5%;
  font-weight: 500;
  opacity: 0;
  width: 200%;
}

@media (max-width: 670px) {
  .swiper-name h3 {
    font-size: 1.2rem;
    top: 35vh;
    left: 40vw;
  }

  .swiper-car-design a:nth-child(1) {
    padding: 0.5rem 0 !important;
    margin: 0 8vw;
  }
  .swiper-car-design a:nth-child(2) {
    margin: 0 8vw;
  }

  .swiper-name p {
    font-size: 0.2rem;
    margin: 4rem 4rem 0rem;
  }
}
.swiper-car-design {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -40vh;
  /* top: -100vh; */
  width: fit-content;
  position: absolute;
  margin-left: 35vw;
  opacity: 0;
}

.swiper-car-design a {
  margin: 0 1vw;
}
.swiper-name {
  z-index: 100;
}
.swiper-active h3,
.swiper-active p,
.swiper-active div {
  opacity: 1 !important;
}
.swiper-item p {
  position: absolute;
  top: -90vh;
  font-weight: 400;
  letter-spacing: 1.5px;
  font-family: GTAmerica, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
    Roboto, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  left: 85%;
  width: 100%;
  opacity: 0;

  color: #fff;
}

.swiper-item img {
  width: 100vw !important;

  pointer-events: none;
}

.swiper-car-design a:nth-child(1) {
  border: 0;
  background: #fff;
  color: #000;
  width: 10.5vw;
  text-align: center;
  transition: 0.5s;
  padding: 1.3rem 0;
  font-size: 1vw;
  display: block;
  overflow: hidden;
  z-index: 3;
  position: relative;
}

.swiper-car-design a:nth-child(1)::before {
  content: "";

  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;

  background: rgb(157, 133, 127);
  z-index: -2;
  transition: 0.5s;
}
.swiper-car-design a:nth-child(1):hover::before {
  left: 0;
}
.swiper-car-design a:nth-child(1):hover {
  color: #fff;
}
.swiper-car-design a:nth-child(2) {
  border-bottom: 1px solid #fff;
  color: #fff;
  letter-spacing: -0.6px;
  font-size: 1vw;

  width: 7vw;
  text-align: center;
}
.swiper-button-next {
  color: #fff !important;
}

.swiper-button-prev {
  color: #fff !important;
}

.swiper-pagination {
  top: 95% !important;
  width: 90% !important;
  margin: 0 2.5% 0 5%;
  background: rgb(82, 82, 82) !important;
  height: 1px !important;
  position: relative;
}
.swiper-pagination span {
  background: #fff !important;
  position: absolute;
  height: 1px !important;
}
</style>
