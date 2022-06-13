<script setup>

import { computed, ref } from 'vue'
import HeaderBarVue from './../components/bars/HeaderBar.vue'

const appBox = ref(null),
      heroTitle = ref(null)
      
const appScrollTop = ref(0)
const heroOffsetTop = computed(() => heroTitle.value?.offsetTop)

function calcScrollTop() {
  appScrollTop.value = appBox.value.scrollTop
}

</script>

<template>
  <div 
    ref="appBox" 
    @scroll="calcScrollTop"
    class="grow overflow-y-auto text-custom-color-black bg-slate-50">

    <HeaderBarVue
      barColor="bg-custom-color-light/50"
      barTitle="Filtrer les activités" 
      :boxScrollTop="appScrollTop" 
      :heroOffsetTop="heroOffsetTop" 
    />

    <main class="ml-6 mr-8 mt-24 mb-14">
      <div ref="heroTitle" class="flex flex-col max-w-[1024px]">
        
        <div>
          <div class="mb-2 relative text-xs">
            <span class="absolute right-0">71 km</span>
            <label for="distance_value" class="flex items-center font-bold">
              <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Distance
            </label>
          </div>
          <div class="mt-2 mb-6 relative">
            <!-- link w-[value] to range value -->
            <div class="absolute w-[70%] h-2 bg-custom-color-cold rounded-full"></div>
            <input
              id="distance_value"
              type="range"
              class="absolute z-10 appearance-none cursor-pointer w-full h-2 bg-custom-color-dark/25 outline-none rounded-full ring-0 shadow-none"
              min="1"
              max="101"
              step="5"
              value="71"
            />
          </div>
        </div>

        <hr class="mt-9" />

        <div class="flex flex-col my-7 xxs:flex-row">
          <div class="xxs:mr-4 text-xs">
            <label for="distanceSorting" class="cursor-pointer flex items-center mb-2 font-bold">
              <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
              Tri par distance
            </label>

            <label class="inline-block cursor-pointer mr-2 mb-2 px-3 py-2 bg-custom-color-light ring-1 ring-custom-color-light rounded-lg text-slate-50">
              <!-- checked -->
              <span>Distance croissante</span>
              <!-- unchecked -->
              <span class="hidden">Distance décroissante</span>

              <input class="hidden" type="checkbox" id="distanceSorting" value="distanceSorting" checked>
            </label>
          </div>

          <div class="mt-3 xxs:mt-0 text-xs">
            <label for="dateSorting" class="cursor-pointer flex items-center mb-2 font-bold">
              <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
              Tri par date
            </label>

            <label class="inline-block cursor-pointer mr-2 mb-2 px-3 py-2 bg-custom-color-light ring-1 ring-custom-color-light rounded-lg text-slate-50">
              <!-- checked -->
              <span>Date croissante</span>
              <!-- unchecked -->
              <span class="hidden">Date décroissante</span>

              <input class="hidden" type="checkbox" id="dateSorting" value="dateSorting" checked>
            </label>
          </div>
        </div>

        <hr />

        <fieldset class="my-7 text-xs">
          <legend class="flex items-center mb-2 font-bold">
            <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
            Catégories
          </legend>

          <!-- checked -->
          <label class="inline-block cursor-pointer mr-2 mb-2 px-3 py-2 bg-custom-color-light ring-1 ring-custom-color-light rounded-lg text-slate-50" for="category_1">Randonnée</label>
          <input class="hidden" type="checkbox" id="category_1" name="categories[]" value="1" checked>

          <!-- unchecked -->
          <label class="inline-block cursor-pointer mr-2 mb-2 px-3 py-2 bg-custom-color-light/25 ring-1 ring-custom-color-light rounded-lg text-custom-color-black/75" for="category_2">Vélo</label>
          <input class="hidden" type="checkbox" id="category_2" name="categories[]" value="2">
          
          <label class="inline-block cursor-pointer mr-2 mb-2 px-3 py-2 bg-custom-color-light/25 ring-1 ring-custom-color-light rounded-lg text-custom-color-black/75" for="category_3">Moto</label>
          <input class="hidden" type="checkbox" id="category_3" name="categories[]" value="3">
          
          <label class="inline-block cursor-pointer mr-2 mb-2 px-3 py-2 bg-custom-color-light/25 ring-1 ring-custom-color-light rounded-lg text-custom-color-black/75" for="category_4">Pêche</label>
          <input class="hidden" type="checkbox" id="category_4" name="categories[]" value="4">
          
          <label class="inline-block cursor-pointer mr-2 mb-2 px-3 py-2 bg-custom-color-light/25 ring-1 ring-custom-color-light rounded-lg text-custom-color-black/75" for="category_5">Kayak</label>
          <input class="hidden" type="checkbox" id="category_5" name="categories[]" value="5">
          
          <label class="inline-block cursor-pointer mr-2 mb-2 px-3 py-2 bg-custom-color-light/25 ring-1 ring-custom-color-light rounded-lg text-custom-color-black/75" for="category_6">Escalade</label>
          <input class="hidden" type="checkbox" id="category_6" name="categories[]" value="6">
          
          <label class="inline-block cursor-pointer mr-2 mb-2 px-3 py-2 bg-custom-color-light/25 ring-1 ring-custom-color-light rounded-lg text-custom-color-black/75" for="category_7">Resto</label>
          <input class="hidden" type="checkbox" id="category_7" name="categories[]" value="7">
          
          <label class="inline-block cursor-pointer mr-2 mb-2 px-3 py-2 bg-custom-color-light/25 ring-1 ring-custom-color-light rounded-lg text-custom-color-black/75" for="category_8">Bar</label>
          <input class="hidden" type="checkbox" id="category_8" name="categories[]" value="8">
          
          <label class="inline-block cursor-pointer mr-2 mb-2 px-3 py-2 bg-custom-color-light/25 ring-1 ring-custom-color-light rounded-lg text-custom-color-black/75" for="category_9">Rencontre</label>
          <input class="hidden" type="checkbox" id="category_9" name="categories[]" value="9">
          
          <label class="inline-block cursor-pointer mr-2 mb-2 px-3 py-2 bg-custom-color-light/25 ring-1 ring-custom-color-light rounded-lg text-custom-color-black/75" for="category_10">Autre</label>
          <input class="hidden" type="checkbox" id="category_10" name="categories[]" value="10">
        </fieldset>

        <hr class="mb-9" />

        <a class="flex items-center font-bold text-custom-color-black/75 text-xs" href="#previousPage">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
          <p>Voir les activités</p>
        </a>
      </div>

    </main>

  </div>
</template>

<style scoped>

</style>