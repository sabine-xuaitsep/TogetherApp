<script setup>

import { onMounted, onBeforeMount, onUpdated, ref, watch } from 'vue'
import { useCategoriesStore } from './../../store/categories'

const emit = defineEmits(['offset-width', 'custom-class'])

const sliderList = ref(null)

const categoriesStore = useCategoriesStore()

const categories = ref(null), 
      loading = ref(true),
      error = ref(null)

onBeforeMount(() => emit('custom-class', {
  wrapper: "mt-8 mb-7 px-6",
  arrowBox: "h-16",
  arrowLink: "w-10 h-10",
  arrow: "w-5 h-5"
}))

onMounted(() => emit('offset-width', sliderList.value.offsetWidth))
onUpdated(() => emit('offset-width', sliderList.value.offsetWidth))

fetchValues()
watch(categoriesStore, () => fetchValues())

function fetchValues() {
  loading.value = categoriesStore.categories.loading
  error.value = categoriesStore.categories.error
    if(loading.value === false && !error.value) 
      categories.value = categoriesStore.categories.result
}

</script>

<template>
  <ul 
    ref="sliderList" 
    class="flex">

    
    <li 
      v-if="loading || error"
      v-for="item of new Array(7)" :key="item"
      class="mr-4 text-center text-xs text-transparent">
      <a class="block w-16 h-24">
        <div class="mb-2 w-16 h-16 bg-custom-color-black rounded-full shadow-lg shadow-custom-color-dark"></div>
        <span>Nothing</span>
      </a>
    </li>

    <!-- category link -->
    <li 
      v-for="category of categories" :key="category.id"
      class="mr-4 text-center text-xs">
      <a class="block w-16 h-24" href="#category">
        <div class="mb-2 w-16 h-16 bg-center bg-cover rounded-full shadow-lg shadow-custom-color-dark" :style="{ 'background-image': `url('assets/images/activities/activities_${category.id}.jpg')` }"></div>
        <span>{{ category.name }}</span>
      </a>
    </li>
    <!-- end category link -->

  </ul>
</template>

<style scoped>

</style>