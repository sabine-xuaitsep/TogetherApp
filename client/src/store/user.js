import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      locationDenied: null,
      latitude: null,
      longitude: null,
      city: null,
      country: null,
    },
  }),
  getters: {},
  actions: {
    locateUser() {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          this.user.locationDenied = false
          this.user.latitude = pos.coords.latitude
          this.user.longitude = pos.coords.longitude
          try {
            const res = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${this.user.latitude}&lon=${this.user.longitude}`) 
            // this.user.city = res.data.address.municipality
            this.user.city = res.data.address.village
            this.user.country = res.data.address.country
          } 
          catch (err) {
            console.log("reverseGeo failed")
          }
        },
        async (err) => {
          this.user.locationDenied = true
          try {
            const res = await axios.get(`https://ipwho.is/`)
            this.user.latitude = res.data.latitude
            this.user.longitude = res.data.longitude
            this.user.city = res.data.city
            this.user.country = res.data.country
          } 
          catch (err) {
            console.log("ipRequest failed")
          }
        }
      )
    },
  },
});
