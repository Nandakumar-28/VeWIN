import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerGetComponent } from './banner-get/banner-get.component';
import { BannerAddEditComponent } from './banner-add-edit/banner-add-edit.component';

const routes: Routes = [
     {
    path: 'get',
    component: BannerGetComponent,
  },
  {
    path: 'create',
    component: BannerAddEditComponent,
  },
  {
    path: 'edit/:id',
    component: BannerAddEditComponent,
  },
  {
    path: '',
    redirectTo: 'get', // Default route
    component: BannerGetComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannerRoutingModule { }
