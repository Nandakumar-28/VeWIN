import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_CONFIGURATION } from "@angular/router";
import { NbToastrService } from "@nebular/theme";
import { ConfirmationService } from 'primeng/api';
import { NbDialogService } from '@nebular/theme';

import { UsersService } from "../services/users.service";
import { ROUTE_PATH } from "../../../shared/constants/route-path.constant";
import { DialogDeleteComponent } from './dialog-delete.component';
import { API_END_POINTS, getApiEndPoint } from '../../../shared/constants/api-constant';

@Component({
  selector: 'ngx-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  itemsPerPage: any[] = [10, 25, 50];
  users: any;
  columns: any[]; // for table columns

  first = 0;
  rows = 10;
  userid: any;

  constructor(
    private dialogConfirmService: ConfirmationService,
    private toastrService: NbToastrService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private userService: UsersService,
    private dialogService:NbDialogService
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
   * Edit User
   * @param user_id
   * @returns
   */
  editUser(user: any) {
  this.userService.setUserDetails(user);
  this.router.navigate([
    ROUTE_PATH.ADMIN, 
    ROUTE_PATH.USERS, 
    ROUTE_PATH.USERES.EDIT
    ]);
  }


  /**
   * Delete User confirmation
   * @param user
   * @returns
   */
  confirmDelete(user: any) {
    this.dialogService.open(DialogDeleteComponent, {
      context: { user },
    }).onClose.subscribe((result) => {
      if (result) {
        // console.log(result)
        this.deleteUser(result);
      }
    });
  }

  deleteUser(user: any) {
   const userId = user.id;
   console.log('User to delete:', user);

   this.userService.deleteUser(userId).subscribe(
    (response: any) => {
        this.userList();
        if (response["statusCode"] != 200) {
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
    })
  }

  /**
   * Block/UnBlock Company confirmation
   * @param userId, userName, action
   * @returns
   */
  confirmBlockUnBlock(user:any,action:any) {
    this.dialogConfirmService.confirm({
      header: action + " - " +"confirmation",
      message:
        "Are you sure that you want to <b>" +
        action +
        " - " +
        user.name +
        "</b>  ?",
      accept: () => {
        this.blockUnBlockUser(user, action);
      },
    });
  }

  /**
   * Block/UnBlock Company
   * @param userId, action
   * @returns
   */
  blockUnBlockUser(user:any, action:any) {
    // let blockUnBlockPostData = {
    //   block: action == "Block" ? true : false,
    // };
        const mobile = user.mobile;
        const status = action === "Block" ? "Inactive" : "Active";
    this.userService.blockUnBlockUser(mobile, status).subscribe(
      (response) => {
        this.userList();
        if (response["statusCode"] != 200) {
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
  staticUsers: any[] = [
    { username: 'Nanda Kumar', phone_number: '9674662433',decsignation:'Driver', address: 'Pollachi', active: true },
    { username: 'Karuppu Swamy', phone_number: '7536462774',decsignation:'Driver', address: 'pollachi', active: false },
    { username: 'Sudarsan', phone_number: '7536462774',decsignation:'Driver', address: 'coimbatore', active: true },
  ];

  userList() {

    //this.users  =this.staticUsers;
    this.userService.getUserList().subscribe(
     (response) => {
       this.users = response.user;
       //this.users = response;
        if (response["statusCode"] != 200) {
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
