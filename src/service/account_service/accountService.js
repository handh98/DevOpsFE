import axios from "axios";
import { NOCOCID_API } from "../../constant/api_link_constant";
import authHeader from "../author_serivce/authService";
// eslint-disable-next-line no-unused-vars

const NOCID_API_ACCOUNT = NOCOCID_API + "Accounts";
class AccountService {
  getAccount() {
    return axios.get(NOCID_API_ACCOUNT, { headers: authHeader() });
  }
  getProjects(projectId) {
    return axios.get(NOCID_API_ACCOUNT + "/" + projectId + "/" + "Projects", {
      headers: authHeader(),
    });
  }
}
export default new AccountService();
