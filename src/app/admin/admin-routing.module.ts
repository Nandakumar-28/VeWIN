import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./users/users.module')
          .then(m => m.UsersModule),
      },
      {
        path: 'register',
        loadChildren: () => import('./register-approval/register-approval.module')
          .then(m => m.RegisterApprovalModule),
      },
      {
        path: 'announcement',
        loadChildren: () => import('./Announcement/announcement.module')
          .then(m => m.AnnouncementModule),
      },
     {
        path: 'bestperformer',
        loadChildren: () => import('./bestperformer/bestperformer.module')
          .then(m => m.BestperformerModule),
      },
     {
        path: 'banner',
        loadChildren: () => import('./Banner/banner.module')
          .then(m => m.BannerModule),
      },
      // {
      //   path: 'payments',
      //   loadChildren: () => import('./payments/payments.module')
      //     .then(m => m.PaymentsModule),
      // },
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      {
      path: '**',
      component: NotFoundComponent,

      },

      // {
      //   path: '**',
      //   redirectTo: 'users',
      //   pathMatch: 'full',
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
