<script setup>

import { onMounted, ref } from 'vue'
import { useActivitiesStore } from './../../store/activities'

const emit = defineEmits(['sort-by-query'])

const activitiesStore = useActivitiesStore()

const sortVal = ref(0)

const sortBy = [
  { query: 'activitiesByDist', order: 'ASC', name: 'Tri par distance', mode: 'Distance croissante' },
  { query: 'activitiesByDist', order: 'DESC', name: 'Tri par distance', mode: 'Distance décroissante' },
  { query: 'activitiesByDate', order: 'ASC', name: 'Tri par date', mode: 'Date croissante' },
  { query: 'activitiesByDate', order: 'DESC', name: 'Tri par date', mode: 'Date décroissante' }
]

onMounted(() => {
  sortBy.forEach(el => {
    if(el.query === activitiesStore.query && el.order === activitiesStore.order) 
      sortVal.value = sortBy.indexOf(el)
  })
  emit('sort-by-query', sortBy[sortVal.value].query)
})

function switchMode() {
  sortVal.value === 3
    ? sortVal.value = 0 
    : sortVal.value++
  
  emit('sort-by-query', sortBy[sortVal.value].query)
  activitiesStore.query = sortBy[sortVal.value].query
  activitiesStore.order = sortBy[sortVal.value].order
}

</script>

<template>
  <div class="flex flex-col my-7 xxs:flex-row">
    <label 
      @click.prevent="switchMode"
      class="xxs:mr-4 text-xs">
      <div class="cursor-pointer flex items-center mb-2 font-bold">
        <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
          {{ sortBy[sortVal].name }} 
      </div>

      <div class="inline-block cursor-pointer mr-2 mb-2 px-3 py-2 bg-custom-color-light ring-1 ring-custom-color-light rounded-lg text-slate-50">
        <span>{{ sortBy[sortVal].mode }} </span>
        <input class="hidden" type="checkbox" checked />
      </div>
    </label>
  </div>
</template>

<style scoped>

</style>