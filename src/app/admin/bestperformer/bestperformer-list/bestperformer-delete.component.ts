import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-bestperformer-delete',
  template: 
  `      <nb-card>
      <nb-card-header class="text-center">
        <b>Delete Confirmation</b>
      </nb-card-header>
      <nb-card-body>
        <p>Are you sure that you want to delete this <b>{{ user.name }}</b>?</p>
        <ul>
          <li><strong>Name:</strong> {{ user.name }}</li>
          <li><strong>sales:</strong> {{ user.sale }}</li>
        </ul>
      </nb-card-body>
      <nb-card-footer class="text-center">
        <button nbButton status="success" (click)="deleteBestperformer()">Delete</button>&nbsp;&nbsp;&nbsp;
        <button nbButton status="primary" (click)="close()">Cancel</button>
      </nb-card-footer>
    </nb-card>,
`})
export class BestperformerDeleteComponent implements OnInit {

   user: any;

   constructor(protected dialogRef: NbDialogRef<BestperformerDeleteComponent>) {}

   ngOnInit(): void {}

  close() {
    this.dialogRef.close(false); // Close the delete dialog without approving
  }

  deleteBestperformer() {
    this.dialogRef.close(this.user); // Close the delete dialog and trigger the approval action
  }

}
