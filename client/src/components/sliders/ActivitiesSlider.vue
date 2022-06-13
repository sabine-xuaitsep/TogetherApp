<script setup>

import { onBeforeMount, onUpdated, ref, watch } from 'vue'
import { useActivitiesStore } from './../../store/activities'
import ActivityCardVue from './../cards/ActivityCard.vue'
import ActivityCardLoadingVue from './../cards/ActivityCardLoading.vue'

const graphql = defineProps({
  query: String,
  args: Object
})
const emit = defineEmits(['offset-width', 'custom-class'])

const activitiesStore = useActivitiesStore()

const sliderList = ref(null)

const activities = ref(null), 
      loading = ref(true),
      error = ref(null)

activitiesStore.fetch(graphql.query, graphql.args)

fetchValues()
watch(activitiesStore, () => {
  fetchValues()
})

function fetchValues() {
  activities.value = activitiesStore[graphql.query].result
  loading.value = activitiesStore[graphql.query].loading
  error.value = activitiesStore[graphql.query].error
}

onBeforeMount(() => {
  emit('custom-class', {
    wrapper: "mt-6 pb-14 pl-6",
    arrowBox: "h-[294px]",
    arrowLink: "w-20 h-20",
    arrow: "w-10 h-10"
  })
})

onUpdated(() => {
  emit('offset-width', sliderList.value.offsetWidth)
})

</script>

<template>
  <ul 
    ref="sliderList" 
    class="flex flex-nowrap text-xs pr-6">

    <ActivityCardLoadingVue v-if="loading || error || !activities || activities.length === 0" />

    <ActivityCardVue v-else v-for="activity of activities" :key="activity.id" :activity="activity" />

  </ul>
  
  <router-link 
    :to="{ name: 'activities', params: { query: query } }"
    class="flex flex-col justify-center mr-6">
    <span class="text-center pb-3">Voir plus</span>
    <div class="flex items-center justify-center w-20 h-20 bg-slate-50/50 rounded-full">
      <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
    </div>
  </router-link>
</template>

<style scoped>

</style>