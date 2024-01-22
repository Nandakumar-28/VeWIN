import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { PaymentAddEditComponent } from './payment-add-edit/payment-add-edit.component';


const routes: Routes = [
  {
    path: 'create',
    component: PaymentAddEditComponent,
  },
  {
    path: 'edit/:id',
    component: PaymentAddEditComponent,
  },
  {
    path: 'list',
    component: PaymentsListComponent,
  },
  {
    path: '',
    redirectTo: 'list', // Default route
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'list', // Default route
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsRoutingModule { }
