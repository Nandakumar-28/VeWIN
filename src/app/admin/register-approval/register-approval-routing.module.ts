import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterListComponent } from './register-list/register-list.component';



const routes: Routes = [
  {
    path: 'list',
    component: RegisterListComponent,
  },
  // {
  //   path: 'create',
  //   component: UserAddEditComponent,
  // },
  // {
  //   path: 'edit/:id',
  //   component: UserAddEditComponent,
  // },
  {
    path: '',
    redirectTo: 'list', // Default route   
    component: RegisterListComponent,
  }
  
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterApprovalRoutingModule { }
