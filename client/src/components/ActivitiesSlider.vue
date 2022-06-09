<script setup>
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { activitiesQuery } from '../graphql/activities'
import ActivityCardVue from './ActivityCard.vue'
import ActivityCardLoadingVue from './ActivityCardLoading.vue'

const { result, loading, error } = useQuery(activitiesQuery)
const activities = computed(() => result.value?.activities ?? [])

</script>

<template>
  <div v-if="error">Error: {{ error.message }}</div>

  <div class="sliderWrapper flex no-scrollbar overflow-x-scroll relative mt-6 pb-14 pl-6">

    <div class="arrowWrapper hidden absolute flex-none w-full text-custom-color-black">
      <div class="arrowPositionBox absolute right-6 flex items-center h-[294px]">
        <a href="#slideEffect" class="arrowLink z-20 flex items-center justify-center w-20 h-20 bg-slate-50/50 rounded-full">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
        </a>
      </div>
    </div>

    <ul class="sliderList flex flex-nowrap text-xs pr-6">

      <ActivityCardLoadingVue v-if="loading" />
      <ActivityCardLoadingVue v-if="loading" />

      <ActivityCardVue v-for="activity of activities" :key="activity.id" :activity="activity" />

    </ul>

    <a href="activities_list.html" class="flex flex-col justify-center mr-6">
      <span class="text-center pb-3">Voir plus</span>
      <div class="flex items-center justify-center w-20 h-20 bg-slate-50/50 rounded-full">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
      </div>
    </a>

  </div>
</template>

<style scoped>

</style>