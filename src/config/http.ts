import axios from 'axios'

export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 15000,
  headers: {
    'cache-control': 'no-cache',
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
})
