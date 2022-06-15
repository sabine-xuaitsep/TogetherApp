<script setup>

import { onMounted, onUpdated, ref, watch } from 'vue'
import { useActivitiesStore } from './../store/activities'
import { useUserStore } from './../store/user'
import Map from './../components/map/Map.vue'

const activitiesStore = useActivitiesStore()
const userStore = useUserStore() 

const filledHeight = ref(null)

onMounted(() => checkAvailableHeightForMap())

function checkAvailableHeightForMap() {
  const appHeader = document.getElementById('appHeader')
  filledHeight.value = appHeader.offsetHeight 
                      + getMargin(appHeader, 'Top') 
                      + getMargin(appHeader, 'Bottom')
                      + document.getElementById('barBox').offsetHeight
                      + document.getElementById('navBar').offsetHeight 
}

function getMargin(el, pos) {
  return Number((getComputedStyle(el)[`margin${pos}`]).replace('px', ''))
}

</script>

<template>
  <Map 
    v-if="activitiesStore.getActivities && userStore.user.latitude && userStore.user.longitude && filledHeight" 
    :activities="activitiesStore.getActivities"
    :height="`calc(100vh - ${filledHeight}px)`"
    :userLat="userStore.user.latitude" 
    :userLong="userStore.user.longitude" 
  />
</template>

<style scoped>

</style>