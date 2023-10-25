// Environment
import { environment } from "../../../environments/environment";

export const API_END_POINTS = {
  COMPANY: {
    LIST: "company/view",
    CREATE: "company/create",
    DELETE: "company/delete",
    UPDATE: "company/update",
    FETCH: "company/fetch",
    BLOCK_UBLOCK: "company/blockUnblock",
  },
   USER: {
    LIST: "api/User/GetUsers",
    CREATE: "user/create",
    DELETE: "api/User/Delete",
    UPDATE: "api/User/UpdateUser",
    APPROVAL: "api/User/UserApproval",
    // BLOCK_UBLOCK: "user/blockUnblock",
    // DECLINED: "user/decline",
  },
};

export function getApiEndPoint(path: string, data?: any) {
  let apiPath: any = environment.apiUrl + path;
  return data ? apiPath + "/" + data : apiPath;
}
