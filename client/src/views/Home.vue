<script setup>
import MainTopBarVue from '../components/MainTopBar.vue'
import ActivitiesSliderVue from '../components/ActivitiesSlider.vue'
import { ref  } from 'vue'

const wrapper = ref(null)
const wrapperPosition = ref(null)

function calcWrapperPosition() {
  wrapperPosition.value = wrapper.value.scrollTop
}
</script>

<template>
  <div 
    ref="wrapper"
    @scroll="calcWrapperPosition"
    class="grow overflow-y-auto text-slate-50">

    <header>
      <h1 class="mt-10 mb-6 ml-6 mr-8 font-bold text-4xl">Together</h1>
    </header>

    <main>

      <MainTopBarVue :wrapperPosition="wrapperPosition" />

      <!-- categories filters -->
      <section>
        <h2 class="sr-only">Filtrer par catégorie</h2>
        <div class="sliderWrapper flex no-scrollbar overflow-x-scroll relative mt-8 mb-7 px-6">
          
          <div class="arrowWrapper hidden absolute flex-none w-full text-custom-color-black">
            <div class="arrowPositionBox absolute right-6 flex items-center h-16">
              <a href="#slideEffect" class="arrowLink z-20 flex items-center justify-center w-10 h-10 bg-slate-50/50 rounded-full">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          <ul class="sliderList flex">

            <!-- category link -->
            <li class="mr-4 text-center text-xs">
              <a class="block w-16 h-24" href="#category">
                <div class="mb-2 w-16 h-16 bg-center bg-cover rounded-full shadow-lg shadow-custom-color-dark" style="background-image: url('assets/images/activities/activities_1.jpg')"></div>
                <span>Randonnée</span>
              </a>
            </li>
            <!-- end category link -->
            
            <li class="mr-4 text-center text-xs">
              <a class="block w-16 h-24" href="#category">
                <div class="mb-2 w-16 h-16 bg-center bg-cover rounded-full shadow-lg shadow-custom-color-dark" style="background-image: url('assets/images/activities/activities_2.jpg')"></div>
                <span>Vélo</span>
              </a>
            </li>
            <li class="mr-4 text-center text-xs">
              <a class="block w-16 h-24" href="#category">
                <div class="mb-2 w-16 h-16 bg-center bg-cover rounded-full shadow-lg shadow-custom-color-dark" style="background-image: url('assets/images/activities/activities_3.jpg')"></div>
                <span>Moto</span>
              </a>
            </li>
            <li class="mr-4 text-center text-xs">
              <a class="block w-16 h-24" href="#category">
                <div class="mb-2 w-16 h-16 bg-center bg-cover rounded-full shadow-lg shadow-custom-color-dark" style="background-image: url('assets/images/activities/activities_4.jpg')"></div>
                <span>Pêche</span>
              </a>
            </li>
            <li class="mr-4 text-center text-xs">
              <a class="block w-16 h-24" href="#category">
                <div class="mb-2 w-16 h-16 bg-center bg-cover rounded-full shadow-lg shadow-custom-color-dark" style="background-image: url('assets/images/activities/activities_5.jpg')"></div>
                <span>Kayak</span>
              </a>
            </li>
            <li class="mr-4 text-center text-xs">
              <a class="block w-16 h-24" href="#category">
                <div class="mb-2 w-16 h-16 bg-center bg-cover rounded-full shadow-lg shadow-custom-color-dark" style="background-image: url('assets/images/activities/activities_6.jpg')"></div>
                <span>Escalade</span>
              </a>
            </li>
            <li class="mr-4 text-center text-xs">
              <a class="block w-16 h-24" href="#category">
                <div class="mb-2 w-16 h-16 bg-center bg-cover rounded-full shadow-lg shadow-custom-color-dark" style="background-image: url('assets/images/activities/activities_7.jpg')"></div>
                <span>Resto</span>
              </a>
            </li>
            <li class="mr-4 text-center text-xs">
              <a class="block w-16 h-24" href="#category">
                <div class="mb-2 w-16 h-16 bg-center bg-cover rounded-full shadow-lg shadow-custom-color-dark" style="background-image: url('assets/images/activities/activities_8.jpg')"></div>
                <span>Bar</span>
              </a>
            </li>
            <li class="mr-4 text-center text-xs">
              <a class="block w-16 h-24" href="#category">
                <div class="mb-2 w-16 h-16 bg-center bg-cover rounded-full shadow-lg shadow-custom-color-dark" style="background-image: url('assets/images/activities/activities_1.jpg')"></div>
                <span>Rencontre</span>
              </a>
            </li>
            <li class="mr-4 text-center text-xs">
              <a class="block w-16 h-24" href="#category">
                <div class="mb-2 w-16 h-16 bg-center bg-cover rounded-full shadow-lg shadow-custom-color-dark" style="background-image: url('assets/images/activities/activities_2.jpg')"></div>
                <span>Autre</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <!-- end categories filters -->
      
      <!-- activities by distance -->
      <section>
        <h2 class="pt-6 pl-6 font-bold text-xl">Activités à proximité</h2>

        <ActivitiesSliderVue />
      </section>
      <!-- end activities by distance -->
      
      <!-- activities by date -->
      <section>
        <h2 class="pt-6 pl-6 font-bold text-xl">Prochaines activités</h2>

        <ActivitiesSliderVue />
      </section>
      <!-- end activities by date -->

    </main>
  </div>
</template>

<style scoped>

</style>