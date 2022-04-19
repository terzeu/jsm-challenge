import { http } from '@/config/http'

const getMembers = () => {
  return http({
    url: '/members',
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
