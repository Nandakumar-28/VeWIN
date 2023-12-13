import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent, NbRegisterComponent} from '@nebular/auth';
import { NgxLoginComponent } from './login/login.component';
import { NbxLogoutComponent } from './logout/logout.component';
import { AuthLogin } from './services/auth-login.service';
import { RequestPassComponent } from './request-password/request-password.component'; 
import { RequestMessage } from './request-password/request-password.component';
import { NbxResetPasswordComponent } from './reset-pass/reset-pass.component';
import { ResetPassMessage } from './reset-pass/reset-pass.component';
import { RegisterComponent } from './register/register.component';

const actions = [
    { path: 'login', component: NgxLoginComponent},
    { path: 'logout', component: NbxLogoutComponent},
    { path: 'request-password', component: RequestPassComponent },
    { path: 'request-password-message', component: RequestMessage },
    { path: 'reset-password-message', component: ResetPassMessage },
    { path: 'reset-pass/:token', component: NbxResetPasswordComponent },
    { path: 'nbregister', component:NbRegisterComponent},
    { path: 'register', component:RegisterComponent},


];

export const routes: Routes = [
    {
        path: 'admin',
        component: NbAuthComponent,
        children: actions,
    },  
    {
        path: 'user',
        component: NbAuthComponent,
        children: actions,},
    { path: 'login', component: NgxLoginComponent,canActivate: [AuthLogin]},
    { path: 'logout', component: NbxLogoutComponent},
    { path: 'request-password', component: RequestPassComponent,canActivate: [AuthLogin] },
    { path: 'request-password-message', component: RequestMessage },
    { path: 'reset-password-message', component: ResetPassMessage },
    { path: 'reset-pass/:token', component: NbxResetPasswordComponent },
    { path: 'nbregister', component:NbRegisterComponent},
    { path: 'register', component:RegisterComponent},

    // },  
    { path: '', redirectTo: 'admin/login', pathMatch: 'full'},
    { path: '**', redirectTo: 'admin/login', },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NgxAuthRoutingModule {
}