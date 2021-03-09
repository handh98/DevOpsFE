import axios from "axios";
import { NOCOCID_API } from "../../constant/api_link_constant";
import authHeader from "../author_serivce/authService";
const NOCID_API_REPOSITORIES = NOCOCID_API + "Accounts";
class RepositoryService {
  getAllRepositories(accountId) {
    return axios.get(
      NOCID_API_REPOSITORIES + "/" + accountId + "/Repositories",
      { headers: authHeader() }
    );
  }
  updateAllRepositories(accountId) {
    return axios.get(
      NOCID_API_REPOSITORIES + "/" + accountId + "/Repositories/update-from-github",
      { headers: authHeader() }
    );
  }
}

export default new RepositoryService();
