<script setup>
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { userQuery } from '../graphql/user'

const { result } = useQuery(userQuery, { id: 1 })
const user = computed(() => result.value?.user ?? [])

</script>

<template>
  <h1>Hello {{ user.pseudo }}</h1>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>