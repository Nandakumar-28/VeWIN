import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";

// Rxjs
import { BehaviorSubject, Observable, throwError, of } from "rxjs";
import { switchMap } from "rxjs/operators";

// constant
import { API_END_POINTS, getApiEndPoint } from "../../../shared/constants/api-constant";


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  user = {};

  constructor(
    private userServicehttp: HttpClient,
    private authService: NbAuthService
  ) {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
      }
    });
  }

  /**
   * User List
   * @returns
   */
  getUserList(): Observable<any> {
    let apiURL = getApiEndPoint(API_END_POINTS.USER.LIST);
    const urlWithParams = `${apiURL}?status=Verified`;
    return this.userServicehttp.get(urlWithParams).pipe(
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
   * Approval User
   * @param approvalData
   * @returns
   *
   */
  approveUser(approvalUser): Observable<any> {

    let apiURL = getApiEndPoint(API_END_POINTS.USER.APPROVAL)
    return this.userServicehttp.put(apiURL, approvalUser).pipe(
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
   * Delete User
   * @param deleteData
   * @returns
   *
   */


  declinedUser(declinedUser): Observable<any> {
    let apiURL = getApiEndPoint(API_END_POINTS.USER.APPROVAL);
    return this.userServicehttp.put(apiURL, declinedUser).pipe(
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
   * Delete User
   * @param deleteData
   * @returns
   *
   */
  deleteUser(deleteData): Observable<any> {
    let apiURL = getApiEndPoint(API_END_POINTS.USER.DELETE);
    return this.userServicehttp.delete(apiURL, deleteData).pipe(
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
   * Add User
   * @param Values
   * @returns
   *
   */
  AddUserDetials(user_obj): Observable<any> {
    let apiURL = (user_obj["flag"] == 0) ? getApiEndPoint(API_END_POINTS.USER.CREATE) : getApiEndPoint(API_END_POINTS.USER.UPDATE);
    return this.userServicehttp.post(apiURL, user_obj).pipe(
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
