<template>
  <section>
    <h2 class="section-title" style="font-size: 1.6rem;">
      <i class="fas fa-graduation-cap"></i> Education
    </h2>
    <div class="glass education-container">
      <div class="education-scroll">
        <div v-for="(edu, idx) in data.education" :key="idx" class="edu-item">
          <h4>{{ edu.degree }}</h4>
          <p class="institution">{{ edu.institution }} · {{ edu.year }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['data'])
</script>

<style scoped>
.education-container {
  padding: 1.5rem 1.8rem;
  height: 400px;
  display: flex;
  flex-direction: column;
}

.education-scroll {
  flex: 1;
  overflow-y: auto;
  padding-right: 0.3rem;
}

.education-scroll::-webkit-scrollbar {
  width: 4px;
}
.education-scroll::-webkit-scrollbar-track {
  background: rgba(32, 178, 170, 0.05);
  border-radius: 10px;
}
.education-scroll::-webkit-scrollbar-thumb {
  background: #20b2aa;
  border-radius: 10px;
}

.edu-item {
  margin-bottom: 1.2rem;
}

.edu-item:last-child {
  margin-bottom: 0;
}

.edu-item h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0d2b3e;
}

.institution {
  color: #1a5c5a;
  font-weight: 500;
}
</style>