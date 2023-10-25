import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ConfirmationService } from 'primeng/api';
import { RegisterService } from '../services/register.service';
import { DialogDeclinedComponent } from './dialog-declined.component';
import { DialogApprovalComponent } from './dialog-approval.component';

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
    private dialogConfirmService:NbDialogService

  ) {}

  ngOnInit() {
    // table   with their respective field name and header value
    this.columns = [
      { field: "name", header: "Name", show: true, sort: true },
      { field: "mobile", header: "Phone Number", show: true, sort: true },
      { field: "email", header: "E-mail",show: true, sort: true },
      { field: "address", header: "Address", show: true, sort: true },
      { field: "active", header: "Status", show: true, sort: true },
    ];

    this.userList();
  }

  /**
   * Approval User confirmation
   * @param userId, userName
   * @returns
   */
  approvalUser(user:any) {
    this.dialogConfirmService.open(DialogApprovalComponent, {
      context: { user },
    }).onClose.subscribe((result) => {
      if (result) {
        this.approveUser(user);
      }
    });
  }

  approveUser(user: any) {
    // You can access user properties like mobile and status here
    const mobile = user.mobile;
    const status = 'Active'; // Assuming you want to set the status to 'Active'

    this.userService.approveUser(mobile, status).subscribe(
      (response) => {
        this.userList();
        if (response["status"] != 200) {
          this.toastrService.show(response["message"], "Warning", {
            status: "warning",
            duration: 8000,
          });
        } else {
          this.toastrService.show(response["message"], "Success", {
            status: "success",
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
   * @param userId
   * @returns
   */
  declinedUser(user:any) {
   this.dialogConfirmService.open(DialogDeclinedComponent, {
      context: { user },
    }).onClose.subscribe((result) => {
      if (result) {
        this.declineUser(user);
      }
    });
  }
 
  declineUser(user: any) {

    const mobile = user.mobile;
    const status = 'Decline'; // Assuming you want to set the status to 'Active'
    this.userService.declinedUser(mobile,status).subscribe(
      (response) => {
        this.userList();
        if (response["status"] != 200) {
          this.toastrService.show(response["message"], "Warning", {
            status: "warning",
            duration: 8000,
          });
        } else {
          this.toastrService.show(response["message"], "Success", {
            status: "success",
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
    // Define your static user data
  //  staticUsers: any[] = [
  //   { name: 'Nanda Kumar', mobile: '9674662433', email: 'nanda@example.com', address: 'Pollachi', active: true },
  //   { name: 'Karuppu Swamy', mobile: '7536462774', email: 'karuppu@example.com', address: 'pollachi', active: false },
  //   { name: 'Sudarsan', mobile: '957768678', email: 'sudarsan@example.com', address: 'coimbatore', active: true },
  //   { name: 'vijay', mobile: '96733562433', email: 'vijay@example.com', address: 'kerala', active: false },
  //   { name: 'ajith', mobile: '753362774', email: 'ajith@example.com', address: 'pollachi', active: false },
  //   { name: 'vishal', mobile: '9925378934', email: 'vishal@example.com', address: 'coimbatore', active: true },
  //   { name: 'vicky ', mobile: '9674662413e', email: 'vicky@example.com', address: 'delhi', active: true },
  //   { name: 'vikram ', mobile: '7533456774', email: 'vikram@example.com', address: 'pollachi', active: false },
  //   { name: 'mahan', mobile: '9954345334', email: 'mahan@example.com', address: 'thiruppur', active: true },
  //   { name: 'priya', mobile: '9674677433', email: 'priya@example.com', address: 'udumalai', active: false },
  //   { name: ' divya', mobile: '75335662774', email: 'divya@example.com', address: 'salem', active: false },
  //   { name: 'sree', mobile: '99253499334', email: 'sree@example.com', address: 'coimbatore', active: true },
  //   { name: 'NandaKumar', mobile: '96746772433', email: 'nanda@example.com', address: 'chennai', active: true },
  //   { name: 'KaruppuSwamy', mobile: '7536492774', email: 'karuppu@example.com', address: 'pollachi', active: false },
  //   { name: 'harsatha', mobile: '9927845334', email: 'harsatha@example.com', address: 'cochin', active: false },
  //   { name: ' Kumar', mobile: '96746620983', email: 'kumar@example.com', address: 'palani', active: true },
  //   { name: 'Karuppu ', mobile: '7536344774', email: 'karuppu@example.com', address: 'madurai', active: false },
  //   { name: 'murugan', mobile: '9925345564', email: 'murugan@example.com', address: 'chennai', active: true },
  //   { name: 'mohan', mobile: '9968662433', email: 'mohan@example.com', address: 'Pollachi', active: true },
  //   { name: 'mathan', mobile: '7566462774', email: 'mathan@example.com', address: 'covai', active: false },
  //   { name: 'karthik', mobile: '9456745334', email: 'karthik@example.com', address: 'thiruppur', active: true },
  //   { name: 'prasanth', mobile: '9984662433', email: 'prasanth@example.com', address: 'cochin', active: true },
  //   { name: 'arun', mobile: '7345462774', email: 'arun@example.com', address: 'salem', active: false },
  //   { name: 'muruga', mobile: '9657345334', email: 'muruga@example.com', address: 'coimbatore', active: false },
  //   { name: 'krishna', mobile: '96767762433', email: 'krishnananda@example.com', address: 'london', active: true },
  //   { name: 'Karuppu ', mobile: '7566462774', email: 'karuppu@example.com', address: 'USA', active: false },
  //   { name: 'kanna', mobile: '99256645334', email: 'kanna@example.com', address: 'UAE', active: true },
  //   { name: 'krish Kumar', mobile: '9674678433', email: 'krish Kumar@example.com', address: 'Canada', active: false },
  //   { name: 'vishnu', mobile: '7234662774', email: 'vishnu@example.com', address: 'bangalur', active: false },
  //   { name: 'karnan', mobile: '9659120294', email: 'karnan@example.com', address: 'goa', active: false },

  //  ];

  userList() {

      //this.users = this.staticUsers;

    this.userService.getUserList().subscribe(
      (response) => {
        this.users = response.user;
        // this. users = response;
        if (response["status"] != 200) {
          this.toastrService.show(response["message"], "Warning", {
            status: "warning",
            duration: 8000,
          });
        } else {
          this.toastrService.show(response["message"], "Success", {
            status: "success",
            duration: 8000,
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
