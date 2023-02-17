<template>
  <main>
    <h1 class="">Accueil</h1>

    <div class="container">
      <section class="mx-auto grid gap-5 sm:grid-cols-2 md:grid-cols-4 px-4">
        <!-- {{ anime.entry }} -->
        <!-- <p v-for="(item, i) in anime.entry" :key="i">{{ item.title }}</p> -->
        <Card
          v-for="(anime, index) in animList"
          :key="index"
          :title="anime.entry[0].title"
          :urlImg="anime.entry[0].images.jpg.image_url"
        />
      </section>
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
  mounted() {
    console.log(this.animList);
  },
};
</script>
<style></style>
