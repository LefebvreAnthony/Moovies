<template>
  <div>
    <h1>Categories</h1>
    <div class="mt-10">
      <ul class="grid sm:grid-cols-3 md:grid-cols-6 gap-10 text-center">
        <li v-for="(categorie, index) in this.categoriesList" :key="index">
          <router-link
            :to="{ name: 'Categorie', params: { id: categorie.mal_id } }"
          >
            {{ categorie.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Categories",
  data() {
    return {
      categoriesList: [],
    };
  },
  methods: {
    test: function () {},
  },
  created() {
    try {
      axios
        .get("https://api.jikan.moe/v4/genres/anime")
        .then((res) => {
          for (const categorie of res.data.data) {
            this.categoriesList.push(categorie);
          }
          console.log(res);
        })
        .catch((err) => console.log("Erreur requête catégorie : " + err));
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
<style></style>
