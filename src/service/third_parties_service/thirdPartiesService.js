import axios from "axios";
import { NOCOCID_API } from "../../constant/api_link_constant";
import authHeader from "../author_serivce/authService";
const NOCID_API_THIRDPARTIES = NOCOCID_API + "Auth";
class ThirdPartiesService {
  getGitHubLoginURI() {
    return NOCID_API_THIRDPARTIES + "/login/github?redirect_uri=http://localhost:3000/authorization_filter";
  }
  loginWithGitHubURI() {
    return NOCID_API_THIRDPARTIES + "/login/github?redirect_uri=http://localhost:3000/authorization_filter";
  }
  connectWithGitHub(params){
    params = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    console.log(params);
    return axios.put(NOCID_API_THIRDPARTIES + '/connect-account?'+params,{},{headers:authHeader()});
  }
}
export default new ThirdPartiesService();
