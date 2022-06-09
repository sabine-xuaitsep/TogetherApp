<script setup>

import { computed, onBeforeMount, onUpdated, ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { categoriesQuery } from '../graphql/categories'

const { result, loading, error } = useQuery(categoriesQuery)
const categories = computed(() => result.value?.categories ?? [])

const sliderList = ref(null)

const emit = defineEmits(['offset-width', 'custom-class'])

onBeforeMount(() => {
  emit('custom-class', {
    wrapper: "mt-8 mb-7 px-6",
    arrowBox: "h-16",
    arrowLink: "w-10 h-10",
    arrow: "w-5 h-5"
  })
})
onUpdated(() => {
  emit('offset-width', sliderList.value.offsetWidth)
})
</script>

<template>
  <ul 
    ref="sliderList" 
    class="flex">

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