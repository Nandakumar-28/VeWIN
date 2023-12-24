import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ConfirmationService } from 'primeng/api';
import { RegisterService } from '../services/register.service';
import { DialogDeclinedComponent } from './dialog-declined.component';
import { DialogApprovalComponent } from './dialog-approval.component';
import { HttpStatusCode } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.scss']
})
export class RegisterListComponent implements OnInit {

  itemsPerPage: any[] = [10, 25, 50, 100];
  users: any;
  columns: any[]; // for table columns

  first = 0;
  rows = 10;

  constructor(
    private dialogService: ConfirmationService,
    private toastrService: NbToastrService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private userService: RegisterService,
    private dialogConfirmService: NbDialogService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    // table   with their respective field name and header value
    this.columns = [
      { field: "name", header: "Name", show: true, sort: true },
      { field: "mobile", header: "Phone Number", show: true, sort: true },
      { field: "email", header: "E-mail", show: true, sort: true },
      { field: "address", header: "Address", show: true, sort: true },
      { field: "status", header: "Status", show: true, sort: true },
    ];

    this.userList();
  }

  /**
   * Approval User confirmation
   * @param user
   * @returns
   */
  approvalUser(user: any) {
    this.dialogConfirmService.open(DialogApprovalComponent, {
      context: { user },
    }).onClose.subscribe((result) => {
      if (result) {
        this.approveUser(user);
      }
    });
  }

  approveUser(user: any) {
    const modifiedDate = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

    const approvalUser = {
      mobile: user.mobile,
      status: "Active",
      modifiedby: "Admin",
      modifiedon: modifiedDate
    }

    this.userService.approveUser(approvalUser).subscribe(
      (response) => {
        this.userList();
        if (HttpStatusCode.Ok) {
          this.toastrService.show(response["message"], "Success", {
            status: "success",
            duration: 8000,
          });
        } else {
          this.toastrService.show(response["message"], "Warning", {
            status: "warning",
            duration: 8000,
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }


  /**
   * Declined Company
   * @param user
   * @returns
   */
  declinedUser(user: any) {
    this.dialogConfirmService.open(DialogDeclinedComponent, {
      context: { user },
    }).onClose.subscribe((result) => {
      if (result) {
        this.declineUser(user);
      }
    });
  }

  declineUser(user: any) {
    const modifiedDate = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

    const declinedUser = {
      mobile: user.mobile,
      status: 'Decline',
      modifiedby: "Admin",
      modifiedon: modifiedDate
    }

    this.userService.declinedUser(declinedUser).subscribe(
      (response) => {
        this.userList();
        if (HttpStatusCode.Ok) {
          this.toastrService.show(response["message"], "Success", {
            status: "success",
            duration: 8000,
          });
        } else {
          this.toastrService.show(response["message"], "Warning", {
            status: "warning",
            duration: 8000,
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }


  /**
   * Company List
   * @param null
   * @returns
   */

  userList() {

    this.userService.getUserList().subscribe(
      (response) => {
        this.users = response;
        // if (HttpStatusCode.Ok) {
        //   this.toastrService.show(response["message"], "Success", {
        //     status: "success",
        //     duration: 8000,
        //   });
        // } else {
        //   this.toastrService.show(response["message"], "Warning", {
        //     status: "warning",
        //     duration: 8000,
        //   });
        //}
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
