<script setup>
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { userQuery } from '../graphql/user'

defineProps({
  msg: String
})

const { result } = useQuery(userQuery, { id: 1 })
const user = computed(() => result.value?.user ?? [])

</script>

<template>
  <h1>{{ msg }} {{ user.name }}</h1>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>