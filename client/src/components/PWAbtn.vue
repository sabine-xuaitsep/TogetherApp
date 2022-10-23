<script setup>

import { ref } from 'vue'

const deferredPrompt = ref(null), 
      isHidden = ref(true)

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
  isHidden.value = false
  deferredPrompt.value = e
})

function installPWA() {
  isHidden.value = true
  deferredPrompt.value.prompt()
  deferredPrompt.value.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted')
      console.log('Thanks for installing')
    else
      console.log('You should install on mobile!')
  })
  deferredPrompt.value = null
}

</script>

<template>
  <a 
    @click="installPWA"
    :class="{ hidden: isHidden }"
    class="flex items-center font-light text-xs"
    style="padding-top: 3px;"> 
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
      <span 
        class="pl-2"
        style="padding-top: 3px;">
        Ajouter à l'écran d'accueil
      </span>
  </a>
</template>

<style scoped>

</style>