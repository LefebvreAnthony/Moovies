<template>
  <article class="container">
    <figure class="w-full">
      <img class="w-full" :src="urlImg" :alt="title + ' poster'" />
    </figure>
    <h4>{{ title }}</h4>
  </article>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: String,
    urlImg: String,
  },
  mounted() {},
};
</script>
<style scoped src="./card.css"></style>
