import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbActionsModule,
  NbAlertModule,
  NbCalendarKitModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbFormFieldModule,
  NbProgressBarModule,
  NbSpinnerModule,
  NbTooltipModule,
  NbCheckboxModule,
  NbButtonModule,
  NbAccordionModule,
  NbCardModule,
  NbDialogModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbSelectModule,
  NbToggleModule, 
  NbContextMenuModule,
  NbDatepickerModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

// Interceptor
import { NbAuthJWTInterceptor, HttpErrorInterceptor } from '../../auth/interceptor/jwt-interceptor';

// Primeng
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';


import { BestperformerAddComponent } from './bestperformer-add/bestperformer-add.component';
import { BestperformerListComponent } from './bestperformer-list/bestperformer-list.component';
import { BestperformerRoutingModule } from './bestperformer-routing.module';
import { BestperformerDeleteComponent } from './bestperformer-list/bestperformer-delete.component';
import { BestperformerEditComponent } from './bestperformer-list/bestperformer-edit.component';




@NgModule({
  declarations: [BestperformerAddComponent,BestperformerListComponent,BestperformerDeleteComponent,BestperformerEditComponent, ],
  imports: [
    CommonModule,
    BestperformerRoutingModule,
    HttpClientModule,
    NbActionsModule,
    NbAlertModule,
    NbCalendarKitModule,
    NbCalendarModule,
    NbCalendarRangeModule,
    NbDatepickerModule.forRoot(),
    NbFormFieldModule,
    NbProgressBarModule,
    NbSpinnerModule,
    NbTooltipModule,
    NbCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    NbIconModule,
    NbInputModule,
    NbTreeGridModule,
    NbSelectModule,
    NbToggleModule,
    NbContextMenuModule,
    NbDialogModule.forRoot(),
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
  ],
  providers: [
    ConfirmationService, 
    { provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true }, 
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ],
})export class BestperformerModule { }
