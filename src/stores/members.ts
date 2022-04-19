import { defineStore } from 'pinia'
import { getMember, getMembers, geStates } from '@/services/members'
import type IMember from '@/types/IMember'
import type IStates from '@/types/IStates'
import type ICheckbox from '@/types/ICheckbox'
import EOrder from '@/types/EOrder'

export const useMembersStore = defineStore({
  id: 'members',
  state: () => ({
    membersPage: {
      members: [] as IMember[],
      elementsOfPage: 0,
      totalPages: 0,
      totalElements: 0
    },
    member: null as null | IMember,
    states: [] as IStates[],
  }),
  getters: {
    membersList: (state) => state.membersPage.members,
    pagination: (state) => ({
      elementsOfPage: state.membersPage.elementsOfPage,
      totalPages: state.membersPage.totalPages,
      totalElements: state.membersPage.totalElements
    }),
  },
  actions: {
    async fetchMembers(
      page: number,
      sort:EOrder = EOrder.DESC,
      states: ICheckbox[] = [],
      search?: string,
      size = 9
    ) {
      const filters = states.filter(input => input.checked).map(input => input.value)

      try {
        const response = await getMembers(page, size, sort, filters, search)
        this.membersPage = response.data
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
