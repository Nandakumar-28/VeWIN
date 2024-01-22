import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { API_END_POINTS, getApiEndPoint } from '../../../shared/constants/api-constant';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  user = {};

  constructor(
    private paymentServicehttp: HttpClient,
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
   * Payment List
   * @returns
   */
  getPaymentList(requestBody): Observable<any> {
    let apiURL = getApiEndPoint(API_END_POINTS.PAYMENTS.GET);
    return this.paymentServicehttp.post(apiURL,requestBody).pipe(
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
   * Get Total Sales
   * @returns
   */
  getTotalSales(requestBody): Observable<any> {
    let apiURL = getApiEndPoint(API_END_POINTS.SALES.TOTALSALES);
    return this.paymentServicehttp.post(apiURL,requestBody).pipe(
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
   * Delete Payment
   * @param userId
   * @returns
   *
   */
  deletePayment(id: number): Observable<any> {
    let apiURL = getApiEndPoint(`${API_END_POINTS.PAYMENTS.DELETE}?id=${id}`);
    return this.paymentServicehttp.put(apiURL, null).pipe(
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
   * Update Payment details
   * @param payment
   * @returns
   *
   */
  updatePayment(requestBody): Observable<any> {
    let apiURL = getApiEndPoint(`${API_END_POINTS.PAYMENTS.UPDATE}`);
    return this.paymentServicehttp.put(apiURL, requestBody).pipe(
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
   * Create Payment
   * @param Values
   * @returns
   *
   */

  CreatePayment(requestBody): Observable<any> {
    let apiURL = getApiEndPoint(`${API_END_POINTS.PAYMENTS.ADD}`);
    return this.paymentServicehttp.post(apiURL, requestBody).pipe(
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
