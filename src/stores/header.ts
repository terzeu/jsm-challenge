import { defineStore } from 'pinia'

export const useHeaderStore = defineStore({
  id: 'header',
  state: () => ({
    search: ''
  }),
  actions: {
    updateSearch(newSearch: string) {
      this.search = newSearch
    }
  }
})
