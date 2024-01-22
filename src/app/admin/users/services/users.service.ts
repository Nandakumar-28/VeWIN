import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";

// Rxjs
import { BehaviorSubject, Observable, throwError, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

// constant
import { API_END_POINTS, getApiEndPoint } from "../../../shared/constants/api-constant";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

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

  //pass select user Details in User-Edit

  private userDetails = new BehaviorSubject<any>(null);

  setUserDetails(user: any) {
    this.userDetails.next(user);
  }

  getUserDetails() {
    return this.userDetails.asObservable();
  }

  /**
   * User List
   * @returns
   */
  getUserList(): Observable<any> {
    let apiURL = getApiEndPoint(API_END_POINTS.USER.LIST);
    const urlWithParams = `${apiURL}?status=Active And Inactive`;
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
   * Delete User
   * @param userId
   * @returns
   *
   */
  deleteUser(userId: number): Observable<any> {
    let apiURL = getApiEndPoint(`${API_END_POINTS.USER.DELETE}/${userId}`);
    return this.userServicehttp.put(apiURL, null).pipe(
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
   * Bllock/UnBlock User
   * @param deleteData
   * @returns
   *
   */
  blockUnBlockUser(blockUnBlock): Observable<any> {
    let apiURL = getApiEndPoint(API_END_POINTS.USER.APPROVAL);
    return this.userServicehttp.put(apiURL, blockUnBlock).pipe(
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
   * Update User details
   * @param user
   * @returns
   *
   */
  updateUser(user): Observable<any> {
    let apiURL = getApiEndPoint(`${API_END_POINTS.USER.UPDATE}`);
    return this.userServicehttp.put(apiURL, user).pipe(
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
