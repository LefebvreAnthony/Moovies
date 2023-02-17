<template>
  <article class="text-center relative h-full">
    <figure class="h-full">
      <img
        class="object-cover w-full h-full"
        :src="urlImg"
        :alt="title + ' poster'"
      />
    </figure>
    <div class="absolute inset-0 hover:visible z-10 text-xl">
      <h4 :title="title">{{ title }}</h4>
    </div>
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
