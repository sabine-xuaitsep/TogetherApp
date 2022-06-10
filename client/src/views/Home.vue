<script setup>
import MainTopBarVue from '../components/MainTopBar.vue'
import SliderVue from '../components/Slider.vue'
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

        <SliderVue content="categories" />
      </section>
      <!-- end categories filters -->
      
      <!-- activities by distance -->
      <section>
        <h2 class="pt-6 pl-6 font-bold text-xl">Activités à proximité</h2>

        <SliderVue content="activities" query="activitiesByDist" :args="{ latitude: 50.642027, longitude: 5.569576, distance: 30000, limit: 5 }" />
      </section>
      <!-- end activities by distance -->
      
      <!-- activities by date -->
      <section>
        <h2 class="pt-6 pl-6 font-bold text-xl">Prochaines activités</h2>

        <SliderVue content="activities" query="activitiesByDate" :args="{ latitude: 50.642027, longitude: 5.569576, limit: 5 }" />
      </section>
      <!-- end activities by date -->

    </main>
  </div>
</template>

<style scoped>

</style>