<script setup>

import { onUpdated, ref  } from 'vue'
import { useRoute } from 'vue-router'
import MainTopBarVue from './../../components/MainTopBar.vue'

const wrapper = ref(null),
      header = ref(null)
const wrapperPosition = ref(null),
      topBarHeight = ref(null)

const route = useRoute()
const storedRoute = ref(route.name)

onUpdated(() => {
  if(storedRoute.value !== route.name) {
    wrapper.value.scrollTo(0, 0)
    checkMapHeight(topBarHeight.value)
    storedRoute.value = route.name
  }
})

function calcWrapperPosition() {
  wrapperPosition.value = wrapper.value.scrollTop
}

function checkMapHeight(height) {
  topBarHeight.value = height
  if(route.name === 'map') {
    const filledHeight = header.value.offsetHeight 
                        + getHeaderMargin('Top') 
                        + getHeaderMargin('Bottom')
                        + topBarHeight.value
                        + document.getElementById('navBar').offsetHeight 
    document.getElementById('map').style.height = `calc(100vh - ${filledHeight}px)`
  }
}

function getHeaderMargin(pos) {
  return Number((getComputedStyle(header.value)[`margin${pos}`]).replace('px', ''))
}

</script>

<template>
  <div 
    ref="wrapper"
    @scroll="calcWrapperPosition"
    class="grow overflow-y-auto text-slate-50">

    <header>
      <h1 
        ref="header" 
        class="mt-10 mb-6 ml-6 mr-8 font-bold text-4xl">
        <router-link :to="{ name: 'home' }">Together</router-link>
      </h1>
    </header>

    <main>

      <MainTopBarVue :wrapperPosition="wrapperPosition" @offset-height="checkMapHeight" />

      <router-view></router-view>

    </main>
  </div>
</template>

<style scoped>

</style>