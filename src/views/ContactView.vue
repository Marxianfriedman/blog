<template>
  <div class="content-card contact-card">
    <h1 class="page-title">Contact</h1>
    <div class="divider"></div>
    <p class="contact-info">
      Email: <a href="mailto:Emailfriendly@thisblog.com" class="email-link">Emailfriendly@thisblog.com</a>
    </p>
  </div>
</template>

<style scoped>
.contact-card {
  text-align: center;
  padding: 2rem;
}

.contact-info {
  font-size: 1.2rem;
  color: #35495e;
  margin-top: 1rem;
}

.email-link {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.email-link:hover {
  color: #2c3e50;
  text-decoration: underline;
}
</style>