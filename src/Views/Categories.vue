<template>
  <div>
    <h1>Categories</h1>
    <div>
      <ul>
        <li v-for="(categorie, index) in this.categoriesList" :key="index">
          {{ categorie.name }}
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
  created() {
    try {
      axios
        .get("https://api.jikan.moe/v4/genres/anime")
        .then((res) => {
          for (const categorie of res.data.data) {
            this.categoriesList.push(categorie);
          }
        })
        .catch((err) => console.log("Erreur requête catégorie : " + err));
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
<style></style>
