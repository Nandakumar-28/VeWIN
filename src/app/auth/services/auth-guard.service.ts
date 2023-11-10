/* Service to check routing access for current user */
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: NbAuthService, private router: Router) {
    }

    canActivate() {
        /* native authService service is used to check user authentication */
        return this.authService.isAuthenticated()
            .pipe(
                map(authenticated => {
                    console.log(authenticated);
                    if (!authenticated) {
                        console.log(authenticated);
                        this.router.navigate(['auth/']);
                    }
                    return authenticated;
                }),
            );
    }
  //    const token = localStorage.getItem('auth_token');

  //   if (token) {
  //     return true; // User is authenticated, allow navigation
  //   } else {
  //     this.router.navigate(['auth/']); // Redirect to login if not authenticated
  //     return false;
  //   }
  // }
}