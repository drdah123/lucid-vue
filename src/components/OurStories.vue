<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/navigation";
import { FreeMode, Pagination } from "swiper";
import wheel from "@/assets/assets/stealth_3quarter-front-2_web-16x9.webp";
import glass from "@/assets/assets/glass-cockpit-ota-thumbnail.webp";
import sapphire from "@/assets/assets/lucid-air-sapphire-front-3qtr.webp";
import grandTouring from "@/assets/assets/lucid-grand-touring-launch-90.webp";
import groupP from "@/assets/assets/group-608-web.webp";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode, Pagination],
    };
  },
  data() {
    return {
      wheel,
      glass,
      sapphire,
      grandTouring,
      groupP,
    };
  },
};
</script>

<template>
  <div class="our-stories">
    <div class="our-stories-header">
      <div>
        <h3>Our stories</h3>
      </div>
      <div class="our-stories-header-link">
        <a href="##2">View all</a>
      </div>
    </div>
    <Swiper
      :slidesPerView="3"
      :spaceBetween="100"
      :loop="true"
      :speed="2000"
      :pagination="{
        type: 'progressbar',
      }"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide>
        <a href="##">
          <img :src="wheel" alt="" />
          <h4>Embrace the dark side.</h4>
          <p>Aug 08, 2022 / Engineering</p>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="##">
          <img :src="glass" alt="" />
          <h4>The rollout of Lucid UX 2.0 has begun. Here’s what’s next.</h4>
          <p>Aug 08, 2022 / Engineering</p>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="$$">
          <img :src="sapphire" alt="" />
          <h4>Introducing Sapphire. The pinnacle of electric performance.</h4>
          <p>Aug 08, 2022 / Engineering</p>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="##">
          <img :src="grandTouring" alt="" />
          <h4>Lucid Air Grand Touring has arrived.</h4>
          <p>Aug 08, 2022 / Engineering</p>
        </a>
      </SwiperSlide>
    </Swiper>
    <div class="projects">
      <div class="single-project">
        <a href="##">
          <img :src="groupP" alt="" />
          <div class="projects-content">
            <p>Studios</p>
            <p>Our location</p>
          </div>
        </a>
      </div>
      <div class="single-project">
        <a href="$$">
          <img :src="groupP" alt="" />
          <div class="projects-content">
            <p>Careers</p>
            <p>Join Lucid</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.our-stories {
  width: 100vw;
  height: 210vh;
  background-color: rgba(0, 0, 0, 0.9);
  position: relative;
  overflow-x: hidden;
}

.mySwiper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1650px;
  /* margin-top: 40vh; */
}
.mySwiper .card-story p {
  color: #e4dfd4;
  text-transform: uppercase;
  font-size: 0.75rem;
}
.our-stories-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  margin: 10vh 0 0 10vh;
}

.our-stories-header a {
  border: 1px solid #fff;
  color: #fff;
  font-family: GTAmerica, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
    Roboto, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-weight: 400;
  width: 10rem;
  text-align: center;
  right: 15%;
  top: 7%;
  padding: 1.3rem 0;
  position: absolute;
  cursor: pointer;
  transition: 1s;
  z-index: 4;
}
.our-stories-header a:hover {
  color: black;
  background-color: #fff;
}

.our-stories-header h3 {
  color: #f2f2f2;
  font-size: 2.875rem;
  line-height: 3.5rem;
  font-weight: 400;
  font-family: SchnyderSDemi, Georgia, Times, Times New Roman, serif,
    Apple Color Emoji, Segoe UI Emoji;
  position: absolute;
  top: 5%;
  left: 6%;
}

.mySwiper img {
  height: 344px;
  width: 490px;
}
.mySwiper h4 {
  color: #ededed;
  font-weight: 300;
  font-family: GTAmerica, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
    Roboto, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 1.375rem;
  position: absolute;
}

.mySwiper p {
  position: absolute;
  bottom: -15vh;
}
.mySwiper div {
  border-left: 0.1px solid #fff;
  margin: 100px 5% 0;
  padding: 0 1px 10% 5%;
  position: relative;
}
.mySwiper .swiper-pagination {
  top: -240px !important;
  width: 50vw !important;
  background: rgb(82, 82, 82) !important;
  padding: 0.001px 0 !important;
  margin-right: 25%;
  position: relative;
}
.mySwiper .swiper-pagination span {
  background: #fff !important;
}

.our-stories .projects {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 81%;
  height: 10%;
  position: absolute;
  left: 10%;
  top: 67%;
}
@media (max-width: 1020px) {
  .our-stories .projects {
    display: grid;
    height: fit-content;
    top: 40%;
    left: 10%;
  }
  .our-stories {
    height: 200vh;
  }
  .our-stories-header a {
    display: none;
  }
  .our-stories-header h3 {
    font-size: 2.125rem;
  }
  .mySwiper img {
    height: 190px;
    width: 280px;
  }
  .our-stories h3 {
    top: 5vh;
  }
  .mySwiper {
    width: 1020px;
  }
}
@media (max-width: 620px) {
  .our-stories .projects {
    display: grid;
    height: fit-content;
    top: 90vh;
  }

  .our-stories {
    height: 160vh;
  }
  .mySwiper .swiper-pagination {
    margin-right: 70%;
  }
  .projects-content p {
    font-size: 0.5rem !important;
  }
}

.our-stories .projects img {
  height: 100%;
  width: 100%;
}
.single-project {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.single-project:hover img {
  transform: scale(1.2);
  transition: 1s;
}
.our-stories .projects .projects-content {
  position: absolute;
  top: -10vh;
  color: #fff;
  left: 8%;
  font-family: GTAmerica, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Roboto, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

.our-stories .projects .projects-content p:nth-child(2) {
  font-size: 1.375rem;
}
</style>
