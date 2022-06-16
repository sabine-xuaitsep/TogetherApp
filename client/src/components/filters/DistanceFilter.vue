<script setup>

import { computed } from 'vue'
import { useActivitiesStore } from './../../store/activities'

const activitiesStore = useActivitiesStore()

const sliderWidth = computed(() => (activitiesStore.distance*100/300).toFixed())

</script>

<template>
  <div>
    <div class="mb-2 relative text-xs">
      <span class="absolute right-0">{{ activitiesStore.distance }} km</span>
      <label for="distance_value" class="flex items-center font-bold">
        <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        Distance
      </label>
    </div>
    <div class="mt-2 mb-6 relative">
      <div 
        :style="{ width: `${sliderWidth}%` }"
        class="absolute h-2 bg-custom-color-cold rounded-full">
      </div>
      <input
        id="distance_value"
        type="range"
        class="absolute z-10 appearance-none cursor-pointer w-full h-2 bg-custom-color-dark/25 outline-none rounded-full ring-0 shadow-none"
        min="5"
        max="300"
        step="5"
        v-model="activitiesStore.distance"
      />
    </div>
  </div>
</template>

<style scoped>

</style>