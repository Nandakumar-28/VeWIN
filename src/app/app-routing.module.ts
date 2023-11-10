import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AuthGuard } from './auth/services/auth-guard.service';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
      canActivate: [AuthGuard]
  },  
   {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
      canActivate: [AuthGuard]
  },  
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.NgxAuthModule) ,
  },
  // {
  //   path: 'auth',
  //   component: NbAuthComponent,
    // children: [
    //   {
    //     path: '',
    //     component: NbLoginComponent,
    //   },
    //   {
    //     path: 'login',
    //     component: NbLoginComponent,
    //   },
    //   {
    //     path: 'register',
    //     component: RegisterComponent,
    //   }, {
    //     path: 'nbregister',
    //     component: NbRegisterComponent,
    //   },
    //   {
    //     path: 'logout',
    //     component: NbLogoutComponent,
    //   },
    //   {
    //     path: 'request-password',
    //     component: NbRequestPasswordComponent,
    //   },
    //   {
    //     path: 'reset-password',
    //     component: NbResetPasswordComponent,
    //   },
    // ],
  // },
   { path: '', redirectTo: 'auth', pathMatch: 'full' },
   { path: '**', redirectTo: 'auth' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
