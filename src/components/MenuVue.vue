<script lang="ts">
export default {
  props: {
    isMenuClicked: Boolean,
  },
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    setIsMenuClicked() {
      this.$emit("setIsMenuClicked");
    },
    setIsClicked() {
      this.isClicked = !this.isClicked;
    },
  },
};
</script>

<template>
  <div :class="`home-menu ${isMenuClicked ? 'active' : ''}`">
    <div class="home-menu-header">
      <a href="##">sign in</a>
      <a href="##">stay update</a>
      <button @click="setIsMenuClicked">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
    </div>
    <div>
      <ul>
        <div>
          <li class="home-menu-li-container">
            <button type="button" @click="setIsClicked">
              Lucid Air
              <font-awesome-icon v-if="isClicked" icon="fa-solid fa-minus" />
              <font-awesome-icon icon="fa-solid fa-plus" v-else />
            </button>
            <ul v-if="isClicked">
              <li>
                <a href="##">Overview</a>
              </li>
              <li>
                <a href="##">Design</a>
              </li>
              <li>
                <a href="##">Performance</a>
              </li>
              <li>
                <a href="##">Charging</a>
              </li>
              <li>
                <a href="##">Connectivity</a>
              </li>
            </ul>
          </li>
        </div>
        <li>
          <a href="##">Lucid Gravity</a>
        </li>
        <li>
          <a href="##">Design Yours</a>
        </li>
        <li>
          <a href="##">Reserve</a>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <a href="##">More about Lucid</a>
        </li>
        <li>
          <a href="##">Company</a>
        </li>
        <li>
          <a href="##">Investors</a>
        </li>
        <li>
          <a href="##">Stories</a>
        </li>
        <li>
          <a href="##">Tech Talks</a>
        </li>
        <li>
          <a href="##">Careers</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.home-menu {
  text-transform: capitalize;
  display: block;
  position: fixed;
  max-width: 22.8125rem;
  width: 100%;
  right: -100%;
  height: 100vh;
  background: #1b1b1b;
  z-index: 110;
  transition: 1s;
  text-align: left;
  overflow-y: auto;
}
.active {
  right: 0;
}
.home-menu a:hover,
.home-menu button:hover,
.home-menu svg:hover {
  opacity: 0.75;
}
li {
  padding: 1rem 0;
}
.home-menu ul {
  list-style: none;
  font-weight: 300;
  color: #fff;
  font-size: 1.25rem;
}
.home-menu ul li {
  padding: 2%;
}
.home-menu a {
  color: #000;
  color: #fff;
}
.home-menu button {
  background: inherit;
  border: 0;
  color: #fff;
  padding: 0;
  font-weight: 100;
  font-size: 1.25rem;
  cursor: pointer;
}
.home-menu-header a {
  color: #e5e1cf;
  padding: 1rem;
  display: inline-block;
}
.home-menu-header {
  padding: 2rem 1rem;
  position: relative;
}
.home-menu-header button {
  position: absolute;
  right: 1rem;
}
.home-menu-li-container {
  position: relative;
}
.home-menu-li-container svg {
  position: absolute;
  right: -300%;
}
.home-menu-li-container li {
  color: #e5e1cf;
  font-family: GTAmerica, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
    Roboto, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 0.01em;
  line-height: 2.75rem;
  transition: color 0.5s;
}
</style>
