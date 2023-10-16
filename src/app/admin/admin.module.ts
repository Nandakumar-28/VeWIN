import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,  
    AdminRoutingModule,
    ThemeModule,
    NbMenuModule,

  ]
})
export class AdminModule { }
