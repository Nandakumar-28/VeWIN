import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestperformerListComponent } from './bestperformer-list/bestperformer-list.component';
import { BestperformerAddEditComponent } from './bestperformer-add-edit/bestperformer-add-edit.component';

const routes: Routes = [
  {
    path: 'list',
    component: BestperformerListComponent,
  },
  {
    path: 'create',
    component: BestperformerAddEditComponent,
  },
  {
    path: 'edit/:id',
    component: BestperformerAddEditComponent,
  },
  {
    path: '',
    redirectTo: 'list', // Default route
    component: BestperformerListComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestperformerRoutingModule { }
