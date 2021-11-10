import axios from 'axios';
import AuthHeaderService from '../Auth/AuthHeadService';

const API_URL = "http://localhost:3500/";

const token = localStorage.getItem('ifood:token')

console.log(`Token: ${token}`)

const options = {
  headers: `Bearer ${token}`
}

export function UserService() {
  return axios.get(API_URL + 'establishment', options);
}