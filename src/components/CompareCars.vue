<script lang="ts">
import CompareCarsCardVue from "./CompareCarsCard.vue";

export interface Car {
  name: string | undefined;
  color: string | undefined;
  wheel: string | undefined;
}
export default {
  components: {
    CompareCarsCardVue,
  },
  data() {
    return {
      carOne: {
        name: "AIR DREAM EDITION",
        color: "Infinite black",
        wheel: "19” Aero Range",
      },
      carTwo: {
        name: "AIR DREAM EDITION",
        color: "Infinite black",
        wheel: "19” Aero Range",
      },
      carThree: {
        name: "AIR DREAM EDITION",
        color: "Infinite black",
        wheel: "19” Aero Range",
      },
    };
  },
};
</script>

<template>
  <div class="compare-page-container" id="cars-comparer">
    <div class="compare-card-header">
      <div>
        <h1>Compare Lucid Models</h1>
      </div>
      <div>
        <p>Need help choosing? Contact Us</p>
      </div>
    </div>
    <div class="select-model">
      <p>select mode</p>
    </div>
    <div class="compare-card-container">
      <CompareCarsCardVue :car="carOne" />
      <CompareCarsCardVue :car="carTwo" />
      <CompareCarsCardVue :car="carThree" />
    </div>
  </div>
</template>

<style scoped>
.compare-page-container {
  width: 100vw;
  height: 150vh;
  background-color: black;
  color: aliceblue;
  position: relative;
}
.compare-card-container {
  display: grid;
  grid-template: 100vh / 33.5% 33.5% 33.5%;
  padding: 0 5%;
  background-image: url("../assets/assets/Screenshot\ 2022-11-13\ 041856.jpg");
  background-size: cover;
  background-position: 0 88vh;
  height: 100vh;
}

.compare-card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.select-model {
  margin-left: 6.6%;
}
</style>
