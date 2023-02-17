<template>
  <header class="flex justify-between">
    <div>{{ title }}</div>
    <ul class="flex justify-between">
      <li class="mr-5"><router-link to="/" exact>Accueil</router-link></li>
      <li class="mr-5"><router-link to="/login">Connexion</router-link></li>
      <li class="mr-5">
        <router-link to="/categories">Catégories</router-link>
      </li>
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

<style scoped></style>
