import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://jsm-challenge-bff.herokuapp.com',
  timeout: 15000,
  headers: {
    'cache-control': 'no-cache',
    'Content-Type': 'application/json',
    Accept: '*/*'
  }
})
