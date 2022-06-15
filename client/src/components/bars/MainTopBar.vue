<script setup>

import { computed, onMounted, ref } from 'vue'
import SearchBarVue from './../filters/SearchBar.vue'

const scroll = defineProps({
  wrapperPosition: Number
})

const barBox = ref(null)

const isHiddenIcon = ref(false),
      threshold = ref(null)

const sticky = computed(() => scroll.wrapperPosition >= threshold.value)

onMounted(() => threshold.value = barBox.value.offsetTop)

function hideIcons(bool) {
  isHiddenIcon.value = bool
}

</script>

<template>
  <div 
    id="barBox"
    ref="barBox"
    :class="{ 'sticky top-0 z-30 bg-slate-50 text-custom-color-black': sticky }"
    class="flex py-2 pl-6 pr-8">

    <!-- searchbar -->
    <SearchBarVue @hide-icons="hideIcons" :sticky="sticky" :wrapperPosition="wrapperPosition" />
    
    <!-- filters link: hidden when focus on searchbar -->
    <router-link 
      :to="{ name: 'filters' }"
      :class="{ hidden: isHiddenIcon }" 
      class="flex items-center justify-center ml-5 w-12 h-12">
      <span class="sr-only">Filtres</span>
      <svg  
        :class="{ 'fill-slate-50 stroke-slate-50': !sticky }"
        class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
      </svg>
    </router-link>
    <!-- end filters link -->

    <!-- map link: hidden when focus on searchbar -->
    <router-link 
      :to="{ name: 'map' }"
      :class="{ hidden: isHiddenIcon }" 
      class="flex items-center justify-center ml-2 w-12 h-12">
      <span class="sr-only">Carte</span>
      <svg 
        :class="{ 'fill-slate-50 stroke-slate-50': !sticky }"
        class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
      </svg>
    </router-link>
    <!-- end map link -->

  </div>
</template>

<style scoped>

</style>