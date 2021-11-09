import axios from 'axios'

export const ifoodApi = axios.create({
  baseURL: 'http://localhost:3500'
})