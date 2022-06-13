<script setup>

import { ref, watch } from 'vue'
import { useActivitiesStore } from './../store/activities'
import { useRoute } from 'vue-router'
import ActivityCardVue from './../components/cards/ActivityCard.vue'
import ActivityCardLoadingVue from './../components/cards/ActivityCardLoading.vue'

const activitiesStore = useActivitiesStore()
      
const route = useRoute() 

const activities = ref(null), 
      loading = ref(true),
      error = ref(null)

activitiesStore.fetch(route.params.query)

fetchValues()
watch(activitiesStore, () => fetchValues())

function fetchValues() {
  activities.value = activitiesStore[route.params.query].result
  loading.value = activitiesStore[route.params.query].loading
  error.value = activitiesStore[route.params.query].error
}

</script>

<template>
  <!-- activities filtered -->
  <section>
    <h2 class="pt-6 pl-6 font-bold text-xl">
      <span v-if="loading || error || !activities">Chargement</span>
      <span v-else-if="activities.length === 0">Aucun résultat</span>
      <span v-else>Activités</span>
    </h2>

    <ul class="flex flex-wrap mt-6 pb-14 px-6 text-xs">
    
      <ActivityCardLoadingVue v-if="loading || error" customClass="mb-6" />

      <ActivityCardVue v-if="activities" v-for="activity of activities" :key="activity.id" :activity="activity" customClass="mb-6" />

    </ul>
  </section>
  <!-- end activities filtered -->
</template>

<style scoped>

</style>