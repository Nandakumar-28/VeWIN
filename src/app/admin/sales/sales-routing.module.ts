import { NgModule } from '@angular/core';
import { SalesListComponent } from './sales-list/sales-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'list',
    component: SalesListComponent,
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
export class SalesRoutingModule { }
