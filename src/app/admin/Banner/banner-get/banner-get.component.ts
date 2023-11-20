import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ConfirmationService } from 'primeng/api';
import { ROUTE_PATH } from '../../../shared/constants/route-path.constant';
import { HttpStatusCode } from '@angular/common/http';
import { BannerService } from '../services/banner.service';
import { BannerDeleteComponent } from './banner-delete.component';


@Component({
  selector: 'ngx-banner-get',
  templateUrl: './banner-get.component.html',
  styleUrls: ['./banner-get.component.scss']
})
export class BannerGetComponent implements OnInit {

  itemsPerPage: any[] = [10, 25, 50];
  banner: any;
  columns: any[]; // for table columns

  first = 0;
  rows = 10;

  constructor(
    private dialogConfirmService: ConfirmationService,
    private toastrService: NbToastrService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private bannerservice: BannerService,
    private dialogService:NbDialogService
  ) {}

  ngOnInit() {
    // table   with their respective field name and header value
    this.columns = [
      { field: "photo", header: "Photo", show: true, sort: true,  },
      { field: "fdate", header: "From Date", show: true, sort: true, },
      { field: "tdate", header: "To Date", show: true, sort:true ,  },
    ];

    this.bannerList();
  }
    /**
   * create Banner
   * @param
   * @returns
   */
createBanner() {

    this.bannerservice.setBannerDetails(null);
    this.router.navigate([
        ROUTE_PATH.ADMIN,
        ROUTE_PATH.BANNER,
        ROUTE_PATH.BANNERS.CREATE,
    ]);
}

  /**
   * Edit Banner
   * @param user
   * @returns
   */
  editBanner(user: any) {
    this.bannerservice.setBannerDetails(user); // Pass the selected user details to the service
    this.router.navigate([
      ROUTE_PATH.ADMIN,
      ROUTE_PATH.BANNER,
      ROUTE_PATH.BANNERS.EDIT,
      user.id
    ]);
  }

  /**
   * Delete Banner confirmation
   * @param user
   * @returns
   */
  confirmDelete(user: any) {
    this.dialogService.open(BannerDeleteComponent, {
      context: { user },
    }).onClose.subscribe((result) => {
      if (result) {
        this.deleteBanner(user.id);
        console.log(user)
      }
    });
  }

  /**
   * Delete Banner
   * @param id
   * @returns
   */
  deleteBanner(id) {
    // let deletePostData = { userId: userId };

    this.bannerservice.deleteBanner(id).subscribe(
      (response) => {
        this.bannerList();
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
   * Banner List
   * @param null
   * @returns
   */

  bannerList() {

    //this.banner  =this.staticUsers;
    this.bannerservice.getBannerList().subscribe(
     (response) => {
      console.log(response)
       this.banner = response;
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
