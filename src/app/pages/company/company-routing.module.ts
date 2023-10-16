import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CompanyAddEditComponent } from './company-add-edit/company-add-edit.component';
import { CompanyListComponent } from './company-list/company-list.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyListComponent,
  },
  {
    path: 'create',
    component: CompanyAddEditComponent,
  },
  {
    path: 'edit/:id',
    component: CompanyAddEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
