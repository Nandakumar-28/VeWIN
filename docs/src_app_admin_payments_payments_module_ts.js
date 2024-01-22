"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_admin_payments_payments_module_ts"],{

/***/ 2809:
/*!*******************************************************************************!*\
  !*** ./src/app/admin/payments/payment-add-edit/payment-add-edit.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentAddEditComponent": () => (/* binding */ PaymentAddEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/route-path.constant */ 7098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_payments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/payments.service */ 4807);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 8253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _bestperformer_services_bestperformer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bestperformer/services/bestperformer.service */ 3354);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/autocomplete */ 1338);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/calendar */ 1229);













function PaymentAddEditComponent_ng_container_14_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Name is required / Only select Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PaymentAddEditComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PaymentAddEditComponent_ng_container_14_p_1_Template, 2, 0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.GetSalesForm.controls.cid.errors.required);
} }
function PaymentAddEditComponent_ng_container_19_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Year-Month is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PaymentAddEditComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PaymentAddEditComponent_ng_container_19_p_1_Template, 2, 0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.GetSalesForm.controls.monthAndYear.errors.required);
} }
function PaymentAddEditComponent_ng_container_30_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PaymentAddEditComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PaymentAddEditComponent_ng_container_30_p_1_Template, 2, 0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.AddPaymentForm.controls.salesAmount.errors.required);
} }
function PaymentAddEditComponent_ng_container_38_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Date of payment is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PaymentAddEditComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PaymentAddEditComponent_ng_container_38_p_1_Template, 2, 0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.AddPaymentForm.controls.dateOfPayment.errors.required);
} }
function PaymentAddEditComponent_ng_container_44_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Bank is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PaymentAddEditComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PaymentAddEditComponent_ng_container_44_p_1_Template, 2, 0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.AddPaymentForm.controls.bank.errors.required);
} }
function PaymentAddEditComponent_ng_container_50_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Payment details is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PaymentAddEditComponent_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PaymentAddEditComponent_ng_container_50_p_1_Template, 2, 0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.AddPaymentForm.controls.paymentDetails.errors.required);
} }
function PaymentAddEditComponent_ng_container_56_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Remarks is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PaymentAddEditComponent_ng_container_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PaymentAddEditComponent_ng_container_56_p_1_Template, 2, 0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.AddPaymentForm.controls.remarks.errors.required);
} }
function PaymentAddEditComponent_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Remarks should not exceed 100 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
class PaymentAddEditComponent {
    constructor(formBuilder, router, aRoute, paymentService, toastrService, datePipe, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.aRoute = aRoute;
        this.paymentService = paymentService;
        this.toastrService = toastrService;
        this.datePipe = datePipe;
        this.userService = userService;
        this.submitted = false;
        this.data_loading = false;
        //summit button size 
        this.small = 'small';
    }
    ngOnInit() {
        this.AddPaymentFormInitialize();
        if (this.router.url.indexOf("edit") !== -1) {
            // this.data_loading = true;
            const id = this.aRoute.snapshot.paramMap.get("title");
            this.page_title = "Edit Payment Details";
            // Disable form controls for editing
            this.GetSalesForm.get('cid').disable();
            this.GetSalesForm.get('monthAndYear').disable();
        }
        else {
            this.page_title = "Add Payment Details";
            this.AddPaymentForm.reset();
            // Enable form controls for adding
            this.GetSalesForm.get('cid').enable();
            this.GetSalesForm.get('monthAndYear').enable();
        }
        // Check if user details are passed user list, service to user-edit
        this.paymentSubscription = this.paymentService.getUserDetails().subscribe(user => {
            if (user) {
                this.paymentDetails = user;
                // Pre-fill the form with user details
                this.AddPaymentForm.patchValue({
                    salesAmount: this.paymentDetails.salesAmount,
                    dateOfPayment: new Date(this.paymentDetails.dateOfPayment),
                    bank: this.paymentDetails.bank,
                    paymentDetails: this.paymentDetails.paymentDetails,
                    remarks: this.paymentDetails.remarks,
                });
                // Extracted year and month values from the paymentDetails
                const year = this.paymentDetails.year;
                const month = this.paymentDetails.month;
                // Convert the month string to a numerical representation (e.g., "January" to 0, "February" to 1, etc.)
                const monthIndex = new Date(`${month} 1, 2000`).getMonth();
                this.GetSalesForm.patchValue({
                    cid: this.paymentDetails.cid,
                    monthAndYear: new Date(year, monthIndex)
                });
            }
            else {
                this.AddPaymentForm.reset(); // Ensure the form is reset when no user details are present
            }
        });
        // Subscribe to changes in the 'name' control and make API requests
        this.GetSalesForm.get('cid').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((cid) => {
            // Make the API request only if the name has at least 3 characters
            if (cid.length >= 3) {
                return this.userService.getReferralIds(cid);
            }
            else {
                // Return an empty observable if the input length is less than 3 characters
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
            }
        })).subscribe((response) => {
            this.results = response;
        });
    }
    ngOnDestroy() {
        // Unsubscribe to prevent multiple subscriptions when leaving the component
        this.paymentSubscription.unsubscribe();
    }
    /**
     * Payment Details Form Initialize
     */
    AddPaymentFormInitialize() {
        this.AddPaymentForm = this.formBuilder.group({
            salesAmount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            dateOfPayment: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            bank: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            paymentDetails: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            remarks: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(100)]],
        });
        this.GetSalesForm = this.formBuilder.group({
            cid: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            monthAndYear: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        });
    }
    onNameInputChange(event) {
        const cid = event.query;
        // Make the API request only if the name has at least 3 characters
        if (cid.length >= 3) {
            this.userService.getReferralIds(cid).subscribe((response) => {
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
    totalSales() {
        if (this.GetSalesForm.invalid) {
            return;
        }
        const selectedResult = this.GetSalesForm.value.cid;
        const customerId = selectedResult.split('-')[0]; // Extract the ID from the result
        // Extract the month and year from the selected date
        const selectedDate = this.GetSalesForm.value.monthAndYear;
        // Convert the month to a string representation (e.g., January, February)
        const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(selectedDate);
        const year = selectedDate.getFullYear().toString(); // Convert the year to a string
        const requestBody = {
            customerId: customerId,
            month: month,
            year: year
        };
        this.paymentService.getTotalSales(requestBody)
            .subscribe((response) => {
            this.sales = response;
            // Pre-fill the form with user details
            this.AddPaymentForm.patchValue({
                salesAmount: this.sales.totalSales,
            });
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.AddPaymentForm.invalid) {
            return;
        }
        // Format the date strings before sending them to the server
        const formattedDate = this.datePipe.transform(this.AddPaymentForm.value.dateOfPayment, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        // Get the current date and time in the desired format
        const modifiedDate = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        // Check if the URL contains 'edit' to differentiate between create and edit actions
        if (this.router.url.indexOf("edit") !== -1) {
            //customer id split in id
            // const selectedResult = this.AddPaymentForm.value.cid;
            // const customerId = selectedResult.split('-')[0]; // Extract the ID from the result
            // For editing, form a request body with put method fields
            const requestBody = {
                id: this.paymentDetails.id,
                cid: this.paymentDetails.cid,
                month: this.paymentDetails.month,
                year: this.paymentDetails.year,
                salesAmount: this.AddPaymentForm.value.salesAmount,
                dateOfPayment: formattedDate,
                bank: this.AddPaymentForm.value.bank,
                paymentDetails: this.AddPaymentForm.value.paymentDetails,
                remarks: this.AddPaymentForm.value.remarks,
                modifiedby: "Admin",
                modifiedon: modifiedDate,
            };
            this.paymentService.updatePayment(requestBody)
                .subscribe((response) => {
                if (true /* Ok */) {
                    this.toastrService.show(response["message"], "Success", {
                        status: "success",
                        duration: 8000,
                    });
                }
                else {}
                this.router.navigate([_shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ADMIN, _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.PAYMENT, _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.PAYMENTS.LIST,]);
            });
        }
        else {
            //customer id split in id
            const selectedResult = this.GetSalesForm.value.cid;
            const customerId = selectedResult.split('-')[0]; // Extract the ID from the result
            // Extract the month and year from the selected date
            const selectedDate = this.GetSalesForm.value.monthAndYear;
            // Convert the month to a string representation (e.g., January, February)
            const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(selectedDate);
            const year = selectedDate.getFullYear().toString(); // Convert the year to a string
            // For creating a new announcement
            const requestBody = {
                cid: customerId,
                month: month,
                year: year,
                salesAmount: this.AddPaymentForm.value.salesAmount.toString(),
                dateOfPayment: formattedDate,
                bank: this.AddPaymentForm.value.bank,
                paymentDetails: this.AddPaymentForm.value.paymentDetails,
                remarks: this.AddPaymentForm.value.remarks,
                createdby: "Admin",
                createdon: modifiedDate,
                modifiedby: "Admin",
                modifiedon: modifiedDate, // Similarly update these fields with appropriate values
            };
            this.paymentService.CreatePayment(requestBody)
                .subscribe((response) => {
                if (true /* Ok */) {
                    this.toastrService.show(response["message"], "Success", {
                        status: "success",
                        duration: 8000,
                    });
                }
                else {}
                //  this.backToPaymentList();
                this.router.navigate([_shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ADMIN, _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.PAYMENT, _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.PAYMENTS.LIST,]);
            });
        }
    }
    /**
     * Back to Payment List
     * @param
     * @returns
     */
    backToPaymentList() {
        this.router.navigate([_shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ADMIN, _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.DASHBOARD]);
    }
}
PaymentAddEditComponent.ɵfac = function PaymentAddEditComponent_Factory(t) { return new (t || PaymentAddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_payments_service__WEBPACK_IMPORTED_MODULE_1__.PaymentsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_bestperformer_services_bestperformer_service__WEBPACK_IMPORTED_MODULE_2__.BestperformerService)); };
PaymentAddEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PaymentAddEditComponent, selectors: [["ngx-payment-add-edit"]], decls: 65, vars: 21, consts: [[1, "row"], [1, "col-md-12"], [1, "text-center", "bold-text"], [1, "text-center"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "cid", 1, "label", "col-sm-3", "col-form-label"], [1, "flex", "justify-content-center"], [1, "p-float-label"], ["formControlName", "cid", 3, "suggestions", "forceSelection", "minLength", "completeMethod"], [4, "ngIf"], ["for", "monthAndYear", 1, "label", "col-sm-2", "col-form-label"], [1, "col-sm-2"], ["formControlName", "monthAndYear", "view", "month", "dateFormat", "mm/yy", 3, "readonlyInput"], ["type", "submit", "nbButton", "", "outline", "", "status", "success", "size", "small", 3, "disabled"], ["nbSpinnerStatus", "info", 3, "nbSpinner"], [1, "form-group", "row", "justify-content-center"], ["for", "salesAmount", 1, "label", "col-sm-3", "col-form-label"], [1, "col-sm-7"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "salesAmount", "disabled", ""], ["for", "dateOfPayment", 1, "label", "col-sm-3", "col-form-label"], ["nbInput", "", "fullWidth", "", "formControlName", "dateOfPayment", 3, "nbDatepicker"], ["fromDatepicker", ""], ["for", "bank", 1, "label", "col-sm-3", "col-form-label"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "bank"], ["for", "paymentDetails", 1, "label", "col-sm-3", "col-form-label"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "paymentDetails"], ["for", "remarks", 1, "label", "col-sm-3", "col-form-label"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "remarks"], ["type", "submit", "nbButton", "", "status", "primary", 3, "disabled"], ["nbButton", "", "status", "danger", "routerLinkActive", "router-link-active", 3, "click"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]], template: function PaymentAddEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PaymentAddEditComponent_Template_form_ngSubmit_6_listener() { return ctx.totalSales(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Search Customer Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7)(12, "span", 8)(13, "p-autoComplete", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("completeMethod", function PaymentAddEditComponent_Template_p_autoComplete_completeMethod_13_listener($event) { return ctx.onNameInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, PaymentAddEditComponent_ng_container_14_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Select Year-Month *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "p-calendar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, PaymentAddEditComponent_ng_container_19_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 12)(21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "nb-card-body", 15)(24, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PaymentAddEditComponent_Template_form_ngSubmit_24_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16)(26, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Sales Amount *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, PaymentAddEditComponent_ng_container_30_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 16)(32, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " Date of payment *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "input", 21)(36, "nb-datepicker", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, PaymentAddEditComponent_ng_container_38_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 16)(40, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Bank *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, PaymentAddEditComponent_ng_container_44_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 16)(46, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Payment details *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, PaymentAddEditComponent_ng_container_50_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 16)(52, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Remarks *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, PaymentAddEditComponent_ng_container_56_Template, 2, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, PaymentAddEditComponent_ng_container_57_Template, 3, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 16)(59, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentAddEditComponent_Template_button_click_62_listener() { return ctx.backToPaymentList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.page_title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.GetSalesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("suggestions", ctx.results)("forceSelection", true)("minLength", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx.GetSalesForm.get("cid").disabled ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.GetSalesForm.controls.cid.touched && ctx.GetSalesForm.controls.cid.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx.GetSalesForm.get("monthAndYear").disabled ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.GetSalesForm.controls.monthAndYear.touched && ctx.GetSalesForm.controls.monthAndYear.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.GetSalesForm.valid || ctx.submitted || ctx.data_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nbSpinner", ctx.data_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.AddPaymentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.AddPaymentForm.controls.salesAmount.touched && ctx.AddPaymentForm.controls.salesAmount.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nbDatepicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.AddPaymentForm.controls.dateOfPayment.touched && ctx.AddPaymentForm.controls.dateOfPayment.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.AddPaymentForm.controls.bank.touched && ctx.AddPaymentForm.controls.bank.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.AddPaymentForm.controls.paymentDetails.touched && ctx.AddPaymentForm.controls.paymentDetails.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.AddPaymentForm.controls.remarks.touched && ctx.AddPaymentForm.controls.remarks.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.AddPaymentForm.get("remarks").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.submitted || !ctx.AddPaymentForm.valid || ctx.data_loading);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_11__.AutoComplete, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, primeng_calendar__WEBPACK_IMPORTED_MODULE_12__.Calendar, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSpinnerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbDatepickerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive], styles: [".bold-text[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtYWRkLWVkaXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcQW5ndWxhciUyMFByb2plY3RcXFZlV2luXFxzcmNcXGFwcFxcYWRtaW5cXHBheW1lbnRzXFxwYXltZW50LWFkZC1lZGl0XFxwYXltZW50LWFkZC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJwYXltZW50LWFkZC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvbGQtdGV4dCB7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuIiwiLmJvbGQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufSJdfQ== */"] });


/***/ }),

/***/ 8926:
/*!**************************************************************************!*\
  !*** ./src/app/admin/payments/payments-list/payment-delete.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDeleteComponent": () => (/* binding */ PaymentDeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 8253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



class PaymentDeleteComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    close() {
        this.dialogRef.close(false); // Close the delete dialog without approving
    }
    deletePayment() {
        this.dialogRef.close(this.user); // Close the delete dialog and trigger the approval action
    }
}
PaymentDeleteComponent.ɵfac = function PaymentDeleteComponent_Factory(t) { return new (t || PaymentDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDialogRef)); };
PaymentDeleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentDeleteComponent, selectors: [["ngx-payment-delete"]], decls: 47, vars: 11, consts: [[1, "text-center"], ["nbButton", "", "status", "success", 3, "click"], ["nbButton", "", "status", "primary", 3, "click"]], template: function PaymentDeleteComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Customer ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li")(16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Month:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sales Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li")(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Date Of Payment:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li")(29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Bank:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li")(33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Payment Details:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li")(37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Remarks:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nb-card-footer", 0)(41, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentDeleteComponent_Template_button_click_41_listener() { return ctx.deletePayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentDeleteComponent_Template_button_click_44_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, ",\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.refid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.cid, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.month, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.salesAmount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 8, ctx.user.dateOfPayment, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.bank, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.paymentDetails, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.remarks, "");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 6666:
/*!*************************************************************************!*\
  !*** ./src/app/admin/payments/payments-list/payments-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsListComponent": () => (/* binding */ PaymentsListComponent)
/* harmony export */ });
/* harmony import */ var _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/route-path.constant */ 7098);
/* harmony import */ var _payment_delete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-delete.component */ 8926);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ 8253);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_payments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/payments.service */ 4807);
/* harmony import */ var _bestperformer_services_bestperformer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../bestperformer/services/bestperformer.service */ 3354);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ 8601);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/autocomplete */ 1338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/calendar */ 1229);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ 8581);

















function PaymentsListComponent_ng_container_19_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Name is required / Only select Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PaymentsListComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PaymentsListComponent_ng_container_19_p_1_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.AddPaymentForm.controls.name.errors.required);
} }
function PaymentsListComponent_ng_container_24_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Year-Month is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PaymentsListComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PaymentsListComponent_ng_container_24_p_1_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.AddPaymentForm.controls.monthAndYear.errors.required);
} }
function PaymentsListComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No Data Found !");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function PaymentsListComponent_div_31_ng_template_3_ng_container_1_th_1_p_sortIcon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-sortIcon", 31);
} if (rf & 2) {
    const col_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", col_r10.field)("id", col_r10.field + "-sort");
} }
function PaymentsListComponent_div_31_ng_template_3_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PaymentsListComponent_div_31_ng_template_3_ng_container_1_th_1_p_sortIcon_1_Template, 1, 2, "p-sortIcon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const col_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](col_r10.field + "-campaigns");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pSortableColumn", col_r10.sort == true ? col_r10.field : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", col_r10.sort == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](col_r10.header);
} }
function PaymentsListComponent_div_31_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PaymentsListComponent_div_31_ng_template_3_ng_container_1_th_1_Template, 4, 5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", col_r10.show);
} }
function PaymentsListComponent_div_31_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PaymentsListComponent_div_31_ng_template_3_ng_container_1_Template, 2, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.columns);
} }
function PaymentsListComponent_div_31_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td", 33)(19, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PaymentsListComponent_div_31_ng_template_4_Template_button_click_19_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const user_r15 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r16.editPayment(user_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "nb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PaymentsListComponent_div_31_ng_template_4_Template_button_click_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const user_r15 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r18.confirmDelete(user_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "nb-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const user_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nbTooltip", user_r15.cid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r15.cid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nbTooltip", user_r15.month);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r15.month);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nbTooltip", user_r15.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r15.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nbTooltip", user_r15.salesAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r15.salesAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nbTooltip", user_r15.dateOfPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 16, user_r15.dateOfPayment, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nbTooltip", user_r15.bank);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r15.bank);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nbTooltip", user_r15.paymentDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", user_r15.paymentDetails, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nbTooltip", user_r15.remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r15.remarks);
} }
function PaymentsListComponent_div_31_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No Data Found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function PaymentsListComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22)(1, "div", 22)(2, "p-table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PaymentsListComponent_div_31_ng_template_3_Template, 4, 1, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PaymentsListComponent_div_31_ng_template_4_Template, 25, 19, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, PaymentsListComponent_div_31_ng_template_5_Template, 3, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r3.users)("resizableColumns", true)("paginator", true)("rows", ctx_r3.rows)("showCurrentPageReport", true)("autoLayout", true)("rowsPerPageOptions", ctx_r3.itemsPerPage)("scrollable", true);
} }
const _c0 = function () { return { width: "50vw" }; };
class PaymentsListComponent {
    constructor(dialogConfirmService, toastrService, router, aRoute, paymentService, dialogService, formBuilder, userService) {
        this.dialogConfirmService = dialogConfirmService;
        this.toastrService = toastrService;
        this.router = router;
        this.aRoute = aRoute;
        this.paymentService = paymentService;
        this.dialogService = dialogService;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.submitted = false;
        this.data_loading = false;
        this.itemsPerPage = [10, 25, 50];
        this.first = 0;
        this.rows = 10;
        //summit button size 
        this.small = 'small';
    }
    ngOnInit() {
        this.AddPaymentFormInitialize();
        // table   with their respective field name and header value
        this.columns = [
            { field: "id", header: "Id", show: true, sort: true },
            { field: "month", header: "Month", show: true, sort: true },
            { field: "year", header: "Year", show: true, sort: true },
            { field: "amount", header: "Amount", show: true, sort: true },
            { field: "date", header: "Date", show: true, sort: true },
            { field: "bank", header: "Bank", show: true, sort: true },
            { field: "payment", header: "Payment", show: true, sort: true },
            { field: "remarks", header: "Remarks", show: true, sort: true },
        ];
        // Subscribe to changes in the 'name' control and make API requests
        this.AddPaymentForm.get('name').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((name) => {
            // Make the API request only if the name has at least 3 characters
            if (name && name.length >= 3) {
                return this.userService.getReferralIds(name);
            }
            else {
                // Return an empty observable if the input length is less than 3 characters
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
            }
        })).subscribe((response) => {
            this.results = response;
        });
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
    /**
     * User Form Initialize
     */
    AddPaymentFormInitialize() {
        this.AddPaymentForm = this.formBuilder.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            monthAndYear: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        });
    }
    /**
     * create Payment
     * @param
     * @returns
     */
    makePayment() {
        this.paymentService.setUserDetails(null);
        this.router.navigate([
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ADMIN,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.PAYMENT,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.PAYMENTS.CREATE,
        ]);
    }
    /**
     * Edit Payment
     * @param user_id
     * @returns
     */
    editPayment(user) {
        this.paymentService.setUserDetails(user); // Pass the selected user details to the service
        this.router.navigate([
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.ADMIN,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.PAYMENT,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.PAYMENTS.EDIT,
            user.id
        ]);
    }
    /**
     * Delete Payment confirmation
     * @param userId, userName
     * @returns
     */
    confirmDelete(user) {
        this.dialogService.open(_payment_delete_component__WEBPACK_IMPORTED_MODULE_1__.PaymentDeleteComponent, {
            context: { user },
        }).onClose.subscribe((result) => {
            if (result) {
                this.deletePayment(user.id);
            }
        });
    }
    /**
     * Delete Payment
     * @param userId
     * @returns
     */
    deletePayment(id) {
        // let deletePostData = { userId: userId };
        this.paymentService.deletePayment(id).subscribe((response) => {
            if (true /* Ok */) {
                this.toastrService.show(response["message"], "Success", {
                    status: "success",
                    duration: 8000,
                });
                this.onSubmit();
            }
            else {}
        }, (error) => {
            console.log(error);
        });
    }
    /**
     * Payment List
     * @param null
     * @returns
     */
    onSubmit() {
        this.submitted = true;
        const selectedName = this.AddPaymentForm.value.name;
        const selectedDate = this.AddPaymentForm.value.monthAndYear;
        if (selectedDate && selectedName) {
            // Convert the month to a string representation (e.g., January, February)
            const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(selectedDate);
            const year = selectedDate.getFullYear().toString(); // Convert the year to a string
            const customerId = selectedName.split('-')[0]; // Extract the ID from the selectedName
            const requestBody = {
                customerId: customerId,
                month: month,
                year: year
            };
            this.paymentApiRequest(requestBody);
        }
        else if (selectedName) {
            const customerId = selectedName.split('-')[0]; // Extract the ID from the selectedName
            const requestBody = {
                customerId: customerId,
                month: "",
                year: ""
            };
            this.paymentApiRequest(requestBody);
        }
        else if (selectedDate) {
            // Convert the month to a string representation (e.g., January, February)
            const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(selectedDate);
            const year = selectedDate.getFullYear().toString(); // Convert the year to a string
            // If the name is not selected, send the API request with an empty name
            const requestBody = {
                customerId: "",
                month: month,
                year: year
            };
            this.paymentApiRequest(requestBody);
        }
    }
    // Extracted the API request logic to a separate function
    paymentApiRequest(requestBody) {
        this.paymentService.getPaymentList(requestBody)
            .subscribe((response) => {
            this.users = response;
        });
    }
}
PaymentsListComponent.ɵfac = function PaymentsListComponent_Factory(t) { return new (t || PaymentsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_payments_service__WEBPACK_IMPORTED_MODULE_2__.PaymentsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bestperformer_services_bestperformer_service__WEBPACK_IMPORTED_MODULE_3__.BestperformerService)); };
PaymentsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PaymentsListComponent, selectors: [["ngx-payments-list"]], decls: 32, vars: 12, consts: [[1, "inline-form-card", "full-card"], [1, "row"], [1, "col-md-9", "text-center", "bold-text"], [1, "col-md-3"], [1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "card", "text-center"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "name", 1, "label", "col-sm-3", "col-form-label"], [1, "col-sm-3"], [1, "p-fluid"], ["formControlName", "name", 3, "suggestions", "forceSelection", "minLength", "completeMethod"], [4, "ngIf"], ["for", "monthAndYear", 1, "label", "col-sm-2", "col-form-label"], [1, "col-sm-2"], ["formControlName", "monthAndYear", "view", "month", "dateFormat", "mm/yy", 3, "readonlyInput"], ["type", "submit", "nbButton", "", "outline", "", "status", "success", "size", "small"], ["class", "text-center", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [1, "text-center"], [1, "card"], ["scrollHeight", "400px", 3, "value", "resizableColumns", "paginator", "rows", "showCurrentPageReport", "autoLayout", "rowsPerPageOptions", "scrollable"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [4, "ngFor", "ngForOf"], ["pResizableColumn", "", "class", "text-center", 3, "pSortableColumn", "class", 4, "ngIf"], ["pResizableColumn", "", 1, "text-center", 3, "pSortableColumn"], ["class", "sort-icon", 3, "field", "id", 4, "ngIf"], [1, "sort-icon", 3, "field", "id"], ["nbTooltipPlacement", "top", 3, "nbTooltip"], [1, "text-center", "action"], ["routerLinkActive", "router-link-active", "nbTooltip", "Edit", "nbTooltipPlacement", "top", 1, "btn", "btn-outline-primary", "btn-sm", "action-button", 3, "click"], ["icon", "edit", "pack", "eva", 1, "action-icons"], ["nbTooltip", "Delete", "nbTooltipPlacement", "top", 1, "btn", "btn-outline-danger", "btn-sm", "action-button", 3, "click"], ["icon", "close", "pack", "eva", 1, "action-icons"], ["colspan", "3", 1, "text-center"]], template: function PaymentsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "p-confirmDialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nb-card-header")(3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Payment List");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3)(7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PaymentsListComponent_Template_button_click_7_listener() { return ctx.makePayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Make Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5)(11, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function PaymentsListComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 7)(14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Search Customer Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9)(17, "span", 10)(18, "p-autoComplete", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("completeMethod", function PaymentsListComponent_Template_p_autoComplete_completeMethod_18_listener($event) { return ctx.onNameInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, PaymentsListComponent_ng_container_19_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Select Year-Month *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "p-calendar", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, PaymentsListComponent_ng_container_24_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 14)(26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, PaymentsListComponent_div_30_Template, 3, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, PaymentsListComponent_div_31_Template, 6, 8, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.AddPaymentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("suggestions", ctx.results)("forceSelection", true)("minLength", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.AddPaymentForm.controls.name.touched && ctx.AddPaymentForm.controls.name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.AddPaymentForm.controls.monthAndYear.touched && ctx.AddPaymentForm.controls.monthAndYear.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.users || ctx.users.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.users && ctx.users.length > 0);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardComponent, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialog, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__.AutoComplete, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, primeng_calendar__WEBPACK_IMPORTED_MODULE_15__.Calendar, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardBodyComponent, primeng_table__WEBPACK_IMPORTED_MODULE_16__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, primeng_table__WEBPACK_IMPORTED_MODULE_16__.ResizableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_16__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_16__.SortIcon, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbTooltipDirective, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbIconComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: [".bold-text[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnRzLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcQW5ndWxhciUyMFByb2plY3RcXFZlV2luXFxzcmNcXGFwcFxcYWRtaW5cXHBheW1lbnRzXFxwYXltZW50cy1saXN0XFxwYXltZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJwYXltZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvbGQtdGV4dCB7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn0iLCIuYm9sZC10ZXh0IHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59Il19 */"] });


/***/ }),

/***/ 3413:
/*!***********************************************************!*\
  !*** ./src/app/admin/payments/payments-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsRoutingModule": () => (/* binding */ PaymentsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _payments_list_payments_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments-list/payments-list.component */ 6666);
/* harmony import */ var _payment_add_edit_payment_add_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-add-edit/payment-add-edit.component */ 2809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: 'create',
        component: _payment_add_edit_payment_add_edit_component__WEBPACK_IMPORTED_MODULE_1__.PaymentAddEditComponent,
    },
    {
        path: 'edit/:id',
        component: _payment_add_edit_payment_add_edit_component__WEBPACK_IMPORTED_MODULE_1__.PaymentAddEditComponent,
    },
    {
        path: 'list',
        component: _payments_list_payments_list_component__WEBPACK_IMPORTED_MODULE_0__.PaymentsListComponent,
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full',
    },
];
class PaymentsRoutingModule {
}
PaymentsRoutingModule.ɵfac = function PaymentsRoutingModule_Factory(t) { return new (t || PaymentsRoutingModule)(); };
PaymentsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PaymentsRoutingModule });
PaymentsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PaymentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 6835:
/*!***************************************************!*\
  !*** ./src/app/admin/payments/payments.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsModule": () => (/* binding */ PaymentsModule)
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
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payments-routing.module */ 3413);
/* harmony import */ var _payments_list_payments_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments-list/payments-list.component */ 6666);
/* harmony import */ var _payment_add_edit_payment_add_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-add-edit/payment-add-edit.component */ 2809);
/* harmony import */ var _payments_list_payment_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payments-list/payment-delete.component */ 8926);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/calendar */ 1229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);





// Interceptor

// Primeng













class PaymentsModule {
}
PaymentsModule.ɵfac = function PaymentsModule_Factory(t) { return new (t || PaymentsModule)(); };
PaymentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PaymentsModule });
PaymentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.NbAuthJWTInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpErrorInterceptor, multi: true }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _payments_routing_module__WEBPACK_IMPORTED_MODULE_2__.PaymentsRoutingModule,
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
            primeng_autocomplete__WEBPACK_IMPORTED_MODULE_16__.AutoCompleteModule,
            primeng_calendar__WEBPACK_IMPORTED_MODULE_17__.CalendarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PaymentsModule, { declarations: [_payments_list_payments_list_component__WEBPACK_IMPORTED_MODULE_3__.PaymentsListComponent,
        _payment_add_edit_payment_add_edit_component__WEBPACK_IMPORTED_MODULE_4__.PaymentAddEditComponent,
        _payments_list_payment_delete_component__WEBPACK_IMPORTED_MODULE_5__.PaymentDeleteComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _payments_routing_module__WEBPACK_IMPORTED_MODULE_2__.PaymentsRoutingModule,
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
        primeng_dialog__WEBPACK_IMPORTED_MODULE_15__.DialogModule,
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_16__.AutoCompleteModule,
        primeng_calendar__WEBPACK_IMPORTED_MODULE_17__.CalendarModule] }); })();


/***/ }),

/***/ 4807:
/*!*************************************************************!*\
  !*** ./src/app/admin/payments/services/payments.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsService": () => (/* binding */ PaymentsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/api-constant */ 9374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/auth */ 2284);






class PaymentsService {
    constructor(paymentServicehttp, authService) {
        this.paymentServicehttp = paymentServicehttp;
        this.authService = authService;
        this.user = {};
        //pass select user Details in User-Edit
        this.userDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.authService.onTokenChange().subscribe((token) => {
            if (token.isValid()) {
                this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
            }
        });
    }
    setUserDetails(user) {
        this.userDetails.next(user);
    }
    getUserDetails() {
        return this.userDetails.asObservable();
    }
    /**
     * Payment List
     * @returns
     */
    getPaymentList(requestBody) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.PAYMENTS.GET);
        return this.paymentServicehttp.post(apiURL, requestBody).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
    /**
     * Get Total Sales
     * @returns
     */
    getTotalSales(requestBody) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.SALES.TOTALSALES);
        return this.paymentServicehttp.post(apiURL, requestBody).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
    /**
     * Delete Payment
     * @param userId
     * @returns
     *
     */
    deletePayment(id) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(`${_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.PAYMENTS.DELETE}?id=${id}`);
        return this.paymentServicehttp.put(apiURL, null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
    /**
     * Update Payment details
     * @param payment
     * @returns
     *
     */
    updatePayment(requestBody) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(`${_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.PAYMENTS.UPDATE}`);
        return this.paymentServicehttp.put(apiURL, requestBody).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
    /**
     * Create Payment
     * @param Values
     * @returns
     *
     */
    CreatePayment(requestBody) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(`${_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.PAYMENTS.ADD}`);
        return this.paymentServicehttp.post(apiURL, requestBody).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
}
PaymentsService.ɵfac = function PaymentsService_Factory(t) { return new (t || PaymentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_7__.NbAuthService)); };
PaymentsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PaymentsService, factory: PaymentsService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_payments_payments_module_ts.js.map