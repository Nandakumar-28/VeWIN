/* Service to check rotuting access for user when login*/
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { AuthOptionsService } from './auth-options.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class AuthLogin implements CanActivate {

    constructor(private authService: NbAuthService, 
        private router: Router,
        private userPermission: AuthOptionsService,
        private http: HttpClient) {
    }
  private apiUrl = environment.apiUrl;

  login(credentials: any) {
    const loginUrl = `${this.apiUrl}/api/Public/Login`;
    return this.http.get(loginUrl, credentials);
  }

    /**
     * Determines whether activate can
     * @returns  void
     */
    canActivate() {
        let canAct = false;
        /* authService is used to check user authentication */
        this.authService.isAuthenticated().subscribe((result) => {
            canAct = result;
            console.log(result)
        })
        if (canAct==false){
            localStorage.removeItem("auth_app_token"); // if authentication false remove jwt token from local
            this.userPermission.clearUserPermission();
            return true;
        }
        this.router.navigate(['/pages']); // navigating to LoginComponent
        return false;                // and canActivate returns false
    }
}