<template>
  <header-top />
  <router-view></router-view>
</template>

<script setup>
import Header from "./components/header/Header.vue";
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
  },
  mounted() {
    try {
      axios.get("https://kitsu.io/api/edge/anime").then((response) => {
        this.listAnime = response.data;
      });
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style scoped></style>
