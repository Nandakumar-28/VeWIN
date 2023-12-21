import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-dialog-approval',
  template:
  ` <nb-card>
      <nb-card-header class="text-center">
        <b>Approval Confirmation</b>
      </nb-card-header>
      <nb-card-body>
        <p class="text-center">Are you sure that you want to approve this <b>{{ user.name }}</b>?</p>
        <ul>
          <li><strong>Name:</strong> {{ user.name }}</li>
          <li><strong>Mobile Number:</strong> {{ user.mobile }}</li>
          <li><strong>E-mail:</strong> {{ user.email }}</li>
          <li><strong>Address:</strong> {{ user.address }}</li>
          <li><strong>Pin Code:</strong> {{ user.pincode }}</li>
          <li><strong>Password:</strong> {{ user.password }}</li>
          <li><strong>User Type:</strong> {{ user.usertype }}</li>
          <li><strong>Status:</strong> {{ user.active ? 'Active' : 'Inactive' }}</li>
        </ul>
      </nb-card-body>
      <nb-card-footer class="text-center">
        <button nbButton status="success" (click)="approveUser()">Approve</button>&nbsp;&nbsp;&nbsp;
        <button nbButton status="primary" (click)="close()">Cancel</button>
      </nb-card-footer>
    </nb-card>
  `,
})
export class DialogApprovalComponent implements OnInit {
  user: any;

  constructor(protected dialogRef: NbDialogRef<DialogApprovalComponent>) { }

  ngOnInit(): void { }

  close() {
    this.dialogRef.close(false); // Close the approval dialog without approving
  }

  approveUser() {
    this.dialogRef.close(true); // Close the approval dialog and trigger the approval action
  }
}
