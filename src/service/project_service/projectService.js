import axios from "axios";
import { NOCOCID_API } from "../../constant/api_link_constant";
import authHeader from "../author_serivce/authService";

const NOCOCID_API_PROJECT = NOCOCID_API + "Accounts";

class ProjectService {
  create(projectRequest, accountID) {
    return axios.post(
      NOCOCID_API_PROJECT + "/" + accountID + "/Projects/create",
      projectRequest,
      {
        headers: authHeader(),
      }
    );
  }
  getAllProject(accountID) {
    return axios.get(NOCOCID_API_PROJECT + "/" + accountID + "/Projects", {
      headers: authHeader(),
    });
  }
  getProjectById(projectId, accountID) {
    return axios.get(
      NOCOCID_API_PROJECT + "/" + accountID + "/Projects/" + projectId,
      {
        headers: authHeader(),
      }
    );
  }
}

export default new ProjectService();
