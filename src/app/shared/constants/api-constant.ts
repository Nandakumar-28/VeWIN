// Environment
import { environment } from "../../../environments/environment";

export const API_END_POINTS = {
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
    GETAll:"api/Bestperformer/GetAllBestperformer",
    REFID:"api/Bestperformer/GetReferralId",
    ADD: "api/Bestperformer/AddBestperformer",
    UPDATE: "api/Bestperformer/UpdateBestperformer",
    DELETE: "api/Bestperformer/Delete",
  },
  BANNER:{
    GET:"api/Banner/GetOfferBanners",
    ADD: "api/Banner/AddOfferBanners",
    UPDATE: "api/Banner/Updatebanner",
    DELETE: "api/Banner/Delete",
  },
  PAYMENTS:{
    GET:"api/Payment/GetPayment",
    ADD: "api/Payment/AddPayment",
    UPDATE: "api/Payment/UpdatePayment",
    DELETE: "api/Payment/DeletePayment",
  },
  SALES:{
    GET:"api/Sales/GetSalesForAdmin",
    TOTALSALES:"api/Sales/GetTotalSalesForAdmin"
  }
};

export function getApiEndPoint(path: string, data?: any) {
  let apiPath: any = environment.apiUrl + path;
  return data ? apiPath + "/" + data : apiPath;
}
