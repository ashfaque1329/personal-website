<template>
  <section class="experience-section">
    <h2 class="section-title">
      <i class="fas fa-briefcase"></i> Experience
    </h2>
    <div class="glass experience-container">
      <div v-for="(exp, idx) in data.experience" :key="idx" class="experience-item">
        <div class="exp-header">
          <h3>{{ exp.title }}</h3>
          <span class="period">{{ exp.period }}</span>
        </div>
        <p class="company">{{ exp.company }} · {{ exp.location }}</p>
        <ul>
          <li v-for="(item, i) in exp.highlights" :key="i">
            <span class="bullet">▹</span> {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['data'])
</script>

<style scoped>
.experience-section {
  margin-bottom: 3rem;
}

.experience-container {
  padding: 0.2rem 0.2rem;
  overflow: hidden;
}

.experience-item {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(32, 178, 170, 0.08);
}

.experience-item:last-child {
  border-bottom: 0;
}

.exp-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
}

.exp-header h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #0d2b3e;
}

.period {
  color: #2a7a72;
  font-weight: 500;
}

.company {
  color: #1a5c5a;
  font-weight: 500;
  margin: 0.2rem 0 0.6rem;
}

.experience-item ul {
  list-style: none;
  padding-left: 0.3rem;
}

.experience-item li {
  padding: 0.3rem 0 0.3rem 1.8rem;
  position: relative;
  color: #1a3a4a;
  line-height: 1.6;
}

.bullet {
  position: absolute;
  left: 0;
  color: #20b2aa;
}
</style>