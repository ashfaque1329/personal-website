<template>
  <section>
    <h2 class="section-title" style="font-size: 1.6rem;">
      <i class="fas fa-heart"></i> Hobbies & Interests
    </h2>
    <div class="glass hobbies-container">
      <div class="hobbies-grid">
        <div v-for="(hobby, idx) in data.hobbies" :key="idx" class="hobby-item">
          <span class="hobby-text">{{ hobby }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['data'])
</script>

<style scoped>
.hobbies-container {
  padding: 1.2rem 1.8rem;
  margin-bottom: 2.5rem;
}

.hobbies-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.hobby-item {
  padding: 0.4rem 1rem;
  background: rgba(32, 178, 170, 0.06);
  border-radius: 2rem;
  border: 1px solid rgba(32, 178, 170, 0.1);
  transition: all 0.3s ease;
}

.hobby-item:hover {
  background: rgba(32, 178, 170, 0.12);
  transform: translateY(-2px) scale(1.04);
  border-color: #20b2aa;
  box-shadow: 0 4px 15px rgba(32, 178, 170, 0.15);
}

.hobby-text {
  color: #1a3a4a;
  font-size: 0.95rem;
  font-weight: 500;
}
</style>