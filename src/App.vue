<template>
  <header-top />
  <router-view></router-view>
</template>

<script setup>
import Header from "./components/header/Header.vue";
</script>
<script>
export default {
  data() {
    return {};
  },
  components: {
    "header-top": Header,
  },
  mounted() {},
};
</script>

<style scoped></style>
