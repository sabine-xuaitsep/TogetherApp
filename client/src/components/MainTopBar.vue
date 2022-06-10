<script setup>

import { computed, onMounted, ref, watch } from 'vue'

const scroll = defineProps({
  wrapperPosition: Number
})

const mainTopBar = ref(null),
      searchbarInput = ref(null)

const isHiddenIcon = ref(false),
      treshold = ref(null)

const sticky = computed(() => scroll.wrapperPosition >= treshold.value)

onMounted(() => {
  treshold.value = mainTopBar.value.offsetTop
})

watch(scroll, () => {
  if(document.activeElement === searchbarInput.value) {
    searchbarInput.value.blur()
  }
})

</script>

<template>
  <div 
    ref="mainTopBar"
    :class="{ 'sticky top-0 z-30 bg-slate-50 text-custom-color-black': sticky }"
    class="flex py-2 pl-6 pr-8">

    <!-- searchbar -->
    <label class="flex items-center relative w-full h-12 xs:w-3/4">
      <span class="sr-only">Recherche</span>
      <svg 
        :class="{ 'stroke-custom-color-black': sticky }"
        class="absolute ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
      <input 
        ref="searchbarInput"
        @focus="isHiddenIcon = true"
        @blur="isHiddenIcon = false"
        :class="{ 
          'bg-custom-color-dark focus:ring-1 focus:ring-slate-50 placeholder:text-slate-50/50': !sticky,  
          'bg-slate-50 ring-1 ring-custom-color-black focus:ring-custom-color-light placeholder:opacity-50': sticky 
        }"
        class="grow py-1 pl-9 pr-4 rounded-xl focus:outline-none placeholder:text-sm" placeholder="Chercher des activités" type="text" name="search" size="3" 
      />
    </label>
    <!-- end of searchbar -->
    
    <!-- filters link: hidden when focus on searchbar -->
    <a 
      :class="{ hidden: isHiddenIcon }"
      class="flex items-center justify-center ml-5 w-12 h-12" href="filters.html">
      <span class="sr-only">Filtres</span>
      <svg  
        :class="{ 'fill-slate-50 stroke-slate-50': !sticky }"
        class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
      </svg>
    </a>
    <!-- end filters link -->

    <!-- map link: hidden when focus on searchbar -->
    <a 
      :class="{ hidden: isHiddenIcon }" 
      class="flex items-center justify-center ml-2 w-12 h-12" href="map.html">
      <span class="sr-only">Carte</span>
      <svg 
        :class="{ 'fill-slate-50 stroke-slate-50': !sticky }"
        class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
      </svg>
    </a>
    <!-- end map link -->

  </div>
</template>

<style scoped>

</style>