import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { API_END_POINTS, getApiEndPoint } from '../../../shared/constants/api-constant';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  announcement = {};

  constructor(
    private announcementServicehttp: HttpClient,
    private authService: NbAuthService
  ) {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.announcement = token.getPayload(); // here we receive a payload from the token and assigns it to our `announcement` variable
      }
    });
  }

  //pass select Announcement Details in Announcement-Edit

  private announcementDetails = new BehaviorSubject<any>(null);

  setAnnouncementDetails(user: any) {
    this.announcementDetails.next(user);
  }

  getAnnouncementDetails() {
    return this.announcementDetails.asObservable();
  }

  /**
   * Announcement List
   * @returns
   */
  getannouncementList(): Observable<any> {
    let apiURL = getApiEndPoint(API_END_POINTS.ANNOUNCEMENT.LIST);
    return this.announcementServicehttp.get(apiURL).pipe(
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
   * Delete Announcement
   * @param id
   * @returns
   *
   */
  deleteAnnouncement(id: number): Observable<any> {
    let apiURL = getApiEndPoint(`${API_END_POINTS.ANNOUNCEMENT.DELETE}?id=${id}`);
    return this.announcementServicehttp.put(apiURL, null).pipe(
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
   * Update Announcement details
   * @param requestBody
   * @returns
   *
   */
  updateAnnouncement(requestBody): Observable<any> {
    let apiURL = getApiEndPoint(`${API_END_POINTS.ANNOUNCEMENT.UPDATE}`);
    return this.announcementServicehttp.put(apiURL, requestBody).pipe(
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
   * Create Announcement
   * @param requestBody
   * @returns
   *
   */

  CreateAnnouncement(requestBody): Observable<any> {
    let apiURL = getApiEndPoint(`${API_END_POINTS.ANNOUNCEMENT.ADD}`);
    console.log(requestBody)
    return this.announcementServicehttp.post(apiURL, requestBody).pipe(
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
