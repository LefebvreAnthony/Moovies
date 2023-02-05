<template>
  <div>
    <ul>
      <li v-for="(anime, index) in arrayAnime.data" :key="index">
        {{ anime }}
        <!-- <li v-for="(attr, index) in anime" :key="index">{{ attr }}</li> -->
        <Card
          v-for="(attr, index) in anime"
          :key="index"
          :title="attr.abbreviatedTitles[0]"
          :urlImg="attr.posterImage.small"
          :desc="attr.synopsis"
          :descImg="attr.abbreviatedTitles[0] + ' poster'"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import Card from "../card/Card.vue";
export default {
  data() {
    return {
      arrayAnime: { ...this.listAnime },
    };
  },
  name: "Liste",
  props: ["listAnime"],
  components: {
    Card: Card,
  },
  mounted() {
    console.log(this.arrayAnime);
  },
};
</script>
<style></style>
