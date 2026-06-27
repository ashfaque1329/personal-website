<template>
  <div class="app-wrapper">
    <ThreeBackground />

    <div v-if="loading" class="loading">
      <i class="fas fa-spinner fa-spin"></i> Loading...
    </div>

    <div v-else-if="error" class="error">
      <i class="fas fa-exclamation-triangle"></i> {{ error }}
    </div>

    <div v-else class="app-content">
      <Header :data="data" />
      <Summary :data="data" />
      <Skills :data="data" />
      <Experience :data="data" />

      <!-- Thesis Section -->
      <section class="thesis-section" style="margin-bottom: 2.5rem;">
        <h2 class="section-title">
          <i class="fas fa-quantum"></i> M.Sc. in AI - Thesis
        </h2>
        <div class="glass" style="padding: 1.8rem 2.2rem;">
          <div class="thesis-card">
            <h4>{{ data.thesis.title }}</h4>
            <p style="color: #1a3a4a; line-height: 1.8; margin: 1rem 0; font-size: 1rem;">
              {{ data.thesis.description }}
            </p>
            <div style="margin-top: 1rem;">
              <strong style="color: #0d2b3e; font-weight: 600;">Technologies:</strong>
              <div style="margin-top: 0.5rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
                <span class="tech-tag" v-for="tech in data.thesis.technologies" :key="tech">
                  {{ tech }}
                </span>
              </div>
            </div>
             </div>
        </div>
      </section>

      <!-- Specializations Section -->
      <Specializations :data="data" />

      <div class="section-grid">
        <Education :data="data" />
        <Achievements :data="data" />
      </div>

      <div class="section-grid">
        <Certifications :data="data" />
        <Projects :data="data" />
      </div>

      <!-- Hobbies Section -->
      <Hobbies :data="data" />

      <!-- Contact Section -->
      <Contact style="margin-top: 2.5rem;" />
    </div>

    <!-- Static Footer - Matching header style -->
    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-left">
          <i class="fas fa-cube"></i>
          <span>Ashfaque Chowdhury</span>
        </div>
        <div class="footer-center">
          <span>&copy; {{ new Date().getFullYear() }} Ashfaque Chowdhury. All rights reserved.</span>
        </div>
        <div class="footer-right">
          <a href="https://linkedin.com/in/ashfaque1329" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/ashfaque1329" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="mailto:ashfaque1329@gmail.com">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ThreeBackground from './components/ThreeBackground.vue'
import Header from './components/Header.vue'
import Summary from './components/Summary.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Specializations from './components/Specializations.vue'
import Education from './components/Education.vue'
import Achievements from './components/Achievements.vue'
import Certifications from './components/Certifications.vue'
import Projects from './components/Projects.vue'
import Hobbies from './components/Hobbies.vue'
import Contact from './components/Contact.vue'
import portfolioData from './data/portfolio.json'

const data = ref(portfolioData)
const loading = ref(false)
const error = ref(null)

onMounted(() => {
  // Data is already loaded from import
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  min-height: 100vh;
  background: #f0faf8;
}

.app-wrapper {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-content {
  position: relative;
  z-index: 10;
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem 1.5rem 2rem;
  flex: 1;
}

.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.loading, .error {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 4rem 2rem;
  color: #1a3a4a;
  font-size: 1.2rem;
}

.loading i, .error i {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.error i {
  color: #e74c3c;
}

.editable-hint {
  color: #20b2aa;
  font-style: italic;
  opacity: 0.8;
  font-weight: 500;
}

@media (max-width: 768px) {
  .section-grid {
    grid-template-columns: 1fr;
  }
}

/* Static Footer - Matching header style */
.site-footer {
  position: relative;
  z-index: 10;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(32, 178, 170, 0.15);
  padding: 1.2rem 2rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #0d2b3e;
  font-weight: 600;
  font-size: 1rem;
}

.footer-left i {
  color: #20b2aa;
  font-size: 1.2rem;
}

.footer-center {
  color: #1a5c5a;
  font-size: 0.85rem;
  font-weight: 400;
}

.footer-right {
  display: flex;
  gap: 0.8rem;
}

.footer-right a {
  color: #1a5c5a;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(32, 178, 170, 0.05);
  border: 1px solid rgba(32, 178, 170, 0.1);
  text-decoration: none;
}

.footer-right a:hover {
  color: #20b2aa;
  background: rgba(32, 178, 170, 0.12);
  transform: translateY(-2px);
  border-color: #20b2aa;
  box-shadow: 0 4px 15px rgba(32, 178, 170, 0.15);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  .footer-center {
    order: 2;
  }
  .footer-right {
    order: 3;
  }
}

/* Stagger animations for cards */
.glass {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

.glass:nth-child(1) { animation-delay: 0.1s; }
.glass:nth-child(2) { animation-delay: 0.2s; }
.glass:nth-child(3) { animation-delay: 0.3s; }
.glass:nth-child(4) { animation-delay: 0.4s; }
.glass:nth-child(5) { animation-delay: 0.5s; }
.glass:nth-child(6) { animation-delay: 0.6s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>