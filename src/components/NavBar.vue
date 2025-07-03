<template>
  <nav class="main-nav">
    <div class="nav-links">
      <router-link to="/" class="nav-link">Home</router-link>
      <span class="link-separator">|</span>
      <router-link to="/blog" class="nav-link">Blog</router-link>
      <span class="link-separator">|</span>
      <router-link to="/contacto" class="nav-link">Contact</router-link>
    </div>
  </nav>
</template>

<style scoped>
.main-nav {
  padding: 1.2rem 1rem;
  background: linear-gradient(to right, rgb(0, 255, 213), #0a56ad);
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-link {
  margin: 0 0.5rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.nav-link.router-link-exact-active {
  background-color: rgba(255, 255, 255, 0.25);
  font-weight: 600;
}

.nav-link.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 2px;
  background-color: white;
}

.link-separator {
  color: rgba(255, 255, 255, 0.5);
  user-select: none;
}

@media (max-width: 600px) {
  .nav-links {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .nav-link {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }
  
  .link-separator {
    display: none;
  }
}
</style>