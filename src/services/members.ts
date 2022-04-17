import { http } from '@/config/http'
import type { AxiosPromise } from 'axios'
import type IMember from '@/types/IMember'

const getMembers = () :AxiosPromise<IMember[]> => {
  return http({
    url: '/test',
    method: 'get'
  })
}

export {
  getMembers
}
