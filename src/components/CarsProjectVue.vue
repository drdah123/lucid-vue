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
  width: 100vw;
  height: 100vh;
  position: relative;
  margin-top: -6px;
}

.swiper-name h3 {
  color: #e4dfd4;
  font-family: SchnyderSDemi, Georgia, Times, Times New Roman, serif,
    Apple Color Emoji, Segoe UI Emoji;
  font-size: 3rem;
  font-weight: 500;
  opacity: 0;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.swiper-car-design {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.swiper-name {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  width: 100vw;
  align-items: center;
}
.swiper-active h3,
.swiper-active p,
.swiper-active div {
  opacity: 1 !important;
}
.swiper-item p {
  font-weight: 400;
  letter-spacing: 1.5px;
  font-family: GTAmerica, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
    Roboto, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  opacity: 0;
  color: #fff;
}

.swiper-item img {
  width: 80rem !important;
  object-fit: cover;
  position: absolute;
  pointer-events: none;
}

.swiper-car-design a:nth-child(1) {
  border: 0;
  background: #fff;
  color: #000;
  transition: 0.5s;
  padding: 1.3rem 2rem;
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
}
.swiper-button-next {
  right: 5rem !important;
  color: #fff !important;
}

.swiper-button-prev {
  left: 5rem !important;
  color: #fff !important;
}

.swiper-pagination {
  top: 95% !important;
  width: 90% !important;
  background: rgb(82, 82, 82) !important;
  height: 1px !important;
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
}
.swiper-pagination span {
  background: #fff !important;
}
</style>
