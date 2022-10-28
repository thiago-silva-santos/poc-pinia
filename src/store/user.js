import { defineStore } from 'pinia'

export const userStore = defineStore('user',{
  state: () => ({
    username: 'Pick a name',
    names: ['Captain America', 'Iron Man', 'Hulk', 'Black Widow', 'Spider Man', 'Black Panther', 'Deadpool', 'Ant Man']
  }),
  actions: {
    randonName() {
          this.username = this.names[Math.floor(Math.random()*this.names.length)]
    }
  },
})