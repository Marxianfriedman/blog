<template>
  <div class="content-card">
    <h1 class="page-title">Welcome to the Blog</h1>
    <div class="divider"></div>
    <p class="page-content">
      Hello, in this blog I am going to tell you about my experience studying at SENA and show you the works I did for the English component ( a video audio and texts). 
    </p>
  </div>
</template>

<style scoped>
.content-card {
  background: rgba(255, 255, 255, 0.92);
  border-radius: 12px;
  padding: 2.5rem;
  margin: 2rem auto;
  max-width: 800px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #42b983; /* Acento verde como en las cards de blog */
}

.page-title {
  color: #35495e; /* Color secundario oscuro */
  font-size: 2rem;
  margin-bottom: 1rem;
}

.divider {
  height: 2px;
  background: linear-gradient(90deg, #42b983, transparent);
  margin: 1.5rem 0;
}

.page-content {
  color: #555;
  line-height: 1.8;
  font-size: 1.1rem;
}
</style>