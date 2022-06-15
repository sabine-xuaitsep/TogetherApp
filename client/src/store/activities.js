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
    searchContent: '',
    query: 'activitiesByDist',
    distance: null,
    order: 'ASC',
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
    getSearchContent: (state) => state.searchContent.length === 0 
      ? state.searchContent
      : state.handleString(state.searchContent),
    getActivities: (state) => {
      if(state[state.query].result) {
        const activities = state[state.query].result
        return state.order === 'ASC' 
          ? activities.filter(activity => state.matchWithSearch(activity)) 
          : [...activities].reverse().filter(activity => state.matchWithSearch(activity)) 
      }
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
    },
    matchWithSearch(activity) {
      const searchArr = this.getSearchContent.split(' ')
      
      if (searchArr.length === 1) {
        return this.handleString(activity.category.name).includes(this.getSearchContent)
              || this.handleString(activity.title).includes(this.getSearchContent)
              || this.handleString(activity.description).includes(this.getSearchContent)
      } 
      else {
        const match = searchArr.map(word => {
          if(word.length > 0)
            return this.handleString(activity.category.name).includes(word)
                  || this.handleString(activity.title).includes(word)
                  || this.handleString(activity.description).includes(word)
        })
        return match.includes(true)
      }
    },
    handleString(str) {
      return str.replace(/[áâàä]/g,'a').replace(/[éêèë]/g,'e')
                .replace(/[íîïì]/g,'i').replace(/[öóôò]/g,'o')
                .replace(/[úûùü]/g,'i').replace(/[ç]/g,'c')
                .toLowerCase()
    },
  },
});
