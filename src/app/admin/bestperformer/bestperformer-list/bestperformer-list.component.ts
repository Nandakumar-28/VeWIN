/** 
* This file contains bestperformer list related functions
* dev: T.Nanda Kumar
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ConfirmationService } from 'primeng/api';
import { ROUTE_PATH } from '../../../shared/constants/route-path.constant';
import { HttpStatusCode } from '@angular/common/http';
import { BestperformerService } from '../services/bestperformer.service';
import { BestperformerDeleteComponent } from './bestperformer-delete.component';

@Component({
  selector: 'ngx-bestperformer-list',
  templateUrl: './bestperformer-list.component.html',
  styleUrls: ['./bestperformer-list.component.scss']
})
export class BestperformerListComponent implements OnInit {

  itemsPerPage: any[] = [10, 25, 50];
  users: any;
  columns: any[]; // for table columns

  first = 0;
  rows = 10;

  constructor(
    private dialogConfirmService: ConfirmationService,
    private toastrService: NbToastrService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private userService: BestperformerService,
    private dialogService: NbDialogService
  ) { }

  ngOnInit() {
    // table   with their respective field name and header value
    this.columns = [
      { field: "name", header: "Name", show: true, sort: true },
      { field: "sale", header: "Sale", show: true, sort: true },
      { field: "remarks", header: "Remarks", show: true, sort: true },
      { field: "fdate", header: "From Date", show: true, sort: true },
      { field: "tdate", header: "To Date", show: true, sort: true },
    ];

    this.userList();
  }
  /**
 * create Company
 * @param
 * @returns
 */
  createBestperformer() {

    this.userService.setUserDetails(null);
    this.router.navigate([
      ROUTE_PATH.ADMIN,
      ROUTE_PATH.BESTPERFORMER,
      ROUTE_PATH.BESTPERFORMERS.CREATE,
    ]);
  }

  /**
   * Edit User
   * @param user_id
   * @returns
   */
  editBestperformer(user: any) {
    this.userService.setUserDetails(user); // Pass the selected user details to the service
    this.router.navigate([
      ROUTE_PATH.ADMIN,
      ROUTE_PATH.BESTPERFORMER,
      ROUTE_PATH.BESTPERFORMERS.EDIT,
      user.id
    ]);
  }

  /**
   * Delete User confirmation
   * @param userId, userName
   * @returns
   */
  confirmDelete(user: any) {
    this.dialogService.open(BestperformerDeleteComponent, {
      context: { user },
    }).onClose.subscribe((result) => {
      if (result) {
        this.deleteUser(user.id);
      }
    });
  }

  /**
   * Delete Company
   * @param userId
   * @returns
   */
  deleteUser(id) {
    // let deletePostData = { userId: userId };

    this.userService.deleteUser(id).subscribe(
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

    //this.users  =this.staticUsers;
    this.userService.getBestperformerList().subscribe(
      (response) => {
        console.log(response)
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
        // }
      },
      (error) => {
        console.log(error);
      }
    );
  }


}

