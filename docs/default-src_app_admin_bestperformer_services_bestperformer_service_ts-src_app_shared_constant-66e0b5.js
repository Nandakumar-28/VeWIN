"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["default-src_app_admin_bestperformer_services_bestperformer_service_ts-src_app_shared_constant-66e0b5"],{

/***/ 3354:
/*!***********************************************************************!*\
  !*** ./src/app/admin/bestperformer/services/bestperformer.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BestperformerService": () => (/* binding */ BestperformerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var _shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/constants/api-constant */ 9374);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/auth */ 2284);






class BestperformerService {
    constructor(userServicehttp, authService) {
        this.userServicehttp = userServicehttp;
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
     * User List
     * @returns
     */
    getReferralIds(name) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(`${_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.BESTPERFORMER.REFID}?name=${name}`);
        return this.userServicehttp.get(apiURL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
    getBestperformerList() {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.BESTPERFORMER.GETAll);
        return this.userServicehttp.get(apiURL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
    /**
     * Delete User
     * @param userId
     * @returns
     *
     */
    deleteUser(id) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(`${_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.BESTPERFORMER.DELETE}?id=${id}`);
        return this.userServicehttp.put(apiURL, null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
    /**
     * Update User details
     * @param user
     * @returns
     *
     */
    updateUser(requestBody) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(`${_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.BESTPERFORMER.UPDATE}`);
        return this.userServicehttp.put(apiURL, requestBody).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
    /**
     * Create User
     * @param Values
     * @returns
     *
     */
    Createbestperformer(requestBody) {
        let apiURL = (0,_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.getApiEndPoint)(`${_shared_constants_api_constant__WEBPACK_IMPORTED_MODULE_0__.API_END_POINTS.BESTPERFORMER.ADD}`);
        return this.userServicehttp.post(apiURL, requestBody).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((result) => {
            if (result) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(result);
            }
        }));
    }
}
BestperformerService.ɵfac = function BestperformerService_Factory(t) { return new (t || BestperformerService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_7__.NbAuthService)); };
BestperformerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: BestperformerService, factory: BestperformerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7098:
/*!*********************************************************!*\
  !*** ./src/app/shared/constants/route-path.constant.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTE_PATH": () => (/* binding */ ROUTE_PATH)
/* harmony export */ });
const ROUTE_PATH = {
    PAGES: "pages",
    COMPANY: "company",
    COMPANIES: {
        LIST: "",
        CREATE: "create",
        EDIT: "edit"
    },
    ADMIN: "admin",
    DASHBOARD: "dashboard",
    USERS: "users",
    USERES: {
        LIST: "list",
        EDIT: "edit"
    },
    SALE: "sale",
    SALES: {
        LIST: "list"
    },
    PAYMENT: "payment",
    PAYMENTS: {
        LIST: "list",
        EDIT: "edit",
        CREATE: "create"
    },
    BESTPERFORMER: "bestperformer",
    BESTPERFORMERS: {
        LIST: "list",
        EDIT: "edit",
        CREATE: "create"
    },
    ANNOUNCEMENT: "announcement",
    ANNOUNCEMENTS: {
        LIST: "list",
        EDIT: "edit",
        CREATE: "create"
    },
    BANNER: "banner",
    BANNERS: {
        GET: "get",
        EDIT: "edit",
        CREATE: "create"
    },
    REGISTER: "register",
    REGISTERS: {
        LIST: "list"
    }
};


/***/ }),

/***/ 1338:
/*!****************************************************************!*\
  !*** ./node_modules/primeng/fesm2015/primeng-autocomplete.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTOCOMPLETE_VALUE_ACCESSOR": () => (/* binding */ AUTOCOMPLETE_VALUE_ACCESSOR),
/* harmony export */   "AutoComplete": () => (/* binding */ AutoComplete),
/* harmony export */   "AutoCompleteModule": () => (/* binding */ AutoCompleteModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 2875);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 5128);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 354);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 5752);

















const _c0 = ["container"];
const _c1 = ["in"];
const _c2 = ["multiIn"];
const _c3 = ["multiContainer"];
const _c4 = ["ddBtn"];

const _c5 = function (a0, a1) {
  return {
    "p-autocomplete-dd-input": a0,
    "p-disabled": a1
  };
};

function AutoComplete_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_input_2_Template_input_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r9.onInputClick($event);
    })("input", function AutoComplete_input_2_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r11.onInput($event);
    })("keydown", function AutoComplete_input_2_Template_input_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r12.onKeydown($event);
    })("keyup", function AutoComplete_input_2_Template_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r13.onKeyup($event);
    })("focus", function AutoComplete_input_2_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r14.onInputFocus($event);
    })("blur", function AutoComplete_input_2_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r15.onInputBlur($event);
    })("change", function AutoComplete_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r16.onInputChange($event);
    })("paste", function AutoComplete_input_2_Template_input_paste_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r17.onInputPaste($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.inputStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.inputStyle)("autocomplete", ctx_r1.autocomplete)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c5, ctx_r1.dropdown, ctx_r1.disabled))("value", ctx_r1.inputFieldValue)("readonly", ctx_r1.readonly)("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", ctx_r1.type)("id", ctx_r1.inputId)("required", ctx_r1.required)("name", ctx_r1.name)("autofocus", ctx_r1.autofocus)("placeholder", ctx_r1.placeholder)("size", ctx_r1.size)("maxlength", ctx_r1.maxlength)("tabindex", ctx_r1.tabindex)("aria-label", ctx_r1.ariaLabel)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-required", ctx_r1.required);
  }
}

function AutoComplete_i_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_i_3_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r18.clear();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function AutoComplete_i_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_i_4_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r20.clear();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function AutoComplete_ul_5_li_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function AutoComplete_ul_5_li_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const val_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.resolveFieldData(val_r25));
  }
}

function AutoComplete_ul_5_li_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_ul_5_li_2_span_4_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

      const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r31.removeItem(_r26);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

const _c6 = function (a0) {
  return {
    $implicit: a0
  };
};

function AutoComplete_ul_5_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ul_5_li_2_ng_container_2_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AutoComplete_ul_5_li_2_span_3_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutoComplete_ul_5_li_2_span_4_Template, 1, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const val_r25 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.selectedItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c6, val_r25));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r23.selectedItemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r23.disabled && !ctx_r23.readonly);
  }
}

const _c7 = function (a0, a1) {
  return {
    "p-disabled": a0,
    "p-focus": a1
  };
};

function AutoComplete_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_ul_5_Template_ul_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

      const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

      return _r24.focus();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ul_5_li_2_Template, 5, 6, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 14)(4, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AutoComplete_ul_5_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r35.onInput($event);
    })("click", function AutoComplete_ul_5_Template_input_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r36.onInputClick($event);
    })("keydown", function AutoComplete_ul_5_Template_input_keydown_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r37.onKeydown($event);
    })("keyup", function AutoComplete_ul_5_Template_input_keyup_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r38.onKeyup($event);
    })("focus", function AutoComplete_ul_5_Template_input_focus_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r39.onInputFocus($event);
    })("blur", function AutoComplete_ul_5_Template_input_blur_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r40.onInputBlur($event);
    })("change", function AutoComplete_ul_5_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r41.onInputChange($event);
    })("paste", function AutoComplete_ul_5_Template_input_paste_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r42.onInputPaste($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c7, ctx_r4.disabled, ctx_r4.focus));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.inputStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.disabled)("readonly", ctx_r4.readonly)("autocomplete", ctx_r4.autocomplete)("ngStyle", ctx_r4.inputStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", ctx_r4.type)("id", ctx_r4.inputId)("placeholder", ctx_r4.value && ctx_r4.value.length ? null : ctx_r4.placeholder)("tabindex", ctx_r4.tabindex)("maxlength", ctx_r4.maxlength)("autofocus", ctx_r4.autofocus)("aria-label", ctx_r4.ariaLabel)("aria-labelledby", ctx_r4.ariaLabelledBy)("aria-required", ctx_r4.required)("aria-controls", ctx_r4.listId)("aria-expanded", ctx_r4.overlayVisible)("aria-activedescendant", "p-highlighted-option");
  }
}

function AutoComplete_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 24);
  }
}

function AutoComplete_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_button_7_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r44.handleDropdownClick($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r6.dropdownIcon)("disabled", ctx_r6.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r6.dropdownAriaLabel)("tabindex", ctx_r6.tabindex);
  }
}

function AutoComplete_div_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function AutoComplete_div_8_ng_container_4_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const optgroup_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r55.getOptionGroupLabel(optgroup_r54) || "empty");
  }
}

function AutoComplete_div_8_ng_container_4_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function AutoComplete_div_8_ng_container_4_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function AutoComplete_div_8_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_div_8_ng_container_4_ng_template_1_span_1_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_div_8_ng_container_4_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AutoComplete_div_8_ng_container_4_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 19);
  }

  if (rf & 2) {
    const optgroup_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r53.groupTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r53.groupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c6, optgroup_r54));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r50)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c6, ctx_r53.getOptionGroupChildren(optgroup_r54)));
  }
}

function AutoComplete_div_8_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_div_8_ng_container_4_ng_template_1_Template, 4, 9, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r48.suggestions);
  }
}

function AutoComplete_div_8_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function AutoComplete_div_8_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_div_8_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r50)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c6, ctx_r49.suggestions));
  }
}

function AutoComplete_div_8_ng_template_6_ng_container_0_li_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r68.resolveFieldData(option_r66));
  }
}

function AutoComplete_div_8_ng_template_6_ng_container_0_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c8 = function (a0) {
  return {
    "p-highlight": a0
  };
};

const _c9 = function (a0, a1) {
  return {
    $implicit: a0,
    index: a1
  };
};

function AutoComplete_div_8_ng_template_6_ng_container_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_div_8_ng_template_6_ng_container_0_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);
      const option_r66 = restoredCtx.$implicit;
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return ctx_r71.selectItem(option_r66);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_div_8_ng_template_6_ng_container_0_li_1_span_1_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_div_8_ng_template_6_ng_container_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r66 = ctx.$implicit;
    const idx_r67 = ctx.index;
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c8, option_r66 === ctx_r65.highlightOption))("id", ctx_r65.highlightOption == option_r66 ? "p-highlighted-option" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r65.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r65.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c9, option_r66, idx_r67));
  }
}

function AutoComplete_div_8_ng_template_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_div_8_ng_template_6_ng_container_0_li_1_Template, 3, 10, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const suggestionsToDisplay_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", suggestionsToDisplay_r60);
  }
}

function AutoComplete_div_8_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r83.resolveFieldData(option_r76));
  }
}

function AutoComplete_div_8_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c10 = function (a0) {
  return {
    "height": a0
  };
};

function AutoComplete_div_8_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_div_8_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_Template_li_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);
      const option_r76 = restoredCtx.$implicit;
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return ctx_r86.selectItem(option_r76);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_div_8_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_span_2_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AutoComplete_div_8_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const option_r76 = ctx.$implicit;
    const i_r77 = ctx.index;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c8, option_r76 === ctx_r75.highlightOption))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c10, ctx_r75.itemSize + "px"))("id", ctx_r75.highlightOption == option_r76 ? "p-highlighted-option" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r75.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r75.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c9, option_r76, i_r77));
  }
}

function AutoComplete_div_8_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_div_8_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_ng_container_1_Template, 4, 13, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const suggestionsToDisplay_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c10, ctx_r74.scrollHeight))("itemSize", ctx_r74.itemSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", suggestionsToDisplay_r60);
  }
}

function AutoComplete_div_8_ng_template_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_div_8_ng_template_6_ng_template_1_cdk_virtual_scroll_viewport_0_Template, 2, 5, "cdk-virtual-scroll-viewport", 40);
  }

  if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r63.virtualScroll && !ctx_r63.noResults);
  }
}

function AutoComplete_div_8_ng_template_6_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r89.emptyMessageLabel, " ");
  }
}

function AutoComplete_div_8_ng_template_6_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 45);
  }
}

function AutoComplete_div_8_ng_template_6_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_div_8_ng_template_6_li_3_ng_container_1_Template, 2, 1, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_div_8_ng_template_6_li_3_ng_container_2_Template, 2, 0, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r64.emptyTemplate)("ngIfElse", ctx_r64.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r64.emptyTemplate);
  }
}

function AutoComplete_div_8_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_div_8_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_div_8_ng_template_6_ng_template_1_Template, 1, 1, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AutoComplete_div_8_ng_template_6_li_3_Template, 3, 3, "li", 37);
  }

  if (rf & 2) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r51.virtualScroll)("ngIfElse", _r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r51.noResults && ctx_r51.showEmptyMessage);
  }
}

function AutoComplete_div_8_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c11 = function () {
  return ["p-autocomplete-panel p-component"];
};

const _c12 = function (a0, a1) {
  return {
    showTransitionParams: a0,
    hideTransitionParams: a1
  };
};

const _c13 = function (a1) {
  return {
    value: "visible",
    params: a1
  };
};

const _c14 = function (a0) {
  return {
    "p-autocomplete-virtualscroll": a0
  };
};

function AutoComplete_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_div_8_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r92.onOverlayClick($event);
    })("@overlayAnimation.start", function AutoComplete_div_8_Template_div_animation_overlayAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r94.onOverlayAnimationStart($event);
    })("@overlayAnimation.done", function AutoComplete_div_8_Template_div_animation_overlayAnimation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r95.onOverlayAnimationEnd($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_div_8_ng_container_2_Template, 1, 0, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutoComplete_div_8_ng_container_4_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutoComplete_div_8_ng_container_5_Template, 2, 4, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AutoComplete_div_8_ng_template_6_Template, 4, 3, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AutoComplete_div_8_ng_container_8_Template, 1, 0, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r7.panelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r7.virtualScroll ? "auto" : ctx_r7.scrollHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c11))("ngStyle", ctx_r7.panelStyle)("@overlayAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c12, ctx_r7.showTransitionOptions, ctx_r7.hideTransitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c14, ctx_r7.virtualScroll));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r7.listId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.footerTemplate);
  }
}

const _c15 = function (a1, a2) {
  return {
    "p-autocomplete p-component": true,
    "p-autocomplete-dd": a1,
    "p-autocomplete-multiple": a2
  };
};

const AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AutoComplete),
  multi: true
};

class AutoComplete {
  constructor(el, renderer, cd, differs, config, overlayService) {
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.differs = differs;
    this.config = config;
    this.overlayService = overlayService;
    this.minLength = 1;
    this.delay = 300;
    this.type = 'text';
    this.autoZIndex = true;
    this.baseZIndex = 0;
    this.dropdownIcon = "pi pi-chevron-down";
    this.unique = true;
    this.completeOnFocus = false;
    this.showClear = false;
    this.completeMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDropdownClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scrollHeight = '200px';
    this.dropdownMode = 'blank';
    this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
    this.hideTransitionOptions = '.1s linear';
    this.autocomplete = 'off';

    this.onModelChange = () => {};

    this.onModelTouched = () => {};

    this.overlayVisible = false;
    this.focus = false;
    this.inputFieldValue = null;
    this.inputValue = null;
    this.differ = differs.find([]).create(null);
    this.listId = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)() + '_list';
  }

  get suggestions() {
    return this._suggestions;
  }

  set suggestions(val) {
    this._suggestions = val;
    this.handleSuggestionsChange();
  }

  ngAfterViewChecked() {
    //Use timeouts as since Angular 4.2, AfterViewChecked is broken and not called after panel is updated
    if (this.suggestionsUpdated && this.overlay && this.overlay.offsetParent) {
      setTimeout(() => {
        if (this.overlay) {
          this.alignOverlay();
        }
      }, 1);
      this.suggestionsUpdated = false;
    }

    if (this.highlightOptionChanged) {
      setTimeout(() => {
        if (this.overlay && this.itemsWrapper) {
          let listItem = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.overlay, 'li.p-highlight');

          if (listItem) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.scrollInView(this.itemsWrapper, listItem);
          }

          if (this.virtualScroll && this.viewPort) {
            let range = this.viewPort.getRenderedRange();
            this.updateVirtualScrollSelectedIndex();

            if (range.start > this.virtualScrollSelectedIndex || range.end < this.virtualScrollSelectedIndex) {
              this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
            }
          }
        }
      }, 1);
      this.highlightOptionChanged = false;
    }
  }

  handleSuggestionsChange() {
    if (this._suggestions != null && this.loading) {
      this.highlightOption = null;

      if (this._suggestions.length) {
        this.noResults = false;
        this.show();
        this.suggestionsUpdated = true;

        if (this.autoHighlight) {
          this.highlightOption = this._suggestions[0];
        }
      } else {
        this.noResults = true;

        if (this.showEmptyMessage) {
          this.show();
          this.suggestionsUpdated = true;
        } else {
          this.hide();
        }
      }

      this.loading = false;
    }
  }

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;

        case 'group':
          this.groupTemplate = item.template;
          break;

        case 'selectedItem':
          this.selectedItemTemplate = item.template;
          break;

        case 'header':
          this.headerTemplate = item.template;
          break;

        case 'empty':
          this.emptyTemplate = item.template;
          break;

        case 'footer':
          this.footerTemplate = item.template;
          break;

        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }

  updateVirtualScrollSelectedIndex() {
    if (this.highlightOption && this.suggestions && this.suggestions.length) {
      this.virtualScrollSelectedIndex = this.findOptionIndex(this.highlightOption, this.suggestions);
    }
  }

  writeValue(value) {
    this.value = value;
    this.filled = this.value && this.value != '';
    this.updateInputField();
    this.cd.markForCheck();
  }

  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }

  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup.label != undefined ? optionGroup.label : optionGroup;
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }

  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }

  onInput(event) {
    // When an input element with a placeholder is clicked, the onInput event is invoked in IE.
    if (!this.inputKeyDown && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.isIE()) {
      return;
    }

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    let value = event.target.value;
    this.inputValue = value;

    if (!this.multiple && !this.forceSelection) {
      this.onModelChange(value);
    }

    if (value.length === 0 && !this.multiple) {
      this.hide();
      this.onClear.emit(event);
      this.onModelChange(value);
    }

    if (value.length >= this.minLength) {
      this.timeout = setTimeout(() => {
        this.search(event, value);
      }, this.delay);
    } else {
      this.hide();
    }

    this.updateFilledState();
    this.inputKeyDown = false;
  }

  onInputClick(event) {
    if (this.documentClickListener) {
      this.inputClick = true;
    }
  }

  search(event, query) {
    //allow empty string but not undefined or null
    if (query === undefined || query === null) {
      return;
    }

    this.loading = true;
    this.completeMethod.emit({
      originalEvent: event,
      query: query
    });
  }

  selectItem(option, focus = true) {
    if (this.forceSelectionUpdateModelTimeout) {
      clearTimeout(this.forceSelectionUpdateModelTimeout);
      this.forceSelectionUpdateModelTimeout = null;
    }

    if (this.multiple) {
      this.multiInputEL.nativeElement.value = '';
      this.value = this.value || [];

      if (!this.isSelected(option) || !this.unique) {
        this.value = [...this.value, option];
        this.onModelChange(this.value);
      }
    } else {
      this.inputEL.nativeElement.value = this.resolveFieldData(option);
      this.value = option;
      this.onModelChange(this.value);
    }

    this.onSelect.emit(option);
    this.updateFilledState();

    if (focus) {
      this.itemClicked = true;
      this.focusInput();
    }
  }

  show() {
    if (this.multiInputEL || this.inputEL) {
      let hasFocus = this.multiple ? this.multiInputEL.nativeElement.ownerDocument.activeElement == this.multiInputEL.nativeElement : this.inputEL.nativeElement.ownerDocument.activeElement == this.inputEL.nativeElement;

      if (!this.overlayVisible && hasFocus) {
        this.overlayVisible = true;
      }
    }
  }

  clear() {
    if (this.multiple) {
      this.value = null;
    } else {
      this.inputValue = null;
      this.inputEL.nativeElement.value = '';
    }

    this.onModelChange(this.value);
    this.onClear.emit();
  }

  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case 'visible':
        this.overlay = event.element;
        this.itemsWrapper = this.virtualScroll ? primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.overlay, '.cdk-virtual-scroll-viewport') : this.overlay;
        this.appendOverlay();

        if (this.autoZIndex) {
          primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('overlay', this.overlay, this.baseZIndex + this.config.zIndex.overlay);
        }

        this.alignOverlay();
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
        this.bindScrollListener();
        this.onShow.emit(event);
        break;

      case 'void':
        this.onOverlayHide();
        break;
    }
  }

  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case 'void':
        if (this.autoZIndex) {
          primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(event.element);
        }

        break;
    }
  }

  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }

  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === 'body') document.body.appendChild(this.overlay);else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.appendChild(this.overlay, this.appendTo);

      if (!this.overlay.style.minWidth) {
        this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(this.el.nativeElement.children[0]) + 'px';
      }
    }
  }

  resolveFieldData(value) {
    let data = this.field ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(value, this.field) : value;
    return data !== ( false || undefined) ? data : '';
  }

  restoreOverlayAppend() {
    if (this.overlay && this.appendTo) {
      this.el.nativeElement.appendChild(this.overlay);
    }
  }

  alignOverlay() {
    if (this.appendTo) primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.absolutePosition(this.overlay, this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.relativePosition(this.overlay, this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement);
  }

  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }

  handleDropdownClick(event) {
    if (!this.overlayVisible) {
      this.focusInput();
      let queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
      if (this.dropdownMode === 'blank') this.search(event, '');else if (this.dropdownMode === 'current') this.search(event, queryValue);
      this.onDropdownClick.emit({
        originalEvent: event,
        query: queryValue
      });
    } else {
      this.hide();
    }
  }

  focusInput() {
    if (this.multiple) this.multiInputEL.nativeElement.focus();else this.inputEL.nativeElement.focus();
  }

  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_4__.TranslationKeys.EMPTY_MESSAGE);
  }

  removeItem(item) {
    let itemIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(item);
    let removedValue = this.value[itemIndex];
    this.value = this.value.filter((val, i) => i != itemIndex);
    this.onModelChange(this.value);
    this.updateFilledState();
    this.onUnselect.emit(removedValue);
  }

  onKeydown(event) {
    if (this.overlayVisible) {
      switch (event.which) {
        //down
        case 40:
          if (this.group) {
            let highlightItemIndex = this.findOptionGroupIndex(this.highlightOption, this.suggestions);

            if (highlightItemIndex !== -1) {
              let nextItemIndex = highlightItemIndex.itemIndex + 1;

              if (nextItemIndex < this.getOptionGroupChildren(this.suggestions[highlightItemIndex.groupIndex]).length) {
                this.highlightOption = this.getOptionGroupChildren(this.suggestions[highlightItemIndex.groupIndex])[nextItemIndex];
                this.highlightOptionChanged = true;
              } else if (this.suggestions[highlightItemIndex.groupIndex + 1]) {
                this.highlightOption = this.getOptionGroupChildren(this.suggestions[highlightItemIndex.groupIndex + 1])[0];
                this.highlightOptionChanged = true;
              }
            } else {
              this.highlightOption = this.getOptionGroupChildren(this.suggestions[0])[0];
            }
          } else {
            let highlightItemIndex = this.findOptionIndex(this.highlightOption, this.suggestions);

            if (highlightItemIndex != -1) {
              var nextItemIndex = highlightItemIndex + 1;

              if (nextItemIndex != this.suggestions.length) {
                this.highlightOption = this.suggestions[nextItemIndex];
                this.highlightOptionChanged = true;
              }
            } else {
              this.highlightOption = this.suggestions[0];
            }
          }

          event.preventDefault();
          break;
        //up

        case 38:
          if (this.group) {
            let highlightItemIndex = this.findOptionGroupIndex(this.highlightOption, this.suggestions);

            if (highlightItemIndex !== -1) {
              let prevItemIndex = highlightItemIndex.itemIndex - 1;

              if (prevItemIndex >= 0) {
                this.highlightOption = this.getOptionGroupChildren(this.suggestions[highlightItemIndex.groupIndex])[prevItemIndex];
                this.highlightOptionChanged = true;
              } else if (prevItemIndex < 0) {
                let prevGroup = this.suggestions[highlightItemIndex.groupIndex - 1];

                if (prevGroup) {
                  this.highlightOption = this.getOptionGroupChildren(prevGroup)[this.getOptionGroupChildren(prevGroup).length - 1];
                  this.highlightOptionChanged = true;
                }
              }
            }
          } else {
            let highlightItemIndex = this.findOptionIndex(this.highlightOption, this.suggestions);

            if (highlightItemIndex > 0) {
              let prevItemIndex = highlightItemIndex - 1;
              this.highlightOption = this.suggestions[prevItemIndex];
              this.highlightOptionChanged = true;
            }
          }

          event.preventDefault();
          break;
        //enter

        case 13:
          if (this.highlightOption) {
            this.selectItem(this.highlightOption);
            this.hide();
          }

          event.preventDefault();
          break;
        //escape

        case 27:
          this.hide();
          event.preventDefault();
          break;
        //tab

        case 9:
          if (this.highlightOption) {
            this.selectItem(this.highlightOption);
          }

          this.hide();
          break;
      }
    } else {
      if (event.which === 40 && this.suggestions) {
        this.search(event, event.target.value);
      } else if (event.ctrlKey && event.key === 'z' && !this.multiple) {
        this.inputEL.nativeElement.value = this.resolveFieldData(null);
        this.value = '';
        this.onModelChange(this.value);
      } else if (event.ctrlKey && event.key === 'z' && this.multiple) {
        this.value.pop();
        this.onModelChange(this.value);
        this.updateFilledState();
      }
    }

    if (this.multiple) {
      switch (event.which) {
        //backspace
        case 8:
          if (this.value && this.value.length && !this.multiInputEL.nativeElement.value) {
            this.value = [...this.value];
            const removedValue = this.value.pop();
            this.onModelChange(this.value);
            this.updateFilledState();
            this.onUnselect.emit(removedValue);
          }

          break;
      }
    }

    this.inputKeyDown = true;
  }

  onKeyup(event) {
    this.onKeyUp.emit(event);
  }

  onInputFocus(event) {
    if (!this.itemClicked && this.completeOnFocus) {
      let queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
      this.search(event, queryValue);
    }

    this.focus = true;
    this.onFocus.emit(event);
    this.itemClicked = false;
  }

  onInputBlur(event) {
    this.focus = false;
    this.onModelTouched();
    this.onBlur.emit(event);
  }

  onInputChange(event) {
    if (this.forceSelection) {
      let valid = false;
      let inputValue = event.target.value.trim();

      if (this.suggestions) {
        for (let suggestion of this.suggestions) {
          let itemValue = this.field ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(suggestion, this.field) : suggestion;

          if (itemValue && inputValue === itemValue.trim()) {
            valid = true;
            this.forceSelectionUpdateModelTimeout = setTimeout(() => {
              this.selectItem(suggestion, false);
            }, 250);
            break;
          }
        }
      }

      if (!valid) {
        if (this.multiple) {
          this.multiInputEL.nativeElement.value = '';
        } else {
          this.value = null;
          this.inputEL.nativeElement.value = '';
        }

        this.onClear.emit(event);
        this.onModelChange(this.value);
        this.updateFilledState();
      }
    }
  }

  onInputPaste(event) {
    this.onKeydown(event);
  }

  isSelected(val) {
    let selected = false;

    if (this.value && this.value.length) {
      for (let i = 0; i < this.value.length; i++) {
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(this.value[i], val, this.dataKey)) {
          selected = true;
          break;
        }
      }
    }

    return selected;
  }

  findOptionIndex(option, suggestions) {
    let index = -1;

    if (suggestions) {
      for (let i = 0; i < suggestions.length; i++) {
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(option, suggestions[i])) {
          index = i;
          break;
        }
      }
    }

    return index;
  }

  findOptionGroupIndex(val, opts) {
    let groupIndex, itemIndex;

    if (opts) {
      for (let i = 0; i < opts.length; i++) {
        groupIndex = i;
        itemIndex = this.findOptionIndex(val, this.getOptionGroupChildren(opts[i]));

        if (itemIndex !== -1) {
          break;
        }
      }
    }

    if (itemIndex !== -1) {
      return {
        groupIndex: groupIndex,
        itemIndex: itemIndex
      };
    } else {
      return -1;
    }
  }

  updateFilledState() {
    if (this.multiple) this.filled = this.value && this.value.length || this.multiInputEL && this.multiInputEL.nativeElement && this.multiInputEL.nativeElement.value != '';else this.filled = this.inputFieldValue && this.inputFieldValue != '' || this.inputEL && this.inputEL.nativeElement && this.inputEL.nativeElement.value != '';
    ;
  }

  updateInputField() {
    let formattedValue = this.resolveFieldData(this.value);
    this.inputFieldValue = formattedValue;

    if (this.inputEL && this.inputEL.nativeElement) {
      this.inputEL.nativeElement.value = formattedValue;
    }

    this.updateFilledState();
  }

  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentClickListener = this.renderer.listen(documentTarget, 'click', event => {
        if (event.which === 3) {
          return;
        }

        if (!this.inputClick && !this.isDropdownClick(event)) {
          this.hide();
        }

        this.inputClick = false;
        this.cd.markForCheck();
      });
    }
  }

  isDropdownClick(event) {
    if (this.dropdown) {
      let target = event.target;
      return target === this.dropdownButton.nativeElement || target.parentNode === this.dropdownButton.nativeElement;
    } else {
      return false;
    }
  }

  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }

  bindDocumentResizeListener() {
    this.documentResizeListener = this.onWindowResize.bind(this);
    window.addEventListener('resize', this.documentResizeListener);
  }

  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      window.removeEventListener('resize', this.documentResizeListener);
      this.documentResizeListener = null;
    }
  }

  onWindowResize() {
    this.hide();
  }

  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_3__.ConnectedOverlayScrollHandler(this.containerEL.nativeElement, () => {
        if (this.overlayVisible) {
          this.hide();
        }
      });
    }

    this.scrollHandler.bindScrollListener();
  }

  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }

  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
    this.onHide.emit();
  }

  ngOnDestroy() {
    if (this.forceSelectionUpdateModelTimeout) {
      clearTimeout(this.forceSelectionUpdateModelTimeout);
      this.forceSelectionUpdateModelTimeout = null;
    }

    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }

    if (this.overlay) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.overlay);
    }

    this.restoreOverlayAppend();
    this.onOverlayHide();
  }

}

AutoComplete.ɵfac = function AutoComplete_Factory(t) {
  return new (t || AutoComplete)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.OverlayService));
};

AutoComplete.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AutoComplete,
  selectors: [["p-autoComplete"]],
  contentQueries: function AutoComplete_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  viewQuery: function AutoComplete_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkVirtualScrollViewport, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerEL = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputEL = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiInputEL = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiContainerEL = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownButton = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewPort = _t.first);
    }
  },
  hostAttrs: [1, "p-element", "p-inputwrapper"],
  hostVars: 6,
  hostBindings: function AutoComplete_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focus && !ctx.disabled || ctx.overlayVisible)("p-autocomplete-clearable", ctx.showClear && !ctx.disabled);
    }
  },
  inputs: {
    minLength: "minLength",
    delay: "delay",
    style: "style",
    panelStyle: "panelStyle",
    styleClass: "styleClass",
    panelStyleClass: "panelStyleClass",
    inputStyle: "inputStyle",
    inputId: "inputId",
    inputStyleClass: "inputStyleClass",
    placeholder: "placeholder",
    readonly: "readonly",
    disabled: "disabled",
    virtualScroll: "virtualScroll",
    itemSize: "itemSize",
    maxlength: "maxlength",
    name: "name",
    required: "required",
    size: "size",
    appendTo: "appendTo",
    autoHighlight: "autoHighlight",
    forceSelection: "forceSelection",
    type: "type",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    ariaLabel: "ariaLabel",
    dropdownAriaLabel: "dropdownAriaLabel",
    ariaLabelledBy: "ariaLabelledBy",
    dropdownIcon: "dropdownIcon",
    unique: "unique",
    group: "group",
    completeOnFocus: "completeOnFocus",
    showClear: "showClear",
    field: "field",
    scrollHeight: "scrollHeight",
    dropdown: "dropdown",
    showEmptyMessage: "showEmptyMessage",
    dropdownMode: "dropdownMode",
    multiple: "multiple",
    tabindex: "tabindex",
    dataKey: "dataKey",
    emptyMessage: "emptyMessage",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    autofocus: "autofocus",
    autocomplete: "autocomplete",
    optionGroupChildren: "optionGroupChildren",
    optionGroupLabel: "optionGroupLabel",
    suggestions: "suggestions"
  },
  outputs: {
    completeMethod: "completeMethod",
    onSelect: "onSelect",
    onUnselect: "onUnselect",
    onFocus: "onFocus",
    onBlur: "onBlur",
    onDropdownClick: "onDropdownClick",
    onClear: "onClear",
    onKeyUp: "onKeyUp",
    onShow: "onShow",
    onHide: "onHide"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([AUTOCOMPLETE_VALUE_ACCESSOR])],
  decls: 9,
  vars: 14,
  consts: [[3, "ngClass", "ngStyle"], ["container", ""], ["class", "p-autocomplete-input p-inputtext p-component", "aria-autocomplete", "list", "role", "searchbox", 3, "ngStyle", "class", "autocomplete", "ngClass", "value", "readonly", "disabled", "click", "input", "keydown", "keyup", "focus", "blur", "change", "paste", 4, "ngIf"], ["class", "p-autocomplete-clear-icon pi pi-times", 3, "click", 4, "ngIf"], ["class", "p-autocomplete-multiple-container p-component p-inputtext", 3, "ngClass", "click", 4, "ngIf"], ["class", "p-autocomplete-loader pi pi-spinner pi-spin", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-autocomplete-dropdown", "pRipple", "", 3, "icon", "disabled", "click", 4, "ngIf"], [3, "ngClass", "max-height", "ngStyle", "class", "click", 4, "ngIf"], ["aria-autocomplete", "list", "role", "searchbox", 1, "p-autocomplete-input", "p-inputtext", "p-component", 3, "ngStyle", "autocomplete", "ngClass", "value", "readonly", "disabled", "click", "input", "keydown", "keyup", "focus", "blur", "change", "paste"], ["in", ""], [1, "p-autocomplete-clear-icon", "pi", "pi-times", 3, "click"], [1, "p-autocomplete-multiple-container", "p-component", "p-inputtext", 3, "ngClass", "click"], ["multiContainer", ""], ["class", "p-autocomplete-token", 4, "ngFor", "ngForOf"], [1, "p-autocomplete-input-token"], ["aria-autocomplete", "list", "role", "searchbox", "aria-haspopup", "true", 3, "disabled", "readonly", "autocomplete", "ngStyle", "input", "click", "keydown", "keyup", "focus", "blur", "change", "paste"], ["multiIn", ""], [1, "p-autocomplete-token"], ["token", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-autocomplete-token-label", 4, "ngIf"], ["class", "p-autocomplete-token-icon pi pi-times-circle", 3, "click", 4, "ngIf"], [1, "p-autocomplete-token-label"], [1, "p-autocomplete-token-icon", "pi", "pi-times-circle", 3, "click"], [1, "p-autocomplete-loader", "pi", "pi-spinner", "pi-spin"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-autocomplete-dropdown", 3, "icon", "disabled", "click"], ["ddBtn", ""], [3, "ngClass", "ngStyle", "click"], ["panel", ""], [4, "ngTemplateOutlet"], ["role", "listbox", 1, "p-autocomplete-items", 3, "ngClass"], [4, "ngIf"], ["itemslist", ""], ["ngFor", "", 3, "ngForOf"], [1, "p-autocomplete-item-group"], [4, "ngIf", "ngIfElse"], ["virtualScrollList", ""], ["class", "p-autocomplete-empty-message", 4, "ngIf"], ["role", "option", "class", "p-autocomplete-item", "pRipple", "", 3, "ngClass", "id", "click", 4, "ngFor", "ngForOf"], ["role", "option", "pRipple", "", 1, "p-autocomplete-item", 3, "ngClass", "id", "click"], [3, "ngStyle", "itemSize", 4, "ngIf"], [3, "ngStyle", "itemSize"], [4, "cdkVirtualFor", "cdkVirtualForOf"], ["role", "option", "pRipple", "", 1, "p-autocomplete-item", 3, "ngClass", "ngStyle", "id", "click"], [1, "p-autocomplete-empty-message"], ["empty", ""]],
  template: function AutoComplete_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_input_2_Template, 2, 23, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AutoComplete_i_3_Template, 1, 0, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutoComplete_i_4_Template, 1, 0, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutoComplete_ul_5_Template, 6, 23, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AutoComplete_i_6_Template, 1, 0, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AutoComplete_button_7_Template, 2, 4, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AutoComplete_div_8_Template, 9, 21, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c15, ctx.dropdown, ctx.multiple))("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.multiple);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.multiple && ctx.inputValue && ctx.filled && !ctx.disabled && ctx.showClear);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple && ctx.value && ctx.filled && !ctx.disabled && ctx.showClear);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dropdown);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.overlayVisible);
    }
  },
  directives: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkVirtualScrollViewport, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkVirtualForOf],
  styles: [".p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{position:absolute;top:50%;margin-top:-.5rem}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-top-right-radius:0;border-bottom-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-top-left-radius:0;border-bottom-left-radius:0}.p-autocomplete .p-autocomplete-panel{min-width:100%;top:0;left:0}.p-autocomplete-panel{position:absolute;overflow:auto}.p-autocomplete-items{margin:0;padding:0;list-style-type:none}.p-autocomplete-item{cursor:pointer;white-space:nowrap;position:relative;overflow:hidden}.p-autocomplete-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-autocomplete-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-autocomplete-token-icon{cursor:pointer}.p-autocomplete-input-token{flex:1 1 auto;display:inline-flex}.p-autocomplete-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}.p-autocomplete-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-autocomplete-clearable{position:relative}\n"],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
      opacity: 0,
      transform: 'scaleY(0.8)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoComplete, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-autoComplete',
      template: `
        <span #container [ngClass]="{'p-autocomplete p-component':true,'p-autocomplete-dd':dropdown,'p-autocomplete-multiple':multiple}" [ngStyle]="style" [class]="styleClass">
            <input *ngIf="!multiple" #in [attr.type]="type" [attr.id]="inputId" [ngStyle]="inputStyle" [class]="inputStyleClass" [autocomplete]="autocomplete" [attr.required]="required" [attr.name]="name"
            class="p-autocomplete-input p-inputtext p-component" [ngClass]="{'p-autocomplete-dd-input':dropdown,'p-disabled': disabled}" [value]="inputFieldValue" aria-autocomplete="list" role="searchbox"
            (click)="onInputClick($event)" (input)="onInput($event)" (keydown)="onKeydown($event)" (keyup)="onKeyup($event)" [attr.autofocus]="autofocus" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)" (change)="onInputChange($event)" (paste)="onInputPaste($event)"
            [attr.placeholder]="placeholder" [attr.size]="size" [attr.maxlength]="maxlength" [attr.tabindex]="tabindex" [readonly]="readonly" [disabled]="disabled" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy" [attr.aria-required]="required">
            <i *ngIf="!multiple && inputValue && filled && !disabled && showClear" class="p-autocomplete-clear-icon pi pi-times" (click)="clear()"></i>
            <i *ngIf="multiple && value && filled && !disabled && showClear" class="p-autocomplete-clear-icon pi pi-times" (click)="clear()"></i>
            <ul *ngIf="multiple" #multiContainer class="p-autocomplete-multiple-container p-component p-inputtext" [ngClass]="{'p-disabled':disabled,'p-focus':focus}" (click)="multiIn.focus()">
                <li #token *ngFor="let val of value" class="p-autocomplete-token">
                    <ng-container *ngTemplateOutlet="selectedItemTemplate; context: {$implicit: val}"></ng-container>
                    <span *ngIf="!selectedItemTemplate" class="p-autocomplete-token-label">{{resolveFieldData(val)}}</span>
                    <span  class="p-autocomplete-token-icon pi pi-times-circle" (click)="removeItem(token)" *ngIf="!disabled && !readonly"></span>
                </li>
                <li class="p-autocomplete-input-token">
                    <input #multiIn [attr.type]="type" [attr.id]="inputId" [disabled]="disabled" [attr.placeholder]="(value&&value.length ? null : placeholder)" [attr.tabindex]="tabindex" [attr.maxlength]="maxlength" (input)="onInput($event)"  (click)="onInputClick($event)"
                            (keydown)="onKeydown($event)" [readonly]="readonly" (keyup)="onKeyup($event)" [attr.autofocus]="autofocus" (focus)="onInputFocus($event)" (blur)="onInputBlur($event)" (change)="onInputChange($event)" (paste)="onInputPaste($event)" [autocomplete]="autocomplete"
                            [ngStyle]="inputStyle" [class]="inputStyleClass" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy" [attr.aria-required]="required"
                            aria-autocomplete="list" [attr.aria-controls]="listId" role="searchbox" [attr.aria-expanded]="overlayVisible" aria-haspopup="true" [attr.aria-activedescendant]="'p-highlighted-option'">
                </li>
            </ul>
            <i *ngIf="loading" class="p-autocomplete-loader pi pi-spinner pi-spin"></i><button #ddBtn type="button" pButton [icon]="dropdownIcon" [attr.aria-label]="dropdownAriaLabel" class="p-autocomplete-dropdown" [disabled]="disabled" pRipple
                (click)="handleDropdownClick($event)" *ngIf="dropdown" [attr.tabindex]="tabindex"></button>
            <div #panel *ngIf="overlayVisible" (click)="onOverlayClick($event)" [ngClass]="['p-autocomplete-panel p-component']" [style.max-height]="virtualScroll ? 'auto' : scrollHeight" [ngStyle]="panelStyle" [class]="panelStyleClass"
                [@overlayAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@overlayAnimation.start)="onOverlayAnimationStart($event)" (@overlayAnimation.done)="onOverlayAnimationEnd($event)">
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                <ul role="listbox" [attr.id]="listId" class="p-autocomplete-items" [ngClass]="{'p-autocomplete-virtualscroll': virtualScroll}">
                    <ng-container *ngIf="group">
                        <ng-template ngFor let-optgroup [ngForOf]="suggestions">
                            <li class="p-autocomplete-item-group">
                                <span *ngIf="!groupTemplate">{{getOptionGroupLabel(optgroup)||'empty'}}</span>
                                <ng-container *ngTemplateOutlet="groupTemplate; context: {$implicit: optgroup}"></ng-container>
                            </li>
                            <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: getOptionGroupChildren(optgroup)}"></ng-container>
                        </ng-template>
                    </ng-container>
                    <ng-container *ngIf="!group">
                            <ng-container *ngTemplateOutlet="itemslist; context: {$implicit: suggestions}"></ng-container>
                    </ng-container>
                    <ng-template #itemslist let-suggestionsToDisplay>
                        <ng-container *ngIf="!virtualScroll; else virtualScrollList">
                            <li role="option" *ngFor="let option of suggestionsToDisplay; let idx = index" class="p-autocomplete-item" pRipple [ngClass]="{'p-highlight': (option === highlightOption)}" [id]="highlightOption == option ? 'p-highlighted-option':''" (click)="selectItem(option)">
                                <span *ngIf="!itemTemplate">{{resolveFieldData(option)}}</span>
                                <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: option, index: idx}"></ng-container>
                            </li>
                        </ng-container>
                        <ng-template #virtualScrollList>
                            <cdk-virtual-scroll-viewport [ngStyle]="{'height': scrollHeight}" [itemSize]="itemSize" *ngIf="virtualScroll && !noResults">
                                <ng-container *cdkVirtualFor="let option of suggestionsToDisplay; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd">
                                    <li role="option" class="p-autocomplete-item" pRipple [ngClass]="{'p-highlight': (option === highlightOption)}" [ngStyle]="{'height': itemSize + 'px'}" [id]="highlightOption == option ? 'p-highlighted-option':''" (click)="selectItem(option)">
                                        <span *ngIf="!itemTemplate">{{resolveFieldData(option)}}</span>
                                        <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: option, index: i}"></ng-container>
                                    </li>
                                </ng-container>
                            </cdk-virtual-scroll-viewport>
                        </ng-template>
                        <li *ngIf="noResults && showEmptyMessage" class="p-autocomplete-empty-message">
                            <ng-container *ngIf="!emptyTemplate; else empty">
                                {{emptyMessageLabel}}
                            </ng-container>
                            <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                        </li>
                    </ng-template>
                </ul>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </span>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        opacity: 0,
        transform: 'scaleY(0.8)'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        opacity: 0
      }))])])],
      host: {
        'class': 'p-element p-inputwrapper',
        '[class.p-inputwrapper-filled]': 'filled',
        '[class.p-inputwrapper-focus]': '(focus && !disabled) || overlayVisible',
        '[class.p-autocomplete-clearable]': 'showClear && !disabled'
      },
      providers: [AUTOCOMPLETE_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      styles: [".p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{position:absolute;top:50%;margin-top:-.5rem}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-top-right-radius:0;border-bottom-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-top-left-radius:0;border-bottom-left-radius:0}.p-autocomplete .p-autocomplete-panel{min-width:100%;top:0;left:0}.p-autocomplete-panel{position:absolute;overflow:auto}.p-autocomplete-items{margin:0;padding:0;list-style-type:none}.p-autocomplete-item{cursor:pointer;white-space:nowrap;position:relative;overflow:hidden}.p-autocomplete-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-autocomplete-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-autocomplete-token-icon{cursor:pointer}.p-autocomplete-input-token{flex:1 1 auto;display:inline-flex}.p-autocomplete-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}.p-autocomplete-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-autocomplete-clearable{position:relative}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_4__.OverlayService
    }];
  }, {
    minLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    delay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputStyleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxlength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoHighlight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    forceSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropdownAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropdownIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    unique: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    group: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    completeOnFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    completeMethod: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onUnselect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDropdownClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onKeyUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropdown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showEmptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropdownMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dataKey: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    emptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autofocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autocomplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionGroupChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionGroupLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    containerEL: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['container']
    }],
    inputEL: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['in']
    }],
    multiInputEL: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['multiIn']
    }],
    multiContainerEL: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['multiContainer']
    }],
    dropdownButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['ddBtn']
    }],
    viewPort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkVirtualScrollViewport]
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate]
    }],
    suggestions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class AutoCompleteModule {}

AutoCompleteModule.ɵfac = function AutoCompleteModule_Factory(t) {
  return new (t || AutoCompleteModule)();
};

AutoCompleteModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AutoCompleteModule
});
AutoCompleteModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.ScrollingModule], primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.ScrollingModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoCompleteModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.ScrollingModule],
      exports: [AutoComplete, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.ScrollingModule],
      declarations: [AutoComplete]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-src_app_admin_bestperformer_services_bestperformer_service_ts-src_app_shared_constant-66e0b5.js.map