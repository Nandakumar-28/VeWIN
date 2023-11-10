import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerAddEditComponent } from './banner-add-edit/banner-add-edit.component';
import { BannerGetComponent } from './banner-get/banner-get.component';
import { BannerRoutingModule } from './banner-routing.module';



@NgModule({
  declarations: [
    BannerGetComponent,
    BannerAddEditComponent
  ],
  imports: [
    CommonModule,
    BannerRoutingModule
  ]
})
export class BannerModule { }
