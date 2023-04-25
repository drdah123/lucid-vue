<script setup lang="ts">
defineProps<{
  name: string;
  desc: string;
  image: string;
  isActive: boolean;
}>();
</script>

<template>
  <div class="swiper-item">
    <img class="d-block w-100" :src="image" alt="First slide" />
    <div :class="` swiper-name ${isActive ? 'swiper-active' : ''}`">
      <div class="card-header">
        <h3 :class="isActive ? 'swiper-active' : ''">{{ name }}</h3>
        <p :class="isActive ? 'swiper-active' : ''">{{ desc }}</p>
      </div>
      <div class="swiper-car-design">
        <a href="#2" :class="isActive ? 'swiper-active' : ''"> Design yours </a>
        <a
          href="#cars-comparer"
          alt=""
          :class="isActive ? 'swiper-active' : ''"
        >
          Compare models
        </a>
      </div>
    </div>
  </div>
</template>
