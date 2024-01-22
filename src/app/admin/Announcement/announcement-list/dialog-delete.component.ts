/** 
* This file contains announcement delete related functions and HTML
* dev: T.Nanda Kumar
*/

import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';


@Component({
  selector: 'ngx-dialog-delete',
  template:
`   <nb-card class="custom-dialog">
      <nb-card-header class="text-center">
        <b>Delete Confirmation</b>
      </nb-card-header>
      <nb-card-body >
        <p class="text-center">Are you sure that you want to delete this ?</p>
        <ul>
          <li><strong>Title:</strong> {{ user.title }}</li>
          <li><strong>Description:</strong> {{ user.description }}</li>
          <li><strong>From Date:</strong> {{ user.fdate | date: 'dd/MM/yyyy' }}</li>
          <li><strong>To Date:</strong> {{ user.tdate | date: 'dd/MM/yyyy'  }}</li>
        </ul>
      </nb-card-body>
      <nb-card-footer class="text-center">
        <button nbButton status="success" (click)="deleteUser()">Delete</button>&nbsp;&nbsp;&nbsp;
        <button nbButton status="primary" (click)="close()">Cancel</button>
      </nb-card-footer>
    </nb-card>,
`,
  styles: [`
    .custom-dialog {
      width: 600px;
      hight: 450px
    }
  `]
  })
export class DialogDeleteComponent implements OnInit {

  user: any;

  constructor(protected dialogRef: NbDialogRef<DialogDeleteComponent>) { }

  ngOnInit(): void { }

  close() {
    this.dialogRef.close(false); // Close the delete dialog without approving
  }

  deleteUser() {
    this.dialogRef.close(this.user); // Close the delete dialog and trigger the approval action
  }

}
