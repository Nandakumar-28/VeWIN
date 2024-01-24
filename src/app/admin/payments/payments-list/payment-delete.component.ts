import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-payment-delete',
  template:
    `  <nb-card>
      <nb-card-header class="text-center">
        <b>Delete Confirmation</b>
      </nb-card-header>
      <nb-card-body>
        <p class="text-center">Are you sure that you want to delete this <b>{{ user.refid }}</b>?</p>
        <ul>
          <li><strong>Customer ID:</strong> {{ user.cid }}</li>
          <li><strong>Month:</strong> {{ user.month }}</li>
          <li><strong>Year:</strong> {{ user.year }}</li>
          <li><strong>Sales Amount:</strong> {{ user.salesAmount }}</li>          
          <li><strong> Date Of Payment:</strong> {{ user.dateOfPayment | date: 'dd/MM/yyyy' }}</li>
          <li><strong>Bank:</strong> {{ user.bank }}</li>
          <li><strong>Payment Details:</strong> {{ user.paymentDetails }}</li>
           <li><strong>Remarks:</strong> {{ user.remarks }}</li>

        </ul>
      </nb-card-body>
      <nb-card-footer class="text-center">
        <button nbButton status="success" (click)="deletePayment()">Delete</button>&nbsp;&nbsp;&nbsp;
        <button nbButton status="primary" (click)="close()">Cancel</button>
      </nb-card-footer>
    </nb-card>,
`,
})
export class PaymentDeleteComponent implements OnInit {

  user: any;

  constructor(protected dialogRef: NbDialogRef<PaymentDeleteComponent>) { }

  ngOnInit(): void { }

  close() {
    this.dialogRef.close(false); // Close the delete dialog without approving
  }

  deletePayment() {
    this.dialogRef.close(this.user); // Close the delete dialog and trigger the approval action
  }

}
