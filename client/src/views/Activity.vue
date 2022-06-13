<script setup>

import { onMounted, ref, watch } from 'vue'
import { useActivitiesStore } from './../store/activities'
import { useRoute } from 'vue-router'

const activitiesStore = useActivitiesStore(), 
      route = useRoute()

const activity = ref(null)

activitiesStore.fetch('activity', { id: route.params.id })

activity.value = activitiesStore['activity'].result

watch(activitiesStore, () => {
  activity.value = activitiesStore['activity'].result
  document.getElementById('barTitle').innerText = activity.value?.title
})

</script>

<template>
  <main>
    <article>
      <header class="relative">
        
        <h2 
          id="heroTitle" 
          class="absolute z-10 bottom-12 sm:bottom-14 pl-6 pr-8 w-full font-bold text-xl sm:text-3xl">
          <span class="flex">
            <span class="truncate px-2 py-1 sm:px-4 sm:py-2 bg-custom-color-black/25 rounded-lg">
              {{ activity?.title }}
            </span>
          </span>
        </h2>
        
        <figure class="aspect-w-5 aspect-h-6 xs:aspect-w-4 xs:aspect-h-3 md:aspect-w-16 md:aspect-h-9 xl:aspect-w-3 xl:aspect-h-1">
          <img class="object-cover" :src="activity?.image" alt="Illustration de trail">
        </figure>

        <div class="absolute bottom-4 ml-6 text-sm sm:text-base text-custom-color-cold">
          <div class="flex items-center py-1 px-2 bg-slate-50 rounded-lg">
            <svg class="mr-1 w-5 h-5 fill-custom-color-cold stroke-slate-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <p>{{ activity?.city }}, à {{ activity?.distance }} km</p>
          </div>
        </div>

      </header>

      <div class="flex items-center justify-between py-4 pl-6 pr-8 w-full bg-custom-color-dark font-bold">
        <time datetime="2022-11-11">{{ new Date(activity?.date).toLocaleDateString('fr-BE', {month: "long", day: "numeric"}) }}</time>
        <a href="#category" class="px-2 py-1 bg-slate-50 rounded-lg text-custom-color-dark text-xs">
          {{ activity?.category?.name }}
        </a>
      </div>

      <section class="ml-6 mr-8 my-14">
        <h2 class="font-bold text-xl">
          {{ activity?.title }}
        </h2>
        <p class="mt-4 text-sm">
          <time datetime="2022-11-11T12:12:00">{{ new Date(activity?.date).toLocaleDateString('fr-BE', {month: "long", day: "numeric"}) }}, à {{ activity?.time }} 12h12 format!!!</time>
        </p>
        <p class="mt-4 mb-14">
          {{ activity?.description }}
        </p>

        <address class="inline-flex not-italic">
          <a class="flex items-center text-sm" href="#map">
            <svg class="w-10 h-10 fill-custom-color-cold stroke-slate-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
            <span class="ml-3">{{ activity?.street }}, {{ activity?.streetNumber }} <br /> {{ activity?.zip }} {{ activity?.city }}</span>
          </a>
        </address>
        <div class="flex items-center justify-center mt-4 mb-14 w-full h-40 sm:h-96 bg-slate-50 rounded-xl text-custom-color-black">
          <span>MAP HERE</span>
        </div>

        <a class="inline-flex flex-col xs:items-center xs:flex-row text-sm" href="#">
          <span>Organisé par</span>
            <!--  -->
          <div class="m-3 w-14 h-14 bg-cover bg-center rounded-full shadow-lg shadow-custom-color-dark" :style="{ 'background-image': `url('${activity?.user?.avatar}')` }"></div>
          <span class="mr-2 font-bold">{{ activity?.user?.pseudo }}</span>
          <ul class="flex">
            <li><svg class="m-px w-3 h-3 fill-yellow-300 stroke-yellow-300" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></li>
            <li><svg class="m-px w-3 h-3 fill-yellow-300 stroke-yellow-300" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></li>
            <li><svg class="m-px w-3 h-3 fill-yellow-300 stroke-yellow-300" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></li>
            <li><svg class="m-px w-3 h-3 fill-yellow-300 stroke-yellow-300" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></li>
            <li><svg class="m-px w-3 h-3 fill-slate-50 stroke-slate-50" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></li>
          </ul>
        </a>
        
        <div class="flex flex-col mt-14 text-sm">
          <p class="mb-3">{{ activity?.registeredParticipants }}/{{ activity?.maxParticipants }} participants</p>
          <div class="flex flex-wrap">
            <a 
              v-for="participant in activity?.participants" :key="participant.id"
              href="#" class="m-2 w-10 h-10 bg-cover bg-center rounded-full shadow-lg shadow-custom-color-dark" :style="{ 'background-image': `url('${participant.avatar}')` }">
            </a>
          </div>
        </div>

        <div class="mt-7 mb-14">
          <a href="#" class="inline-block bg-custom-color-cold rounded-3xl py-1 px-8">
            S'inscrire
          </a>
        </div>

      </section>
    </article>
  </main>
</template>

<style scoped>

</style>