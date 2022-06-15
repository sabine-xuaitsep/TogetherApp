<script setup>

import { ref, watch } from 'vue'
import { useActivitiesStore } from './../store/activities'
import { useRoute } from 'vue-router'
import ActivityCardVue from './../components/cards/ActivityCard.vue'
import ActivityCardLoadingVue from './../components/cards/ActivityCardLoading.vue'

const activitiesStore = useActivitiesStore()
      
const route = useRoute() 

const loading = ref(true),
      error = ref(null)

activitiesStore.query = route.params.query

fetchStatus()
watch(activitiesStore, () => fetchStatus())

function fetchStatus() {
  loading.value = activitiesStore[route.params.query].loading
  error.value = activitiesStore[route.params.query].error
}

</script>

<template>
  <!-- activities filtered -->
  <section>
    <h2 class="pt-6 pl-6 font-bold text-xl">
      <span v-if="loading || !activitiesStore.getActivities">Chargement</span>
      <span v-else-if="error">Erreur détectée</span>
      <span v-else-if="activitiesStore.getActivities.length === 0">Aucun résultat</span>
      <span v-else>Activités</span>
    </h2>

    <ul class="flex flex-wrap mt-6 pb-14 px-6 text-xs">
    
      <ActivityCardLoadingVue v-if="loading || error || !activitiesStore.getActivities" customClass="mb-6" />

      <ActivityCardVue 
        v-else
        v-for="activity of activitiesStore.getActivities" 
        :key="activity.id" 
        :activity="activity" 
        customClass="mb-6" 
      />

    </ul>
  </section>
  <!-- end activities filtered -->
</template>

<style scoped>

</style>