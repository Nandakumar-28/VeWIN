import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { API_END_POINTS, getApiEndPoint } from '../../../shared/constants/api-constant';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  banner = {};

  constructor(
    private bannerServicehttp: HttpClient,
    private authService: NbAuthService
  ) {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.banner = token.getPayload(); // here we receive a payload from the token and assigns it to our `banner` variable
      }
    });
  }

  //pass select banner Details in banner-Edit

  private bannerDetails = new BehaviorSubject<any>(null);

  setBannerDetails(user: any) {
    this.bannerDetails.next(user);
  }

  getBannerDetails() {
    return this.bannerDetails.asObservable();
  }

  /**
   * Banner List
   * @returns
   */

  getBannerList(): Observable<any> {
    let apiURL = getApiEndPoint(API_END_POINTS.BANNER.GET);
    return this.bannerServicehttp.get(apiURL).pipe(
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
   * Delete Banner
   * @param id
   * @returns
   *
   */
  deleteBanner(id: number): Observable<any> {
    let apiURL = getApiEndPoint(`${API_END_POINTS.BANNER.DELETE}?id=${id}`);
    return this.bannerServicehttp.put(apiURL, null).pipe(
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
   * Update Banner details
   * @param requestBody
   * @returns
   *
   */
  updateBanner(formData): Observable<any> {
    let apiURL = getApiEndPoint(`${API_END_POINTS.BANNER.UPDATE}`);
    return this.bannerServicehttp.put(apiURL, formData).pipe(
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
   * Create Banner
   * @param formData
   * @returns
   *
   */

  CreateBanner(formData): Observable<any> {
    let apiURL = getApiEndPoint(`${API_END_POINTS.BANNER.ADD}`);
    return this.bannerServicehttp.post(apiURL, formData).pipe(
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
