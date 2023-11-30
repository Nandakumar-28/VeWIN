import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-banner-delete',
  template:  
`  <nb-card>
      <nb-card-header class="text-center">
        <b>Delete Confirmation</b>
      </nb-card-header>
      <nb-card-body>
        <p>Are you sure that you want to delete this <b>{{ user.name }}</b>?</p>
        <ul>
          <li><strong>From Date:</strong> {{ user.fdate | date: 'dd/MM/yyyy' }}</li>
          <li><strong>To date:</strong> {{ user.tdate | date: 'dd/MM/yyyy' }}</li>
        </ul>
      </nb-card-body>
      <nb-card-footer class="text-center">
        <button nbButton status="success" (click)="deleteBestperformer()">Delete</button>&nbsp;&nbsp;&nbsp;
        <button nbButton status="primary" (click)="close()">Cancel</button>
      </nb-card-footer>
    </nb-card>
`})

export class BannerDeleteComponent implements OnInit {

   user: any;

   constructor(protected dialogRef: NbDialogRef<BannerDeleteComponent>) {}

   ngOnInit(): void {}

  close() {
    this.dialogRef.close(false); // Close the delete dialog without approving
  }

  deleteBestperformer() {
    this.dialogRef.close(this.user); // Close the delete dialog and trigger the approval action
  }

}
