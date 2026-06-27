<template>
  <section class="glass summary">
    <p>{{ data.summary }}</p>
  </section>
</template>

<script setup>
defineProps(['data'])
</script>

<style scoped>
.summary {
  padding: 1.8rem 2.2rem;
  margin-bottom: 2.5rem;
}

.summary p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #1a3a4a;
  font-weight: 400;
  width: 100%;
  max-width: 100%;
}
</style>