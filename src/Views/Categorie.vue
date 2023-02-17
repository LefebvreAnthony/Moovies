<template>
  <h1>Hello Categorie {{ id }}</h1>
  <section class="mx-auto grid gap-5 sm:grid-cols-2 md:grid-cols-4 px-4">
    <Card
      v-for="(anime, index) in listAnime"
      :key="index"
      :title="anime.title"
      :urlImg="anime.images.jpg.image_url"
    />
  </section>
</template>
<script>
import axios from "axios";
import Card from "../components/card/Card.vue";
export default {
  props: ["id"],
  data() {
    return {
      listAnime: [],
    };
  },
  created() {
    try {
      axios
        .get(`https://api.jikan.moe/v4/anime?genres=${this.id}`)
        .then((res) => {
          for (const anime of res.data.data) {
            this.listAnime.push(anime);
          }
        })
        .catch((err) => console.log(err + "erreur request"));
    } catch (e) {
      console.log(e);
    }
  },
  mounted() {},
  components: {
    Card,
  },
};
</script>
