"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_admin_sales_sales_module_ts"],{

/***/ 2855:
/*!****************************************************************!*\
  !*** ./src/app/admin/sales/sales-list/sales-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesListComponent": () => (/* binding */ SalesListComponent)
/* harmony export */ });
/* harmony import */ var _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/route-path.constant */ 7098);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 8253);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_sales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sales.service */ 2308);
/* harmony import */ var _bestperformer_services_bestperformer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bestperformer/services/bestperformer.service */ 3354);
/* harmony import */ var _payments_services_payments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../payments/services/payments.service */ 4807);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 8601);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/autocomplete */ 1338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/calendar */ 1229);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 1122);

















function SalesListComponent_ng_container_19_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Name is required / Only select Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SalesListComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SalesListComponent_ng_container_19_p_1_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.AddSaleForm.controls.name.errors.required);
} }
function SalesListComponent_ng_container_24_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Year-Month is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SalesListComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SalesListComponent_ng_container_24_p_1_Template, 2, 0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.AddSaleForm.controls.monthAndYear.errors.required);
} }
function SalesListComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No Data Found !");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function SalesListComponent_div_31_ng_template_3_ng_container_1_th_1_p_sortIcon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-sortIcon", 31);
} if (rf & 2) {
    const col_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("field", col_r10.field)("id", col_r10.field + "-sort");
} }
function SalesListComponent_div_31_ng_template_3_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SalesListComponent_div_31_ng_template_3_ng_container_1_th_1_p_sortIcon_1_Template, 1, 2, "p-sortIcon", 30);
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
function SalesListComponent_div_31_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SalesListComponent_div_31_ng_template_3_ng_container_1_th_1_Template, 4, 5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", col_r10.show);
} }
function SalesListComponent_div_31_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SalesListComponent_div_31_ng_template_3_ng_container_1_Template, 2, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.columns);
} }
function SalesListComponent_div_31_ng_template_4_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const user_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nbTooltip", user_r15.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r15.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nbTooltip", user_r15.app);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r15.app);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nbTooltip", user_r15.sales);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r15.sales);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nbTooltip", user_r15.salesReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r15.salesReturn);
} }
function SalesListComponent_div_31_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No Data Found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function SalesListComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22)(1, "div", 22)(2, "p-table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SalesListComponent_div_31_ng_template_3_Template, 2, 1, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SalesListComponent_div_31_ng_template_4_Template, 9, 8, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SalesListComponent_div_31_ng_template_5_Template, 3, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r3.users)("resizableColumns", true)("paginator", true)("rows", ctx_r3.rows)("showCurrentPageReport", true)("autoLayout", true)("rowsPerPageOptions", ctx_r3.itemsPerPage)("scrollable", true);
} }
const _c0 = function () { return { width: "50vw" }; };
class SalesListComponent {
    constructor(toastrService, router, aRoute, saleService, dialogService, formBuilder, userService, paymentService) {
        this.toastrService = toastrService;
        this.router = router;
        this.aRoute = aRoute;
        this.saleService = saleService;
        this.dialogService = dialogService;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.paymentService = paymentService;
        //Change value to hide table
        this.showTable = false;
        this.data_loading = false;
        this.itemsPerPage = [10, 25, 50];
        this.first = 0;
        this.rows = 10;
        //summit button size 
        this.small = 'small';
    }
    ngOnInit() {
        var _a, _b;
        this.AddSaleFormInitialize();
        // Add event listener to name field Change value to hide table
        (_a = this.AddSaleForm.get('name')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe(() => {
            this.showTable = true;
        });
        // Add event listener to monthAndYear field Change value to hide table 
        (_b = this.AddSaleForm.get('monthAndYear')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe(() => {
            this.showTable = true;
        });
        // table   with their respective field name and header value
        this.columns = [
            { field: "date", header: "Date", show: true, sort: true },
            { field: "app", header: "App", show: true, sort: true },
            { field: "sale", header: "Sales", show: true, sort: true },
            { field: "saleReturn", header: "Sales Return", show: true, sort: true },
        ];
        // Subscribe to changes in the 'name' control and make API requests
        this.AddSaleForm.get('name').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((name) => {
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
    AddSaleFormInitialize() {
        this.AddSaleForm = this.formBuilder.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            monthAndYear: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            // refid: [0], // Add the refid control
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
     * Payment List
     * @param null
     * @returns
     */
    onSubmit() {
        const selectedName = this.AddSaleForm.value.name;
        const selectedDate = this.AddSaleForm.value.monthAndYear;
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
            this.salesApiRequest(requestBody);
        }
        else if (selectedName) {
            const customerId = selectedName.split('-')[0]; // Extract the ID from the selectedName
            const requestBody = {
                customerId: customerId,
                month: "",
                year: ""
            };
            this.salesApiRequest(requestBody);
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
            this.salesApiRequest(requestBody);
        }
    }
    // Extracted the API request logic to a separate function
    salesApiRequest(requestBody) {
        this.saleService.getSaleList(requestBody)
            .subscribe((response) => {
            this.users = response;
            this.showTable = false;
        });
    }
}
SalesListComponent.ɵfac = function SalesListComponent_Factory(t) { return new (t || SalesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_sales_service__WEBPACK_IMPORTED_MODULE_1__.SalesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bestperformer_services_bestperformer_service__WEBPACK_IMPORTED_MODULE_2__.BestperformerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_payments_services_payments_service__WEBPACK_IMPORTED_MODULE_3__.PaymentsService)); };
SalesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SalesListComponent, selectors: [["ngx-sales-list"]], decls: 32, vars: 12, consts: [[1, "inline-form-card", "full-card"], [1, "row"], [1, "col-md-9", "text-center", "bold-text"], [1, "col-md-3"], [1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "card", "text-center"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "name", 1, "label", "col-sm-3", "col-form-label"], [1, "col-sm-3"], [1, "p-fluid"], ["formControlName", "name", "placeholder", "Enter minimum 3 letters", 3, "suggestions", "forceSelection", "minLength", "completeMethod"], [4, "ngIf"], ["for", "monthAndYear", 1, "label", "col-sm-2", "col-form-label"], [1, "col-sm-2"], ["formControlName", "monthAndYear", "view", "month", "dateFormat", "mm/yy", 3, "readonlyInput"], ["type", "submit", "nbButton", "", "outline", "", "status", "success", "size", "small"], ["class", "text-center", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], [1, "text-center"], [1, "card"], ["scrollHeight", "400px", 3, "value", "resizableColumns", "paginator", "rows", "showCurrentPageReport", "autoLayout", "rowsPerPageOptions", "scrollable"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [4, "ngFor", "ngForOf"], ["pResizableColumn", "", "class", "text-center", 3, "pSortableColumn", "class", 4, "ngIf"], ["pResizableColumn", "", 1, "text-center", 3, "pSortableColumn"], ["class", "sort-icon", 3, "field", "id", 4, "ngIf"], [1, "sort-icon", 3, "field", "id"], ["nbTooltipPlacement", "top", 3, "nbTooltip"], ["colspan", "3", 1, "text-center"]], template: function SalesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "p-confirmDialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nb-card-header")(3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Sales List");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3)(7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesListComponent_Template_button_click_7_listener() { return ctx.makePayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Make Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5)(11, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SalesListComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 7)(14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Search Customer Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9)(17, "span", 10)(18, "p-autoComplete", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("completeMethod", function SalesListComponent_Template_p_autoComplete_completeMethod_18_listener($event) { return ctx.onNameInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SalesListComponent_ng_container_19_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Select Year-Month *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "p-calendar", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, SalesListComponent_ng_container_24_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 14)(26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, SalesListComponent_div_30_Template, 3, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, SalesListComponent_div_31_Template, 6, 8, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.AddSaleForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("suggestions", ctx.results)("forceSelection", true)("minLength", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.AddSaleForm.controls.name.touched && ctx.AddSaleForm.controls.name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonlyInput", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.AddSaleForm.controls.monthAndYear.touched && ctx.AddSaleForm.controls.monthAndYear.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.users || ctx.users.length === 0 || ctx.showTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.users && ctx.users.length > 0 && !ctx.showTable);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardComponent, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialog, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_12__.AutoComplete, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.Calendar, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardBodyComponent, primeng_table__WEBPACK_IMPORTED_MODULE_15__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, primeng_table__WEBPACK_IMPORTED_MODULE_15__.ResizableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_15__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_15__.SortIcon, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbTooltipDirective], styles: [".bold-text[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcQW5ndWxhciUyMFByb2plY3RcXFZlV2luXFxzcmNcXGFwcFxcYWRtaW5cXHNhbGVzXFxzYWxlcy1saXN0XFxzYWxlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzYWxlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvbGQtdGV4dCB7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn0iLCIuYm9sZC10ZXh0IHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59Il19 */"] });


/***/ }),

/***/ 9685:
/*!*****************************************************!*\
  !*** ./src/app/admin/sales/sales-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesRoutingModule": () => (/* binding */ SalesRoutingModule)
/* harmony export */ });
/* harmony import */ var _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-list/sales-list.component */ 2855);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: 'list',
        component: _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_0__.SalesListComponent,
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
class SalesRoutingModule {
}
SalesRoutingModule.ɵfac = function SalesRoutingModule_Factory(t) { return new (t || SalesRoutingModule)(); };
SalesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SalesRoutingModule });
SalesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SalesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4239:
/*!*********************************************!*\
  !*** ./src/app/admin/sales/sales.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesModule": () => (/* binding */ SalesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 8253);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 268);
/* harmony import */ var _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/interceptor/jwt-interceptor */ 4338);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ 3489);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ 8601);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/autocomplete */ 1338);
/* harmony import */ var _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales-list/sales-list.component */ 2855);
/* harmony import */ var _sales_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-routing.module */ 9685);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/calendar */ 1229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





// Interceptor

// Primeng











class SalesModule {
}
SalesModule.ɵfac = function SalesModule_Factory(t) { return new (t || SalesModule)(); };
SalesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SalesModule });
SalesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS, useClass: _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.NbAuthJWTInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS, useClass: _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpErrorInterceptor, multi: true }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _sales_routing_module__WEBPACK_IMPORTED_MODULE_3__.SalesRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbActionsModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbAlertModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCalendarKitModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCalendarModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCalendarRangeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDatepickerModule.forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbFormFieldModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbProgressBarModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSpinnerModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbTooltipModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCheckboxModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbTabsetModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbRouteTabsetModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbStepperModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbListModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbAccordionModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbUserModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbIconModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbTreeGridModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSelectModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbToggleModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbContextMenuModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDialogModule.forRoot(),
            primeng_table__WEBPACK_IMPORTED_MODULE_10__.TableModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialogModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_13__.DialogModule,
            primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14__.AutoCompleteModule,
            primeng_calendar__WEBPACK_IMPORTED_MODULE_15__.CalendarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SalesModule, { declarations: [_sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_2__.SalesListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _sales_routing_module__WEBPACK_IMPORTED_MODULE_3__.SalesRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbActionsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbAlertModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCalendarKitModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCalendarModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCalendarRangeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDatepickerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbFormFieldModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbProgressBarModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSpinnerModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbTooltipModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCheckboxModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbTabsetModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbRouteTabsetModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbStepperModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbListModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbAccordionModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbUserModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbIconModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbTreeGridModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSelectModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbToggleModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbContextMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDialogModule, primeng_table__WEBPACK_IMPORTED_MODULE_10__.TableModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialogModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_13__.DialogModule,
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14__.AutoCompleteModule,
        primeng_calendar__WEBPACK_IMPORTED_MODULE_15__.CalendarModule] }); })();


/***/ }),

/***/ 2308:
/*!*******************************************************!*\
  !*** ./src/app/admin/sales/services/sales.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesService": () => (/* binding */ SalesService)
/* harmony export */ });
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/api-constant */ 9374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/auth */ 2284);






class SalesService {
    constructor(saleServicehttp, authService) {
        this.saleServicehttp = saleServicehttp;
        this.authService = authService;
        this.user = {};
        this.authService.onTokenChange().subscribe((token) => {
            if (token.isValid()) {
                this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
            }
        });
    }
    /**
    * Payment List
    * @returns
    */
    getSaleList(requestBody) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.SALES.GET);
        return this.saleServicehttp.post(apiURL, requestBody).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(result);
            }
        }));
    }
}
SalesService.ɵfac = function SalesService_Factory(t) { return new (t || SalesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_6__.NbAuthService)); };
SalesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SalesService, factory: SalesService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_sales_sales_module_ts.js.map