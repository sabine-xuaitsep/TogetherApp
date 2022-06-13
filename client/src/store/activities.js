import { defineStore } from 'pinia'
import { computed, watch } from 'vue'
import { useUserStore } from './../store/user'
import { useQuery, provideApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './../apolloClient'
import { activitiesByDateQuery } from './../graphql/activities'
import { activitiesByDistQuery } from './../graphql/activities'
import { activityQuery } from './../graphql/activities'

provideApolloClient(apolloClient)

export const useActivitiesStore = defineStore("activities", {
  state: () => ({
    searchContent: null,
    activitiesByDist: {
      result: null,
      loading: null,
      error: null,
    },
    activitiesByDate: {
      result: null,
      loading: null,
      error: null,
    },
    activity: {
      result: null,
      loading: null,
      error: null,
    },
  }),
  getters: {
    getFiltered() {
      return this.searchContent 
        ? this.activitiesByDist.result.filter((activity) =>
          activity.title.toLowerCase().replace(/é|è|ê/g, "e").includes(this.searchContent.toLowerCase().replace(/é|è|ê/g, "e")
          || activity.description.toLowerCase().replace(/é|è|ê/g, "e").includes(this.searchContent.toLowerCase().replace(/é|è|ê/g, "e"))))
        : this.activitiesByDist.result
    },
  },
  actions: {
    fetch(query, args = null) {
      const userStore = useUserStore()
      if(userStore.isReady) this.fetchActivities(query, args)
      watch(userStore, () => {
        if(userStore.isReady) this.fetchActivities(query, args) 
      })
    },
    fetchActivities(query, args) {
      const userStore = useUserStore()
      const queries = {
        'activitiesByDate': activitiesByDateQuery,
        'activitiesByDist': activitiesByDistQuery,
        'activity': activityQuery,
      }
      const queryArgs = { 
        latitude: userStore.user.latitude, 
        longitude: userStore.user.longitude 
      }
      Object.assign(queryArgs, args)
      const { result, loading, error } = useQuery(queries[query], queryArgs) 
      this[query].loading = loading
      this[query].error = error
      this[query].result = computed(() => result.value?.[query]) 
    }
  },
});
