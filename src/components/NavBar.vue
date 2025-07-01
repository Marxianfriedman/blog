<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/blog">Blog</router-link> |
    <router-link to="/contacto">Contact</router-link>
  </nav>
</template>

<style scoped>
nav {
  padding: 1rem;
  background: #f3f3f3;
  margin-bottom: 2rem;
}
nav a {
  margin: 0 0.5rem;
}
</style>