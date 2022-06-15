<script setup>

import { onMounted, ref, watch } from 'vue'
import Marker from './Marker.vue'

const mapData = defineProps({
  activities: Array,
  height: String,
  userLat: Number,
  userLong: Number,
})

const mapDOM = ref(null)

const map = ref(null),
      markers = ref([])

onMounted(() => {
  mapDOM.value.style.height = mapData.height
  map.value = L.map(mapDOM.value).setView([mapData.userLat, mapData.userLong], 10)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
  }).addTo(map.value)
})

loadMarkers()
bindMarkersVisibility()
watch(mapData, () => bindMarkersVisibility())

function loadMarkers() {
  if(markers.value.length === 0) {
    mapData.activities.forEach((activity) => 
      markers.value.push({
        id: activity.id,
        activity: activity,
        isShown: false,
      })
    )
  }
}

function bindMarkersVisibility() {
  markers.value.forEach((marker) => 
    marker.isShown = mapData.activities.find((activity) => 
      activity.id === marker.id
    ) ? true : false
  )
}

</script>

<template>
  <div ref="mapDOM">
    <Marker 
      v-if="map"
      v-for="marker in markers" 
      :key="marker.id" 
      :activity="marker.activity"
      :isShown="marker.isShown"
      :map="map"
    />
  </div>
</template>

<style scoped>

</style>