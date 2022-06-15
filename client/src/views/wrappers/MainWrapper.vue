<script setup>

import { onUpdated, ref  } from 'vue'
import { useRoute } from 'vue-router'
import MainTopBarVue from './../../components/bars/MainTopBar.vue'

const wrapper = ref(null)
const wrapperPosition = ref(null)

const route = useRoute()
const storedRoute = ref(route.name)

onUpdated(() => {
  if(storedRoute.value !== route.name) {
    wrapper.value.scrollTo(0, 0)
    storedRoute.value = route.name
  }
})

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
      <h1 
        id="appHeader"
        class="mt-10 mb-6 ml-6 mr-8 font-bold text-4xl">
        <router-link :to="{ name: 'home' }">Together</router-link>
      </h1>
    </header>

    <main>

      <MainTopBarVue :wrapperPosition="wrapperPosition" />

      <router-view></router-view>

    </main>
  </div>
</template>

<style scoped>

</style>