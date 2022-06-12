<script setup>

import { onMounted, reactive, ref } from 'vue'
import ActivitiesSliderVue from './ActivitiesSlider.vue'
import CategoriesSliderVue from './CategoriesSlider.vue'

defineProps({
  content: String, 
  query: String,
  args: Object
})

const wrapper = ref(null), 
      arrowBox = ref(null)

const slider = reactive({
  arrowPosition: null,
  isHiddenArrow: true,
  listOffsetWidth: null, 
  scrolledByTouch: false, 
  wrapperPaddingLeft: null
})

const customClass = reactive({
  wrapper: null,
  arrowBox: null,
  arrowLink: null,
  arrow: null
})

onMounted(() => {
  slider.wrapperPaddingLeft = Number((getComputedStyle(wrapper.value).paddingLeft).replace('px', ''))
})

function setCustomClass(e) {
  Object.keys(e).forEach(key => {
    customClass[key] = e[key]
  })
}

function setListOffsetWidth(e) {
  slider.listOffsetWidth = e;
  checkArrowVisibility()
}

function checkArrowVisibility() {
  if (slider.scrolledByTouch) {
    if (!slider.isHiddenArrow) 
      slider.isHiddenArrow = true
  }
  else {
    slider.isHiddenArrow = slider.arrowPosition < -(slider.listOffsetWidth - document.body.offsetWidth) 
      ? true : false
  }
}

function handleArrowPosition() {
  if (!slider.scrolledByTouch) {
    slider.arrowPosition = -wrapper.value.scrollLeft + slider.wrapperPaddingLeft
    arrowBox.value.style.right = `${slider.arrowPosition}px`;
  }
  checkArrowVisibility()
}

function handleTouch() {
  if (!slider.scrolledByTouch) {
    slider.scrolledByTouch = true;
  }
}

function slideToRight() {
  wrapper.value.scrollLeft += (document.body.offsetWidth/5)*4;
}

window.addEventListener('resize', () => {
  checkArrowVisibility();
});

</script>

<template>
  <div 
    ref="wrapper" 
    @scroll="handleArrowPosition"
    @touchmove="handleTouch"
    :class="customClass.wrapper"
    class="flex no-scrollbar overflow-x-scroll relative">

    <div 
      :class="{ hidden: slider.isHiddenArrow }"
      class="absolute flex-none w-full text-custom-color-black">
      <div 
        ref="arrowBox" 
        :class="customClass.arrowBox"
        class="absolute right-6 flex items-center">
        <a 
          @click.prevent="slideToRight"
          :class="customClass.arrowLink"
          href="#slideEffect" class="z-20 flex items-center justify-center bg-slate-50/50 rounded-full">
          <svg 
            :class="customClass.arrow"
            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>

    <ActivitiesSliderVue v-if="content === 'activities'"
      :query="query"
      :args="args"
      @offset-width="setListOffsetWidth"
      @custom-class="setCustomClass" 
    />

    <CategoriesSliderVue v-if="content === 'categories'"
      @offset-width="setListOffsetWidth"
      @custom-class="setCustomClass" 
    />

  </div>
</template>

<style scoped>

</style>