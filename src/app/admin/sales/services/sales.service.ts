import { Injectable } from '@angular/core';
import { API_END_POINTS, getApiEndPoint } from '../../../shared/constants/api-constant';
import { HttpClient } from '@angular/common/http';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SalesService {
  user = {};

  constructor(
    private saleServicehttp: HttpClient,
    private authService: NbAuthService
  ) {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
      }
    });
  }
   /**
   * Payment List
   * @returns
   */

  getSaleList(requestBody): Observable<any> {
    let apiURL = getApiEndPoint(API_END_POINTS.SALES.GET);
    return this.saleServicehttp.post(apiURL,requestBody).pipe(
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
