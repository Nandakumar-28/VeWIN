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
    CREATE: "user/create",
    LIST: "api/User/GetUsers",
    DELETE: "api/User/Delete",
    UPDATE: "api/User/UpdateUser",
    APPROVAL: "api/User/UserApproval",
  },
  ANNOUNCEMENT:{
    LIST:"api/Announcement/GetAnnouncement",
    ADD: "api/Announcement/AddAnnouncement",
    UPDATE: "api/Announcement/UpdateAnnouncement",
    DELETE: "api/Announcement/Delete",
  },
  BESTPERFORMER:{
    GET:"api/Bestperformer/GetBestperformer",
    ADD: "api/Bestperformer/AddBestperformer",
    UPDATE: "api/Bestperformer/UpdateBestperformer",
    DELETE: "api/Bestperformer/Delete",
  }


};

export function getApiEndPoint(path: string, data?: any) {
  let apiPath: any = environment.apiUrl + path;
  return data ? apiPath + "/" + data : apiPath;
}
