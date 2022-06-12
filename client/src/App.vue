<script setup>

import { ref } from 'vue'
import { useUserStore } from './store/user'
import Err404Vue from './views/Err404.vue'

const userStore = useUserStore()

const userLoading = ref(true),
      offline = ref(!navigator.onLine)

userStore.locateUser()

userStore.$subscribe((mutation, state) => {
  userLoading.value = state.user.loading
  // sessionStorage.setItem('user', JSON.stringify(state.user))
})

</script>

<template>
  <div 
    :class="{ 'bg-custom-color-dark': userLoading, 'bg-gradient-to-t from-custom-color-normal via-custom-color-light to-custom-color-light' : !userLoading }"
    class="flex flex-col w-screen h-screen">

    <Err404Vue v-if="offline" />
    <router-view v-else></router-view>

    <footer id="navBar">
      <nav class="py-3 w-full bg-slate-50">
        <ul class="flex justify-around text-custom-color-black">
          <li>
            <router-link :to="{ name: 'home' }" class="flex items-center justify-center w-8 h-8" >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <span class="sr-only">Accueil</span>
            </router-link>
          </li>
          <li>
            <a class="flex items-center justify-center w-8 h-8" href="profile.html">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <span class="sr-only">Profil</span>
            </a>
          </li>
          <li>
            <a class="flex items-center justify-center w-8 h-8" href="#">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
              <span class="sr-only">Favoris</span>
            </a>
          </li>
          <li>
            <a class="flex items-center justify-center w-8 h-8" href="#">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span class="sr-only">Paramètres</span>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<style>

</style>
