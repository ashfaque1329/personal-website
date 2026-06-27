<template>
  <section>
    <h2 class="section-title" style="font-size: 1.6rem;">
      <i class="fas fa-trophy"></i> Achievements
    </h2>
    <div class="glass achievements-container">
      <div class="achievements-scroll">
        <ul>
          <li v-for="(ach, idx) in data.achievements" :key="idx">
            <span class="icon">✦</span> {{ ach }}
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
.achievements-container {
  padding: 1.5rem 1.8rem;
  height: 400px;
  display: flex;
  flex-direction: column;
}

.achievements-scroll {
  flex: 1;
  overflow-y: auto;
  padding-right: 0.3rem;
}

.achievements-scroll::-webkit-scrollbar {
  width: 4px;
}
.achievements-scroll::-webkit-scrollbar-track {
  background: rgba(32, 178, 170, 0.05);
  border-radius: 10px;
}
.achievements-scroll::-webkit-scrollbar-thumb {
  background: #20b2aa;
  border-radius: 10px;
}

.achievements-scroll ul {
  list-style: none;
}

.achievements-scroll li {
  padding: 0.35rem 0 0.35rem 1.8rem;
  position: relative;
  color: #1a3a4a;
  line-height: 1.6;
}

.icon {
  position: absolute;
  left: 0;
  color: #ffb347;
}
</style>