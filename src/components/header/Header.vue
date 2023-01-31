<template>
  <header>
    <div>Hello World !</div>
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
