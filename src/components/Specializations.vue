<template>
  <section>
    <h2 class="section-title" style="font-size: 1.6rem;">
      <i class="fas fa-microscope"></i> Specializations & Nanodegrees
    </h2>
    <div class="glass specializations-container">
      <div class="specializations-scroll">
        <div v-for="(spec, idx) in data.specializations" :key="idx" class="spec-item">
          <i class="fas fa-certificate" style="color: #20b2aa; margin-right: 0.8rem;"></i>
          <div class="spec-info">
            <span class="spec-name">{{ spec.name }}</span>
            <span class="spec-meta">{{ spec.issuer }} · {{ spec.date }}</span>
          </div>
          <a v-if="spec.url && spec.url !== ''" :href="spec.url" target="_blank" class="spec-link">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['data'])
</script>

<style scoped>
.specializations-container {
  padding: 1.2rem 1.8rem;
  height: 280px;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
}

.specializations-scroll {
  flex: 1;
  overflow-y: auto;
  padding-right: 0.3rem;
}

.specializations-scroll::-webkit-scrollbar {
  width: 4px;
}
.specializations-scroll::-webkit-scrollbar-track {
  background: rgba(32, 178, 170, 0.05);
  border-radius: 10px;
}
.specializations-scroll::-webkit-scrollbar-thumb {
  background: #20b2aa;
  border-radius: 10px;
}

.spec-item {
  padding: 0.6rem 0.8rem;
  border-radius: 0.5rem;
  border-bottom: 1px solid rgba(32, 178, 170, 0.06);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.2s ease;
  min-height: 48px;
}

.spec-item:hover {
  background: rgba(32, 178, 170, 0.06);
  transform: translateX(4px);
}

.spec-item:last-child {
  border-bottom: 0;
}

.spec-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.spec-name {
  font-weight: 500;
  color: #0d2b3e;
}

.spec-meta {
  font-size: 0.78rem;
  color: #2a7a72;
  font-weight: 400;
}

.spec-link {
  color: #20b2aa;
  text-decoration: none;
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.spec-link:hover {
  background: rgba(32, 178, 170, 0.1);
  transform: scale(1.1);
}
</style>