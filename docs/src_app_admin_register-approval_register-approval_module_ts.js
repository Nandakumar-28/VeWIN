"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_admin_register-approval_register-approval_module_ts"],{

/***/ 9764:
/*!*****************************************************************************!*\
  !*** ./src/app/admin/register-approval/register-approval-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterApprovalRoutingModule": () => (/* binding */ RegisterApprovalRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _register_list_register_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-list/register-list.component */ 2237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: 'list',
        component: _register_list_register_list_component__WEBPACK_IMPORTED_MODULE_0__.RegisterListComponent,
    },
    // {
    //   path: 'create',
    //   component: UserAddEditComponent,
    // },
    // {
    //   path: 'edit/:id',
    //   component: UserAddEditComponent,
    // },
    {
        path: '',
        redirectTo: 'list',
        component: _register_list_register_list_component__WEBPACK_IMPORTED_MODULE_0__.RegisterListComponent,
    }
];
class RegisterApprovalRoutingModule {
}
RegisterApprovalRoutingModule.ɵfac = function RegisterApprovalRoutingModule_Factory(t) { return new (t || RegisterApprovalRoutingModule)(); };
RegisterApprovalRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RegisterApprovalRoutingModule });
RegisterApprovalRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegisterApprovalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 740:
/*!*********************************************************************!*\
  !*** ./src/app/admin/register-approval/register-approval.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterApprovalModule": () => (/* binding */ RegisterApprovalModule)
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
/* harmony import */ var _register_list_register_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-list/register-list.component */ 2237);
/* harmony import */ var _register_list_dialog_approval_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-list/dialog-approval.component */ 2579);
/* harmony import */ var _register_list_dialog_declined_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-list/dialog-declined.component */ 2845);
/* harmony import */ var _register_approval_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-approval-routing.module */ 9764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);





// Interceptor

// Primeng











class RegisterApprovalModule {
}
RegisterApprovalModule.ɵfac = function RegisterApprovalModule_Factory(t) { return new (t || RegisterApprovalModule)(); };
RegisterApprovalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: RegisterApprovalModule });
RegisterApprovalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.NbAuthJWTInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpErrorInterceptor, multi: true }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbActionsModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbAlertModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCalendarKitModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCalendarModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCalendarRangeModule,
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
            _register_approval_routing_module__WEBPACK_IMPORTED_MODULE_5__.RegisterApprovalRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](RegisterApprovalModule, { declarations: [_register_list_register_list_component__WEBPACK_IMPORTED_MODULE_2__.RegisterListComponent,
        _register_list_dialog_approval_component__WEBPACK_IMPORTED_MODULE_3__.DialogApprovalComponent,
        _register_list_dialog_declined_component__WEBPACK_IMPORTED_MODULE_4__.DialogDeclinedComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbActionsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbAlertModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCalendarKitModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCalendarModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCalendarRangeModule,
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
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbContextMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbDialogModule, primeng_table__WEBPACK_IMPORTED_MODULE_12__.TableModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_14__.ConfirmDialogModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_15__.DialogModule,
        _register_approval_routing_module__WEBPACK_IMPORTED_MODULE_5__.RegisterApprovalRoutingModule] }); })();


/***/ }),

/***/ 2579:
/*!************************************************************************************!*\
  !*** ./src/app/admin/register-approval/register-list/dialog-approval.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogApprovalComponent": () => (/* binding */ DialogApprovalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 8253);


class DialogApprovalComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    close() {
        this.dialogRef.close(false); // Close the approval dialog without approving
    }
    approveUser() {
        this.dialogRef.close(true); // Close the approval dialog and trigger the approval action
    }
}
DialogApprovalComponent.ɵfac = function DialogApprovalComponent_Factory(t) { return new (t || DialogApprovalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDialogRef)); };
DialogApprovalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogApprovalComponent, selectors: [["ngx-dialog-approval"]], decls: 49, vars: 9, consts: [[1, "text-center"], ["nbButton", "", "status", "success", 3, "click"], ["nbButton", "", "status", "primary", 3, "click"]], template: function DialogApprovalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Approval Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body")(5, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Are you sure that you want to approve this ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mobile Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "E-mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li")(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li")(28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pin Code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li")(32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li")(36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "User Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li")(40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nb-card-footer", 0)(44, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogApprovalComponent_Template_button_click_44_listener() { return ctx.approveUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Approve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogApprovalComponent_Template_button_click_47_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.mobile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.pincode, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.password, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.usertype, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.active ? "Active" : "Inactive", "");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent], encapsulation: 2 });


/***/ }),

/***/ 2845:
/*!************************************************************************************!*\
  !*** ./src/app/admin/register-approval/register-list/dialog-declined.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogDeclinedComponent": () => (/* binding */ DialogDeclinedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 8253);


class DialogDeclinedComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() { }
    close() {
        this.dialogRef.close(false); // Close the decline dialog without approving
    }
    declineUser() {
        this.dialogRef.close(true); // Close the decline dialog and trigger the approval action
    }
}
DialogDeclinedComponent.ɵfac = function DialogDeclinedComponent_Factory(t) { return new (t || DialogDeclinedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDialogRef)); };
DialogDeclinedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogDeclinedComponent, selectors: [["ngx-dialog-declined"]], decls: 49, vars: 9, consts: [[1, "text-center"], ["nbButton", "", "status", "success", 3, "click"], ["nbButton", "", "status", "primary", 3, "click"]], template: function DialogDeclinedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Declined Confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body")(5, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Are you sure that you want to declined this ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mobile Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "E-mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li")(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li")(28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pin Code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li")(32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li")(36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "User Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li")(40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nb-card-footer", 0)(44, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogDeclinedComponent_Template_button_click_44_listener() { return ctx.declineUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Declined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogDeclinedComponent_Template_button_click_47_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.mobile, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.pincode, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.password, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.usertype, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.active ? "Active" : "Inactive", "");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent], encapsulation: 2 });


/***/ }),

/***/ 2237:
/*!**********************************************************************************!*\
  !*** ./src/app/admin/register-approval/register-list/register-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterListComponent": () => (/* binding */ RegisterListComponent)
/* harmony export */ });
/* harmony import */ var _dialog_declined_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog-declined.component */ 2845);
/* harmony import */ var _dialog_approval_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-approval.component */ 2579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 8253);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/register.service */ 6159);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/confirmdialog */ 8601);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 8581);










function RegisterListComponent_ng_template_9_ng_container_1_th_1_p_sortIcon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-sortIcon", 12);
} if (rf & 2) {
    const col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", col_r3.field)("id", col_r3.field + "-sort");
} }
function RegisterListComponent_ng_template_9_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegisterListComponent_ng_template_9_ng_container_1_th_1_p_sortIcon_1_Template, 1, 2, "p-sortIcon", 11);
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
function RegisterListComponent_ng_template_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegisterListComponent_ng_template_9_ng_container_1_th_1_Template, 4, 5, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r3.show);
} }
function RegisterListComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RegisterListComponent_ng_template_9_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.columns);
} }
function RegisterListComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 14)(12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterListComponent_ng_template_10_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const user_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.approvalUser(user_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "nb-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterListComponent_ng_template_10_Template_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const user_r8 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.declinedUser(user_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nbTooltip", user_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nbTooltip", user_r8.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r8.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nbTooltip", user_r8.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r8.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nbTooltip", user_r8.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r8.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r8.status);
} }
const _c0 = function () { return { width: "50vw" }; };
class RegisterListComponent {
    constructor(dialogService, toastrService, router, aRoute, userService, dialogConfirmService, datePipe) {
        this.dialogService = dialogService;
        this.toastrService = toastrService;
        this.router = router;
        this.aRoute = aRoute;
        this.userService = userService;
        this.dialogConfirmService = dialogConfirmService;
        this.datePipe = datePipe;
        this.itemsPerPage = [10, 25, 50, 100];
        this.first = 0;
        this.rows = 10;
    }
    ngOnInit() {
        // table   with their respective field name and header value
        this.columns = [
            { field: "name", header: "Name", show: true, sort: true },
            { field: "mobile", header: "Phone Number", show: true, sort: true },
            { field: "email", header: "E-mail", show: true, sort: true },
            { field: "address", header: "Address", show: true, sort: true },
            { field: "status", header: "Status", show: true, sort: true },
        ];
        this.userList();
    }
    /**
     * Approval User confirmation
     * @param user
     * @returns
     */
    approvalUser(user) {
        this.dialogConfirmService.open(_dialog_approval_component__WEBPACK_IMPORTED_MODULE_1__.DialogApprovalComponent, {
            context: { user },
        }).onClose.subscribe((result) => {
            if (result) {
                this.approveUser(user);
            }
        });
    }
    approveUser(user) {
        const modifiedDate = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        const approvalUser = {
            mobile: user.mobile,
            status: "Active",
            modifiedby: "Admin",
            modifiedon: modifiedDate
        };
        this.userService.approveUser(approvalUser).subscribe((response) => {
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
     * Declined Company
     * @param user
     * @returns
     */
    declinedUser(user) {
        this.dialogConfirmService.open(_dialog_declined_component__WEBPACK_IMPORTED_MODULE_0__.DialogDeclinedComponent, {
            context: { user },
        }).onClose.subscribe((result) => {
            if (result) {
                this.declineUser(user);
            }
        });
    }
    declineUser(user) {
        const modifiedDate = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        const declinedUser = {
            mobile: user.mobile,
            status: 'Decline',
            modifiedby: "Admin",
            modifiedon: modifiedDate
        };
        this.userService.declinedUser(declinedUser).subscribe((response) => {
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
        this.userService.getUserList().subscribe((response) => {
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
            //}
        }, (error) => {
            console.log(error);
        });
    }
}
RegisterListComponent.ɵfac = function RegisterListComponent_Factory(t) { return new (t || RegisterListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_register_service__WEBPACK_IMPORTED_MODULE_2__.RegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe)); };
RegisterListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegisterListComponent, selectors: [["ngx-register-list"]], decls: 11, vars: 11, consts: [[1, "inline-form-card", "full-card"], [1, "row"], [1, "col-md-12", "text-center", "bold-text"], [1, "card"], ["scrollHeight", "400px", 3, "value", "resizableColumns", "paginator", "rows", "showCurrentPageReport", "autoLayout", "rowsPerPageOptions", "scrollable"], ["pTemplate", "header"], ["pTemplate", "body"], [4, "ngFor", "ngForOf"], [1, "text-center"], ["pResizableColumn", "", "class", "text-center", 3, "pSortableColumn", "class", 4, "ngIf"], ["pResizableColumn", "", 1, "text-center", 3, "pSortableColumn"], ["class", "sort-icon", 3, "field", "id", 4, "ngIf"], [1, "sort-icon", 3, "field", "id"], ["nbTooltipPlacement", "top", 3, "nbTooltip"], [1, "text-center", "action"], ["routerLinkActive", "router-link-active", "nbTooltip", "Approval", "nbTooltipPlacement", "top", 1, "btn", "btn-outline-success", "btn-sm", "action-button", 3, "click"], ["icon", "checkmark-circle-2-outline", "pack", "eva", 1, "action-icons"], ["routerLinkActive", "router-link-active", "nbTooltip", "Declined", "nbTooltipPlacement", "top", 1, "btn", "btn-outline-danger", "btn-sm", "action-button", 3, "click"], ["icon", "close-circle-outline", "pack", "eva", 1, "action-icons"]], template: function RegisterListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-confirmDialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nb-card-header")(3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "User Register List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nb-card-body")(7, "div", 3)(8, "p-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RegisterListComponent_ng_template_9_Template, 4, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, RegisterListComponent_ng_template_10_Template, 17, 9, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.users)("resizableColumns", true)("paginator", true)("rows", ctx.rows)("showCurrentPageReport", true)("autoLayout", true)("rowsPerPageOptions", ctx.itemsPerPage)("scrollable", true);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__.ConfirmDialog, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_table__WEBPACK_IMPORTED_MODULE_9__.ResizableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortIcon, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTooltipDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconComponent], styles: [".bold-text[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcQW5ndWxhciUyMFByb2plY3RcXFZlV2luXFxzcmNcXGFwcFxcYWRtaW5cXHJlZ2lzdGVyLWFwcHJvdmFsXFxyZWdpc3Rlci1saXN0XFxyZWdpc3Rlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJyZWdpc3Rlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvbGQtdGV4dCB7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuIiwiLmJvbGQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufSJdfQ== */"] });


/***/ }),

/***/ 6159:
/*!**********************************************************************!*\
  !*** ./src/app/admin/register-approval/services/register.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterService": () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/api-constant */ 9374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/auth */ 2284);
// Rxjs


// constant




class RegisterService {
    constructor(userServicehttp, authService) {
        this.userServicehttp = userServicehttp;
        this.authService = authService;
        this.user = {};
        this.authService.onTokenChange().subscribe((token) => {
            if (token.isValid()) {
                this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
            }
        });
    }
    /**
     * User List
     * @returns
     */
    getUserList() {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.USER.LIST);
        const urlWithParams = `${apiURL}?status=Verified`;
        return this.userServicehttp.get(urlWithParams).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(result);
            }
        }));
    }
    /**
     * Approval User
     * @param approvalData
     * @returns
     *
     */
    approveUser(approvalUser) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.USER.APPROVAL);
        return this.userServicehttp.put(apiURL, approvalUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(result);
            }
        }));
    }
    /**
     * Delete User
     * @param deleteData
     * @returns
     *
     */
    declinedUser(declinedUser) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.USER.APPROVAL);
        return this.userServicehttp.put(apiURL, declinedUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(result);
            }
        }));
    }
    /**
     * Delete User
     * @param deleteData
     * @returns
     *
     */
    deleteUser(deleteData) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.USER.DELETE);
        return this.userServicehttp.delete(apiURL, deleteData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(result);
            }
        }));
    }
    /**
     * Add User
     * @param Values
     * @returns
     *
     */
    AddUserDetials(user_obj) {
        let apiURL = (user_obj["flag"] == 0) ? (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.USER.CREATE) : (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.USER.UPDATE);
        return this.userServicehttp.post(apiURL, user_obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(result);
            }
        }));
    }
}
RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_6__.NbAuthService)); };
RegisterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_admin_register-approval_register-approval_module_ts.js.map