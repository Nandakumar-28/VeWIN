import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";

// Rxjs
import { BehaviorSubject, Observable, throwError, of } from "rxjs";
import { switchMap } from "rxjs/operators";

// constant
import { API_END_POINTS, getApiEndPoint } from "../../../shared/constants/api-constant";

@Injectable({
  providedIn: "root",
})
export class CompanyService {
  user = {};

  constructor(
    private companyServicehttp: HttpClient,
    private authService: NbAuthService
  ) {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
      }
    });
  }

  /**
   * Company List
   * @returns
   */
  getCompanyList(): Observable<any> {
    let apiURL = getApiEndPoint(API_END_POINTS.COMPANY.LIST);
    return this.companyServicehttp.get(apiURL).pipe(
      switchMap((result: any) => {
        if (result) {
          return of(result);
        } else {
          return throwError(result);
        }
      })
    );
  }

  /**
   * Delete Company
   * @param deleteData
   * @returns
   *
   */
  deleteCompany(deleteData): Observable<any> {
    let apiURL = getApiEndPoint(API_END_POINTS.COMPANY.DELETE);
    return this.companyServicehttp.delete(apiURL, deleteData).pipe(
      switchMap((result: any) => {
        if (result) {
          return of(result);
        } else {
          return throwError(result);
        }
      })
    );
  }

  /**
   * Bllock/UnBlock Company
   * @param deleteData
   * @returns
   *
   */
  blockUnBlockCompany(deleteData): Observable<any> {
    let apiURL = getApiEndPoint(API_END_POINTS.COMPANY.BLOCK_UBLOCK);
    return this.companyServicehttp.delete(apiURL, deleteData).pipe(
      switchMap((result: any) => {
        if (result) {
          return of(result);
        } else {
          return throwError(result);
        }
      })
    );
  }

  /**
   * Retrive Company details
   * @param retriveData
   * @returns
   *
   */
  companyRetrive(retriveData): Observable<any> {
    let apiURL = getApiEndPoint(API_END_POINTS.COMPANY.FETCH);
    return this.companyServicehttp.post(apiURL, retriveData).pipe(
      switchMap((result: any) => {
        if (result) {
          return of(result);
        } else {
          return throwError(result);
        }
      })
    );
  }

  /**
   * Add Company
   * @param Values
   * @returns
   *
   */
  AddCompanyDetials(company_obj): Observable<any> {
    let apiURL = (company_obj["flag"] == 0) ? getApiEndPoint(API_END_POINTS.COMPANY.CREATE) : getApiEndPoint(API_END_POINTS.COMPANY.UPDATE);
    return this.companyServicehttp.post(apiURL, company_obj).pipe(
      switchMap((result: any) => {
        if (result) {
          return of(result);
        } else {
          return throwError(result);
        }
      })
    );
  }
}
