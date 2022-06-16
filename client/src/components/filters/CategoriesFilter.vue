<script setup>

import { useCategoriesStore } from './../../store/categories'

const categoriesStore = useCategoriesStore()

function isChecked(category) {
  return categoriesStore.choosenCategories.find(id => id === category.id)
}

</script>

<template>
  <fieldset class="my-7 text-xs">
    <legend class="flex items-center mb-2 font-bold">
      <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
      Catégories
    </legend>
    
    <label v-for="category in categoriesStore.categories.result" :key="category.id"
      :class="{ 'bg-custom-color-light text-slate-50': isChecked(category), 'bg-custom-color-light/25 text-custom-color-black/75': !isChecked(category), }"
      class="inline-block cursor-pointer mr-2 mb-2 px-3 py-2 ring-1 ring-custom-color-light rounded-lg">
      {{ category.name }}
      <input class="hidden" type="checkbox" :value="category.id" v-model="categoriesStore.choosenCategories">
    </label>
  </fieldset>
</template>

<style scoped>

</style>