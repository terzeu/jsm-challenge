import { http } from '@/config/http'
import type EOrder from '@/types/EOrder'

const getMembers = (page: number, size: number, sort: EOrder, filters: string[], search?: string) => {
  return http({
    url: '/members',
    params: {
      page,
      size,
      sort,
      filters,
      search
    },
    method: 'get',
  })
}

const getMember = (id: number) => {
  return http({
    url: `/members/${id}`,
    method: 'get',
  })
}

const geStates = () => {
  return http({
    url: '/members/states',
    method: 'get',
  })
}

export { getMembers, getMember, geStates }
