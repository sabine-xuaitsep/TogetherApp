<script setup>

import { computed, onMounted, onUpdated, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const bar = defineProps({
  barColor: String,
  boxScrollTop: Number,
  heroOffsetTop: Number
})

const router = useRouter(),
      route = useRoute()

const barBox = ref(null), 
      barTitle = ref(null)

const header = { color: null, opacity: null }
const title = { color: null, opacity: null }
const threshold = { value: null }

const computedOpacity = computed(() => (bar.boxScrollTop/threshold.value).toFixed(2))
const computedHeaderColor = computed(() => caclColor(header, 'background-color'))
const computedTitleColor = computed(() => caclColor(title, 'color'))

onMounted(() => {
  header.color = getColor(barBox.value, 'backgroundColor')
  title.color = getColor(barTitle.value, 'color')
})

onUpdated(() => {
  if (header.color.length === 4 && title.color.length === 4) {
    threshold.value = bar.heroOffsetTop - barBox.value.offsetHeight 
    storeProp(header)
    storeProp(title)
  }
})

function caclColor(el, prop) {
  return (threshold.value < bar.boxScrollTop) 
  ? `${prop}: rgba(${el.color}, 1)`
  : (computedOpacity.value > el.opacity) 
    ? `${prop}: rgba(${el.color}, ${computedOpacity.value})` 
    : `${prop}: rgba(${el.color}, ${el.opacity})`
}

function getColor(el, prop) {
  return getComputedStyle(el)[prop].replace(/[a-z()]/g, '').split(', ') 
}

function storeProp(el) {
  el.opacity = el.color[3]
  el.color = `${el.color[0]}, ${el.color[1]}, ${el.color[2]}`
}

</script>

<template>
  <header 
    ref="barBox" 
    :style="computedHeaderColor"
    :class="barColor"
    class="fixed z-20 flex items-center justify-between w-screen pl-4 pr-6 py-3">

    <a @click.prevent="router.back()" class="flex items-center h-8">
      <svg class="min-w-fit h-6 stroke-slate-50" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
    </a>
    <h1 
      ref="barTitle" 
      id="barTitle"
      :style="computedTitleColor"
      class="ml-4 mr-3 truncate font-bold text-slate-50/0">
      Chargement
    </h1>
    <div class="flex">
      <div 
        :class="{ hidden: route.name !== 'activity' }"
        class="min-w-fit ml-3">
        <router-link :to="{ name: '404', params: { type: 'bookmarks' } }" class="flex items-center justify-center w-8 h-8 bg-slate-50 rounded-full">
          <svg class="w-4 h-4 text-custom-color-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
        </router-link>
      </div>
      <!-- display if user owns activity -->
      <div 
        :class="{ hidden: route.name !== 'activity' }"
        class="min-w-fit ml-3">
        <router-link :to="{ name: '404', params: { type: 'auth' } }" class="flex items-center justify-center w-8 h-8 bg-slate-50 rounded-full">
          <svg class="w-4 h-4 text-custom-color-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
        </router-link>
      </div>
      <!-- end display if user owns activity -->
      <!-- display if on filter & @media > 640px -->
      <div 
        :class="{ 'sm:block': route.name === 'filters' }"
        class="hidden min-w-fit ml-3">
        <a @click.prevent="router.back()" class="flex items-center justify-center w-8 h-8 bg-slate-50 rounded-full">
          <svg class="w-4 h-4 text-custom-color-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </a>
      </div>
      <!-- display if on filter & @media > 640px -->
    </div>
  </header>
</template>

<style scoped>

</style>