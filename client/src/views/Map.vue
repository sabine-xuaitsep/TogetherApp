<script setup>

import { onMounted, onUpdated, ref, watch } from 'vue'
import { useActivitiesStore } from './../store/activities'
import Marker from './../components/map/Marker.vue'

const activitiesStore = useActivitiesStore()

const activities = ref(null), 
      map = ref(null),
      markers = ref([])

activitiesStore.fetch('activitiesByDist')

loadActivities()
watch(activitiesStore, () => {
  if(!activities.value) loadActivities()
  if(activities.value) bindMarkersVisibility()  
})

onMounted(() => {
  map.value = L.map('map').setView([50.6461441, 5.4977809], 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
  }).addTo(map.value)
})


onUpdated(() => {
  if(activities.value && markers.value.length === 0) loadMarkers()
  if(activities.value) bindMarkersVisibility()  
})

function loadActivities() {
  activities.value = activitiesStore.getFiltered
  if(activities.value && markers.value.length === 0) loadMarkers()
}

function loadMarkers() {
  activities.value.forEach((activity) => 
    markers.value.push({
      id: activity.id,
      activity: activity,
      isShown: false,
    })
  )
}

function bindMarkersVisibility() {
  markers.value.forEach((marker) => 
    marker.isShown = 
      activitiesStore.getFiltered.find((activity) => 
        activity.id === marker.id
      ) ? true : false
  )
}

</script>

<template>
  <div id="map">
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