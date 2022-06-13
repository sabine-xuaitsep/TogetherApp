<script setup>

import SliderVue from './../components/sliders/Slider.vue'

const argsActivitiesByDist = { distance: 300000, limit: 5 }
const argsActivitiesByDate = { limit: 5 }

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

    <SliderVue content="activities" query="activitiesByDist" :args="argsActivitiesByDist" />
  </section>
  <!-- end activities by distance -->
  
  <!-- activities by date -->
  <section>
    <h2 class="pt-6 pl-6 font-bold text-xl">Prochaines activités</h2>

    <SliderVue content="activities" query="activitiesByDate" :args="argsActivitiesByDate" />
  </section>
  <!-- end activities by date -->
</template>

<style scoped>

</style>