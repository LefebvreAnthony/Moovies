<template>
  <header>
    <div>{{ title }}</div>
    <ul>
      <li v-for="(item, index) in menu" :key="index">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "Anim'Moovies",
      menu: ["Accueil", "Liste", "Connexion"],
    };
  },
};
</script>

<style scoped>
header,
ul {
  display: flex;
  justify-content: space-between;
}
ul {
  list-style-type: none;
}
a {
  display: block;
  text-decoration: none;
  color: inherit;
}
li {
  margin-right: 1em;
}
</style>
