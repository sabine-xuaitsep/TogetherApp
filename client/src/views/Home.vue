<script setup>

import { computed, reactive } from 'vue'
import { useUserStore } from './../store/user'
import SliderVue from './../components/sliders/Slider.vue'

const userStore = useUserStore()

const userLatitude = computed(() => userStore.user.latitude)
const userLongitude = computed(() => userStore.user.longitude)

const argsActivitiesByDist = reactive({ latitude: userLatitude, longitude: userLongitude, distance: 300000, limit: 5 })
const argsActivitiesByDate = reactive({ latitude: userLatitude, longitude: userLongitude, limit: 5 })

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