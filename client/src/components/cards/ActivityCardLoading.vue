<script setup>

defineProps({
  customClass: String
})

</script>

<template>
  <li 
    v-for="item of new Array(2)" :key="item"
    :class="customClass"
    class="mr-3 w-56 sm:w-72 text-transparent"> 
    <article class="bg-custom-color-black rounded-xl shadow-lg shadow-custom-color-dark">
      <figure class="aspect-w-16 aspect-h-9"></figure>
      <div class="pl-3 pt-4 pb-1">
        <h3 class="text-base sm:text-lg">No title</h3>
        <footer class="my-2">
          <div class="h-5 mt-1"></div>
          <div class="h-5 mt-1"></div>
          <div class="h-5 mt-1"></div>
        </footer>
        <div class="my-3 px-8 py-1">No info</div>
      </div>
    </article>
  </li>
</template>

<style scoped>

</style>