import axios from "axios";

const API_URL = "http://localhost:3500/";

class AuthService {
  login(email, password, token) {
    token = localStorage.getItem('ifood:token')
    const config = { headers: { 'Authorization': `Bearer ${token}` } }
    return axios
      .post(API_URL + "signin", {
        email,
        password
      }, config)
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, email, password, cnpj, address, phones) {
    return axios.post(API_URL + "establishment", {
      name, email, password, cnpj, address, phones
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();