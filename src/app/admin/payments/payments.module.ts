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
  NbDatepickerModule,
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
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

// Interceptor
import { NbAuthJWTInterceptor, HttpErrorInterceptor } from '../../auth/interceptor/jwt-interceptor';

// Primeng
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';


import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { PaymentAddEditComponent } from './payment-add-edit/payment-add-edit.component';
import { PaymentDeleteComponent } from './payments-list/payment-delete.component';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [
    PaymentsListComponent,
    PaymentAddEditComponent,
    PaymentDeleteComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
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
    AutoCompleteModule,
    CalendarModule,
  ],
  providers: [
    ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ],
})
export class PaymentsModule { }
