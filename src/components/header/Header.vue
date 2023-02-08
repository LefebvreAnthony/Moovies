<template>
  <header>
    <div>{{ title }}</div>
    <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/login">Connexion</router-link></li>
      <li><router-link to="/categories">Catégories</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "Anim'Moovies",
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
