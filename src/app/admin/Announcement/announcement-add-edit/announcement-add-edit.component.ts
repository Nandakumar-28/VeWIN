import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ROUTE_PATH } from '../../../shared/constants/route-path.constant';
import { DatePipe } from '@angular/common';
import { AnnouncementService } from '../services/announcement.service';
import { HttpStatusCode } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'ngx-announcement-add-edit',
  templateUrl: './announcement-add-edit.component.html',
  styleUrls: ['./announcement-add-edit.component.scss']
})
export class AnnouncementAddEditComponent implements OnInit {

  AddAnnouncementForm: FormGroup;
  submitted = false;
  //page_title: string;
  data_loading = false;

  //show password
  showPassword = true;

  //userlist pass user data
  announcementDetails: any;
  page_title: string;

  private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    private announcementService: AnnouncementService,
    private toastrService: NbToastrService,
    private datePipe: DatePipe,

  ) { }

  ngOnInit(): void {
    this.AddAnnouncementFormInitialize();

    if (this.router.url.indexOf("edit") !== -1) {
      // this.data_loading = true;
      const id = this.aRoute.snapshot.paramMap.get("title");
      this.page_title = "Edit Announcement";
    } else {
      this.page_title = "Create Announcement";
      this.AddAnnouncementForm.reset();
    }


    // Check if user details are passed user list, service to user-edit

    this.subscription = this.announcementService.getAnnouncementDetails().subscribe(user => {
      if (user) {
        this.announcementDetails = user;
        console.log(this.announcementDetails)
        // Pre-fill the form with user details
        this.AddAnnouncementForm.patchValue({
          title: this.announcementDetails.title,
          description: this.announcementDetails.description,
          fdate: new Date(this.announcementDetails.fdate), // Assuming 'fdate' is a date field
          tdate: new Date(this.announcementDetails.tdate),
        });
      } else {
        this.AddAnnouncementForm.reset(); // Ensure the form is reset when no user details are present
      }
    });
  }
  ngOnDestroy(): void {
    // Unsubscribe to prevent multiple subscriptions when leaving the component
    this.subscription.unsubscribe();
  }

  /**
   * Announcement Form Initialize
   */

  AddAnnouncementFormInitialize() {
    this.AddAnnouncementForm = this.formBuilder.group({
      title: ["", [Validators.required, Validators.maxLength(100)]],
      description: ["", [Validators.required, Validators.maxLength(500)]],
      fdate: [new Date(), [Validators.required]],
      tdate: [new Date(), [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.AddAnnouncementForm.invalid) {
      return;
    }

    const formData = this.AddAnnouncementForm.value;
    console.log(formData.fdate)

    // Format the date strings before sending them to the server
    const formattedFromDate = this.datePipe.transform(formData.fdate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    const formattedToDate = this.datePipe.transform(formData.tdate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

    // Get the current date and time in the desired format
    const modifiedDate = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

    // Check if the URL contains 'edit' to differentiate between create and edit actions
    if (this.router.url.indexOf("edit") !== -1) {
      // For editing, form a request body with put method fields
      const requestBody = {
        id: this.announcementDetails.id,
        title: formData.title,
        description: formData.description,
        fdate: formattedFromDate,
        tdate: formattedToDate,
        isdeleted: "string",
        createdby: "Admin",
        // createdon: this.userDetails.createdon, // You might want to update these fields
        modifiedby: "Admin",
        modifiedon: modifiedDate, // Similarly update these fields with appropriate values
      };

      this.announcementService.updateAnnouncement(requestBody)
        .subscribe((response) => {
          // this.backToUserList();
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
          this.router.navigate([ROUTE_PATH.ADMIN, ROUTE_PATH.ANNOUNCEMENT, ROUTE_PATH.ANNOUNCEMENTS.LIST,]);
        });


    } else {
      // For creating a new announcement
      const requestBody = {
        title: formData.title,
        description: formData.description,
        fdate: formattedFromDate,
        tdate: formattedToDate,
        isdeleted: "string",
        createdby: "Admin",
        createdon: modifiedDate,
        modifiedby: "Admin",
        modifiedon: modifiedDate,
      };

      this.announcementService.CreateAnnouncement(requestBody)
        .subscribe((response) => {
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
          //  this.backToUserList();
          this.router.navigate([ROUTE_PATH.ADMIN, ROUTE_PATH.ANNOUNCEMENT, ROUTE_PATH.ANNOUNCEMENTS.LIST,]);
        });
    }
  }


  /**
   * Back to Announcement List
   * @param
   * @returns
   */
  backToAnnouncementList() {
    this.router.navigate([ROUTE_PATH.ADMIN, ROUTE_PATH.ANNOUNCEMENT, ROUTE_PATH.ANNOUNCEMENTS.LIST,]);
  }

}
