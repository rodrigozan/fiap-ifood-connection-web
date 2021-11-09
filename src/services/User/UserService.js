import axios from 'axios';
import AuthHeaderService from '../Auth/AuthHeadService';

const API_URL = "http://localhost:3500/";

class UserService {
  getUser() {
    return axios.get(API_URL + 'establishment', { headers: AuthHeaderService() });
  }
}