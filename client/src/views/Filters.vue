<script setup>

import { onMounted, ref } from 'vue'
import CategoriesFilterVue from './../components/filters/CategoriesFilter.vue'
import SortByFilterVue from './../components/filters/SortByFilter.vue'
import DistanceFilterVue from './../components/filters/DistanceFilter.vue'

const queryRoute = ref('activitiesByDist')

onMounted(() => 
  document.getElementById('barTitle').innerText = "Filtrer les activités"
)

function setQueryRoute(e) {
  queryRoute.value = e
}

</script>

<template>
  <main class="ml-6 mr-8 mt-24 mb-14">
    <div id="heroTitle" class="flex flex-col max-w-[1024px]">

      <DistanceFilterVue />

      <hr class="mt-9" />

      <SortByFilterVue @sort-by-query="setQueryRoute" />

      <hr />

      <CategoriesFilterVue />

      <hr class="mb-9" />

      <router-link :to="{ name: 'activities', params: { query: queryRoute} }" class="flex items-center font-bold text-custom-color-black/75 text-xs" >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
        <p>Voir les activités</p>
      </router-link>
    </div>

  </main>
</template>

<style scoped>

</style>