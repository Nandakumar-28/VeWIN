import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestperformerListComponent } from './bestperformer-list/bestperformer-list.component';
import { BestperformerEditComponent } from './bestperformer-list/bestperformer-edit.component';
import { BestperformerAddComponent } from './bestperformer-add/bestperformer-add.component';

const routes: Routes = [
  {
    path: 'list',
    component: BestperformerListComponent,
  },
  {
    path: 'edit',
    component: BestperformerAddComponent,
  },
  {
    path: 'edit/:id',
    component: BestperformerAddComponent,
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
