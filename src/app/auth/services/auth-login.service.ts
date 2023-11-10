/* Service to check rotuting access for user when login*/
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { AuthOptionsService } from './auth-options.service';

@Injectable()
export class AuthLogin implements CanActivate {

    constructor(private authService: NbAuthService, 
        private router: Router,
        private userPermission: AuthOptionsService) {
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
        this.router.navigate(['/admin']); // navigating to LoginComponent
        return false;                // and canActivate returns false
    }
}