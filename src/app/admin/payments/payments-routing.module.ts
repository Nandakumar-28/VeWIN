import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaymentRequestComponent } from './payment-request/payment-request.component';
import { CompletePaymentsComponent } from './complete-payments/complete-payments.component';


const routes: Routes = [
  {
    path: 'payment-request',
    component: PaymentRequestComponent,
  },
  {
    path: 'complete-payments',
    component: CompletePaymentsComponent,
  },
  {
    path: '',
    redirectTo: 'payment-request', // Default route
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsRoutingModule { }
