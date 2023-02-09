<template>
  <main>
    <h1>Accueil</h1>

    <div>
      <ul>
        <li v-for="anime in animList" :key="anime.id">
          {{ anime.title }}
          <Card
            v-if="anime"
            :key="anime"
            :title="anime.title"
            :urlImg="anime.images.jpg.image_url"
            :desc="anime.synopsis"
            :descImg="anime.title + ' poster'"
          />
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
import Card from "../components/card/Card.vue";
import axios from "axios";
import { ref } from "vue";
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
        .get("https://api.jikan.moe/v4/anime")
        .then((response) => {
          for (const animes of response.data.data) {
            this.animList.push(animes);
          }
        })
        .catch((err) => console.log("Erreur req : " + err));
    } catch (err) {
      console.log(err);
    }
    console.log(this.animList);
  },
  mounted() {},
};
</script>
<style></style>
