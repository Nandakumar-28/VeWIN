"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_admin_bestperformer_bestperformer_module_ts"],{

/***/ 7377:
/*!************************************************************************************************!*\
  !*** ./src/app/admin/bestperformer/bestperformer-add-edit/bestperformer-add-edit.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BestperformerAddEditComponent": () => (/* binding */ BestperformerAddEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/route-path.constant */ 7098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_bestperformer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/bestperformer.service */ 3354);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 8253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/autocomplete */ 1338);











function BestperformerAddEditComponent_ng_container_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name is required / Only select search User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BestperformerAddEditComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BestperformerAddEditComponent_ng_container_13_p_1_Template, 2, 0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.AddUserForm.controls.name.errors.required);
} }
function BestperformerAddEditComponent_ng_container_19_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Sale is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BestperformerAddEditComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BestperformerAddEditComponent_ng_container_19_p_1_Template, 2, 0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.AddUserForm.controls.sales.errors.required);
} }
function BestperformerAddEditComponent_ng_container_25_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Remarks is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BestperformerAddEditComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BestperformerAddEditComponent_ng_container_25_p_1_Template, 2, 0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.AddUserForm.controls.remarks.errors.required);
} }
function BestperformerAddEditComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Remarks should not exceed 100 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function BestperformerAddEditComponent_ng_container_34_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " From Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BestperformerAddEditComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BestperformerAddEditComponent_ng_container_34_p_1_Template, 2, 0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.AddUserForm.controls.fdate.errors.required);
} }
function BestperformerAddEditComponent_ng_container_42_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " To Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BestperformerAddEditComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BestperformerAddEditComponent_ng_container_42_p_1_Template, 2, 0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.AddUserForm.controls.tdate.errors.required);
} }
class BestperformerAddEditComponent {
    constructor(formBuilder, router, aRoute, userService, toastrService, datePipe) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.aRoute = aRoute;
        this.userService = userService;
        this.toastrService = toastrService;
        this.datePipe = datePipe;
        this.submitted = false;
        this.data_loading = false;
    }
    ngOnInit() {
        this.AddUserFormInitialize();
        if (this.router.url.indexOf("edit") !== -1) {
            // this.data_loading = true;
            const id = this.aRoute.snapshot.paramMap.get("title");
            this.page_title = "Edit Bestperformer";
        }
        else {
            this.page_title = "Add Bestperformer";
            this.AddUserForm.reset();
        }
        // Check if user details are passed user list, service to user-edit
        this.userSubscription = this.userService.getUserDetails().subscribe(user => {
            if (user) {
                this.userDetails = user;
                // Pre-fill the form with user details
                this.AddUserForm.patchValue({
                    name: this.userDetails.refid,
                    sales: this.userDetails.sales,
                    remarks: this.userDetails.remarks,
                    fdate: new Date(this.userDetails.fdate),
                    tdate: new Date(this.userDetails.tdate),
                });
            }
            else {
                this.AddUserForm.reset(); // Ensure the form is reset when no user details are present
            }
        });
        // Subscribe to changes in the 'name' control and make API requests
        this.AddUserForm.get('name').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((name) => {
            // Make the API request only if the name has at least 3 characters
            if (name.length >= 3) {
                return this.userService.getReferralIds(name);
            }
            else {
                // Return an empty observable if the input length is less than 3 characters
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
            }
        })).subscribe((response) => {
            this.results = response;
        });
    }
    ngOnDestroy() {
        // Unsubscribe to prevent multiple subscriptions when leaving the component
        this.userSubscription.unsubscribe();
    }
    onNameInputChange(event) {
        const name = event.query;
        // Make the API request only if the name has at least 3 characters
        if (name.length >= 3) {
            this.userService.getReferralIds(name).subscribe((response) => {
                let data = [];
                response.forEach((item) => {
                    data.push(item.idAndName);
                });
                this.results = data;
            });
        }
        else {
            // Clear the results if the input length is less than 3 characters
            this.results = [];
        }
    }
    selectResult(result) {
        this.AddUserForm.patchValue({
            name: result.idAndName,
            // refid: result.idAndName.split('-')[0] , // Extract the ID from the result
            refid: result.idAndName,
        });
        this.results = []; // Clear the results after selection
    }
    /**
     * User Form Initialize
     */
    AddUserFormInitialize() {
        this.AddUserForm = this.formBuilder.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            sales: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            remarks: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)]],
            fdate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            tdate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            // refid: [0], // Add the refid control
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.AddUserForm.invalid) {
            return;
        }
        // const formData = this.AddUserForm.value;
        // Format the date strings before sending them to the server
        const formattedFromDate = this.datePipe.transform(this.AddUserForm.value.fdate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        const formattedToDate = this.datePipe.transform(this.AddUserForm.value.tdate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        // Get the current date and time in the desired format
        const modifiedDate = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        // Check if the URL contains 'edit' to differentiate between create and edit actions
        if (this.router.url.indexOf("edit") !== -1) {
            // For editing, form a request body with put method fields
            const requestBody = {
                id: this.userDetails.id,
                refid: this.AddUserForm.value.name,
                sales: this.AddUserForm.value.sales,
                remarks: this.AddUserForm.value.remarks,
                fdate: formattedFromDate,
                tdate: formattedToDate,
                isdeleted: "string",
                createdby: "Admin",
                createdon: modifiedDate,
                modifiedby: "Admin",
                modifiedon: modifiedDate, // Similarly update these fields with appropriate values
            };
            this.userService.updateUser(requestBody)
                .subscribe((response) => {
                // this.backToUserList();
                if (response.statusCode === 200) {
                    this.toastrService.show(response.statusMessage, "Success", {
                        status: "success",
                        duration: 8000,
                    });
                }
                else {
                    this.toastrService.show(response.statusMessage, "Warning", {
                        status: "warning",
                        duration: 8000,
                    });
                }
                this.backToUserList();
            });
        }
        else {
            // For creating a new announcement
            const requestBody = {
                refid: this.AddUserForm.value.name,
                sales: this.AddUserForm.value.sales,
                remarks: this.AddUserForm.value.remarks,
                fdate: formattedFromDate,
                tdate: formattedToDate,
                isdeleted: "string",
                createdby: "Admin",
                createdon: modifiedDate,
                modifiedby: "Admin",
                modifiedon: modifiedDate, // Similarly update these fields with appropriate values
            };
            this.userService.Createbestperformer(requestBody)
                .subscribe((response) => {
                if (response.statusCode === 200) {
                    this.toastrService.show(response.statusMessage, "Success", {
                        status: "success",
                        duration: 8000,
                    });
                }
                else {
                    this.toastrService.show(response.statusMessage, "Warning", {
                        status: "warning",
                        duration: 8000,
                    });
                }
                this.backToUserList();
            });
        }
    }
    /**
     * Back to User List
     * @param
     * @returns
     */
    backToUserList() {
        this.router.navigate([_shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ADMIN, _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.DASHBOARD]);
    }
}
BestperformerAddEditComponent.ɵfac = function BestperformerAddEditComponent_Factory(t) { return new (t || BestperformerAddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_bestperformer_service__WEBPACK_IMPORTED_MODULE_1__.BestperformerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe)); };
BestperformerAddEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BestperformerAddEditComponent, selectors: [["ngx-bestperformer-add-edit"]], decls: 50, vars: 15, consts: [[1, "row"], [1, "col-md-12"], [1, "text-center", "bold-text"], ["nbSpinnerStatus", "info", 3, "nbSpinner"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row", "justify-content-center"], ["for", "name", 1, "label", "col-sm-3", "col-form-label"], [1, "col-sm-7"], [1, "p-fluid"], ["formControlName", "name", "placeholder", " Type to search the bestperformer name", 3, "suggestions", "forceSelection", "minLength", "completeMethod"], [4, "ngIf"], ["for", "sales", 1, "label", "col-sm-3", "col-form-label"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "sales"], ["for", "remarks", 1, "label", "col-sm-3", "col-form-label"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "remarks"], ["for", "fdate", 1, "label", "col-sm-3", "col-form-label"], ["nbInput", "", "fullWidth", "", "formControlName", "fdate", 3, "nbDatepicker"], ["fromDatepicker", ""], ["for", "tdate", 1, "label", "col-sm-3", "col-form-label"], ["nbInput", "", "fullWidth", "", "formControlName", "tdate", 3, "nbDatepicker"], ["toDatepicker", ""], ["type", "submit", "nbButton", "", "status", "primary", 3, "disabled"], ["nbButton", "", "status", "danger", "routerLinkActive", "router-link-active", 3, "click"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]], template: function BestperformerAddEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nb-card-body", 3)(6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function BestperformerAddEditComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Search Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "span", 8)(12, "p-autoComplete", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("completeMethod", function BestperformerAddEditComponent_Template_p_autoComplete_completeMethod_12_listener($event) { return ctx.onNameInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BestperformerAddEditComponent_ng_container_13_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Sale *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, BestperformerAddEditComponent_ng_container_19_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 5)(21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Remarks *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, BestperformerAddEditComponent_ng_container_25_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, BestperformerAddEditComponent_ng_container_26_Template, 3, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 5)(28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "From Date *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 16)(32, "nb-datepicker", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, BestperformerAddEditComponent_ng_container_34_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 5)(36, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "To Date *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 19)(40, "nb-datepicker", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, BestperformerAddEditComponent_ng_container_42_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 5)(44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BestperformerAddEditComponent_Template_button_click_47_listener() { return ctx.backToUserList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](33);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.page_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbSpinner", ctx.data_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.AddUserForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("suggestions", ctx.results)("forceSelection", true)("minLength", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddUserForm.controls.name.touched && ctx.AddUserForm.controls.name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddUserForm.controls.sales.touched && ctx.AddUserForm.controls.sales.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddUserForm.controls.remarks.touched && ctx.AddUserForm.controls.remarks.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddUserForm.get("remarks").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddUserForm.controls.fdate.touched && ctx.AddUserForm.controls.fdate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbDatepicker", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddUserForm.controls.tdate.touched && ctx.AddUserForm.controls.tdate.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.submitted || !ctx.AddUserForm.valid || ctx.data_loading);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSpinnerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_10__.AutoComplete, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDatepickerComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive], styles: [".bold-text[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlc3RwZXJmb3JtZXItYWRkLWVkaXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcQW5ndWxhciUyMFByb2plY3RcXFZlV2luXFxzcmNcXGFwcFxcYWRtaW5cXGJlc3RwZXJmb3JtZXJcXGJlc3RwZXJmb3JtZXItYWRkLWVkaXRcXGJlc3RwZXJmb3JtZXItYWRkLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6ImJlc3RwZXJmb3JtZXItYWRkLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9sZC10ZXh0IHtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG4iLCIuYm9sZC10ZXh0IHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59Il19 */"] });


/***/ }),

/***/ 9602:
/*!******************************************************************************************!*\
  !*** ./src/app/admin/bestperformer/bestperformer-list/bestperformer-delete.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BestperformerDeleteComponent": () => (/* binding */ BestperformerDeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 8253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



class BestperformerDeleteComponent {
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
BestperformerDeleteComponent.ɵfac = function BestperformerDeleteComponent_Factory(t) { return new (t || BestperformerDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDialogRef)); };
BestperformerDeleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BestperformerDeleteComponent, selectors: [["ngx-bestperformer-delete"]], decls: 40, vars: 12, consts: [[1, "text-center"], ["nbButton", "", "status", "success", 3, "click"], ["nbButton", "", "status", "primary", 3, "click"]], template: function BestperformerDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body")(5, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Are you sure that you want to delete this ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul")(11, "li")(12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li")(16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sales:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Remarks:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li")(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "From Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li")(29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "To Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nb-card-footer", 0)(34, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BestperformerDeleteComponent_Template_button_click_34_listener() { return ctx.deleteBestperformer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BestperformerDeleteComponent_Template_button_click_37_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ",\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.refid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.refid, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.sales, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.remarks, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 6, ctx.user.fdate, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](32, 9, ctx.user.tdate, "dd/MM/yyyy"), "");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 1909:
/*!****************************************************************************************!*\
  !*** ./src/app/admin/bestperformer/bestperformer-list/bestperformer-list.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BestperformerListComponent": () => (/* binding */ BestperformerListComponent)
/* harmony export */ });
/* harmony import */ var _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/route-path.constant */ 7098);
/* harmony import */ var _bestperformer_delete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bestperformer-delete.component */ 9602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 8253);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_bestperformer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bestperformer.service */ 3354);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/confirmdialog */ 8601);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);










function BestperformerListComponent_ng_template_12_ng_container_1_th_1_p_sortIcon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-sortIcon", 14);
} if (rf & 2) {
    const col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", col_r3.field)("id", col_r3.field + "-sort");
} }
function BestperformerListComponent_ng_template_12_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BestperformerListComponent_ng_template_12_ng_container_1_th_1_p_sortIcon_1_Template, 1, 2, "p-sortIcon", 13);
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
function BestperformerListComponent_ng_template_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BestperformerListComponent_ng_template_12_ng_container_1_th_1_Template, 4, 5, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r3.show);
} }
function BestperformerListComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BestperformerListComponent_ng_template_12_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.columns);
} }
function BestperformerListComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 16)(14, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BestperformerListComponent_ng_template_13_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const user_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.editBestperformer(user_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BestperformerListComponent_ng_template_13_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const user_r8 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.confirmDelete(user_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nbTooltip", user_r8.refid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r8.refid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nbTooltip", user_r8.sales);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r8.sales);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nbTooltip", user_r8.remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r8.remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 8, user_r8.fdate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 11, user_r8.tdate, "dd/MM/yyyy"));
} }
const _c0 = function () { return { width: "50vw" }; };
class BestperformerListComponent {
    constructor(dialogConfirmService, toastrService, router, aRoute, userService, dialogService) {
        this.dialogConfirmService = dialogConfirmService;
        this.toastrService = toastrService;
        this.router = router;
        this.aRoute = aRoute;
        this.userService = userService;
        this.dialogService = dialogService;
        this.itemsPerPage = [10, 25, 50];
        this.first = 0;
        this.rows = 10;
    }
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
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ADMIN,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.BESTPERFORMER,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.BESTPERFORMERS.CREATE,
        ]);
    }
    /**
     * Edit User
     * @param user_id
     * @returns
     */
    editBestperformer(user) {
        this.userService.setUserDetails(user); // Pass the selected user details to the service
        this.router.navigate([
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ADMIN,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.BESTPERFORMER,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.BESTPERFORMERS.EDIT,
            user.id
        ]);
    }
    /**
     * Delete User confirmation
     * @param userId, userName
     * @returns
     */
    confirmDelete(user) {
        this.dialogService.open(_bestperformer_delete_component__WEBPACK_IMPORTED_MODULE_1__.BestperformerDeleteComponent, {
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
        this.userService.deleteUser(id).subscribe((response) => {
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
    /**
     * Company List
     * @param null
     * @returns
     */
    userList() {
        //this.users  =this.staticUsers;
        this.userService.getBestperformerList().subscribe((response) => {
            console.log(response);
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
        }, (error) => {
            console.log(error);
        });
    }
}
BestperformerListComponent.ɵfac = function BestperformerListComponent_Factory(t) { return new (t || BestperformerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_bestperformer_service__WEBPACK_IMPORTED_MODULE_2__.BestperformerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogService)); };
BestperformerListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BestperformerListComponent, selectors: [["ngx-bestperformer-list"]], decls: 14, vars: 11, consts: [[1, "inline-form-card", "full-card"], [1, "row"], [1, "col-md-9", "text-center", "bold-text"], [1, "col-md-3"], [1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "card"], ["scrollHeight", "400px", 3, "value", "resizableColumns", "paginator", "rows", "showCurrentPageReport", "autoLayout", "rowsPerPageOptions", "scrollable"], ["pTemplate", "header"], ["pTemplate", "body"], [4, "ngFor", "ngForOf"], [1, "text-center"], ["pResizableColumn", "", "class", "text-center", 3, "pSortableColumn", "class", 4, "ngIf"], ["pResizableColumn", "", 1, "text-center", 3, "pSortableColumn"], ["class", "sort-icon", 3, "field", "id", 4, "ngIf"], [1, "sort-icon", 3, "field", "id"], ["nbTooltipPlacement", "top", 3, "nbTooltip"], [1, "text-center", "action"], ["routerLinkActive", "router-link-active", "nbTooltip", "Edit", "nbTooltipPlacement", "top", 1, "btn", "btn-outline-primary", "btn-sm", "action-button", 3, "click"], ["icon", "edit", "pack", "eva", 1, "action-icons"], ["nbTooltip", "Delete", "nbTooltipPlacement", "top", 1, "btn", "btn-outline-danger", "btn-sm", "action-button", 3, "click"], ["icon", "close", "pack", "eva", 1, "action-icons"]], template: function BestperformerListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-confirmDialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nb-card-header")(3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "BestPerformer List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BestperformerListComponent_Template_button_click_7_listener() { return ctx.createBestperformer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Create BestPerformer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nb-card-body")(10, "div", 5)(11, "p-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, BestperformerListComponent_ng_template_12_Template, 4, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, BestperformerListComponent_ng_template_13_Template, 20, 14, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.users)("resizableColumns", true)("paginator", true)("rows", ctx.rows)("showCurrentPageReport", true)("autoLayout", true)("rowsPerPageOptions", ctx.itemsPerPage)("scrollable", true);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialog, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_table__WEBPACK_IMPORTED_MODULE_8__.ResizableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortIcon, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTooltipDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".bold-text[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlc3RwZXJmb3JtZXItbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxBbmd1bGFyJTIwUHJvamVjdFxcVmVXaW5cXHNyY1xcYXBwXFxhZG1pblxcYmVzdHBlcmZvcm1lclxcYmVzdHBlcmZvcm1lci1saXN0XFxiZXN0cGVyZm9ybWVyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6ImJlc3RwZXJmb3JtZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2xkLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcbiIsIi5ib2xkLXRleHQge1xuICBmb250LXNpemU6IGxhcmdlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 9521:
/*!*********************************************************************!*\
  !*** ./src/app/admin/bestperformer/bestperformer-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BestperformerRoutingModule": () => (/* binding */ BestperformerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _bestperformer_list_bestperformer_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bestperformer-list/bestperformer-list.component */ 1909);
/* harmony import */ var _bestperformer_add_edit_bestperformer_add_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bestperformer-add-edit/bestperformer-add-edit.component */ 7377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: 'list',
        component: _bestperformer_list_bestperformer_list_component__WEBPACK_IMPORTED_MODULE_0__.BestperformerListComponent,
    },
    {
        path: 'create',
        component: _bestperformer_add_edit_bestperformer_add_edit_component__WEBPACK_IMPORTED_MODULE_1__.BestperformerAddEditComponent,
    },
    {
        path: 'edit/:id',
        component: _bestperformer_add_edit_bestperformer_add_edit_component__WEBPACK_IMPORTED_MODULE_1__.BestperformerAddEditComponent,
    },
    {
        path: '',
        redirectTo: 'list',
        component: _bestperformer_list_bestperformer_list_component__WEBPACK_IMPORTED_MODULE_0__.BestperformerListComponent,
    },
];
class BestperformerRoutingModule {
}
BestperformerRoutingModule.ɵfac = function BestperformerRoutingModule_Factory(t) { return new (t || BestperformerRoutingModule)(); };
BestperformerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BestperformerRoutingModule });
BestperformerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BestperformerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5077:
/*!*************************************************************!*\
  !*** ./src/app/admin/bestperformer/bestperformer.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BestperformerModule": () => (/* binding */ BestperformerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ 8253);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 268);
/* harmony import */ var _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/interceptor/jwt-interceptor */ 4338);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ 3489);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/confirmdialog */ 8601);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/autocomplete */ 1338);
/* harmony import */ var _bestperformer_list_bestperformer_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bestperformer-list/bestperformer-list.component */ 1909);
/* harmony import */ var _bestperformer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bestperformer-routing.module */ 9521);
/* harmony import */ var _bestperformer_list_bestperformer_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bestperformer-list/bestperformer-delete.component */ 9602);
/* harmony import */ var _bestperformer_add_edit_bestperformer_add_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bestperformer-add-edit/bestperformer-add-edit.component */ 7377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);





// Interceptor

// Primeng












class BestperformerModule {
}
BestperformerModule.ɵfac = function BestperformerModule_Factory(t) { return new (t || BestperformerModule)(); };
BestperformerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BestperformerModule });
BestperformerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.NbAuthJWTInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpErrorInterceptor, multi: true }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _bestperformer_routing_module__WEBPACK_IMPORTED_MODULE_3__.BestperformerRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbActionsModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbAutocompleteModule,
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
            primeng_autocomplete__WEBPACK_IMPORTED_MODULE_16__.AutoCompleteModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BestperformerModule, { declarations: [_bestperformer_list_bestperformer_list_component__WEBPACK_IMPORTED_MODULE_2__.BestperformerListComponent, _bestperformer_list_bestperformer_delete_component__WEBPACK_IMPORTED_MODULE_4__.BestperformerDeleteComponent, _bestperformer_add_edit_bestperformer_add_edit_component__WEBPACK_IMPORTED_MODULE_5__.BestperformerAddEditComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _bestperformer_routing_module__WEBPACK_IMPORTED_MODULE_3__.BestperformerRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbActionsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbAutocompleteModule,
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
        primeng_dialog__WEBPACK_IMPORTED_MODULE_15__.DialogModule,
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_16__.AutoCompleteModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin_bestperformer_bestperformer_module_ts.js.map