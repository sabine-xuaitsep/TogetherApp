<script setup>

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import HeaderBarVue from './../../components/bars/HeaderBar.vue'

const route = useRoute()

const appBox = ref(null)

const appScrollTop = ref(0),
      heroOffsetTop = ref(null)

const bgColor = route.name === 'filters' 
  ? 'text-custom-color-black bg-slate-50' 
  : 'text-slate-50'

const barColor = route.name === 'filters' 
  ? 'bg-custom-color-light/50' 
  : 'bg-custom-color-black/25'

onMounted(() => {
  heroOffsetTop.value = document.getElementById('heroTitle').offsetTop
})

function calcScrollTop() {
  appScrollTop.value = appBox.value.scrollTop
}

</script>

<template>
  <div 
    ref="appBox" 
    @scroll="calcScrollTop"
    :class="bgColor"
    class="grow overflow-y-auto">

    <HeaderBarVue
      :barColor="barColor"
      :boxScrollTop="appScrollTop" 
      :heroOffsetTop="heroOffsetTop" 
    />

    <router-view></router-view>

  </div>
</template>

<style scoped>

</style>