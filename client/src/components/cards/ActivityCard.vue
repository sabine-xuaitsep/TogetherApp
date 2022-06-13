<script setup>

defineProps({
  activity: Object,
  customClass: String
})

</script>

<template>
  <li 
    :class="customClass"
    class="mr-3 relative w-56 sm:w-72"> 
    <article class="bg-custom-color-dark rounded-xl shadow-lg shadow-custom-color-dark">

      <div class="relative">
        <figure class="aspect-w-16 aspect-h-9">
          <img class="object-cover rounded-t-xl" :src="activity.image" alt="Illustration de trail">
        </figure>

        <a href="#category" class="absolute top-3 left-3 z-10 px-2 py-1 bg-slate-50 rounded-lg text-custom-color-dark font-bold">
          {{ activity.category.name }}
        </a>
        
        <router-link :to="{ name: '404', params: { type: 'bookmarks' } }" class="absolute z-10 top-3 right-3 flex items-center justify-center w-8 h-8 bg-slate-50 rounded-full">
          <svg class="w-4 h-4 text-custom-color-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
        </router-link>
        
        <span class="absolute bottom-3 right-3 font-bold">{{ new Date(activity.date).toLocaleDateString('fr-BE', {month: "long", day: "numeric"}) }}</span>
      </div>

      <div class="pl-3 pt-4 pb-1">
        <header>
          <h3 class="truncate pr-4 text-base sm:text-lg font-bold">{{ activity.title }}</h3>
        </header>
        
        <footer class="text-center my-2">
          <div class="flex items-center mt-1 text-custom-color-cold">
            <svg class="w-5 h-5 mr-1 stroke-slate-50 fill-custom-color-cold" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <p>{{ activity.city }}, {{ activity.distance }} km</p>
          </div>

          <div class="flex items-center mt-1">
            <svg class="mr-1 w-5 h-5 fill-slate-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            <p class="mr-2">{{ activity.user.firstName }}</p>
            <span class="sr-only">Note</span>
            <ul class="flex">
              <li><svg class="m-px w-3 h-3 fill-yellow-300 stroke-yellow-300" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></li>
              <li><svg class="m-px w-3 h-3 fill-yellow-300 stroke-yellow-300" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></li>
              <li><svg class="m-px w-3 h-3 fill-yellow-300 stroke-yellow-300" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></li>
              <li><svg class="m-px w-3 h-3 fill-yellow-300 stroke-yellow-300" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></li>
              <li><svg class="m-px w-3 h-3 fill-slate-50 stroke-slate-50" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg></li>
            </ul>
          </div>
          
          <div class="flex items-center mt-1">
            <svg class="mr-1 w-5 h-5 fill-slate-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <p class="font-light">{{ activity.registeredParticipants }}/{{ activity.maxParticipants }} Participants</p>
          </div>

        </footer>
        
        <!-- card link -->
        <div class="text-center my-3">
          <router-link 
            :to="{ name: 'activity', params: { id: activity.id } }"
            class="inline-block px-8 py-1 bg-custom-color-cold rounded-3xl after:absolute after:inset-0 after:content-[' ']">
            Infos
          </router-link>
        </div>
        <!-- end card link -->
      </div>
    </article>
  </li>
</template>

<style scoped>

</style>