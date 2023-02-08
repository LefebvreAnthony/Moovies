import { createRouter, createWebHashHistory } from "vue-router";
import Accueil from "./Views/Accueil.vue";
import Login from "./Views/Login.vue";
import Categories from "./Views/Categories.vue";

const routes = [
  { path: "/", name: "Accueil", component: Accueil },
  { path: "/categories", name: "Categories", component: Categories },
  { path: "/login", name: "Login", component: Login },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
