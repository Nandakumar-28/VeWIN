import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';


const routes: Routes = [
  {
    path: 'list',
    component: UserListComponent,
  },
  {
    path: 'edit',
    component: UserAddEditComponent,
  },
  {
    path: 'edit/:id',
    component: UserAddEditComponent,
  },
  {
    path: '',
    redirectTo: 'list', // Default route
    component: UserListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
