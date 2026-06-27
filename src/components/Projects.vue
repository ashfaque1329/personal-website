<template>
  <section>
    <h2 class="section-title" style="font-size: 1.6rem;">
      <i class="fas fa-folder-open"></i> Projects
    </h2>
    <div class="glass projects-container">
      <div class="projects-scroll">
        <div v-for="(proj, idx) in data.projects" :key="idx" class="project-item">
          <div class="project-content">
            <h4><i class="fas fa-code" style="color: #20b2aa;"></i> {{ proj.name }}</h4>
            <p>{{ proj.description }}</p>
            <div class="project-tech">
              <span v-for="tech in proj.tech" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['data'])
</script>

<style scoped>
.projects-container {
  padding: 1.2rem 1.8rem;
  height: 400px;
  display: flex;
  flex-direction: column;
}

.projects-scroll {
  flex: 1;
  overflow-y: auto;
  padding-right: 0.3rem;
}

.projects-scroll::-webkit-scrollbar {
  width: 4px;
}
.projects-scroll::-webkit-scrollbar-track {
  background: rgba(32, 178, 170, 0.05);
  border-radius: 10px;
}
.projects-scroll::-webkit-scrollbar-thumb {
  background: #20b2aa;
  border-radius: 10px;
}

.project-item {
  padding: 1rem 1.2rem;
  border-radius: 1rem;
  background: rgba(32, 178, 170, 0.04);
  border: 1px solid rgba(32, 178, 170, 0.08);
  transition: all 0.3s ease;
  margin-bottom: 0.8rem;
}

.project-item:last-child {
  margin-bottom: 0;
}

.project-item:hover {
  background: rgba(32, 178, 170, 0.08);
  transform: translateX(4px);
  border-color: rgba(32, 178, 170, 0.2);
}

.project-content h4 {
  color: #0d2b3e;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.project-content p {
  color: #1a3a4a;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.tech-tag {
  display: inline-block;
  background: linear-gradient(135deg, #e0f7f5, #c8f0eb);
  padding: 0.1rem 0.6rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 500;
  color: #0d5c5a;
  border: 1px solid rgba(32, 178, 170, 0.15);
}
</style>