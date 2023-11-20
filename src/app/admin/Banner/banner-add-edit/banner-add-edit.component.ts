import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ROUTE_PATH } from '../../../shared/constants/route-path.constant';
import { DatePipe } from '@angular/common';
import { HttpStatusCode } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { BannerService } from '../services/banner.service';

@Component({
  selector: 'ngx-banner-add-edit',
  templateUrl: './banner-add-edit.component.html',
  styleUrls: ['./banner-add-edit.component.scss']
})
export class BannerAddEditComponent implements OnInit {

  AddBannerForm: FormGroup;
  submitted = false;
  //page_title: string;
  data_loading = false;
  
  //show password
  showPassword =true;

  //userlist pass user data
  bannerDetails: any;
  page_title: string;

  //selsct photo
  selectedPhoto: File;


private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    private bannerService: BannerService,
    private toastrService: NbToastrService,
    private datePipe: DatePipe,
    
  ) {}

  ngOnInit(): void {
    this.AddBannerFormInitialize();

    if (this.router.url.indexOf("edit") !== -1) {
      // this.data_loading = true;
      const id = this.aRoute.snapshot.paramMap.get("title");
      this.page_title = "Edit Banner";
    } else {
      this.page_title = "Create Banner";
      this.AddBannerForm.reset();
    }


   // Check if user details are passed user list, service to user-edit

 this.subscription = this.bannerService.getBannerDetails().subscribe(user => {     if (user) {
      this.bannerDetails = user;
      console.log(this.bannerDetails)
      // Pre-fill the form with user details
      this.AddBannerForm.patchValue({
        photo: this.bannerDetails.photo,
        fdate: new Date(this.bannerDetails.fdate), // Assuming 'fdate' is a date field
        tdate: new Date(this.bannerDetails.tdate),
       });
      }else {
      this.AddBannerForm.reset(); // Ensure the form is reset when no user details are present
      }
   });  
  } 
   ngOnDestroy(): void {
    // Unsubscribe to prevent multiple subscriptions when leaving the component
      this.subscription.unsubscribe();
  }    

  /**
   * User Form Initialize
   */

  AddBannerFormInitialize() {
  this.AddBannerForm = this.formBuilder.group({
    photo: [null],
    fdate: [new Date(), [Validators.required]],
    tdate: [new Date(), [Validators.required]],
  });
}

// onPhotoChange(event: any) {
//   const file = event.target.files[0];
//   if (file) {
//     // Check file size
//     if (file.size > 1048576) { // 1MB in bytes
//       // Handle error, e.g., show a toastr message
//       console.error('File size exceeds the limit of 1MB.');
//       this.AddBannerForm.patchValue({ photo: null });
//       return;
//     }

//     // Read the file and convert it to base64
//     const reader = new FileReader();
//     reader.onload = () => {
//       this.AddBannerForm.patchValue({ photo: reader.result });
//     };
//     reader.readAsDataURL(file);
//   }
// }

onFileSelected(event: any) {
  const file: File = event.target.files[0];
  this.selectedPhoto = file;
}
   bannerformData:any = new FormData()
onSubmit() {
  //  this.submitted = true;
console.log("hi")
  if (this.AddBannerForm.invalid) {
    return;
  }

  // const formData = this.AddBannerForm.value;
  // console.log(formData.fdate)
  this.bannerformData = new FormData()
console.log(this.bannerformData)
  // Format the date strings before sending them to the server
  const formattedFromDate = this.datePipe.transform(this.AddBannerForm.controls.fdate.value, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
  const formattedToDate = this.datePipe.transform(this.AddBannerForm.controls.tdate.value, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
  this.bannerformData.append("fdate",formattedFromDate)
  this.bannerformData.append("tdate",formattedToDate)
  this.bannerformData.append("photo",this.selectedPhoto)

  console.log(this.bannerformData)


  // Get the current date and time in the desired format
  const modifiedDate = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

  // Check if the URL contains 'edit' to differentiate between create and edit actions
  if (this.router.url.indexOf("edit") !== -1) {
    // For editing, form a request body with put method fields
    // const requestBody = {
    //   id: this.bannerDetails.id,
    //   photo: formData.photo,
    //   // title: formData.title,
    //   // description: formData.description,
    //   fdate: formattedFromDate,
    //   tdate: formattedToDate,
    //   isdeleted: "string",
    //   createdby: "Admin",
    //   createdon: this.bannerDetails.createdon, // You might want to update these fields
    //   modifiedby: "Admin",
    //   modifiedon: modifiedDate, // Similarly update these fields with appropriate values
    // };

    this.bannerService.updateBanner(this.bannerformData)
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
        this.backToBannerList();
      });
  

  } else {
    // For creating a new announcement
    // const requestBody = {
    //   photo: formData.photo,
    //   fdate: formData.fdate,
    //   tdate: formData.tdate,
    //   isdeleted: "string",
    //   createdby: "Admin",
    //   createdon: modifiedDate, 
    //   modifiedby: "string",
    //   modifiedon: "string", 
    // };

    this.bannerService.CreateBanner(this.bannerformData)
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
         this.backToBannerList();
      });
  }
}


  /**
   * Back to User List
   * @param
   * @returns
   */
  backToBannerList() {
    this.router.navigate([ROUTE_PATH.ADMIN, ROUTE_PATH.BANNER,ROUTE_PATH.BANNERS.GET,]);
  }

}

