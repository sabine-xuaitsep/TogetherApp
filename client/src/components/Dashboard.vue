<script setup>

import SliderVue from './Slider.vue'

const user = JSON.parse(sessionStorage.getItem('user'))

</script>

<template>
  <!-- categories filters -->
  <section>
    <h2 class="sr-only">Filtrer par catégorie</h2>

    <SliderVue content="categories" />
  </section>
  <!-- end categories filters -->
  
  <!-- activities by distance -->
  <section>
    <h2 class="pt-6 pl-6 font-bold text-xl">Activités à proximité</h2>

    <SliderVue content="activities" query="activitiesByDist" :args="{ latitude: user.latitude, longitude: user.longitude, distance: 300000, limit: 5 }" />
  </section>
  <!-- end activities by distance -->
  
  <!-- activities by date -->
  <section>
    <h2 class="pt-6 pl-6 font-bold text-xl">Prochaines activités</h2>

    <SliderVue content="activities" query="activitiesByDate" :args="{ latitude: user.latitude, longitude: user.longitude, limit: 5 }" />
  </section>
  <!-- end activities by date -->
</template>

<style scoped>

</style>