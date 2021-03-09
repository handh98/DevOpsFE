import axios from "axios";
import { NOCOCID_API } from "../../constant/api_link_constant";
import authHeader from "./authService";
// eslint-disable-next-line no-unused-vars

const NOCID_API_ACCOUNT = NOCOCID_API + "Auth";
class LoginSerivce {
  async login(loginRequest) {
    const response = await axios.post(
      NOCID_API_ACCOUNT + "/login",
      loginRequest
    );
    if (response.data.jwt) {
      localStorage.setItem("jwt", response.data.jwt);
    }
    return response.data;
  }

  loginConnectGit(loginRequest){    
    const response = axios.post (NOCID_API_ACCOUNT + '/connect-user?redirect_uri=https://localhost:3000/home', loginRequest, {headers: authHeader()})
    localStorage.setItem('is_connected', true);
    return response.data;
  }

  getGithubUri() {
    return axios.get(NOCOCID_API + "/Login/Github");
  }
  // async loginWithGithub(githubUri) {
  //   const response = await axios.get(githubUri);
  //   if (response.data.accessToken) {
  //     localStorage.setItem("user", JSON.stringify(response.data));
  //   }
  //   return response.data;
  // }

  logout() {
    return axios.post(
      NOCID_API_ACCOUNT + "/logout",
      {},
      { headers: authHeader() }
    );
  }

  register(signupRequest) {
    return axios.post(NOCID_API_ACCOUNT + "/register", signupRequest);
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}
export default new LoginSerivce();
