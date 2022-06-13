<script setup>

import { onUpdated, ref } from 'vue'

const data = defineProps({
  activity: Object,
  isShown: Boolean,
  map: Object,
})

const marker = ref(null)
const popup = `
  <a 
    href="./activity/${data.activity.id}">
    ${data.activity.title}
  </a>
`

marker.value = L.marker([data.activity.latitude, data.activity.longitude])
                .bindPopup(popup)

bindVisibility()
onUpdated(() => bindVisibility())

function bindVisibility() {
  data.isShown  
    ? data.map.addLayer(marker.value)
    : data.map.removeLayer(marker.value)
}

</script>

<template>

</template>

<style scoped>

</style>