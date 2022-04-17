import { defineStore } from "pinia";
import { getMembers } from "@/services/members";
import type IMember from "@/types/IMember";

export const useMembersStore = defineStore({
  id: "members",
  state: () => ({
    members: [] as IMember[],
    member: null
  }),
  getters: {
    membersList: (state) => state.members,
  },
  actions: {
    async fetchMembers() {
      try {
        const response = await getMembers()
        this.members = response.data
      } catch (error) {
        return error
      }
    }
  },
});
