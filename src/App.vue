<script setup>
import Header from "./components/header/Header.vue";
import List from "./components/menu/Liste.vue";
import axios from "axios";
</script>
<script>
export default {
  data() {
    return {
      listAnime: null,
    };
  },
  components: {
    "header-top": Header,
    List: List,
  },
  mounted() {
    try {
      axios.get("https://kitsu.io/api/edge/anime").then((response) => {
        this.listAnime = response.data;
        console.log(this.listAnime);
      });
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
<template>
  <header-top />

  <main>
    <List :listAnime="listAnime" />
  </main>
</template>

<style scoped></style>
