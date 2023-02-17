import { createRouter, createWebHashHistory } from "vue-router";
import Accueil from "./Views/Accueil.vue";
import Login from "./Views/Login.vue";
import Categories from "./Views/Categories.vue";
import Categorie from "./Views/Categorie.vue";

const routes = [
  { path: "/", name: "Accueil", component: Accueil },
  { path: "/categories", name: "Categories", component: Categories },
  {
    path: "/categorie/:id",
    name: "Categorie",
    component: Categorie,
    props: true,
  },
  { path: "/login", name: "Login", component: Login },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
