<template>
  <article>
    <figure><img :src="urlImg" :alt="descImg" /></figure>
    <h4>{{ title }}</h4>
    <p>{{ desc }}</p>
  </article>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: String,
    urlImg: String,
    desc: String,
    descImg: String,
  },
};
</script>
<style scoped src="./card.css"></style>
