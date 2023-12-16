"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_admin_Announcement_announcement_module_ts"],{

/***/ 91334:
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/Announcement/announcement-add-edit/announcement-add-edit.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementAddEditComponent": () => (/* binding */ AnnouncementAddEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/route-path.constant */ 49086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_announcement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/announcement.service */ 53741);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);








function AnnouncementAddEditComponent_ng_container_12_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AnnouncementAddEditComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AnnouncementAddEditComponent_ng_container_12_p_1_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.AddAnnouncementForm.controls.title.errors.required);
} }
function AnnouncementAddEditComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Title should not exceed 100 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function AnnouncementAddEditComponent_ng_container_19_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AnnouncementAddEditComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AnnouncementAddEditComponent_ng_container_19_p_1_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.AddAnnouncementForm.controls.description.errors.required);
} }
function AnnouncementAddEditComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Description should not exceed 500 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function AnnouncementAddEditComponent_ng_container_28_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " From Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AnnouncementAddEditComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AnnouncementAddEditComponent_ng_container_28_p_1_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.AddAnnouncementForm.controls.fdate.errors.required);
} }
function AnnouncementAddEditComponent_ng_container_36_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " To Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AnnouncementAddEditComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AnnouncementAddEditComponent_ng_container_36_p_1_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.AddAnnouncementForm.controls.tdate.errors.required);
} }
class AnnouncementAddEditComponent {
    constructor(formBuilder, router, aRoute, announcementService, toastrService, datePipe) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.aRoute = aRoute;
        this.announcementService = announcementService;
        this.toastrService = toastrService;
        this.datePipe = datePipe;
        this.submitted = false;
        //page_title: string;
        this.data_loading = false;
        //show password
        this.showPassword = true;
    }
    ngOnInit() {
        this.AddAnnouncementFormInitialize();
        if (this.router.url.indexOf("edit") !== -1) {
            // this.data_loading = true;
            const id = this.aRoute.snapshot.paramMap.get("title");
            this.page_title = "Edit Announcement";
        }
        else {
            this.page_title = "Create Announcement";
            this.AddAnnouncementForm.reset();
        }
        // Check if user details are passed user list, service to user-edit
        this.subscription = this.announcementService.getAnnouncementDetails().subscribe(user => {
            if (user) {
                this.announcementDetails = user;
                console.log(this.announcementDetails);
                // Pre-fill the form with user details
                this.AddAnnouncementForm.patchValue({
                    title: this.announcementDetails.title,
                    description: this.announcementDetails.description,
                    fdate: new Date(this.announcementDetails.fdate),
                    tdate: new Date(this.announcementDetails.tdate),
                });
            }
            else {
                this.AddAnnouncementForm.reset(); // Ensure the form is reset when no user details are present
            }
        });
    }
    ngOnDestroy() {
        // Unsubscribe to prevent multiple subscriptions when leaving the component
        this.subscription.unsubscribe();
    }
    /**
     * Announcement Form Initialize
     */
    AddAnnouncementFormInitialize() {
        this.AddAnnouncementForm = this.formBuilder.group({
            title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(100)]],
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(500)]],
            fdate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            tdate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.AddAnnouncementForm.invalid) {
            return;
        }
        const formData = this.AddAnnouncementForm.value;
        console.log(formData.fdate);
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
                if (true /* Ok */) {
                    this.toastrService.show(response["message"], "Success", {
                        status: "success",
                        duration: 8000,
                    });
                }
                else {}
                this.router.navigate([_shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ADMIN, _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ANNOUNCEMENT, _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ANNOUNCEMENTS.LIST,]);
            });
        }
        else {
            // For creating a new announcement
            const requestBody = {
                title: formData.title,
                description: formData.description,
                fdate: formData.formattedFromDate,
                tdate: formData.formattedToDate,
                isdeleted: "string",
                createdby: "Admin",
                createdon: modifiedDate,
                modifiedby: "Admin",
                modifiedon: modifiedDate,
            };
            this.announcementService.CreateAnnouncement(requestBody)
                .subscribe((response) => {
                if (true /* Ok */) {
                    this.toastrService.show(response["message"], "Success", {
                        status: "success",
                        duration: 8000,
                    });
                }
                else {}
                //  this.backToUserList();
                this.router.navigate([_shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ADMIN, _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ANNOUNCEMENT, _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ANNOUNCEMENTS.LIST,]);
            });
        }
    }
    /**
     * Back to Announcement List
     * @param
     * @returns
     */
    backToAnnouncementList() {
        this.router.navigate([_shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ADMIN, _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ANNOUNCEMENT, _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ANNOUNCEMENTS.LIST,]);
    }
}
AnnouncementAddEditComponent.ɵfac = function AnnouncementAddEditComponent_Factory(t) { return new (t || AnnouncementAddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_announcement_service__WEBPACK_IMPORTED_MODULE_1__.AnnouncementService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe)); };
AnnouncementAddEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AnnouncementAddEditComponent, selectors: [["ngx-announcement-add-edit"]], decls: 45, vars: 12, consts: [[1, "row"], [1, "col-md-12"], [1, "text-center", "bold-text"], ["nbSpinnerStatus", "info", 3, "nbSpinner"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "title", 1, "label", "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "title"], [4, "ngIf"], ["for", "description", 1, "label", "col-sm-3", "col-form-label"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "description"], ["for", "fdate", 1, "label", "col-sm-3", "col-form-label"], ["nbInput", "", "fullWidth", "", "formControlName", "fdate", 3, "nbDatepicker"], ["fromDatepicker", ""], ["for", "tdate", 1, "label", "col-sm-3", "col-form-label"], ["nbInput", "", "fullWidth", "", "formControlName", "tdate", 3, "nbDatepicker"], ["toDatepicker", ""], [1, "offset-sm-3", "col-sm-9"], ["type", "submit", "nbButton", "", "status", "primary", 3, "disabled"], ["nbButton", "", "status", "danger", "routerLinkActive", "router-link-active", 3, "click"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]], template: function AnnouncementAddEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nb-card-body", 3)(6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AnnouncementAddEditComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Title *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AnnouncementAddEditComponent_ng_container_12_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AnnouncementAddEditComponent_ng_container_13_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Description *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AnnouncementAddEditComponent_ng_container_19_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AnnouncementAddEditComponent_ng_container_20_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 5)(22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "From Date *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 13)(26, "nb-datepicker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, AnnouncementAddEditComponent_ng_container_28_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 5)(30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "To Date *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 16)(34, "nb-datepicker", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, AnnouncementAddEditComponent_ng_container_36_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 5)(38, "div", 18)(39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AnnouncementAddEditComponent_Template_button_click_42_listener() { return ctx.backToAnnouncementList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.page_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbSpinner", ctx.data_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.AddAnnouncementForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddAnnouncementForm.controls.title.touched && ctx.AddAnnouncementForm.controls.title.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddAnnouncementForm.get("title").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddAnnouncementForm.controls.description.touched && ctx.AddAnnouncementForm.controls.description.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddAnnouncementForm.get("description").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddAnnouncementForm.controls.fdate.touched && ctx.AddAnnouncementForm.controls.fdate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbDatepicker", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddAnnouncementForm.controls.tdate.touched && ctx.AddAnnouncementForm.controls.tdate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.submitted || !ctx.AddAnnouncementForm.valid);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSpinnerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDatepickerComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive], styles: [".bold-text[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFubm91bmNlbWVudC1hZGQtZWRpdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxBbmd1bGFyJTIwUHJvamVjdFxcVmVXaW5cXHNyY1xcYXBwXFxhZG1pblxcQW5ub3VuY2VtZW50XFxhbm5vdW5jZW1lbnQtYWRkLWVkaXRcXGFubm91bmNlbWVudC1hZGQtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoiYW5ub3VuY2VtZW50LWFkZC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvbGQtdGV4dCB7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuIiwiLmJvbGQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufSJdfQ== */"] });


/***/ }),

/***/ 7537:
/*!*************************************************************************************!*\
  !*** ./src/app/admin/Announcement/announcement-list/announcement-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementListComponent": () => (/* binding */ AnnouncementListComponent)
/* harmony export */ });
/* harmony import */ var _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/route-path.constant */ 49086);
/* harmony import */ var _dialog_delete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-delete.component */ 97247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_announcement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/announcement.service */ 53741);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/confirmdialog */ 46625);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);










function AnnouncementListComponent_ng_template_12_ng_container_1_th_1_p_sortIcon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-sortIcon", 14);
} if (rf & 2) {
    const col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", col_r3.field)("id", col_r3.field + "-sort");
} }
function AnnouncementListComponent_ng_template_12_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AnnouncementListComponent_ng_template_12_ng_container_1_th_1_p_sortIcon_1_Template, 1, 2, "p-sortIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](col_r3.field + "-campaigns");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSortableColumn", col_r3.sort == true ? col_r3.field : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r3.sort == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](col_r3.header);
} }
function AnnouncementListComponent_ng_template_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AnnouncementListComponent_ng_template_12_ng_container_1_th_1_Template, 4, 5, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r3.show);
} }
function AnnouncementListComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AnnouncementListComponent_ng_template_12_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.columns);
} }
function AnnouncementListComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 17)(12, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AnnouncementListComponent_ng_template_13_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const user_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.editAnnouncement(user_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "nb-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AnnouncementListComponent_ng_template_13_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const user_r8 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.confirmDelete(user_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "nb-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r8.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 4, user_r8.fdate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 7, user_r8.tdate, "dd/MM/yyyy"));
} }
const _c0 = function () { return { width: "50vw" }; };
class AnnouncementListComponent {
    constructor(dialogConfirmService, toastrService, router, aRoute, announcementService, dialogService) {
        this.dialogConfirmService = dialogConfirmService;
        this.toastrService = toastrService;
        this.router = router;
        this.aRoute = aRoute;
        this.announcementService = announcementService;
        this.dialogService = dialogService;
        this.itemsPerPage = [10, 25, 50];
        this.first = 0;
        this.rows = 10;
        /**
         * Announcement List
         * @param null
         * @returns
         */
        // Define your static user data
        this.staticUsers = [
            { title: 'Vewin', description: 'Apps' },
            { title: 'Google', description: 'Daily News' },
            { title: 'Instagram', description: 'Online Application' },
        ];
    }
    ngOnInit() {
        // table   with their respective field name and header value
        this.columns = [
            { field: "title", header: "Title", show: true, sort: true },
            { field: "description", header: "Description", show: true, sort: true },
            { field: "fdate", header: "From Date", show: true, sort: true },
            { field: "tdate", header: "To Date", show: true, sort: true },
        ];
        this.userList();
    }
    /**
   * create Announcement
   * @param null
   * @returns
   */
    createAnnouncement() {
        this.announcementService.setAnnouncementDetails(null);
        this.router.navigate([
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ADMIN,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ANNOUNCEMENT,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ANNOUNCEMENTS.CREATE,
        ]);
    }
    /**
     * Edit announcement
     * @param user
     * @returns
     */
    editAnnouncement(user) {
        this.announcementService.setAnnouncementDetails(user); // Pass the selected user details to the service
        this.router.navigate([
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ADMIN,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ANNOUNCEMENT,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ANNOUNCEMENTS.EDIT,
            user.id
        ]);
    }
    /**
     * Delete Announcement confirmation
     * @param user
     * @returns
     */
    confirmDelete(user) {
        this.dialogService.open(_dialog_delete_component__WEBPACK_IMPORTED_MODULE_1__.DialogDeleteComponent, {
            context: { user },
        }).onClose.subscribe((result) => {
            if (result) {
                this.deleteAnnouncement(user.id);
                console.log(user);
            }
        });
    }
    /**
     * Delete Announcement
     * @param userId
     * @returns
     */
    deleteAnnouncement(id) {
        // let deletePostData = { userId: userId };
        this.announcementService.deleteAnnouncement(id).subscribe((response) => {
            this.userList();
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
    userList() {
        //this.users  =this.staticUsers;
        this.announcementService.getannouncementList().subscribe((response) => {
            this.announcements = response;
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
AnnouncementListComponent.ɵfac = function AnnouncementListComponent_Factory(t) { return new (t || AnnouncementListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_announcement_service__WEBPACK_IMPORTED_MODULE_2__.AnnouncementService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogService)); };
AnnouncementListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AnnouncementListComponent, selectors: [["ngx-announcement-list"]], decls: 14, vars: 9, consts: [[1, "inline-form-card", "full-card"], [1, "row"], [1, "col-md-9", "text-center", "bold-text"], [1, "col-md-3"], [1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "card"], [3, "value", "paginator", "rows", "showCurrentPageReport", "autoLayout", "rowsPerPageOptions"], ["pTemplate", "header"], ["pTemplate", "body"], [4, "ngFor", "ngForOf"], [1, "text-center"], ["class", "text-center", 3, "pSortableColumn", "class", 4, "ngIf"], [1, "text-center", 3, "pSortableColumn"], ["class", "sort-icon", 3, "field", "id", 4, "ngIf"], [1, "sort-icon", 3, "field", "id"], [1, "text-center", 2, "width", "25%"], [1, "text-center", 2, "width", "35%"], [1, "text-center", "action"], ["routerLinkActive", "router-link-active", "nbTooltip", "Edit", "nbTooltipPlacement", "top", 1, "btn", "btn-outline-primary", "btn-sm", "action-button", 3, "click"], ["icon", "edit", "pack", "eva", 1, "action-icons"], ["nbTooltip", "Delete", "nbTooltipPlacement", "top", 1, "btn", "btn-outline-danger", "btn-sm", "action-button", 3, "click"], ["icon", "close", "pack", "eva", 1, "action-icons"]], template: function AnnouncementListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-confirmDialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nb-card-header")(3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Announcement List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AnnouncementListComponent_Template_button_click_7_listener() { return ctx.createAnnouncement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Create Announcement");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nb-card-body")(10, "div", 5)(11, "p-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AnnouncementListComponent_ng_template_12_Template, 4, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AnnouncementListComponent_ng_template_13_Template, 18, 10, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.announcements)("paginator", true)("rows", ctx.rows)("showCurrentPageReport", true)("autoLayout", true)("rowsPerPageOptions", ctx.itemsPerPage);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialog, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortIcon, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTooltipDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".bold-text[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFubm91bmNlbWVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEFuZ3VsYXIlMjBQcm9qZWN0XFxWZVdpblxcc3JjXFxhcHBcXGFkbWluXFxBbm5vdW5jZW1lbnRcXGFubm91bmNlbWVudC1saXN0XFxhbm5vdW5jZW1lbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoiYW5ub3VuY2VtZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9sZC10ZXh0IHtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG4iLCIuYm9sZC10ZXh0IHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59Il19 */"] });


/***/ }),

/***/ 97247:
/*!*********************************************************************************!*\
  !*** ./src/app/admin/Announcement/announcement-list/dialog-delete.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogDeleteComponent": () => (/* binding */ DialogDeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



class DialogDeleteComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    close() {
        this.dialogRef.close(false); // Close the delete dialog without approving
    }
    deleteUser() {
        this.dialogRef.close(this.user); // Close the delete dialog and trigger the approval action
    }
}
DialogDeleteComponent.ɵfac = function DialogDeleteComponent_Factory(t) { return new (t || DialogDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDialogRef)); };
DialogDeleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogDeleteComponent, selectors: [["ngx-dialog-delete"]], decls: 36, vars: 11, consts: [[1, "text-center"], ["nbButton", "", "status", "success", 3, "click"], ["nbButton", "", "status", "primary", 3, "click"]], template: function DialogDeleteComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li")(16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "From Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li")(25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "To Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nb-card-footer", 0)(30, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogDeleteComponent_Template_button_click_30_listener() { return ctx.deleteUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogDeleteComponent_Template_button_click_33_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ",\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.description, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 5, ctx.user.fdate, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 8, ctx.user.tdate, "dd/MM/yyyy"), "");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 21644:
/*!*******************************************************************!*\
  !*** ./src/app/admin/Announcement/announcement-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementRoutingModule": () => (/* binding */ AnnouncementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcement-list/announcement-list.component */ 7537);
/* harmony import */ var _announcement_add_edit_announcement_add_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcement-add-edit/announcement-add-edit.component */ 91334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: 'list',
        component: _announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_0__.AnnouncementListComponent,
    },
    {
        path: 'create',
        component: _announcement_add_edit_announcement_add_edit_component__WEBPACK_IMPORTED_MODULE_1__.AnnouncementAddEditComponent,
    },
    {
        path: 'edit/:id',
        component: _announcement_add_edit_announcement_add_edit_component__WEBPACK_IMPORTED_MODULE_1__.AnnouncementAddEditComponent,
    },
    {
        path: '',
        redirectTo: 'list',
        component: _announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_0__.AnnouncementListComponent,
    },
];
class AnnouncementRoutingModule {
}
AnnouncementRoutingModule.ɵfac = function AnnouncementRoutingModule_Factory(t) { return new (t || AnnouncementRoutingModule)(); };
AnnouncementRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AnnouncementRoutingModule });
AnnouncementRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AnnouncementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 80560:
/*!***********************************************************!*\
  !*** ./src/app/admin/Announcement/announcement.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementModule": () => (/* binding */ AnnouncementModule)
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
/* harmony import */ var _announcement_add_edit_announcement_add_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./announcement-add-edit/announcement-add-edit.component */ 91334);
/* harmony import */ var _announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./announcement-list/announcement-list.component */ 7537);
/* harmony import */ var _announcement_list_dialog_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./announcement-list/dialog-delete.component */ 97247);
/* harmony import */ var _announcement_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./announcement-routing.module */ 21644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);





// Interceptor

// Primeng











class AnnouncementModule {
}
AnnouncementModule.ɵfac = function AnnouncementModule_Factory(t) { return new (t || AnnouncementModule)(); };
AnnouncementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AnnouncementModule });
AnnouncementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.NbAuthJWTInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpErrorInterceptor, multi: true }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _announcement_routing_module__WEBPACK_IMPORTED_MODULE_5__.AnnouncementRoutingModule,
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AnnouncementModule, { declarations: [_announcement_add_edit_announcement_add_edit_component__WEBPACK_IMPORTED_MODULE_2__.AnnouncementAddEditComponent, _announcement_list_announcement_list_component__WEBPACK_IMPORTED_MODULE_3__.AnnouncementListComponent, _announcement_list_dialog_delete_component__WEBPACK_IMPORTED_MODULE_4__.DialogDeleteComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _announcement_routing_module__WEBPACK_IMPORTED_MODULE_5__.AnnouncementRoutingModule,
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

/***/ 53741:
/*!*********************************************************************!*\
  !*** ./src/app/admin/Announcement/services/announcement.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementService": () => (/* binding */ AnnouncementService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/api-constant */ 79374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/auth */ 82284);






class AnnouncementService {
    constructor(announcementServicehttp, authService) {
        this.announcementServicehttp = announcementServicehttp;
        this.authService = authService;
        this.announcement = {};
        //pass select Announcement Details in Announcement-Edit
        this.announcementDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.authService.onTokenChange().subscribe((token) => {
            if (token.isValid()) {
                this.announcement = token.getPayload(); // here we receive a payload from the token and assigns it to our `announcement` variable
            }
        });
    }
    setAnnouncementDetails(user) {
        this.announcementDetails.next(user);
    }
    getAnnouncementDetails() {
        return this.announcementDetails.asObservable();
    }
    /**
     * Announcement List
     * @returns
     */
    getannouncementList() {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.ANNOUNCEMENT.LIST);
        return this.announcementServicehttp.get(apiURL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
    /**
     * Delete Announcement
     * @param id
     * @returns
     *
     */
    deleteAnnouncement(id) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(`${_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.ANNOUNCEMENT.DELETE}?id=${id}`);
        return this.announcementServicehttp.put(apiURL, null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
    /**
     * Update Announcement details
     * @param requestBody
     * @returns
     *
     */
    updateAnnouncement(requestBody) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(`${_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.ANNOUNCEMENT.UPDATE}`);
        return this.announcementServicehttp.put(apiURL, requestBody).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
    /**
     * Create Announcement
     * @param requestBody
     * @returns
     *
     */
    CreateAnnouncement(requestBody) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(`${_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.ANNOUNCEMENT.ADD}`);
        console.log(requestBody);
        return this.announcementServicehttp.post(apiURL, requestBody).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
}
AnnouncementService.ɵfac = function AnnouncementService_Factory(t) { return new (t || AnnouncementService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_7__.NbAuthService)); };
AnnouncementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AnnouncementService, factory: AnnouncementService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_Announcement_announcement_module_ts.js.map
