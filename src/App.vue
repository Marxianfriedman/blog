<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
</script>

<style>
/* Estilos globales básicos */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: url('/Fondo2.jpg') no-repeat center center fixed;
  background-size: cover;
}

.app-container {
  
}
</style>