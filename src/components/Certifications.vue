<template>
  <section>
    <h2 class="section-title" style="font-size: 1.6rem;">
      <i class="fas fa-certificate"></i> Certifications
      <span class="badge" style="font-size: 0.7rem; margin-left: 0.5rem;">
        {{ data.certifications.length }}
      </span>
    </h2>
    <div class="glass cert-container">
      <div class="cert-scroll">
        <div v-for="(cert, idx) in data.certifications" :key="idx" class="cert-item">
          <i class="fas fa-award" style="color: #20b2aa; margin-right: 0.6rem; flex-shrink: 0;"></i>
          <div class="cert-info">
            <span class="cert-name">{{ cert.name }}</span>
            <span class="cert-meta">{{ cert.issuer }} · {{ cert.date }}</span>
          </div>
          <a v-if="cert.url && cert.url !== ''" :href="cert.url" target="_blank" class="cert-link">
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
.cert-container {
  padding: 1.2rem 1.8rem;
  height: 400px;
  display: flex;
  flex-direction: column;
}

.cert-scroll {
  flex: 1;
  overflow-y: auto;
  padding-right: 0.3rem;
}

.cert-scroll::-webkit-scrollbar {
  width: 4px;
}
.cert-scroll::-webkit-scrollbar-track {
  background: rgba(32, 178, 170, 0.05);
  border-radius: 10px;
}
.cert-scroll::-webkit-scrollbar-thumb {
  background: #20b2aa;
  border-radius: 10px;
}

.cert-item {
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  border-bottom: 1px solid rgba(32, 178, 170, 0.06);
  color: #1a3a4a;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.2s ease;
  min-height: 48px;
}

.cert-item:hover {
  background: rgba(32, 178, 170, 0.06);
  transform: translateX(4px);
}

.cert-item:last-child {
  border-bottom: 0;
}

.cert-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.cert-name {
  font-weight: 500;
  color: #0d2b3e;
}

.cert-meta {
  font-size: 0.78rem;
  color: #2a7a72;
  font-weight: 400;
}

.cert-link {
  color: #20b2aa;
  text-decoration: none;
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.cert-link:hover {
  background: rgba(32, 178, 170, 0.1);
  transform: scale(1.1);
}
</style>