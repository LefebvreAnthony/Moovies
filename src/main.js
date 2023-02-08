import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

//router
import router from "./Router.js";

createApp(App).use(router).mount("#app");
