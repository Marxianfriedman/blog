<template>
  <div class="blog-container">
    <h1 class="blog-title">Enters to the Blog</h1>
    
    <div class="posts-wrapper">
      <!-- Post 1 -->
      <article class="post-card">
        <h2 class="post-title">General Technologist</h2>
        <p class="post-excerpt">For most of the course, time was wasted on research papers, very little code, very little introduction to programming languages. In my opinion, it would be better to focus on just one, since the idea is to get a job after completing a technical or technological course, I suppose, and not just have a crappy qualification papper that only serves to validate a university. Well, I suppose that, but what does it matter?, you have to type.</p>
        <img src="/media/Jim Carrey Reaction GIF.gif" alt="Jim Carrey Reaction" class="post-gif">

        <div class="post-meta">
          <span class="post-date">July 5, 2024</span>
          <span class="post-tag vue-tag">Vue</span>
        </div>
      </article>

      <!-- Post 2 -->
      <article class="post-card">
        <h2 class="post-title">SENA's virtual learning environment</h2>
        <p class="post-excerpt">
          I think SENA's virtual training environment is fine in the sense that it works. It may be a bit cumbersome, but for its fundamental purpose of scheduling tasks to advance through the course, it's fine. The flaw, however, is the organization and content of the courses. For some reason, SENA's training courses don't have a list of study topics anywhere. Maybe because the courses are so crap that it's not appropriate to show lists of study topics...
        </p>
        <p>Some music to attenuate the disdain..  👇👇👍</p>

        <div class="audio-player">
            <audio controls>
            <source src="/media/Tropical.MP3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
      </div>

        <div class="post-meta">
          <span class="post-date">July 3, 2024</span>
          <span class="post-tag deployment-tag">Deployment</span>
        </div>
      </article>

      <!-- Post 3 -->
      <article class="post-card">
        <h2 class="post-title"> Importance of learning English</h2>
        <p>I've always liked English classes. Learning foreign languages ​​is a way to get to know cultures different from our own. It's wonderful. It also opens up new opportunities for us, such as working in call centers, being tourist guides for gringos, and perhaps even serving as a text translator. It's great to appreciate Anglo-Saxon culture and look like they see the live, the american way of life.
        </p>

        <p>Yes, the american way of life.😊</p>

        <div class="video-player">
        <video controls width="100%">
          <source src="/media/Woman opens fire on cops in police station.MP4" type="video/mp4">
          Tu navegador no soporta el elemento de video.
        </video>
      </div>

        <div class="post-meta">
          <span class="post-date">June 28, 2024</span>
          <span class="post-tag tools-tag">Tools</span>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
/* Variables de color */
:root {
  --primary: #42b983;
  --secondary: #35495e;
  --light: #f8f9fa;
  --dark: #2c3e50;
  --gray: #e9ecef;
}

/* Estilos base */
.blog-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--dark);
}

.blog-title {
  color: #35495e;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  position: relative;
}

.blog-title::after {
  content: '';
  display: block;
  width: 100px;
  height: 4px;
  background: var(--primary);
  margin: 0.5rem auto;
}

/* Tarjetas de posts */
.posts-wrapper {
  display: grid;
  gap: 2rem;
}

.post-card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid var(--primary);
}


.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.post-title {
  color: #35495e;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.post-excerpt {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.post-list {
  padding-left: 1.5rem;
  line-height: 1.8;
  color: #555;
}

.post-list li {
  margin-bottom: 0.5rem;
}

/* Metadatos */
.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #777;
}

.post-date {
  font-style: italic;
}

.post-tag {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.vue-tag {
  background: #e3f7ef;
  color: var(--primary);
}

.deployment-tag {
  background: #e3e7f7;
  color: #4a6bdf;
}

.tools-tag {
  background: #f7e3e3;
  color: #df4a4a;
}

/* Código */
code {
  background: #f0f0f0;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  color: #d63384;
}

/* Responsive */
@media (max-width: 768px) {
  .blog-container {
    padding: 1rem;
  }
  
  .post-card {
    padding: 1.5rem;
  }
}

.video-player {
  margin: 1rem 0;
  width: 100%;
  max-width: 600px; /* Máximo ancho para pantallas grandes */
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  overflow: hidden;
  background: #000;
}

.video-player video {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 768px) {
  .video-player {
    border-radius: 4px;
  }
}
</style>