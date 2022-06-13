<script setup>

import { ref, watch } from 'vue'
import { useActivitiesStore } from './../../store/activities'

const scroll = defineProps({
  sticky: Boolean,
  wrapperPosition: Number
})
const emit = defineEmits(['hide-icons'])

const activitiesStore = useActivitiesStore()

const searchbarInput = ref(null)

watch(scroll, () => {
  if(document.activeElement === searchbarInput.value) 
    searchbarInput.value.blur()
})

</script>

<template>
  <label class="flex items-center relative w-full h-12 xs:w-3/4">
    <span class="sr-only">Recherche</span>
    <svg 
      :class="{ 'stroke-custom-color-black': sticky }"
      class="absolute ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
    <input 
      ref="searchbarInput"
      v-model="activitiesStore.searchContent"
      @focus="emit('hide-icons', true)"
      @blur="emit('hide-icons', false)"
      :class="{ 
        'bg-custom-color-dark focus:ring-1 focus:ring-slate-50 placeholder:text-slate-50/50': !sticky,  
        'bg-slate-50 ring-1 ring-custom-color-black focus:ring-custom-color-light placeholder:opacity-50': sticky 
      }"
      class="grow py-1 pl-9 pr-4 rounded-xl focus:outline-none placeholder:text-sm" placeholder="Chercher des activités" type="text" size="3" 
    />
  </label>
</template>

<style scoped>

</style>