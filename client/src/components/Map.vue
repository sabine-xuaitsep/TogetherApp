<script setup>

import { onMounted } from 'vue'

onMounted(() => {
  var map = L.map('map').setView([50.6461441, 5.4977809], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
  }).addTo(map);
})

</script>

<template>
  <div id="map"></div>
</template>

<style scoped>

</style>