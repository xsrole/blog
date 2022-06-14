import { defineStore } from "pinia";
export const useAppStore = defineStore({
    id: 'appStore',
    state: () => ({
        darkMode:false,
        headerFixed:false,
        language:'cn'
    }),
    actions: {

    },
    getters: {

    }
})