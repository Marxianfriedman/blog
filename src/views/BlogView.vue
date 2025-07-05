<template>
  <div class="blog-container">
    <h1 class="blog-title">Enters to the Blog</h1>
    
    <div class="posts-wrapper">
      <!-- Post 1 -->
      <article class="post-card">
        <h2 class="post-title">General Technologist</h2>
        <p class="post-excerpt">For most of the course, time was wasted on research papers, very little code, very little introduction to programming languages. In my opinion, it would be better to focus on just one, since the idea is to get a job after completing a technical or technological course, I suppose, and not just have a crappy qualification papper that only serves to validate a university. Well, I suppose that, but what does it matter?, you have to type.</p>
        <div class="media-container">
          <img src="/media/Jim Carrey Reaction GIF.gif" alt="Jim Carrey Reaction" class="post-gif">
        </div>

        <div class="post-meta">
          <span class="post-date">July 3, 2025</span>
          <span class="post-tag vue-tag">Vue</span>
        </div>
      </article>

      <!-- Post 2 -->
      <article class="post-card">
        <h2 class="post-title">SENA's virtual learning environment</h2>
        <p class="post-excerpt">
          I think SENA's virtual training environment is fine in the sense that it works. It is may be a bit cumbersome, but for its fundamental purpose of scheduling tasks to advance through the course, it's fine. The flaw, however, is the organization and content of the courses. For some reason, SENA's training courses don't have a list of study topics anywhere. Maybe because the courses are so crap that it's not appropriate to show lists of study topics; at least the software development one, maybe others are good, but not this one.
        </p>
        <p>Some music to attenuate the disdain..  👇👇👍</p>

        <div class="media-container">
          <div class="audio-player">
            <audio controls>
              <source src="/media/Tropical.MP3" type="audio/mpeg">
            </audio>
          </div>
        </div>

        <div class="post-meta">
          <span class="post-date">July 3, 2025</span>
          <span class="post-tag deployment-tag">Deployment</span>
        </div>
      </article>

      <!-- Post 3 -->
      <article class="post-card">
        <h2 class="post-title"> Importance of learning English</h2>
        <p>I've always liked English classes. Learning foreign languages ​​is a way to get to know cultures different from our own. It's wonderful. It also opens up new opportunities for us, such as working in call centers, being tourist guides for gringos, work as a englesh teacher and perhaps even serving as a text translator. It's great to appreciate Anglo-Saxon culture and look like they see the life, the american way of life.
        </p>

        <p>Yes, the american way of life.</p>

        <div class="media-container">
          <div class="video-player">
            <video controls>
              <source src="/media/Woman opens fire on cops in police station.MP4" type="video/mp4">
            </video>
          </div>
        </div>

        <div class="post-meta">
          <span class="post-date">July 3, 2025</span>
          <span class="post-tag tools-tag">Tools</span>
        </div>
      </article>

      <!-- Post 4 -->
      <article class="post-card">
        <h2 class="post-title"> My Things (mind map and writings in English)</h2>
        <p>
          Below we will see works done during the course to approve them, these are two examples of evidence, a mental map about the learning environment, and a writing about personal aspects.
        </p>

        <p>
          I have learned a lot from this blog and I want to show some of the tasks I have done to improve my English.
        </p>

        <div class="media-container">
          <img src="/media/Mapa mental.png" alt="Mental Map" class="post-image">
        </div>

        <div class="media-container">
          <img src="/media/ingles 1.png" alt="inles 1" class="post-image">
        </div>

        <div class="media-container">
          <img src="/media/ingles 2.png" alt="ingles 2" class="post-image">
        </div>

        <div class="post-meta">
          <span class="post-date">July 3, 2025</span>
          <span class="post-tag tools-tag">Tools</span>
        </div>
      </article>

      <!-- Post 5 -->
      <article class="post-card">
        <h2 class="post-title"> Audio</h2>
        <p>
          The following audio is about the novel 1984, the first paragraphs are part of the life of its author, Erick Arthur Blair, better known as George Orwell, I leave a link to download the novel yes, it is very good and in my opinion it is still relevant in terms of how the world works today.
        </p>

        <div class="media-container">
          <div class="audio-player">
            <audio controls>
              <source src="/media/audio.mp3" type="audio/mpeg">
            </audio>
          </div>
        </div>

        
        <a href="https://dn790002.ca.archive.org/0/items/NineteenEightyFour-Novel-GeorgeOrwell/orwell1984.pdf" target="-Blank">link to download 1984</a>
        
        <div class="media-container">
          <img src="/media/book.png" alt="inles 1" class="post-image">
        </div>


        <div class="media-container">
          <div class="audio-player">
            <audio controls>
              <source src="/media/primer capitulo.mp3" type="audio/mpeg">
            </audio>
          </div>
        </div>

        <div class="media-container">
          <img src="/media/chapter1.png" alt="inles 1" class="post-image">
        </div>
        

        <div class="post-meta">
          <span class="post-date">July 5, 2025</span>
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
  --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-hover: 0 5px 15px rgba(0, 0, 0, 0.15);
}

/* Reset y estilos base */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.blog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--dark);
  line-height: 1.6;
}

.blog-title {
  color: var(--secondary);
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  position: relative;
  padding-bottom: 0.5rem;
}

.blog-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: var(--primary);
  margin: 0.5rem auto 0;
}

/* Contenedor de posts */
.posts-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

/* Tarjetas de posts */
.post-card {
  background: white;
  border-radius: 8px;
  padding: 1.8rem;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid var(--primary);
  overflow: hidden;
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.post-title {
  color: var(--secondary);
  margin-bottom: 1rem;
  font-size: clamp(1.3rem, 4vw, 1.5rem);
  line-height: 1.3;
}

.post-excerpt, .post-card p {
  color: #555;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

/* Contenedor para medios (imágenes, video, audio) */
.media-container {
  margin: 1.5rem 0;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
}

.post-gif, .post-image {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  border-radius: 6px;
  display: block;
  margin: 0 auto;
}

/* Reproductores multimedia */
.audio-player, .video-player {
  width: 100%;
  margin: 1rem 0;
}

.audio-player audio {
  width: 100%;
}

.video-player {
  background: #000;
}

.video-player video {
  width: 100%;
  height: auto;
  max-height: 500px;
  display: block;
}

/* Metadatos */
.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #777;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.post-date {
  font-style: italic;
}

.post-tag {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  white-space: nowrap;
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

/* Media queries para responsividad */
@media (max-width: 768px) {
  .blog-container {
    padding: 1.5rem 1rem;
  }
  
  .post-card {
    padding: 1.3rem;
  }
  
  .blog-title::after {
    width: 60px;
  }
}

@media (max-width: 480px) {
  .post-card {
    padding: 1rem;
  }
  
  .post-meta {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .post-tag {
    margin-top: 0.5rem;
  }
}

/* Mejoras para pantallas grandes */
@media (min-width: 992px) {
  .posts-wrapper {
    grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
  }
  
  .post-card {
    padding: 2rem;
  }
}
</style>