import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ConfirmationService } from 'primeng/api';
import { AnnouncementService } from '../services/announcement.service';
import { ROUTE_PATH } from '../../../shared/constants/route-path.constant';
import { DialogDeleteComponent } from './dialog-delete.component';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'ngx-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.scss']
})
export class AnnouncementListComponent implements OnInit {

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
    private userService: AnnouncementService,
    private dialogService:NbDialogService
  ) {}

  ngOnInit() {
    // table   with their respective field name and header value
    this.columns = [
      { field: "title", header: "Title", show: true, sort: true },
      { field: "description", header: "Description", show: true, sort: true },
      { field: "fdate", header: "From Date",show: true, sort: true },
      { field: "tdate", header: "To Date", show: true, sort: true },
      //{ field: "active", header: "Status", show: true, sort: true },
    ];

    this.userList();
  }
    /**
   * create Company
   * @param
   * @returns
   */
createAnnouncement() {

    this.userService.setUserDetails(null);
    this.router.navigate([
        ROUTE_PATH.ADMIN,
        ROUTE_PATH.ANNOUNCEMENT,
        ROUTE_PATH.ANNOUNCEMENTS.CREATE,
    ]);
}

  /**
   * Edit User
   * @param user_id
   * @returns
   */
  editUser(user: any) {
    this.userService.setUserDetails(user); // Pass the selected user details to the service
    this.router.navigate([
      ROUTE_PATH.ADMIN,
      ROUTE_PATH.ANNOUNCEMENT,
      ROUTE_PATH.ANNOUNCEMENTS.EDIT,
      user.id
    ]);
  }

  /**
   * Delete User confirmation
   * @param userId, userName
   * @returns
   */
  confirmDelete(user: any) {
    this.dialogService.open(DialogDeleteComponent, {
      context: { user },
    }).onClose.subscribe((result) => {
      if (result) {
        this.deleteUser(user.id);
        console.log(user)
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

   // Define your static user data
  staticUsers: any[] = [
    { title: 'Vewin', description:'Apps'  },
    { title: 'Google', description:'Daily News' },
    { title: 'Instagram', description:'Online Application'  },
  ];

  userList() {

    //this.users  =this.staticUsers;
    this.userService.getUserList().subscribe(
     (response) => {
       this.users = response;
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


}

