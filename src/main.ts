import "./assets/main.css";

/* Set up using Vue 3 */
import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faBars,
  faXmark,
  faGlobe,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faBars,
  faXmark,
  faGlobe,
  faMinus,
  faPlus
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
