import { defineStore } from 'pinia'
import { getMember, getMembers, geStates } from '@/services/members'
import type IMember from '@/types/IMember'
import type IStates from '@/types/IStates'

export const useMembersStore = defineStore({
  id: 'members',
  state: () => ({
    members: [] as IMember[],
    member: null as null | IMember,
    states: [] as IStates[],
  }),
  actions: {
    async fetchMembers() {
      try {
        const response = await getMembers()
        this.members = response.data
      } catch (error) {
        return error
      }
    },
    async fetchMember(id: number) {
      try {
        const response = await getMember(id)
        this.member = response.data
      } catch (error) {
        return error
      }
    },
    async fetchStates() {
      try {
        const response = await geStates()
        this.states = response.data
      } catch (error) {
        return error
      }
    },
  },
})
