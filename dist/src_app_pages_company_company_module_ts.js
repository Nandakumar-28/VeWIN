"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_company_company_module_ts"],{

/***/ 95781:
/*!******************************************************************************!*\
  !*** ./src/app/pages/company/company-add-edit/company-add-edit.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyAddEditComponent": () => (/* binding */ CompanyAddEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/route-path.constant */ 49086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/company.service */ 36027);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);








function CompanyAddEditComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyAddEditComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 57);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function CompanyAddEditComponent_ng_container_24_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Company / Organisation is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyAddEditComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyAddEditComponent_ng_container_24_p_1_Template, 2, 0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.AddCompanyForm.controls.company_organization.errors.required);
} }
function CompanyAddEditComponent_ng_container_31_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Display Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyAddEditComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyAddEditComponent_ng_container_31_p_1_Template, 2, 0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.AddCompanyForm.controls.display_name.errors.required);
} }
function CompanyAddEditComponent_ng_container_39_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Contact Person is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyAddEditComponent_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyAddEditComponent_ng_container_39_p_1_Template, 2, 0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.AddCompanyForm.controls.contact_person.errors.required);
} }
function CompanyAddEditComponent_ng_container_46_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Decsignation is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyAddEditComponent_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyAddEditComponent_ng_container_46_p_1_Template, 2, 0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.AddCompanyForm.controls.decsignation.errors.required);
} }
function CompanyAddEditComponent_ng_container_54_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Address is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyAddEditComponent_ng_container_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyAddEditComponent_ng_container_54_p_1_Template, 2, 0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.AddCompanyForm.controls.address.errors.required);
} }
function CompanyAddEditComponent_ng_container_63_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " User Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyAddEditComponent_ng_container_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyAddEditComponent_ng_container_63_p_1_Template, 2, 0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.AddCompanyForm.controls.user_name.errors.required);
} }
function CompanyAddEditComponent_ng_container_71_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyAddEditComponent_ng_container_71_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyAddEditComponent_ng_container_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyAddEditComponent_ng_container_71_p_1_Template, 2, 0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CompanyAddEditComponent_ng_container_71_p_2_Template, 2, 0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.AddCompanyForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.AddCompanyForm.controls.email.errors.pattern);
} }
function CompanyAddEditComponent_ng_container_79_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Contact Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyAddEditComponent_ng_container_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyAddEditComponent_ng_container_79_p_1_Template, 2, 0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.AddCompanyForm.controls.contact_number.errors.required);
} }
function CompanyAddEditComponent_ng_container_87_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " District is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyAddEditComponent_ng_container_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyAddEditComponent_ng_container_87_p_1_Template, 2, 0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.AddCompanyForm.controls.district.errors.required);
} }
function CompanyAddEditComponent_ng_container_97_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyAddEditComponent_ng_container_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyAddEditComponent_ng_container_97_p_1_Template, 2, 0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.AddCompanyForm.controls.password.errors.required);
} }
function CompanyAddEditComponent_ng_container_106_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Confirm Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyAddEditComponent_ng_container_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyAddEditComponent_ng_container_106_p_1_Template, 2, 0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.AddCompanyForm.controls.confirm_password.errors.required);
} }
function CompanyAddEditComponent_ng_container_114_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " State is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyAddEditComponent_ng_container_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyAddEditComponent_ng_container_114_p_1_Template, 2, 0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.AddCompanyForm.controls.state.errors.required);
} }
function CompanyAddEditComponent_ng_container_122_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Remarks is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CompanyAddEditComponent_ng_container_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyAddEditComponent_ng_container_122_p_1_Template, 2, 0, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.AddCompanyForm.controls.remarks.errors.required);
} }
class CompanyAddEditComponent {
    constructor(formBuilder, router, aRoute, companyService, toastrService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.aRoute = aRoute;
        this.companyService = companyService;
        this.toastrService = toastrService;
        this.submitted = false;
        this.data_loading = false;
        //logo variable
        this.logoUploadFile = null; // Property to store the selected logo file
        this.logo = null; // Property to store the URL of the uploaded logo for preview
        //show password
        this.showPassword = true;
    }
    ngOnInit() {
        this.AddCompanyFormInitialize();
        if (this.router.url.indexOf("edit") !== -1) {
            this.data_loading = true;
            const id = this.aRoute.snapshot.paramMap.get("id");
            this.page_title = "Edit Company";
            this.companyRetrive(id);
        }
        else {
            this.page_title = "Create Company";
        }
    }
    /**
     * Company Form Initialize
     */
    AddCompanyFormInitialize() {
        const emailRegex = "[a-z0-9]+@[a-z]+.[a-z]{2,3}";
        this.AddCompanyForm = this.formBuilder.group({
            company_organization: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            display_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            contact_person: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            decsignation: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            contact_number: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(emailRegex)]],
            address: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            district: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            logo: [null],
            user_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            confirm_password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            remarks: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    //Show Password
    getInputType() {
        if (this.showPassword) {
            return 'text';
        }
        return 'password';
    }
    toggleShowPassword() {
        this.showPassword = !this.showPassword;
    }
    /**
     * Handle logo file change event
     */
    onFileChange(event, fieldName) {
        var _a;
        const inputElement = event.target;
        if (inputElement.files && inputElement.files.length > 0) {
            const file = inputElement.files[0];
            (_a = this.AddCompanyForm.get(fieldName)) === null || _a === void 0 ? void 0 : _a.setValue(file); // Set the selected file in the form
            this.logoUploadFile = file;
            // Read and display the logo for preview
            const reader = new FileReader();
            reader.onload = (e) => {
                this.logo = reader.result;
            };
            reader.readAsDataURL(file);
        }
    }
    /**
     * Company Retrive
     * @params companyId
     */
    companyRetrive(companyId) {
        let deleteData = { companyId: companyId };
        this.companyService.companyRetrive(deleteData).subscribe((resp) => {
            this.AddCompanyForm.patchValue({
                username: resp["username"],
                company_organization: resp["company_organization"],
                number_of_links: resp["number_of_links"],
                email: resp["email"],
            });
            this.data_loading = false;
        });
    }
    /**
     * Company Form Submit
     */
    onSubmit() {
        this.submitted = true;
        if (this.AddCompanyForm.invalid) {
            return;
        } // stop here if form is invalid
        if (this.router.url.indexOf("edit") !== -1) {
            this.AddCompanyForm.value.companyId =
                this.aRoute.snapshot.paramMap.get("id");
            this.AddCompanyForm.value.flag = 1;
        }
        else {
            this.AddCompanyForm.value.flag = 0;
        }
        // Prepare your form data, including the logo file
        const formData = new FormData();
        for (const key in this.AddCompanyForm.value) {
            if (key === "logo" && this.AddCompanyForm.value[key] instanceof File) {
                formData.append(key, this.AddCompanyForm.value[key], this.AddCompanyForm.value[key].name);
            }
            else {
                formData.append(key, this.AddCompanyForm.value[key]);
            }
        }
        this.companyService
            .AddCompanyDetials(this.AddCompanyForm.value)
            .subscribe((res) => {
            this.backToCompanyList();
            // if (res["status"] != 200) {
            //   this.toastrService.show(res["message"], "Warning", {
            //     status: "warning",
            //     duration: 8000,
            //   });
            // } else {
            //   this.toastrService.show(res["message"], "Success", {
            //     status: "success",
            //     duration: 8000,
            //   });
            // }
        });
    }
    /**
     * Back to Company Lsit
     * @param
     * @returns
     */
    backToCompanyList() {
        this.router.navigate([_shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.PAGES, _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.COMPANY]);
    }
}
CompanyAddEditComponent.ɵfac = function CompanyAddEditComponent_Factory(t) { return new (t || CompanyAddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_company_service__WEBPACK_IMPORTED_MODULE_1__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbToastrService)); };
CompanyAddEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CompanyAddEditComponent, selectors: [["ngx-company-add-edit"]], decls: 131, vars: 25, consts: [[1, "row"], [1, "col-md-12"], ["nbSpinnerStatus", "info", 3, "nbSpinner"], [3, "formGroup", "ngSubmit"], [1, "col-md-3"], [1, "form-group"], ["class", "image-preview", 4, "ngIf"], ["width", "140", "height", "140", "alt", "Logo", "style", "border-radius: 10%;", 3, "src", 4, "ngIf"], ["for", "logo", 1, "label"], ["nbInput", "", "fullWidth", "", "type", "file", "accept", "image/*", 3, "change"], ["for", "company_organization", 1, "label"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "company_organization"], ["nbPrefix", "", "icon", "award-outline", "pack", "eva", 1, "icon"], [4, "ngIf"], ["for", "display_name", 1, "label"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "display_name"], ["nbPrefix", "", "icon", "person-outline", "pack", "eva", 1, "icon"], ["for", "contact_person", 1, "label"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "contact_person"], ["nbPrefix", "", "icon", "phone-call-outline", "pack", "eva", 1, "icon"], ["for", "decsignation", 1, "label"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "decsignation"], ["nbPrefix", "", "icon", "briefcase-outline", "pack", "eva", 1, "icon"], [1, "form-group", "row"], ["for", "address", 1, "label", "col-sm-2", "col-form-label"], [1, "col-md-10"], ["nbInput", "", "fullWidth", "", "shape", "semi-round", "type", "text", "formControlName", "address"], ["nbPrefix", "", "icon", "home-outline", "pack", "eva", 1, "icon"], ["for", "user_name", 1, "label"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "user_name"], ["nbPrefix", "", "icon", "person-done-outline", "pack", "eva", 1, "icon"], ["for", "email", 1, "label"], ["nbInput", "", "fullWidth", "", "type", "email", "id", "email", "placeholder", "user@example.com", "name", "email", "minlength", "4", "maxlength", "30", "formControlName", "email"], ["nbPrefix", "", "icon", "at-outline", "pack", "eva", 1, "icon"], ["for", "contact_number", 1, "label"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "contact_number"], ["nbPrefix", "", "icon", "phone-outline", "pack", "eva", 1, "icon"], [1, "col-sm-3"], ["for", "district", 1, "label"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "district"], ["nbPrefix", "", "icon", "pin-outline", "pack", "eva", 1, "icon"], ["for", "password", 1, "label"], ["nbInput", "", "fullWidth", "", "formControlName", "password", 3, "type"], ["nbSuffix", "", "nbButton", "", "ghost", "", 3, "click"], ["pack", "eva", 3, "icon"], ["for", "confirm_password", 1, "label"], ["nbInput", "", "fullWidth", "", "formControlName", "confirm_password", 3, "type"], ["for", "state", 1, "label"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "state"], ["for", "remarks", 1, "label"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "remarks"], ["nbPrefix", "", "icon", "star-outline", "pack", "eva", 1, "icon"], [1, "offset-sm-9", "col-sm-9"], ["type", "submit", "nbButton", "", "status", "primary", 3, "disabled"], ["nbButton", "", "status", "danger", "routerLinkActive", "router-link-active", 3, "click"], [1, "image-preview"], [1, "fa", "fa-image"], ["width", "140", "height", "140", "alt", "Logo", 2, "border-radius", "10%", 3, "src"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]], template: function CompanyAddEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nb-card-body", 2)(6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CompanyAddEditComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 0)(8, "div", 4)(9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CompanyAddEditComponent_div_10_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CompanyAddEditComponent_img_11_Template, 1, 1, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4)(13, "div", 5)(14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Logo Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CompanyAddEditComponent_Template_input_change_16_listener($event) { return ctx.onFileChange($event, "logo"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 4)(18, "div", 5)(19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Company Name / Organisation * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 11)(23, "nb-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CompanyAddEditComponent_ng_container_24_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 5)(26, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Display Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 15)(30, "nb-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, CompanyAddEditComponent_ng_container_31_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 4)(33, "div", 5)(34, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Contact Person *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 18)(38, "nb-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, CompanyAddEditComponent_ng_container_39_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 5)(41, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Decsignation *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 21)(45, "nb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, CompanyAddEditComponent_ng_container_46_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 23)(48, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Address *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 25)(51, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "input", 26)(53, "nb-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, CompanyAddEditComponent_ng_container_54_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 0)(56, "div", 4)(57, "div", 5)(58, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "User Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "input", 29)(62, "nb-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, CompanyAddEditComponent_ng_container_63_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 4)(65, "div", 5)(66, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "E-Mail *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "input", 32)(70, "nb-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, CompanyAddEditComponent_ng_container_71_Template, 3, 2, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 4)(73, "div", 5)(74, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Contact Number *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "input", 35)(78, "nb-icon", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, CompanyAddEditComponent_ng_container_79_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 37)(81, "div", 5)(82, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "District *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "input", 39)(86, "nb-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](87, CompanyAddEditComponent_ng_container_87_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 0)(89, "div", 37)(90, "div", 5)(91, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Password *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyAddEditComponent_Template_button_click_95_listener() { return ctx.toggleShowPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "nb-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](97, CompanyAddEditComponent_ng_container_97_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 37)(99, "div", 5)(100, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Confirm Password *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyAddEditComponent_Template_button_click_104_listener() { return ctx.toggleShowPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "nb-icon", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](106, CompanyAddEditComponent_ng_container_106_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 37)(108, "div", 5)(109, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "State *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "input", 48)(113, "nb-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](114, CompanyAddEditComponent_ng_container_114_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 37)(116, "div", 5)(117, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Remarks *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "input", 50)(121, "nb-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](122, CompanyAddEditComponent_ng_container_122_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 23)(124, "div", 52)(125, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyAddEditComponent_Template_button_click_128_listener() { return ctx.backToCompanyList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.page_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbSpinner", ctx.data_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.AddCompanyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.logoUploadFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.logoUploadFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddCompanyForm.controls.company_organization.touched && ctx.AddCompanyForm.controls.company_organization.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddCompanyForm.controls.display_name.touched && ctx.AddCompanyForm.controls.display_name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddCompanyForm.controls.contact_person.touched && ctx.AddCompanyForm.controls.contact_person.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddCompanyForm.controls.decsignation.touched && ctx.AddCompanyForm.controls.decsignation.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddCompanyForm.controls.address.touched && ctx.AddCompanyForm.controls.address.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddCompanyForm.controls.user_name.touched && ctx.AddCompanyForm.controls.user_name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddCompanyForm.controls.email.touched && ctx.AddCompanyForm.controls.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddCompanyForm.controls.contact_number.touched && ctx.AddCompanyForm.controls.contact_number.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddCompanyForm.controls.district.touched && ctx.AddCompanyForm.controls.district.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.getInputType());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.showPassword ? "eye-outline" : "eye-off-outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.showPassword ? "hide password" : "show password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddCompanyForm.controls.password.touched && ctx.AddCompanyForm.controls.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.getInputType());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.showPassword ? "eye-outline" : "eye-off-outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.showPassword ? "hide password" : "show password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddCompanyForm.controls.confirm_password.touched && ctx.AddCompanyForm.controls.confirm_password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddCompanyForm.controls.state.touched && ctx.AddCompanyForm.controls.state.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AddCompanyForm.controls.remarks.touched && ctx.AddCompanyForm.controls.remarks.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.submitted || !ctx.AddCompanyForm.valid);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSpinnerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbFormFieldComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbPrefixDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSuffixDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive], styles: [".image-preview[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  display: flex;\n  border-radius: 10%;\n  justify-content: center;\n  align-items: center;\n  background-color: #e0e0e0;\n  \n  border: 1px solid #ccc;\n  \n}\n\n.image-preview[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%] {\n  font-size: 50px;\n  \n  color: #555;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktYWRkLWVkaXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcQW5ndWxhciUyMFByb2plY3RcXFZlV2luXFxzcmNcXGFwcFxccGFnZXNcXGNvbXBhbnlcXGNvbXBhbnktYWRkLWVkaXRcXGNvbXBhbnktYWRkLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUEyQixnREFBQTtFQUMzQixzQkFBQTtFQUF3QiwyQkFBQTtBQ0UxQjs7QURDQTtFQUNFLGVBQUE7RUFBaUIsMkNBQUE7RUFDakIsV0FBQTtFQUFhLGlDQUFBO0FDSWYiLCJmaWxlIjoiY29tcGFueS1hZGQtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaW1hZ2UtcHJldmlldyB7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItcmFkaXVzOjEwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IC8qIFNldCBhIGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBwcmV2aWV3IGFyZWEgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvKiBPcHRpb25hbDogQWRkIGEgYm9yZGVyICovXHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IGkuZmEge1xyXG4gIGZvbnQtc2l6ZTogNTBweDsgLyogQWRqdXN0IHRoZSBmb250IHNpemUgb2YgdGhlIGltYWdlIGljb24gKi9cclxuICBjb2xvcjogIzU1NTsgLyogT3B0aW9uYWw6IFNldCB0aGUgaWNvbiBjb2xvciAqLyAgXHJcbn1cclxuIiwiLmltYWdlLXByZXZpZXcge1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIC8qIFNldCBhIGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBwcmV2aWV3IGFyZWEgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgLyogT3B0aW9uYWw6IEFkZCBhIGJvcmRlciAqL1xufVxuXG4uaW1hZ2UtcHJldmlldyBpLmZhIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICAvKiBBZGp1c3QgdGhlIGZvbnQgc2l6ZSBvZiB0aGUgaW1hZ2UgaWNvbiAqL1xuICBjb2xvcjogIzU1NTtcbiAgLyogT3B0aW9uYWw6IFNldCB0aGUgaWNvbiBjb2xvciAqL1xufSJdfQ== */"] });


/***/ }),

/***/ 35181:
/*!**********************************************************************!*\
  !*** ./src/app/pages/company/company-list/company-list.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyListComponent": () => (/* binding */ CompanyListComponent)
/* harmony export */ });
/* harmony import */ var _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/route-path.constant */ 49086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/company.service */ 36027);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/confirmdialog */ 46625);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);









function CompanyListComponent_ng_template_12_ng_container_1_th_1_p_sortIcon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-sortIcon", 13);
} if (rf & 2) {
    const col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", col_r3.field)("id", col_r3.field + "-sort");
} }
function CompanyListComponent_ng_template_12_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyListComponent_ng_template_12_ng_container_1_th_1_p_sortIcon_1_Template, 1, 2, "p-sortIcon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](col_r3.field + "-campaigns");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", col_r3.sort == true ? col_r3.field : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", col_r3.sort == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](col_r3.header);
} }
function CompanyListComponent_ng_template_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyListComponent_ng_template_12_ng_container_1_th_1_Template, 4, 5, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", col_r3.show);
} }
function CompanyListComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CompanyListComponent_ng_template_12_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.columns);
} }
function CompanyListComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td", 14)(22, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyListComponent_ng_template_13_Template_button_click_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const company_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.editCompany(company_r8.companyId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "nb-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyListComponent_ng_template_13_Template_button_click_25_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const company_r8 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.confirmDelete(company_r8.companyId, company_r8.username); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyListComponent_ng_template_13_Template_button_click_28_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const company_r8 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.confirmBlockUnBlock(company_r8.companyId, company_r8.username, company_r8.active == true ? "Block" : "UnBlock"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const company_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](company_r8.companyId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](company_r8.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](company_r8.company_organization);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](company_r8.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](company_r8.contact_person);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](company_r8.userdecsignation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](company_r8.contact_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](company_r8.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](company_r8.remarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](company_r8.active == true ? "Active" : "InActive");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](company_r8.active == true ? "btn btn-outline-danger btn-sm action-button" : "btn btn-outline-primary btn-sm action-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("icon", company_r8.active == true ? "close-circle-outline" : "checkmark-circle-2-outline");
} }
const _c0 = function () { return { width: "50vw" }; };
class CompanyListComponent {
    constructor(dialogService, toastrService, router, aRoute, companyService) {
        this.dialogService = dialogService;
        this.toastrService = toastrService;
        this.router = router;
        this.aRoute = aRoute;
        this.companyService = companyService;
        this.itemsPerPage = [10, 25, 50];
        this.first = 0;
        this.rows = 10;
    }
    ngOnInit() {
        // table   with their respective field name and header value
        this.columns = [
            //{ field: "companyId", header: "ID", show: true, sort: false },
            { field: "company_organization", header: "Comapany / Organization", show: true, sort: true },
            { field: "contact_person", header: "Contact Person", show: true, sort: true },
            { field: "decsignation", header: "Designation", show: true, sort: true },
            { field: "contact_number", header: "Contact Number", show: true, sort: true },
            //{ field: "email", header: "E_mail", show: true, sort: true },
            //{ field: "address", header: "Address", show: true, sort: true },
            //{ field: "remarks", header: "Remarks", show: true, sort: true },
            { field: "active", header: "Action", show: true, sort: true },
        ];
        this.companyList();
    }
    /**
     * create Company
     * @param
     * @returns
     */
    createCompany() {
        this.router.navigate([
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.PAGES,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.COMPANY,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.COMPANIES.CREATE,
        ]);
    }
    /**
     * Edit Company
     * @param company_id
     * @returns
     */
    editCompany(company_id) {
        this.router.navigate([
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.PAGES,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.COMPANY,
            _shared_constants_route_path_constant__WEBPACK_IMPORTED_MODULE_0__.ROUTE_PATH.COMPANIES.EDIT,
            company_id,
        ]);
    }
    /**
     * Delete Company confirmation
     * @param companyId, companyName
     * @returns
     */
    confirmDelete(companyId, companyName) {
        this.dialogService.confirm({
            header: "Delete confirmation",
            message: "Are you sure that you want to delete this <b>" +
                companyName +
                "</b> Company ?",
            accept: () => {
                this.deleteCompany(companyId);
            },
        });
    }
    /**
     * Delete Company
     * @param companyId
     * @returns
     */
    deleteCompany(companyId) {
        let deletePostData = { companyId: companyId };
        this.companyService.deleteCompany(deletePostData).subscribe((response) => {
            this.companyList();
            // if (response["status"] != 200) {
            //   this.toastrService.show(response["message"], "Warning", {
            //     status: "warning",
            //     duration: 8000,
            //   });
            // } else {
            //   this.toastrService.show(response["message"], "Success", {
            //     status: "success",
            //     duration: 8000,
            //   });
            // }
        }, (error) => {
            console.log(error);
        });
    }
    /**
     * Block/UnBlock Company confirmation
     * @param companyId, companyName, action
     * @returns
     */
    confirmBlockUnBlock(companyId, companyName, action) {
        this.dialogService.confirm({
            header: "Delete confirmation",
            message: "Are you sure that you want to delete this <b>" +
                action +
                " - " +
                companyName +
                "</b> Company ?",
            accept: () => {
                this.blockUnBlockCompany(companyId, action);
            },
        });
    }
    /**
     * Block/UnBlock Company
     * @param companyId, action
     * @returns
     */
    blockUnBlockCompany(companyId, action) {
        let blockUnBlockPostData = {
            companyId: companyId,
            block: action == "Block" ? true : false,
        };
        this.companyService.blockUnBlockCompany(blockUnBlockPostData).subscribe((response) => {
            this.companyList();
            // if (response["status"] != 200) {
            //   this.toastrService.show(response["message"], "Warning", {
            //     status: "warning",
            //     duration: 8000,
            //   });
            // } else {
            //   this.toastrService.show(response["message"], "Success", {
            //     status: "success",
            //     duration: 8000,
            //   });
            // }
        }, (error) => {
            console.log(error);
        });
    }
    /**
     * Company List
     * @param null
     * @returns
     */
    companyList() {
        this.companyService.getCompanyList().subscribe((response) => {
            this.companies = response;
            // if (response["status"] != 200) {
            //   this.toastrService.show(response["message"], "Warning", {
            //     status: "warning",
            //     duration: 8000,
            //   });
            // } else {
            //   this.toastrService.show(response["message"], "Success", {
            //     status: "success",
            //     duration: 8000,
            //   });
            // }
        }, (error) => {
            console.log(error);
        });
    }
}
CompanyListComponent.ɵfac = function CompanyListComponent_Factory(t) { return new (t || CompanyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_company_service__WEBPACK_IMPORTED_MODULE_1__.CompanyService)); };
CompanyListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CompanyListComponent, selectors: [["ngx-company-list"]], decls: 14, vars: 9, consts: [[1, "inline-form-card", "full-card"], [1, "row"], [1, "col-md-10"], [1, "col-md-2"], [1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "card"], [3, "value", "paginator", "rows", "showCurrentPageReport", "autoLayout", "rowsPerPageOptions"], ["pTemplate", "header"], ["pTemplate", "body"], [4, "ngFor", "ngForOf"], [3, "pSortableColumn", "class", 4, "ngIf"], [3, "pSortableColumn"], ["class", "sort-icon", 3, "field", "id", 4, "ngIf"], [1, "sort-icon", 3, "field", "id"], [1, "text-center", "action"], ["routerLinkActive", "router-link-active", "nbTooltip", "Edit", "nbTooltipPlacement", "top", 1, "btn", "btn-outline-primary", "btn-sm", "action-button", 3, "click"], ["icon", "edit", "pack", "eva", 1, "action-icons"], ["nbTooltip", "Delete", "nbTooltipPlacement", "top", 1, "btn", "btn-outline-danger", "btn-sm", "action-button", 3, "click"], ["icon", "close", "pack", "eva", 1, "action-icons"], ["nbTooltip", "Block", "nbTooltipPlacement", "top", 3, "click"], ["pack", "eva", 1, "action-icons", 3, "icon"]], template: function CompanyListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p-confirmDialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nb-card-header")(3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Company List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CompanyListComponent_Template_button_click_7_listener() { return ctx.createCompany(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Create Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nb-card-body")(10, "div", 5)(11, "p-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CompanyListComponent_ng_template_12_Template, 2, 1, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CompanyListComponent_ng_template_13_Template, 31, 14, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.companies)("paginator", true)("rows", ctx.rows)("showCurrentPageReport", true)("autoLayout", true)("rowsPerPageOptions", ctx.itemsPerPage);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_6__.ConfirmDialog, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, primeng_table__WEBPACK_IMPORTED_MODULE_7__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SortIcon, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTooltipDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 65329:
/*!*********************************************************!*\
  !*** ./src/app/pages/company/company-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyRoutingModule": () => (/* binding */ CompanyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _company_add_edit_company_add_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-add-edit/company-add-edit.component */ 95781);
/* harmony import */ var _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-list/company-list.component */ 35181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);

// Components




const routes = [
    {
        path: '',
        component: _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_1__.CompanyListComponent,
    },
    {
        path: 'create',
        component: _company_add_edit_company_add_edit_component__WEBPACK_IMPORTED_MODULE_0__.CompanyAddEditComponent,
    },
    {
        path: 'edit/:id',
        component: _company_add_edit_company_add_edit_component__WEBPACK_IMPORTED_MODULE_0__.CompanyAddEditComponent,
    },
];
class CompanyRoutingModule {
}
CompanyRoutingModule.ɵfac = function CompanyRoutingModule_Factory(t) { return new (t || CompanyRoutingModule)(); };
CompanyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CompanyRoutingModule });
CompanyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CompanyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 80721:
/*!*************************************************!*\
  !*** ./src/app/pages/company/company.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyModule": () => (/* binding */ CompanyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/interceptor/jwt-interceptor */ 94338);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 68581);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 84633);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/confirmdialog */ 46625);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 81122);
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-routing.module */ 65329);
/* harmony import */ var _company_add_edit_company_add_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-add-edit/company-add-edit.component */ 95781);
/* harmony import */ var _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-list/company-list.component */ 35181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);





// Interceptor

// Primeng





// Routing Module

// Components




class CompanyModule {
}
CompanyModule.ɵfac = function CompanyModule_Factory(t) { return new (t || CompanyModule)(); };
CompanyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CompanyModule });
CompanyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_6__.ConfirmationService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS, useClass: _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.NbAuthJWTInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS, useClass: _auth_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpErrorInterceptor, multi: true }
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbActionsModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbAlertModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCalendarKitModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCalendarModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCalendarRangeModule,
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
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _company_routing_module__WEBPACK_IMPORTED_MODULE_2__.CompanyRoutingModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbIconModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbTreeGridModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSelectModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbToggleModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbContextMenuModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDialogModule.forRoot(),
            primeng_table__WEBPACK_IMPORTED_MODULE_11__.TableModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonModule,
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__.ConfirmDialogModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_14__.DialogModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CompanyModule, { declarations: [_company_add_edit_company_add_edit_component__WEBPACK_IMPORTED_MODULE_3__.CompanyAddEditComponent,
        _company_list_company_list_component__WEBPACK_IMPORTED_MODULE_4__.CompanyListComponent], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbActionsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbAlertModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCalendarKitModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCalendarModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCalendarRangeModule,
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
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _company_routing_module__WEBPACK_IMPORTED_MODULE_2__.CompanyRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbIconModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbTreeGridModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSelectModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbToggleModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbContextMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDialogModule, primeng_table__WEBPACK_IMPORTED_MODULE_11__.TableModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__.ConfirmDialogModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_14__.DialogModule] }); })();


/***/ }),

/***/ 36027:
/*!***********************************************************!*\
  !*** ./src/app/pages/company/services/company.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyService": () => (/* binding */ CompanyService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/api-constant */ 79374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/auth */ 82284);
// Rxjs


// constant




class CompanyService {
    constructor(companyServicehttp, authService) {
        this.companyServicehttp = companyServicehttp;
        this.authService = authService;
        this.user = {};
        this.authService.onTokenChange().subscribe((token) => {
            if (token.isValid()) {
                this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
            }
        });
    }
    /**
     * Company List
     * @returns
     */
    getCompanyList() {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.COMPANY.LIST);
        return this.companyServicehttp.get(apiURL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(result);
            }
        }));
    }
    /**
     * Delete Company
     * @param deleteData
     * @returns
     *
     */
    deleteCompany(deleteData) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.COMPANY.DELETE);
        return this.companyServicehttp.delete(apiURL, deleteData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(result);
            }
        }));
    }
    /**
     * Bllock/UnBlock Company
     * @param deleteData
     * @returns
     *
     */
    blockUnBlockCompany(deleteData) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.COMPANY.BLOCK_UBLOCK);
        return this.companyServicehttp.delete(apiURL, deleteData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(result);
            }
        }));
    }
    /**
     * Retrive Company details
     * @param retriveData
     * @returns
     *
     */
    companyRetrive(retriveData) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.COMPANY.FETCH);
        return this.companyServicehttp.post(apiURL, retriveData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(result);
            }
        }));
    }
    /**
     * Add Company
     * @param Values
     * @returns
     *
     */
    AddCompanyDetials(company_obj) {
        let apiURL = (company_obj["flag"] == 0) ? (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.COMPANY.CREATE) : (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.COMPANY.UPDATE);
        return this.companyServicehttp.post(apiURL, company_obj).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(result);
            }
        }));
    }
}
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_6__.NbAuthService)); };
CompanyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_company_company_module_ts.js.map