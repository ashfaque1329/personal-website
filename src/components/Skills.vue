<template>
  <section class="skills-section">
    <h2 class="section-title">
      <i class="fas fa-code"></i> Skills & Technologies
    </h2>
    <div class="glass skills-container">
      <div class="skills-grid">
        <span class="skill-tag" v-for="skill in data.skills" :key="skill">
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['data'])
</script>

<style scoped>
.skills-section {
  margin-bottom: 3rem;
}

.skills-container {
  padding: 1.8rem 2rem;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 0.9rem;
}
</style>