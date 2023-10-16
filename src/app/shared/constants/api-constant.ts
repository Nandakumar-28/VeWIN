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
    DELETE: "user/delete",
    UPDATE: "user/update",
    FETCH: "user/fetch",
    BLOCK_UBLOCK: "user/blockUnblock",
  },
};

export function getApiEndPoint(path: string, data?: any) {
  let apiPath: any = environment.apiUrl + path;
  return data ? apiPath + "/" + data : apiPath;
}
