import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import { AnnouncementAddEditComponent } from './announcement-add-edit/announcement-add-edit.component';

const routes: Routes = [
   {
    path: 'list',
    component: AnnouncementListComponent,
  },
  {
    path: 'create',
    component: AnnouncementAddEditComponent,
  },
  {
    path: 'edit/:id',
    component: AnnouncementAddEditComponent,
  },
  {
    path: '',
    redirectTo: 'list', // Default route
    component: AnnouncementListComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRoutingModule { }
