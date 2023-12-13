"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_admin_Banner_banner_module_ts"],{

/***/ 77059:
/*!***************************************************************************!*\
  !*** ./src/app/admin/Banner/banner-add-edit/banner-add-edit.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerAddEditComponent": () => (/* binding */ BannerAddEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/route-path.constant */ 49086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_banner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/banner.service */ 7739);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);








function BannerAddEditComponent_ng_container_12_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " File size exceeds the limit of 1MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BannerAddEditComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BannerAddEditComponent_ng_container_12_p_1_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.AddBannerForm.controls.photo.errors.required);
} }
function BannerAddEditComponent_ng_container_20_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " From Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BannerAddEditComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BannerAddEditComponent_ng_container_20_p_1_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.AddBannerForm.controls.fdate.errors.required);
} }
function BannerAddEditComponent_ng_container_28_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " To Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BannerAddEditComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BannerAddEditComponent_ng_container_28_p_1_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.AddBannerForm.controls.tdate.errors.required);
} }
class BannerAddEditComponent {
    constructor(formBuilder, router, aRoute, bannerService, toastrService, datePipe) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.aRoute = aRoute;
        this.bannerService = bannerService;
        this.toastrService = toastrService;
        this.datePipe = datePipe;
        this.submitted = false;
        //page_title: string;
        this.data_loading = false;
        //show password
        this.showPassword = true;
        this.bannerformData = new FormData();
    }
    ngOnInit() {
        this.AddBannerFormInitialize();
        if (this.router.url.indexOf("edit") !== -1) {
            // this.data_loading = true;
            const id = this.aRoute.snapshot.paramMap.get("title");
            this.page_title = "Edit Banner";
        }
        else {
            this.page_title = "Create Banner";
            this.AddBannerForm.reset();
        }
        // Check if user details are passed user list, service to user-edit
        this.subscription = this.bannerService.getBannerDetails().subscribe(user => {
            if (user) {
                this.bannerDetails = user;
                console.log(this.bannerDetails);
                // Pre-fill the form with user details
                this.AddBannerForm.patchValue({
                    photo: this.bannerDetails.photo,
                    fdate: new Date(this.bannerDetails.fdate),
                    tdate: new Date(this.bannerDetails.tdate),
                });
            }
            else {
                this.AddBannerForm.reset(); // Ensure the form is reset when no user details are present
            }
        });
    }
    ngOnDestroy() {
        // Unsubscribe to prevent multiple subscriptions when leaving the component
        this.subscription.unsubscribe();
    }
    /**
     * User Form Initialize
     */
    // onSubmit() {
    //   //  debugger
    //   //  this.submitted = true;
    // console.log("hi")
    //   if (this.AddBannerForm.invalid) {
    //     return;
    //   }
    //   // const formData = this.AddBannerForm.value;
    //   // console.log(formData.fdate)
    //   const bannerformData = new FormData()
    //   bannerformData.append('photo', this.selectedPhoto);
    // console.log(this.bannerformData)
    //   // Get the current date and time in the desired format
    //   const modifiedDate = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    //   // Format the date strings before sending them to the server
    //   const formattedFromDate = this.datePipe.transform(this.AddBannerForm.controls.fdate.value, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    //   const formattedToDate = this.datePipe.transform(this.AddBannerForm.controls.tdate.value, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    //   // this.bannerformData.append("fdate",formattedFromDate)
    //   // this.bannerformData.append("tdate",formattedToDate)
    //   this.bannerformData.append("photo",this.selectedPhoto)
    //   // this.bannerformData.append("id",this.bannerDetails.id)
    //   // this.bannerformData.append("isdelected","string")
    //   // this.bannerformData.append("createby","Admin")
    //   // this.bannerformData.append("createon",modifiedDate)
    //   // this.bannerformData.append("modifiedby","Admin")
    //   // this.bannerformData.append("modifiedon",modifiedDate)
    //   console.log(this.bannerformData)
    //   // Check if the URL contains 'edit' to differentiate between create and edit actions
    //   if (this.router.url.indexOf("edit") !== -1) {
    //     // For editing, form a request body with put method fields
    //     // const requestBody = {
    //     //   id: this.bannerDetails.id,
    //     //   photo: formData.photo,
    //     //   // title: formData.title,
    //     //   // description: formData.description,
    //     //   fdate: formattedFromDate,
    //     //   tdate: formattedToDate,
    //     //   isdeleted: "string",
    //     //   createdby: "Admin",
    //     //   createdon: this.bannerDetails.createdon, // You might want to update these fields
    //     //   modifiedby: "Admin",
    //     //   modifiedon: modifiedDate, // Similarly update these fields with appropriate values
    //     // };
    //     this.bannerService.updateBanner(this.bannerformData)
    //       .subscribe((response) => {
    //         // this.backToUserList();
    //         if (HttpStatusCode.Ok) {
    //           this.toastrService.show(response["message"], "Success", {
    //             status: "success",
    //             duration: 8000,
    //           });
    //         } else {
    //           this.toastrService.show(response["message"], "Warning", {
    //             status: "warning",
    //             duration: 8000,
    //           });
    //         }
    //         this.backToBannerList();
    //       });
    //   } else {
    //     // For creating a new announcement
    //     // const requestBody = {
    //     //   photo: formData.photo,
    //     //   fdate: formData.fdate,
    //     //   tdate: formData.tdate,
    //     //   isdeleted: "string",
    //     //   createdby: "Admin",
    //     //   createdon: modifiedDate, 
    //     //   modifiedby: "string",
    //     //   modifiedon: "string", 
    //     // };
    //     this.bannerService.CreateBanner(bannerformData)
    //       .subscribe((response) => {
    //         if (HttpStatusCode.Ok) {
    //           this.toastrService.show(response["message"], "Success", {
    //             status: "success",
    //             duration: 8000,
    //           });
    //         } else {
    //           this.toastrService.show(response["message"], "Warning", {
    //             status: "warning",
    //             duration: 8000,
    //           });
    //         }
    //          this.backToBannerList();
    //       });
    //   }
    // }
    AddBannerFormInitialize() {
        this.AddBannerForm = this.formBuilder.group({
            photo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            fdate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            tdate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    onPhotoChange(event) {
        const file = event.target.files[0];
        if (file) {
            // Check file size
            if (file.size > 1048576) { // 1MB in bytes
                // Handle error, e.g., show a toastr message
                console.error('File size exceeds the limit of 1MB.');
                this.AddBannerForm.patchValue({ photo: null });
                return;
            }
            this.selectedPhoto = file;
            // Read the file and convert it to base64
            //   const reader = new FileReader();
            //   reader.onload = () => {
            //     this.AddBannerForm.patchValue({ photo: reader.result });
            //   };
            //   reader.readAsDataURL(file);
        }
    }
    onFileSelected(event) {
        const file = event.target.files[0];
        this.selectedPhoto = file;
    }
    onSubmit() {
        if (this.AddBannerForm.invalid || !this.selectedPhoto) {
            return;
        }
        // Format the date strings before sending them to the server
        const formattedFromDate = this.datePipe.transform(this.AddBannerForm.controls.fdate.value, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        const formattedToDate = this.datePipe.transform(this.AddBannerForm.controls.tdate.value, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        // Update the API call based on the create/update condition
        if (this.router.url.indexOf('edit') !== -1) {
            const formData = new FormData();
            formData.append('Id', this.bannerDetails.id);
            formData.append('ImageFile', this.selectedPhoto);
            formData.append('Fdate', formattedFromDate);
            formData.append('Tdate', formattedToDate);
            formData.append('ModifiedBy', 'Admin');
            //formData.append('CreatedBy', 'Admin');
            //formData.append('CreatedOn', this.bannerDetails.createdOn);
            formData.append('ModifiedOn', new Date().toISOString());
            // Fetch banner ID or necessary details for editing
            // Assuming bannerId is available for editing
            const bannerId = this.bannerDetails.id; // Fetch the correct banner ID here
            // Make the update request to the backend
            this.bannerService.updateBanner(formData).subscribe((response) => {
                // Handle response as needed
                this.toastrService.show(response['message'], 'Success', {
                    status: 'success',
                    duration: 8000,
                });
                this.backToBannerList();
            }, (error) => {
                // Handle error responses
                this.toastrService.show('Error updating banner', 'Error', {
                    status: 'danger',
                    duration: 8000,
                });
                console.error(error);
            });
        }
        else {
            const formData = new FormData();
            formData.append('ImageFile', this.selectedPhoto);
            formData.append('Fdate', formattedFromDate);
            formData.append('Tdate', formattedToDate);
            formData.append('ModifiedBy', 'Admin');
            formData.append('CreatedBy', 'Admin');
            formData.append('CreatedOn', new Date().toISOString());
            formData.append('ModifiedOn', new Date().toISOString());
            // For creating a new banner
            this.bannerService.CreateBanner(formData).subscribe((response) => {
                // Handle response as needed
                this.toastrService.show(response['message'], 'Success', {
                    status: 'success',
                    duration: 8000,
                });
                this.backToBannerList();
            }, (error) => {
                // Handle error responses
                this.toastrService.show('Error creating banner', 'Error', {
                    status: 'danger',
                    duration: 8000,
                });
                console.error(error);
            });
        }
    }
    /**
     * Back to User List
     * @param
     * @returns
     */
    backToBannerList() {
        this.router.navigate([_shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ADMIN, _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.BANNER, _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.BANNERS.GET,]);
    }
}
BannerAddEditComponent.ɵfac = function BannerAddEditComponent_Factory(t) { return new (t || BannerAddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_banner_service__WEBPACK_IMPORTED_MODULE_1__.BannerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe)); };
BannerAddEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BannerAddEditComponent, selectors: [["ngx-banner-add-edit"]], decls: 37, vars: 9, consts: [[1, "row"], [1, "col-md-12"], [1, "text-center", "bold-text"], ["nbSpinnerStatus", "info", 3, "nbSpinner"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "photo", 1, "label", "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["nbInput", "", "fullWidth", "", "type", "file", "id", "photo", "formControlName", "photo", "accept", "image/*", "multiple", "false", 3, "change"], [4, "ngIf"], ["for", "fdate", 1, "label", "col-sm-3", "col-form-label"], ["nbInput", "", "fullWidth", "", "formControlName", "fdate", 3, "nbDatepicker"], ["fromDatepicker", ""], ["for", "tdate", 1, "label", "col-sm-3", "col-form-label"], ["nbInput", "", "fullWidth", "", "formControlName", "tdate", 3, "nbDatepicker"], ["toDatepicker", ""], [1, "offset-sm-3", "col-sm-9"], ["type", "submit", "nbButton", "", "status", "primary", 3, "disabled"], ["nbButton", "", "status", "danger", "routerLinkActive", "router-link-active", 3, "click"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]], template: function BannerAddEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nb-card-body", 3)(6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function BannerAddEditComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Photo *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function BannerAddEditComponent_Template_input_change_11_listener($event) { return ctx.onPhotoChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BannerAddEditComponent_ng_container_12_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5)(14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "From Date *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 11)(18, "nb-datepicker", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, BannerAddEditComponent_ng_container_20_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 5)(22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "To Date *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 14)(26, "nb-datepicker", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, BannerAddEditComponent_ng_container_28_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 5)(30, "div", 16)(31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BannerAddEditComponent_Template_button_click_34_listener() { return ctx.backToBannerList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.page_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbSpinner", ctx.data_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.AddBannerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddBannerForm.controls.photo.touched && ctx.AddBannerForm.controls.photo.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddBannerForm.controls.fdate.touched && ctx.AddBannerForm.controls.fdate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbDatepicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddBannerForm.controls.tdate.touched && ctx.AddBannerForm.controls.tdate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.submitted || !ctx.AddBannerForm.valid);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSpinnerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDatepickerComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXItYWRkLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 37844:
/*!********************************************************************!*\
  !*** ./src/app/admin/Banner/banner-get/banner-delete.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerDeleteComponent": () => (/* binding */ BannerDeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



class BannerDeleteComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    close() {
        this.dialogRef.close(false); // Close the delete dialog without approving
    }
    deleteBestperformer() {
        this.dialogRef.close(this.user); // Close the delete dialog and trigger the approval action
    }
}
BannerDeleteComponent.ɵfac = function BannerDeleteComponent_Factory(t) { return new (t || BannerDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDialogRef)); };
BannerDeleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerDeleteComponent, selectors: [["ngx-banner-delete"]], decls: 27, vars: 9, consts: [[1, "text-center"], ["nbButton", "", "status", "success", 3, "click"], ["nbButton", "", "status", "primary", 3, "click"]], template: function BannerDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body")(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Are you sure that you want to delete this ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul")(11, "li")(12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "From Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "To date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-card-footer", 0)(22, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerDeleteComponent_Template_button_click_22_listener() { return ctx.deleteBestperformer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerDeleteComponent_Template_button_click_25_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 3, ctx.user.fdate, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 6, ctx.user.tdate, "dd/MM/yyyy"), "");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 17124:
/*!*****************************************************************!*\
  !*** ./src/app/admin/Banner/banner-get/banner-get.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerGetComponent": () => (/* binding */ BannerGetComponent)
/* harmony export */ });
/* harmony import */ var _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/route-path.constant */ 49086);
/* harmony import */ var _banner_delete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner-delete.component */ 37844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_banner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/banner.service */ 7739);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/confirmdialog */ 46625);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);










function BannerGetComponent_ng_template_12_ng_container_1_th_1_p_sortIcon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-sortIcon", 14);
} if (rf & 2) {
    const col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", col_r3.field)("id", col_r3.field + "-sort");
} }
function BannerGetComponent_ng_template_12_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BannerGetComponent_ng_template_12_ng_container_1_th_1_p_sortIcon_1_Template, 1, 2, "p-sortIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](col_r3.field + "-campaigns");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", col_r3.weight, "px")("height", col_r3.height, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSortableColumn", col_r3.sort == true ? col_r3.field : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r3.sort == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](col_r3.header);
} }
function BannerGetComponent_ng_template_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BannerGetComponent_ng_template_12_ng_container_1_th_1_Template, 4, 9, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r3.show);
} }
function BannerGetComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BannerGetComponent_ng_template_12_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.columns);
} }
function BannerGetComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 16)(10, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BannerGetComponent_ng_template_13_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const user_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.editBanner(user_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BannerGetComponent_ng_template_13_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const user_r8 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.confirmDelete(user_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", user_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 3, user_r8.fdate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 6, user_r8.tdate, "dd/MM/yyyy"));
} }
const _c0 = function () { return { width: "50vw" }; };
class BannerGetComponent {
    constructor(dialogConfirmService, toastrService, router, aRoute, bannerservice, dialogService) {
        this.dialogConfirmService = dialogConfirmService;
        this.toastrService = toastrService;
        this.router = router;
        this.aRoute = aRoute;
        this.bannerservice = bannerservice;
        this.dialogService = dialogService;
        this.itemsPerPage = [10, 25, 50];
        this.first = 0;
        this.rows = 10;
    }
    ngOnInit() {
        // table   with their respective field name and header value
        this.columns = [
            { field: "photo", header: "Photo", show: true, sort: true, },
            { field: "fdate", header: "From Date", show: true, sort: true, },
            { field: "tdate", header: "To Date", show: true, sort: true, },
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
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ADMIN,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.BANNER,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.BANNERS.CREATE,
        ]);
    }
    /**
     * Edit Banner
     * @param user
     * @returns
     */
    editBanner(user) {
        this.bannerservice.setBannerDetails(user); // Pass the selected user details to the service
        this.router.navigate([
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ADMIN,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.BANNER,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.BANNERS.EDIT,
            user.id
        ]);
    }
    /**
     * Delete Banner confirmation
     * @param user
     * @returns
     */
    confirmDelete(user) {
        this.dialogService.open(_banner_delete_component__WEBPACK_IMPORTED_MODULE_1__.BannerDeleteComponent, {
            context: { user },
        }).onClose.subscribe((result) => {
            if (result) {
                this.deleteBanner(user.id);
                console.log(user);
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
        this.bannerservice.deleteBanner(id).subscribe((response) => {
            this.bannerList();
            if (true /* Ok */) {
                this.toastrService.show(response["message"], "Success", {
                    status: "success",
                    duration: 8000,
                });
            }
            else {}
        }, (error) => {
            console.log(error);
        });
    }
    /**
     * Banner List
     * @param null
     * @returns
     */
    bannerList() {
        //this.banner  =this.staticUsers;
        this.bannerservice.getBannerList().subscribe((response) => {
            console.log(response);
            this.banner = response;
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
        }, (error) => {
            console.log(error);
        });
    }
}
BannerGetComponent.ɵfac = function BannerGetComponent_Factory(t) { return new (t || BannerGetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_banner_service__WEBPACK_IMPORTED_MODULE_2__.BannerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogService)); };
BannerGetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BannerGetComponent, selectors: [["ngx-banner-get"]], decls: 14, vars: 9, consts: [[1, "inline-form-card", "full-card"], [1, "row"], [1, "col-md-9", "text-center", "bold-text"], [1, "col-md-3"], [1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "card"], [3, "value", "paginator", "rows", "showCurrentPageReport", "autoLayout", "rowsPerPageOptions"], ["pTemplate", "header"], ["pTemplate", "body"], [4, "ngFor", "ngForOf"], [1, "text-center"], ["class", "text-center", 3, "pSortableColumn", "width", "height", "class", 4, "ngIf"], [1, "text-center", 3, "pSortableColumn"], ["class", "sort-icon", 3, "field", "id", 4, "ngIf"], [1, "sort-icon", 3, "field", "id"], ["width", "100", "height", "100", "loading", "lazy", "fetchpriority", "high", 3, "src"], [1, "text-center", "action"], ["routerLinkActive", "router-link-active", "nbTooltip", "Edit", "nbTooltipPlacement", "top", 1, "btn", "btn-outline-primary", "btn-sm", "action-button", 3, "click"], ["icon", "edit", "pack", "eva", 1, "action-icons"], ["nbTooltip", "Delete", "nbTooltipPlacement", "top", 1, "btn", "btn-outline-danger", "btn-sm", "action-button", 3, "click"], ["icon", "close", "pack", "eva", 1, "action-icons"]], template: function BannerGetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-confirmDialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nb-card-header")(3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Banner List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BannerGetComponent_Template_button_click_7_listener() { return ctx.createBanner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Create Banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nb-card-body")(10, "div", 5)(11, "p-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, BannerGetComponent_ng_template_12_Template, 4, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, BannerGetComponent_ng_template_13_Template, 16, 9, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.banner)("paginator", true)("rows", ctx.rows)("showCurrentPageReport", true)("autoLayout", true)("rowsPerPageOptions", ctx.itemsPerPage);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialog, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortIcon, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTooltipDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXItZ2V0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 23374:
/*!*******************************************************!*\
  !*** ./src/app/admin/Banner/banner-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerRoutingModule": () => (/* binding */ BannerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _banner_get_banner_get_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner-get/banner-get.component */ 17124);
/* harmony import */ var _banner_add_edit_banner_add_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner-add-edit/banner-add-edit.component */ 77059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: 'get',
        component: _banner_get_banner_get_component__WEBPACK_IMPORTED_MODULE_0__.BannerGetComponent,
    },
    {
        path: 'create',
        component: _banner_add_edit_banner_add_edit_component__WEBPACK_IMPORTED_MODULE_1__.BannerAddEditComponent,
    },
    {
        path: 'edit/:id',
        component: _banner_add_edit_banner_add_edit_component__WEBPACK_IMPORTED_MODULE_1__.BannerAddEditComponent,
    },
    {
        path: '',
        redirectTo: 'get',
        component: _banner_get_banner_get_component__WEBPACK_IMPORTED_MODULE_0__.BannerGetComponent,
    },
];
class BannerRoutingModule {
}
BannerRoutingModule.ɵfac = function BannerRoutingModule_Factory(t) { return new (t || BannerRoutingModule)(); };
BannerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BannerRoutingModule });
BannerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BannerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 56866:
/*!***********************************************!*\
  !*** ./src/app/admin/Banner/banner.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerModule": () => (/* binding */ BannerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/interceptor/jwt-interceptor */ 94338);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 84633);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/confirmdialog */ 46625);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _banner_add_edit_banner_add_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner-add-edit/banner-add-edit.component */ 77059);
/* harmony import */ var _banner_get_banner_get_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner-get/banner-get.component */ 17124);
/* harmony import */ var _banner_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner-routing.module */ 23374);
/* harmony import */ var _banner_get_banner_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./banner-get/banner-delete.component */ 37844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);





// Interceptor

// Primeng











class BannerModule {
}
BannerModule.ɵfac = function BannerModule_Factory(t) { return new (t || BannerModule)(); };
BannerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BannerModule });
BannerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.NbAuthJWTInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpErrorInterceptor, multi: true }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _banner_routing_module__WEBPACK_IMPORTED_MODULE_4__.BannerRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbActionsModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbAlertModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCalendarKitModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCalendarModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCalendarRangeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbDatepickerModule.forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbFormFieldModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbProgressBarModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbSpinnerModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbTooltipModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCheckboxModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbTabsetModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbRouteTabsetModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbStepperModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbButtonModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbListModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbAccordionModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbUserModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbIconModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbInputModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbTreeGridModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbSelectModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbToggleModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbContextMenuModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbDialogModule.forRoot(),
            primeng_table__WEBPACK_IMPORTED_MODULE_12__.TableModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__.ConfirmDialogModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_15__.DialogModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BannerModule, { declarations: [_banner_get_banner_get_component__WEBPACK_IMPORTED_MODULE_3__.BannerGetComponent,
        _banner_add_edit_banner_add_edit_component__WEBPACK_IMPORTED_MODULE_2__.BannerAddEditComponent,
        _banner_get_banner_delete_component__WEBPACK_IMPORTED_MODULE_5__.BannerDeleteComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _banner_routing_module__WEBPACK_IMPORTED_MODULE_4__.BannerRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbActionsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbAlertModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCalendarKitModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCalendarModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCalendarRangeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbDatepickerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbFormFieldModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbProgressBarModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbSpinnerModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbTooltipModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCheckboxModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbTabsetModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbRouteTabsetModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbStepperModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbListModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbAccordionModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbUserModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbIconModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbTreeGridModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbSelectModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbToggleModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbContextMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbDialogModule, primeng_table__WEBPACK_IMPORTED_MODULE_12__.TableModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__.ConfirmDialogModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_15__.DialogModule] }); })();


/***/ }),

/***/ 7739:
/*!*********************************************************!*\
  !*** ./src/app/admin/Banner/services/banner.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerService": () => (/* binding */ BannerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/api-constant */ 79374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/auth */ 82284);






class BannerService {
    constructor(bannerServicehttp, authService) {
        this.bannerServicehttp = bannerServicehttp;
        this.authService = authService;
        this.banner = {};
        //pass select banner Details in banner-Edit
        this.bannerDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.authService.onTokenChange().subscribe((token) => {
            if (token.isValid()) {
                this.banner = token.getPayload(); // here we receive a payload from the token and assigns it to our `banner` variable
            }
        });
    }
    setBannerDetails(user) {
        this.bannerDetails.next(user);
    }
    getBannerDetails() {
        return this.bannerDetails.asObservable();
    }
    /**
     * Banner List
     * @returns
     */
    getBannerList() {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.BANNER.GET);
        return this.bannerServicehttp.get(apiURL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
    /**
     * Delete Banner
     * @param id
     * @returns
     *
     */
    deleteBanner(id) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(`${_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.BANNER.DELETE}?id=${id}`);
        return this.bannerServicehttp.put(apiURL, null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
    /**
     * Update Banner details
     * @param requestBody
     * @returns
     *
     */
    updateBanner(formData) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(`${_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.BANNER.UPDATE}`);
        return this.bannerServicehttp.put(apiURL, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
    /**
     * Create Banner
     * @param formData
     * @returns
     *
     */
    CreateBanner(formData) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(`${_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.BANNER.ADD}`);
        return this.bannerServicehttp.post(apiURL, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
}
BannerService.ɵfac = function BannerService_Factory(t) { return new (t || BannerService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_7__.NbAuthService)); };
BannerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: BannerService, factory: BannerService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_Banner_banner_module_ts.js.map