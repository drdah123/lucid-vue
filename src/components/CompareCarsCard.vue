<script lang="ts">
import {
  carWheels,
  carImages,
  carColors,
  cars,
} from "@/assets/assets/data/data";
import type { Car } from "./CompareCars.vue";

export default {
  props: {
    car: Object,
  },
  data() {
    return {
      carImages,
      carColors,
      carWheels,
      cars,
      carImage: carImages.find(
        (carI) =>
          carI.name === this.car?.name &&
          carI.color === this.car.color &&
          carI.wheel === this.car.wheel
      ),
      carColor: carColors.find((carC) => carC.name === this.car?.color),
      carWheel: carWheels.find((carW) => carW.name === this.car?.wheel),
      isOpen: false,
      Car: this.car as Car,
    };
  },
  mounted() {
    // this.update();
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
    },
    update() {
      (this.carImage = carImages.find(
        (carI) =>
          carI.name === this.car?.name &&
          carI.color === this.car?.color &&
          carI.wheel === this.car?.wheel
      )),
        (this.carColor = carColors.find(
          (carC) => carC.name === this.car?.color
        ));
      this.carWheel = carWheels.find((carW) => carW.name === this.car?.wheel);
    },
    chooseDesign(changed: string, type: string) {
      if (type === "name") {
        const foundCar = carImages.find((carI) => carI.name === changed);
        this.Car.name = foundCar?.name;
        this.Car.color = foundCar?.color;
        this.Car.wheel = foundCar?.wheel;
      }
      if (type === "color") {
        this.Car.color = changed;
      }
      if (type === "wheel") {
        this.Car.wheel = changed;
      }
      this.update();
    },
  },
};
</script>

<template>
  <div class="car-container-col">
    <div class="car-selector" @click="openMenu()">
      <p>{{ car?.name }}</p>
      <div class="car-selector-img-container">
        <img :src="carWheel?.image" alt="" />
        <img :src="carColor?.image" alt="" />
        <!-- <IoMdArrowDropdown /> -->
      </div>
    </div>
    <div>
      <h1>{{ car?.name }}</h1>
      <div v-if="isOpen" class="car-menu-selector-item">
        <div
          @click="chooseDesign(c.name, 'name')"
          v-for="c of cars"
          :key="c.name"
        >
          <p>{{ c.name }}</p>
        </div>
      </div>
    </div>
    <div class="car-picture-container">
      <img :src="carImage?.image" alt="" />
    </div>
    <div>
      <div class="car-color-container">
        <div v-for="(color, i) in carColors" :key="i">
          <img
            :src="color.image"
            v-if="color.model === car?.name"
            @click="chooseDesign(color.name, 'color')"
          />
        </div>
      </div>
      <div>{{ car?.color }}</div>
      <div class="car-wheel-container">
        <div v-for="(wheel, i) in carWheels" class="col-container" :key="i">
          <img
            v-if="wheel.model === car?.name"
            :src="wheel.image"
            @click="chooseDesign(wheel.name, 'wheel')"
          />
        </div>

        <div class="car-wheel-name">{{ car?.wheel }}</div>
        <div class="car-button">
          <button>Design Yours</button>
          <button>Reserve Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.car-selector {
  border: 1px solid #fff;
  padding: 5% 7.5%;
  display: flex;
  cursor: pointer;
  position: relative;
}
.car-selector svg {
  font-size: 1.5rem;
  transition: 0.5s;
}
.car-selector .car-selector-img-container {
  height: 50%;
  position: absolute;
  display: flex;
  right: 0;
}

.active svg {
  rotate: 180deg;
}

.car-picture-container img {
  width: 97%;
  margin-top: 35%;
}
.car-color-container img {
  width: 100%;
}
.car-color-container {
  margin-top: 10%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
.car-color-container div {
  width: 30%;
}
.car-wheel-container {
  display: grid;
  gap: 10px;
  width: 100%;
  position: relative;
}
.car-wheel-container img {
  width: 100%;
}
.car-button {
  grid-column-start: 1;
  grid-column-end: 10;
  grid-row-start: 4;
}
.car-wheel-name {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
}
.car-button button {
  border: 1px solid white;
  background: inherit;
  color: #fff;
  width: 40%;
  padding: 6%;
  cursor: pointer;
  margin-top: 10%;
}

.car-menu-selector-item {
  display: flex;
  align-items: center;
  flex: 1 1;
  text-align: center;
  width: 50.5vw;
  top: 0;
  position: absolute;
}
.car-menu-selector-item div {
  border: 1px solid white;
  background: rgb(22, 22, 22);
  cursor: pointer;
  height: 100%;

  width: 100%;
}
.car-menu-selector-item div:hover {
  background: black;
}
.car-menu-selector-item p {
  font-size: 1.001vw;
  margin: 1.8rem 0;
}
</style>
