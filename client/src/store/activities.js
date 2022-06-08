import { defineStore } from "pinia";

export const useActivitiesStore = defineStore("activities", {
    state: () => ({
        activities: [],
    }),
    getters: {},
    actions: {},
});
