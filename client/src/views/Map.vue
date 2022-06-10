<script setup>

import { onMounted, ref } from 'vue'
import MainTopBarVue from '../components/MainTopBar.vue'

const header = ref(null),
      mapEl = ref(null)

onMounted(() => {
  var map = L.map('map').setView([50.6461441, 5.4977809], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
  }).addTo(map);
})

function setMapHeight(topBarHeight) {
  const filledHeight = header.value.offsetHeight 
                      + getHeaderMargin('Top') 
                      + getHeaderMargin('Bottom')
                      + topBarHeight 
                      + document.getElementById('navBar').offsetHeight 
  mapEl.value.style.height = `calc(100vh - ${filledHeight}px)`
}

function getHeaderMargin(pos) {
  return Number((getComputedStyle(header.value)[`margin${pos}`]).replace('px', ''))
}

</script>

<template>
  <div class="grow overflow-y-auto text-slate-50">

    <header>
      <h1 
        ref="header" 
        class="mt-10 mb-6 ml-6 mr-8 font-bold text-4xl">
          Together
      </h1>
    </header>
    
    <main>
      <MainTopBarVue @offset-height="setMapHeight"/>

      <div 
        id="map"
        ref="mapEl">
      </div>
      <!-- MAP HERE -->

    </main>
  </div>
</template>

<style scoped>

</style>