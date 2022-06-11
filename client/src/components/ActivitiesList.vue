<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import { activitiesByDateQuery } from './../graphql/activities'
import { activitiesByDistQuery } from './../graphql/activities'
import ActivityCardVue from './../components/ActivityCard.vue'
import ActivityCardLoadingVue from './../components/ActivityCardLoading.vue'

const route = useRoute()

const queries = {
  'activitiesByDate': activitiesByDateQuery,
  'activitiesByDist': activitiesByDistQuery
}

const user = JSON.parse(sessionStorage.getItem('user'))

const { result, loading, error } = useQuery(queries[route.params.query], { latitude: user.latitude, longitude: user.longitude })
const activities = computed(() => result.value?.[route.params.query] ?? [])

</script>

<template>
  <!-- activities filtered -->
  <section>
    <h2 class="pt-6 pl-6 font-bold text-xl">Activités</h2>

    <ul class="flex flex-wrap mt-6 pb-14 px-6 text-xs">
    
      <ActivityCardLoadingVue v-if="loading || error" customClass="mb-6" />

      <ActivityCardVue v-for="activity of activities" :key="activity.id" :activity="activity" customClass="mb-6" />

    </ul>
  </section>
  <!-- end activities filtered -->
</template>

<style scoped>

</style>