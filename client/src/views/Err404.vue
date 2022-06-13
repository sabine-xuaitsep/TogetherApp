<script setup>

import { onUpdated, reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const err = {
  type: {
    profile: "Profil utilisateur",
    bookmarks: "Favoris",
    parameters: "Paramètres",
    auth: "Authentification nécessaire",
  },
  offline: "Vous êtes hors ligne!",
  default: "On s'est égaré!",
  infoOffline: "Connectez-vous à Internet",
  infoNotImplemented: "Fonctionnalité non implémentée",
  infoDefault: "Où va le monde?",
}

const error = reactive({
  type: null,
  info: null,
})

findInfo()
onUpdated(() => findInfo())

function findInfo() {
  if(!navigator.onLine) {
    error.type = err.offline
    error.info = err.infoOffline
  }
  else if(route.name === '404' && Object.keys(err.type).find(el => el === route.params.type)) {
    error.type = err.type[route.params.type]
    error.info = err.infoNotImplemented
  }
  else {
    error.type = err.default
    error.info = err.infoDefault
  }
}

</script>

<template>
  <div class="grow overflow-y-auto text-slate-50">

    <header>
      <h1 
        ref="header" 
        class="mt-10 mb-6 ml-6 mr-8 font-bold text-4xl text-custom-color-dark">
        <router-link :to="{ name: 'home' }">Together</router-link>
      </h1>
    </header>

    <main class="flex items-center justify-center ml-6 mr-8 h-[294px] text-center">

      <div>
        <h2 class="mt-24 font-bold text-4xl">ERROR 404</h2>
        <p class="text-custom-color-dark">{{ error.type }}</p>
        <p>{{ error.info }}</p>
      </div>

    </main>
  </div>
</template>

<style scoped>

</style>