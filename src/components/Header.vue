<template>
  <header class="glass header" style="--index: 0;">
    <div class="header-background">
      <div class="header-overlay"></div>
    </div>
    <div class="header-content">
      <div>
        <h1>{{ data.name }}</h1>
        <p class="title">{{ data.title }}</p>
        <p class="title">{{data.graduation}}</p>
        <div class="contact-info">
          <span><i class="fas fa-map-pin"></i> {{ data.location }}</span>
        </div>
        <div class="social-links">
          <a :href="data.linkedin" target="_blank">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
          <a :href="data.github" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </div>
    <div class="languages">
      <span class="badge" v-for="(lang, key) in data.languages" :key="key">
        <i class="fas fa-globe"></i> {{ lang }}
      </span>
    </div>
  </header>
</template>

<script setup>
defineProps(['data'])
</script>

<style scoped>
.header {
  padding: 2.5rem 3rem;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 320px;
  background: rgba(255, 255, 255, 0.85);
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  transform: scale(1.05);
  transition: transform 0.5s ease;
}

.header:hover .header-background {
  transform: scale(1.1);
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
  rgba(255, 255, 255, 0.88) 0%,
  rgba(255, 255, 255, 0.5) 40%,
  rgba(32, 178, 170, 0.2) 100%
  );
  z-index: 1;
}

.header-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
      radial-gradient(circle at 80% 20%, rgba(32, 178, 170, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 20% 80%, rgba(64, 224, 208, 0.1) 0%, transparent 40%);
  z-index: 2;
}

.header-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem 2.5rem;
  position: relative;
  z-index: 3;
}

h1 {
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #0d2b3e;
  background: linear-gradient(135deg, #0d2b3e 0%, #1a7a72 50%, #20b2aa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 20px rgba(32, 178, 170, 0.1);
}

.title {
  font-size: 1.4rem;
  color: #1a5c5a;
  font-weight: 500;
  margin-top: 0.2rem;
  -webkit-text-fill-color: #1a5c5a;
  text-shadow: 0 1px 10px rgba(255, 255, 255, 0.5);
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 1.8rem;
  margin-top: 1.2rem;
}

.contact-info i {
  color: #20b2aa;
  width: 1.4rem;
}

.contact-info span {
  color: #0d2b3e;
  font-weight: 500;
  text-shadow: 0 1px 8px rgba(255, 255, 255, 0.3);
}

.social-links {
  display: flex;
  gap: 1.2rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.social-links a {
  color: #0d2b3e;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(32, 178, 170, 0.15);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.social-links a:hover {
  color: #0d2b3e;
  background: rgba(255, 255, 255, 0.95);
  border-color: #20b2aa;
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 25px rgba(32, 178, 170, 0.2);
}

.languages {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 3;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(32, 178, 170, 0.15);
}

@media (max-width: 768px) {
  .header { padding: 1.5rem; min-height: 260px; }
  h1 { font-size: 2.4rem; }
  .header-content { flex-direction: column; align-items: stretch; }
  .contact-info { flex-direction: column; gap: 0.5rem; }
}
</style>