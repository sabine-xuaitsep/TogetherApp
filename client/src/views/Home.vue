<script setup>

import SliderVue from './../components/sliders/Slider.vue'

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

    <SliderVue content="activities" query="activitiesByDist" />
  </section>
  <!-- end activities by distance -->
  
  <!-- activities by date -->
  <section>
    <h2 class="pt-6 pl-6 font-bold text-xl">Prochaines activités</h2>

    <SliderVue content="activities" query="activitiesByDate" />
  </section>
  <!-- end activities by date -->
</template>

<style scoped>

</style>