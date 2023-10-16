/* Service to check routing access for current user */
import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad, Route, ActivatedRoute} from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { AuthOptionsService } from './auth-options.service';
import { tap } from 'rxjs/operators';


@Injectable()
export class AuthGuardUser implements CanActivate{

    constructor(private authService: NbAuthService,
         private router: Router,
        private userPermisson: AuthOptionsService,
         private route: ActivatedRoute) {
    }

    canActivate(route) {
        /* native authService service is used to check user authentication */
        return this.checkAuthentication(route.path, route.data);
    }

    checkAuthentication(path: string,data:{}): boolean {
        const canLoadModule = this.userPermisson.checkPermissionById(data["permissionID"]);
        if (!canLoadModule) {
            this.router.navigate(['/dashboard']);
        }
        return canLoadModule;
    }
}
