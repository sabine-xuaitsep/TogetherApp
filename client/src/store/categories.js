import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { categoriesQuery } from './../graphql/categories'

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    categories: {
      result: null,
      loading: null,
      error: null,
    },
    choosenCategories: [],
  }),
  getters: {},
  actions: {
    fetchCategories() {
      const { result, loading, error } = useQuery(categoriesQuery) 
      this.categories.loading = loading
      this.categories.error = error
      this.categories.result = computed(() => result.value?.categories) 
    }
  },
});
