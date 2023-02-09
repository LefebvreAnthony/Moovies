<template>
  <main>
    <h1 class="">Accueil</h1>

    <div class="container">
      <ul class="md:flex md:flex-row md:flex-wrap md:gap-4">
        <li
          class="md:basis-1/4 md:w-1/4"
          v-for="(anime, index) in animList"
          :key="index"
        >
          <!-- {{ anime.entry }} -->
          <!-- <p v-for="(item, i) in anime.entry" :key="i">{{ item.title }}</p> -->
          <Card
            v-for="(item, i) in anime.entry"
            :key="i"
            :title="item.title"
            :urlImg="item.images.jpg.image_url"
          />
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
import Card from "../components/card/Card.vue";
import axios from "axios";

export default {
  name: "Accueil",
  components: { Card },
  data() {
    return {
      animList: [],
    };
  },
  beforeCreate() {
    try {
      axios
        .get("https://api.jikan.moe/v4/recommendations/anime")
        .then((response) => {
          for (const animes of response.data.data) {
            this.animList.push(animes);
          }
          console.log(this.animList);
        })
        .catch((err) => console.log("Erreur req : " + err));
    } catch (err) {
      console.log(err);
    }
  },
  mounted() {},
};
</script>
<style></style>
