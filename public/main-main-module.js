(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "3hl/":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "dSXC");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "6d1u");
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faqs/faqs.component */ "QLSk");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "IiFZ");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/index.component */ "TzqU");
/* harmony import */ var _invest_invest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invest/invest.component */ "ktYW");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "og/B");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main.component */ "wlho");
/* harmony import */ var _mission_mission_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mission/mission.component */ "D6gV");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pricing/pricing.component */ "MLlf");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./privacy/privacy.component */ "PcvM");
/* harmony import */ var _register_link_register_link_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register-link/register-link.component */ "qVOK");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "z//g");
/* harmony import */ var _risk_risk_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./risk/risk.component */ "uQQZ");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./support/support.component */ "oTVA");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./terms/terms.component */ "p03E");




















const routes = [
    {
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
        children: [
            {
                path: '',
                component: _index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"]
            },
            {
                path: 'about',
                component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
            },
            {
                path: 'mission',
                component: _mission_mission_component__WEBPACK_IMPORTED_MODULE_10__["MissionComponent"]
            },
            {
                path: 'pricing',
                component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__["PricingComponent"]
            },
            {
                path: 'terms',
                component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_17__["TermsComponent"]
            },
            {
                path: 'faq',
                component: _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_4__["FaqsComponent"]
            },
            // {
            //   path: 'support',
            //   component: SupportComponent
            // },
            {
                path: 'support',
                component: _support_support_component__WEBPACK_IMPORTED_MODULE_16__["SupportComponent"]
            },
            {
                path: 'privacy',
                component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_12__["PrivacyComponent"]
            },
            {
                path: 'contact',
                component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
            },
            {
                path: 'risk',
                component: _risk_risk_component__WEBPACK_IMPORTED_MODULE_15__["RiskComponent"]
            },
            {
                path: 'invest',
                component: _invest_invest_component__WEBPACK_IMPORTED_MODULE_7__["InvestComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
            },
            {
                path: 'forget',
                component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"]
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"]
            },
            {
                path: 'register/:token',
                component: _register_link_register_link_component__WEBPACK_IMPORTED_MODULE_13__["RegisterLinkComponent"]
            },
        ]
    }
];
class MainRoutingModule {
}
MainRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "6d1u":
/*!***************************************************!*\
  !*** ./src/app/main/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/data/auth.service */ "/9VY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class ContactComponent {
    constructor(_authService, formBuilder, _router) {
        this._authService = _authService;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.contactForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
        });
        // Function to message the platform
        // Function to login
        this.message = (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(data);
            yield this._authService.message(data).subscribe(res => {
                this.contactForm.reset();
            }, (err) => {
                console.log(err);
            });
        });
    }
    ngOnInit() { }
}
ContactComponent.??fac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ContactComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 83, vars: 1, consts: [["id", "page-banner"], ["data-background", "assets/img/bg/slide1.jpg", 1, "single-page-title-area", "overlay", "bg"], [1, "auto-container"], [1, "row"], [1, "col-12", "text-center"], [1, "single-page-title"], [1, "single-page-title-area-bottom"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", ""], [1, "breadcrumb-item", "active"], ["id", "contactpage", 1, "section-padding"], [1, "container"], [1, "section-title"], [1, "row", "text-center"], [1, "col-lg-4", "col-md-4", "col-12", "mb-lg-0", "mb-md-0", "mb-5"], [1, "single-address"], [1, "single-address-icon"], [1, "far", "fa-envelope-open"], [1, "single-address-dec"], ["href", "mailto:support@@allianceinvestmanagement.com?subject=The%20subject%20of%20the%20mail"], [1, "single-address-link"], [1, "section-title-2"], [1, "col-lg-7", "mx-auto"], [1, "contact-form-wrapper"], [1, "contact-form"], ["return", "", "false", "", 3, "formGroup"], [1, "form-group", "col-12", "mb-3"], ["formControlName", "name", "required", "required", "type", "text", 1, "form-control"], ["formControlName", "email", "required", "required", "type", "email", 1, "form-control"], ["formControlName", "phone_number", "required", "required", "type", "text", 1, "form-control"], ["formControlName", "subject", "required", "required", "type", "text", 1, "form-control"], ["rows", "6", "formControlName", "message", "placeholder", "Your Message Here...", "required", "required", 1, "form-control"], [1, "form-group", "col-lg-12", "mb-0", "text-center"], [1, "actions"], ["type", "submit", 1, "btn", "btn-contact-bg", 3, "click"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "response with in minute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](34, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Write a mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "support");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "@allianceinvestmanagement.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Send mail with subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "quick Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Send Us Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "Full Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](62, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "Your Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](66, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "Phone Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](70, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](73, "Subject:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](74, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "Message:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](78, "textarea", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ContactComponent_Template_button_click_81_listener() { return ctx.message(ctx.contactForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](82, "Message Us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.contactForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-image: url('slide1.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUFDSiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnL3NsaWRlMS5qcGcnKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "D6gV":
/*!***************************************************!*\
  !*** ./src/app/main/mission/mission.component.ts ***!
  \***************************************************/
/*! exports provided: MissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionComponent", function() { return MissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MissionComponent {
    constructor() { }
    ngOnInit() {
    }
}
MissionComponent.??fac = function MissionComponent_Factory(t) { return new (t || MissionComponent)(); };
MissionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MissionComponent, selectors: [["app-mission"]], decls: 44, vars: 0, consts: [["id", "page-banner"], ["data-background", "../../../assets/img/images/aliance.JPG", 1, "single-page-title-area", "overlay", "bg"], [1, "auto-container"], [1, "row"], [1, "col-12", "text-center"], [1, "single-page-title"], [1, "single-page-title-area-bottom"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "/"], [1, "breadcrumb-item", "active"], [1, "copyright"], [1, "col-lg-6", "col-md-6", "col-sm-12", "col-12", "mb-lg-0", "mb-md-0", "mb-4", "footer-menu", "text-center", "text-lg-left", "text-md-left"], ["href", "#"]], template: function MissionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Vision Statement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " To be the preferred investment service provider to the clients we serve. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Mission Statement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " We provide investment/financial products and services to meet the needs of our clients and deliver superior returns. In doing so, the aspirations of our employees for growth and development are realized, and enhanced value achieved for all our stakeholders. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Core Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Independence:\u00A0Freedom from the influence and special interests allow us to offer our clients honest and unbiased perspectives. With no affiliations to any key financial institutions, banks, or insurance companies,Alliance Investment Management Ltd is able to make the best decisions for our investors. We scour the markets for the best available opportunities and present them directly to our clients, who subsequently reap the rewards. Integrity:\u00A0We believe in doing what is right and standing by it. As a financial institution, we strive to be honest and disciplined in all that we do. We also expect that our employees maintain the highest ethical standards in their ongoing activities. We understand the importance of keeping our clients\u2019 information strictly confidential and as a result, we have implemented stringent procedures and put a number of measures in place to ensure that no breaches occur. Innovation:\u00A0We relentlessly pursue new and better ways to add value to those whom we serve. At Alliance Investment Management Ltd, we consider innovation as our key to success. Throughout the years, Alliance Investment Management Ltd has consistently added new products and services to our financial suite. We are continuously keeping abreast of market movements and searching for the best opportunities in local, regional, and international markets, which aids in making superior investment decisions for you. Investor Education:\u00A0We strive to help our clients make the best and most informed investment choices. Our highly skilled Investment Analysts conduct research on a day-to-day basis and collaborate on ideas and advice from globally recognized financial institutions.Alliance Investment Management Ltd shares this information regularly with potential and existing investors using a variety of communication channels. \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Our Responsible Investment Strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Responsible Investment (RI) often focuses on the consideration of environmental, social and governance (ESG) factors in investment decision-making and active ownership practices. While this is critically important, we believe that effective and credible approaches to responsible investment must rest on foundations of a strong stewardship mind-set, engaged people, quality investment processes and responsible and ethical business conduct. For over a decade this has formed the basis of our strategic approach to RI.\u00A0 \u00A0 Our diverse investment capabilities Our commitment to RI and stewardship is a common thread which runs through our diverse investment capabilities.\u00A0 Each investment team are specialists in their respective fields and set their own investment philosophies and processes.\u00A0 In particular, all teams believe that ESG issues impact investment value and that as a leading global institutional investor we can achieve better long-term investment outcomes through active engagement and by exercising the equity ownership rights we hold on behalf of our clients. The teams also integrate ESG into their investment process in various different ways. The RI Steering Group will take a decision to implement a company-wide ban on certain companies in certain sectors and several teams apply additional screens when requested by clients at mandate level. Why choose\u00A0Allinace Investment Management Ltd? This product is geared toward individual investors who have\u00A0challenges in setting up their portfolio, which is, choosing the right assets to achieve the desired objective. The correct mix is achieved only through careful selection based on accurate information and constant monitoring of the markets- a time-consuming task for many potential investors who may not have the investment know-how or time to commit this most important aspect. When managing your own portfolio, you must also contend with challenging decisions on which assets to purchase or dispose of when purchasing or dispose of and how much to purchase or dispose of in order to have the right mix to achieve your objectives. At Allinace Investment Management Ltd, we take these burdens off your shoulder. We offer you a very PERSONALIZED service- a one-on-one Client/ Investment Services Adviser relationship. We have a readymade portfolio that is tailored to your specifications, molded by your changing needs, and suitable for your investment goals. Creating your Investment Our Investment Plan service is carried out in 3 stages: First Stage: The investment is for individual Investors or Groups that wish to invest in\u00A0the Importation of Shrimps & Prawns from Asia to Europe\u00A0Investment Plan and the plan comes in 3 stages. You Second Stage: We have an investment trading for\u00A0Currency Exchange Trading (Digital & Paper Currency)\u00A0which is applicable for both the individual investor and group of investors. Third Stage: The last investment plan is for individual investor or group that wishes to invest in Chemical Products Trading and Agricultural Production Trading. Note:\u00A0Every investment Stage and Plans comes with different ROI periods and calculations, we advise you to choose your investment plan in line with your justification. Benefits of Investing with Allinace Investment Management Ltd The Investment Management team at Allinace Investment Management Ltd has a wealth of experience amounting to some of the best expertise in the world equity market and fixed income securities. In the local equity space, we are recognized as the best research house. Allinace Investment Management Ltd has a highly successful record of advising institutional and individual investors in stock picking. This will be of substantial benefit to your portfolio. One-on-one, in-depth review of your portfolio\u2019s performance with Allinace Investment Management Ltd Investment Analyst on a quarterly basis or more often as may be required. Quarterly statements and summary performance review on your portfolio in conjunction with changes in the market conditions. On-going information directly to you on\u00A0the outlook for specific Stocks, Bonds, and other money market instruments. Placing your investment Register\u00A0With us or\u00A0Login Deposit Fund through your dashboard Select any of the Investment Plan Wait for the period of investment to elapse Withdraw your profit and capital. You must be over 18 years of age Trust may be established on a single or joint basis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Company Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Terms & Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".bg[_ngcontent-%COMP%] {\n  background-image: url('slide1.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtaXNzaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUFDSiIsImZpbGUiOiJtaXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnL3NsaWRlMS5qcGcnKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MissionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mission',
                templateUrl: './mission.component.html',
                styleUrls: ['./mission.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IiFZ":
/*!*******************************************************************!*\
  !*** ./src/app/main/forget-password/forget-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/data/auth.service */ "/9VY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class ForgetPasswordComponent {
    constructor(_authService, formBuilder, _router) {
        this._authService = _authService;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.forgetForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ]
        };
        // Function to login
        this.forget = (form) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._authService.login(this.forgetForm.value).subscribe(res => {
                this._authService.setToken(res['token']);
                alert('Check your registered email address');
                if (res['role'] === 'user') {
                    this._router.navigate(['/user']);
                }
                else if (res['role'] === 'admin') {
                    this._router.navigate(['/panel/admin']);
                }
                else {
                    this._router.navigate(['/login']);
                }
            }, (err) => {
                alert(`${err['error']['message']}`);
            });
        });
    }
    ngOnInit() {
    }
}
ForgetPasswordComponent.??fac = function ForgetPasswordComponent_Factory(t) { return new (t || ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ForgetPasswordComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ForgetPasswordComponent, selectors: [["app-forget-password"]], decls: 39, vars: 1, consts: [["id", "page-banner"], ["data-background", "assets/img/bg/slide1.jpg", 1, "single-page-title-area", "overlay", "bg"], [1, "auto-container"], [1, "row"], [1, "col-12", "text-center"], [1, "single-page-title"], [1, "single-page-title-area-bottom"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], ["id", "contactpage", 1, "section-padding"], [1, "container"], [1, "section-title-2"], [1, "col-lg-7", "mx-auto"], [1, "contact-form-wrapper"], [1, "contact-form"], ["return", "", "false", "", 3, "formGroup"], [1, "form-group", "col-12", "mb-3"], ["formControlName", "email", "id", "email", "required", "required", "type", "email", 1, "form-control"], [1, "form-group", "col-lg-12", "mb-0", "text-center"], ["type", "submit", 1, "btn", "btn-contact-bg", 3, "click"]], template: function ForgetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Why Choose Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Forget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Forget Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Your Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ForgetPasswordComponent_Template_a_click_37_listener() { return ctx.forget(ctx.forgetForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.forgetForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ForgetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-forget-password',
                templateUrl: './forget-password.component.html',
                styleUrls: ['./forget-password.component.scss']
            }]
    }], function () { return [{ type: src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "MLlf":
/*!***************************************************!*\
  !*** ./src/app/main/pricing/pricing.component.ts ***!
  \***************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/pricing"]; };
class PricingComponent {
    constructor() { }
    ngOnInit() {
    }
}
PricingComponent.??fac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(); };
PricingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], decls: 174, vars: 10, consts: [["id", "page-banner"], ["data-background", "assets/img/bg/slide1.jpg", 1, "single-page-title-area", "overlay", "bg"], [1, "auto-container"], [1, "row"], [1, "col-12", "text-center"], [1, "single-page-title"], [1, "single-page-title-area-bottom"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "", 3, "routerLink"], [1, "breadcrumb-item", "active"], ["id", "price", 1, "section-padding", "bg-gray"], [1, "container"], [1, "section-title"], [1, "col-lg-4", "col-md-4", "col-12", "mb-lg-0", "mb-md-0", "mb-5"], [1, "single-pricing"], [1, "single-pricing-head", "text-center"], [1, "price"], [1, "price-digit"], [1, "single-pricing-body"], [1, "single-pricing-list"], [1, "icofont", "icofont-check-alt"], [1, "single-pricing-button"], [1, "mt-3", "d-block", "text-center", "rounded-0", 3, "routerLink"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Investment Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Investment packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Alliance Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Basic Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "/7 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " $100 Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "$4,999 Maximum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "2% on Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " 7 Days Investment Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Refreral Bonus: 6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Invest Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Alliance Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Standard Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "5,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "/14 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "$5000 Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "$9,999 Maximum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "2.5% on investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "14 Days Investment Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Refreral Bonus: 6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Invest Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Alliance Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, " Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Premium Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "10,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "/21 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "$10,000 Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "$99,999 Maximum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "3% on investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "21 Days Investment Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Refreral Bonus: 6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Invest Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Alliance Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, " Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "plantium Investments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "100,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "/90 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](157, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "$100,000 Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "$unlimited Maximum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "4.5% on investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "90 Days Investment Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](169, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "Refreral Bonus: 6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "Invest Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](9, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-image: url('slide1.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcmljaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUFDSiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnL3NsaWRlMS5qcGcnKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PricingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pricing',
                templateUrl: './pricing.component.html',
                styleUrls: ['./pricing.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PcvM":
/*!***************************************************!*\
  !*** ./src/app/main/privacy/privacy.component.ts ***!
  \***************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PrivacyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyComponent.??fac = function PrivacyComponent_Factory(t) { return new (t || PrivacyComponent)(); };
PrivacyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PrivacyComponent, selectors: [["app-privacy"]], decls: 34, vars: 0, consts: [["id", "page-banner"], ["data-background", "../../../assets/img/bg/slide1.jpg", 1, "single-page-title-area", "overlay", "bg"], [1, "auto-container"], [1, "row"], [1, "col-12", "text-center"], [1, "single-page-title"], [1, "single-page-title-area-bottom"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"]], template: function PrivacyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Privacy & Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Privacy & Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " This Privacy Policy is intended to describe how your personal information is processed and used. Please note that by visiting and using Alliance Investment management Ltd (AIM), you are accepting the practices described. Each computer connected to the internet is provided with a domain name and IP-address. When a visitor requests a web page from the site, our server automatically identifies and log the HTTP request that is made. This information reveals nothing personal about you. In fact, the only information we automatically gather and log is as follows: the IP-address of the site that may have referred you; your IP-address; the web page that you may have linked to us from, if any; the product identifier for version and make of browser (e.g. Google Chrome); the operating system platform that you may be running (e.g. Macintosh or Windows); search words or terms that are passed from a search engine (e.g. Google). Alliance Investment management Ltd has found it advantageous to examine visitor traffic so that we can ensure maximum compatibility for the various browsers and operating systems that visit our site. By analyzing visitation patterns, referring URLs and search engine terms, we can strategically enhance our exposure across the Internet. When we provide services, we want to make them easy, useful and reliable. Where services are delivered on the internet, this sometimes involves placing small amounts of information on your device, for example, your computer or mobile phone. These include small files known as cookies. They cannot be used to identify you personally. Alliance Investment management Ltd Company uses all reasonable precautions to keep the information disclosed to us secured. In order to protect the privacy of our clients, our program doesn't require them to provide their ID, photos or any other documents that may cause damage or distress. The information gathered during the use of this service is used solely to simplify the user account administration. Client information is confidential and can't be disclosed to third parties. Alliance Investnent management Ltd Company is not responsible for personal information leakage if the client accidentally or intentionally has provided access to his/her account to third parties. Furthermore, we are not responsible for any breach of security or for any actions of any third parties that receive the information. In order to avoid personal information disclosure, we recommend using an antivirus program, firewall and not to open emails sent from unknown senders and not to follow links in these emails. In order to protect your personal information, we warn our clients that we never, under any pretext, ask for login, password or access to a personal email box of the client. If you have received such a letter, don't respond to it and notify our support. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Anti - Spam Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Alliance Investment management Ltd Company is committed to permission-based email marketing practices, and as a result has established this no-tolerance anti-spam policy. This sets forth our policy with regard to the use of spam marketing techniques in connection with internet marketing. In the event that we deem you to be in violation of these policies, we shall immediately revoke your membership rights and close any active account. We have a strict policy against spamming. We forbid the sending of unsolicited mass emails or unsolicited emails of any kind in connection with the marketing of our system, investment plans, and services. We reserve the right to terminate your account and participation in our system if we deem you to be in violation of our anti-spamming policies. We also reserve the right to suspend your account and participation pending review upon receipt of any complaint or other evidence that you may be engaging in any spamming activity. We consider spamming to be any activity whereby you directly or indirectly transmit email messages to any email address that has not solicited such email and doesn't consent to such transmission. We also consider spamming to constitute posting advertisements in newsgroups in violation of the terms of participation in such newsgroups, which are off topic, or in newsgroups that don't specifically permit advertisements. We also consider it spamming when advertisements are placed on message boards or in chat rooms when they aren't permitted by the terms of participation in such message boards and chat rooms. If you are spammed by anyone regarding our program, investment plans, site or any other matters, please report this activity to\u00A0our support. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "br");
    } }, styles: [".bg[_ngcontent-%COMP%] {\n  background-image: url('slide1.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcml2YWN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUFDSiIsImZpbGUiOiJwcml2YWN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnL3NsaWRlMS5qcGcnKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PrivacyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy',
                templateUrl: './privacy.component.html',
                styleUrls: ['./privacy.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QLSk":
/*!*********************************************!*\
  !*** ./src/app/main/faqs/faqs.component.ts ***!
  \*********************************************/
/*! exports provided: FaqsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsComponent", function() { return FaqsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FaqsComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaqsComponent.??fac = function FaqsComponent_Factory(t) { return new (t || FaqsComponent)(); };
FaqsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FaqsComponent, selectors: [["app-faqs"]], decls: 127, vars: 0, consts: [["id", "page-banner"], ["data-background", "assets/img/bg/slide1.jpg", 1, "single-page-title-area", "overlay", "bg"], [1, "auto-container"], [1, "row"], [1, "col-12", "text-center"], [1, "single-page-title"], [1, "single-page-title-area-bottom"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"]], template: function FaqsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "About Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Frequently Asked Questions (FAQ)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Q: What year was Alliance Investment management Ltd (AIM) Founded ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Alliance Investment management Ltd (AIM) was founded on 27th June 2017 in United Kingdom. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Q: Since when has Alliance Investment management Ltd been operating ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Alliance Investment management Ltd has been operating locally since 2017 in United Kingdom but gained Worldwide recognition in 2020. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Q: How can I invest with Alliance Investment management Ltd (AIM) ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " To make a investment you must first become a member of Alliance Investment management Ltd. Once you are signed up, you can make your first deposit. All deposits must be made through the Members Area. You can login using the member username and password you receive when signup. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Q: I wish to invest with Alliance Investment management Ltd but I don't have an any ecurrency account. What should I do?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " You can open a free bitcoin account here: www.blockchain.com and www.paxfulwallet.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " Q: How do I open Alliance Investment management Ltd Account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " It's quite easy and convenient. Follow this link, http://www.allianceinvestmanagement.com/ fill in the registration form and then press \"Register\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " Q: Which e-currencies do you accept?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " We accept Bitcoin, Ethereum, Bitcoin cash, perfect money and Payeer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " Q: How can I withdraw funds?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " Login to your account using your username and password and check the Withdraw section. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " Q: How long does it take for my deposit to be added to my account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " Your account will be updated within 24hrs of your deposit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " Q: How can I change my e-mail address or password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, " Log into your Alliance Investment management Ltd account and click on the \"Account Information\". You can change your e-mail address and password there. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " Q: What if I can't log into my account because I forgot my password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " Click forgot password link, type your username or e-mail and you'll receive your account information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " Q: Does a daily profit paid directly to my currency account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " Yes, from the moment you make a deposit to the company, your daily profit will begin to read automatically. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " Q: How do i calculate the interest on my account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, " Depending on each plan. Interest on your Alliance Investment management Ltd account is acquired Daily, Weekly, Bi-Weekly, Monthly and Yearly and credited to your available balance at the end of each day. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, " Q: Can I make an additional deposit to Alliance Investment management Ltd account once it has been opened?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " Yes, you can but all transactions are handled separately. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " Q: After I make a withdrawal request, when will the funds be available on my ecurrency account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " Funds are automated and processed within 24hrs of your withdrawal request.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " Q: How can I change my password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, " You can change your password directly from your members area by editing it in your personal profile. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, " Q: Can I lose money?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, " we have developed the best investment solution, for all investors who wishes to invest in Agricultural products, Real estate and Cryptocurrency to benefit from, Alliance Investment management Ltd is a long term investment company which has been established to help every investors around the world to earn profits through investment in Agricultural products, Real estate and Cryptocurrency exchange.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " Q: How can I check my account balances?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " You can access the account information 24 hours, seven days a week over the Internet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, " Q: Who manages the funds?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, " These funds are managed by an experienced and committed team of Alliance Investment management Ltd expert.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Q: May I open several accounts in your program?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " Yes. Multiple account is allowed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](126, "br");
    } }, styles: [".bg[_ngcontent-%COMP%] {\n  background-image: url('slide1.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmYXFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUFDSiIsImZpbGUiOiJmYXFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnL3NsaWRlMS5qcGcnKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FaqsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faqs',
                templateUrl: './faqs.component.html',
                styleUrls: ['./faqs.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TzqU":
/*!***********************************************!*\
  !*** ./src/app/main/index/index.component.ts ***!
  \***********************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/data/auth.service */ "/9VY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function () { return ["/register"]; };
const _c1 = function () { return ["/login"]; };
const _c2 = function () { return ["/pricing"]; };
const _c3 = function () { return ["/contact"]; };
class IndexComponent {
    constructor(_authService, formBuilder, _router) {
        this._authService = _authService;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.contactForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
        });
        // Function to message the platform
        // Function to login
        this.message = (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(data);
            yield this._authService.message(data).subscribe(res => {
                this.contactForm.reset();
            }, (err) => {
                console.log(err);
            });
        });
    }
    ngOnInit() { }
}
IndexComponent.??fac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
IndexComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 619, vars: 15, consts: [[1, "slider-section"], [1, "home-slider", "owl-carouse", "owl-theme"], ["data-background", "../../../assets/img/bg/slide1.jpg", 1, "home-single-slide", "slider-1"], [1, "home-slide-overlay"], [1, "home-single-slide-inner"], [1, "container"], [1, "row"], [1, "col-lg-7", "col-md-10", "col-12", "mr-auto", "text-left"], [1, "home-single-slide-dec"], [1, "text-capitalize"], [1, "home-single-slide-button"], [1, "btn-style", "btn-border", 3, "routerLink"], ["id", "about"], [1, "col-12", "text-center"], [1, "section-title"], [1, "text-center"], [1, "col-md-6", "col-sm-12"], ["src", "../../../assets/img/office_space_1.jpeg", "alt", "", 1, "img-fluid"], ["src", "../../../assets/img/office_space_2.jpeg", "alt", "", 1, "img-fluid"], ["id", "about", 1, "section-padding"], [1, "row", "text-center"], [1, "single-about-item", "col-lg-4", "col-md-4", "col-sm-12", "col-12", "mb-lg-0", "mb-md-4", "mb-sm-4", "mb-4"], [1, "single-about"], [1, "single-about-img"], [1, "single-about-img-inner"], ["href", "#"], ["src", "../../../assets/img/images/agricultural-business.png", "alt", "", 1, "img-fluid"], [1, "single-about-caption"], [1, "single-about-icon"], [1, "fab", "fa-btc"], [1, "single-about-title"], ["src", "../../../assets/img/award_2.jpeg", "alt", "", 1, "img-thumbnail"], [1, "single-about-dec"], ["src", "../../../assets/img/bg/bg5.jpg", "alt", "", 1, "img-fluid"], [1, "fa", "fa-euro-sign"], ["src", "../../../assets/img/agric.jpeg", "alt", "", 1, "img-thumbnail"], ["src", "../../../assets/img/images/real.jpg", "alt", "", 1, "img-fluid"], [1, "fab", "fa-gg"], ["src", "../../../assets/img/agric_1.jpeg", "alt", "", 1, "img-thumbnail"], ["id", "chhoseus", 1, "section-padding"], [1, "col-lg-12", "col-md-12", "col-12", "mb-lg-0", "mb-md-0", "mb-5"], [1, "col-lg-6", "col-md-6", "col-12", "mb-5"], [1, "single-wcus"], [1, "single-wcus-icon"], [1, "icofont", "icofont-bill"], [1, "single-wcus-text"], [1, "icofont", "icofont-coins"], [1, "col-lg-6", "col-md-6", "col-12", "mb-lg-0", "mb-md-0", "mb-5"], [1, "icofont", "icofont-money"], [1, "col-lg-6", "col-md-6", "col-12"], [1, "icofont", "icofont-ui-travel"], ["id", "counter", "data-background", "assets/img/bg/counterbg.jpg", 1, "section-padding", "overlay", "counter-section", "section-back-image-2", "counter"], [1, "row", "text-center", "counter-wrapper"], [1, "col-lg-6", "col-md-6", "col-12", "counter-wrapper-inner"], [1, "single-counter"], [1, "timer"], ["id", "service", 1, "section-padding"], [1, "services-slider", "owl-theme"], [1, "single-service-item"], [1, "single-service"], [1, "single-service-dec"], ["id", "hworks", "data-background", "assets/img/bg/processbg.jpg", 1, "section-padding", "bg-gray", "section-back-image", "overlay", "chain"], [1, "text-white"], [1, "col-lg-4", "col-md-4", "col-12", "mb-lg-0", "mb-md-0", "mb-5"], [1, "single-wprocess"], [1, "single-wprocess-icon"], [1, "fa", "fa-futbol"], [1, "single-wprocess-text"], [1, "fa", "fa-users"], [1, "fa", "fa-handshake"], ["id", "promot", 1, "section-padding"], [1, "col-lg-6", "col-md-6", "col-12", "pr-lg-5", "pr-md-5", "pr-sm-0", "pr-0", "mb-lg-0", "mb-md-4", "mb-sm-4", "mb-4"], [1, "col-12", "text-left"], [1, "section-title-2"], [1, "youtube-promo-video-wrap"], [1, "youtube-promo-video-img"], ["src", "../../../assets/img/images/in.jpg", "alt", "", 1, "img-fluid"], [1, "youtube-promo-video"], ["href", "https://youtu.be/udfEG48f8UE?t=9", "data-title", "", "data-vbtype", "youtube", "data-gall", "gallu", 1, "venobox", "info", "vbox-item"], [1, "icofont", "icofont-ui-play"], [1, "home-p-form-wrapper"], [1, "home-p-form"], ["return", "", "false", "", 3, "formGroup"], [1, "form-group", "col-lg-6", "mb-3"], ["formControlName", "name", "id", "afirst-name", "placeholder", "Your Name*", "required", "required", "type", "text", 1, "form-control"], ["formControlName", "email", "id", "aemail", "placeholder", "Email id*", "required", "required", "type", "email", 1, "form-control"], ["formControlName", "phone_number", "id", "aphone", "placeholder", "Phone Number*", "required", "required", "type", "text", 1, "form-control"], ["formControlName", "subject", "id", "asubject", "placeholder", "Subject", "required", "required", "type", "text", 1, "form-control"], [1, "form-group", "col-lg-12", "mb-3"], ["rows", "6", "formControlName", "message", "id", "adescription", "placeholder", "Your Message Here...", "required", "required", 1, "form-control"], [1, "form-group", "col-lg-5", "mb-lg-0", "mb-md-0", "mb-2", "pr-0"], ["title", "Click here to submit your message!", 1, "btn-style", "btn-filled", "btn-filled-2", "send", 3, "click"], [1, "fa", "fa-paper-plane"], [1, "form-group", "col-lg-7"], ["id", "price", 1, "section-padding", "bg-gray"], [1, "single-pricing"], [1, "single-pricing-head", "text-center"], [1, "price"], [1, "price-digit"], [1, "single-pricing-body"], [1, "single-pricing-list"], [1, "icofont", "icofont-check-alt"], [1, "single-pricing-button"], [1, "mt-3", "d-block", "text-center", "rounded-0", 3, "routerLink"], ["id", "team", 1, "section-padding", "bg-gray"], [1, "col-lg-3", "col-md-3", "col-12", "mb-lg-0", "mb-md-0", "mb-5"], [1, "single-team-wrappe"], [1, "single-team"], [1, "single-team-img"], ["src", "../../../assets/img/images/financial.jpg", "alt", "", 1, "img-fluid"], [1, "single-team-meta"], ["src", "../../../assets/img/images/ceo.jpg", "alt", "", 1, "img-fluid"], ["src", "../../../assets/img/images/head of finance.jpg", "alt", "", 1, "img-fluid"], ["src", "../../../assets/img/images/manager.jpg", "alt", "", 1, "img-fluid"], ["id", "testimonial", 1, "section-padding"], [1, "testimonial-wrapper", "bg-gray-2", "section-padding"], [1, "col-lg-12", "mx-lg-auto", "mx-md-auto", "mx-0", "text-center"], [1, "testimonial-slider", "owl-carouse", "owl-theme"], [1, "single-testimonial"], [1, "single-testimonial-image"], ["src", "../../../assets/img/images/client-01.jpeg", "alt", "", 1, "img-fluid", "rounded-circle"], [1, "single-testimonial-content"], [1, "single-testimonial-meta"], ["src", "../../../assets/img/images/f.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], ["src", "../../../assets/img/images/r.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], ["src", "../../../assets/img/images/women.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], ["src", "../../../assets/img/images/client-02.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], ["src", "../../../assets/img/images/she.jpg", "alt", "", 1, "img-fluid", "rounded-circle"], ["id", "client", 1, "client-section-padding", "bg-gray"], [1, "col-lg-12", "text-center"], [1, "client-slider", "owl-carousel", "owl-theme"], [1, "single-client"], ["src", "../../../assets/img/clients/1.png", "alt", "", 1, "img-fluid"], ["src", "../../../assets/img/clients/5.png", "alt", "", 1, "img-fluid"], ["src", "../../../assets/img/clients/3.png", "alt", "", 1, "img-fluid"], ["src", "../../../assets/img/clients/2.png", "alt", "", 1, "img-fluid"], ["src", "../../../assets/img/clients/4.png", "alt", "", 1, "img-fluid"], ["src", "../../../assets/img/clients/6.png", "alt", "", 1, "img-fluid"], ["id", "calltoaction", 1, "calltoaction-padding", "section-padding", "bg-theme"], [1, "auto-container"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-12", "mb-lg-0", "mb-md-4", "mb-sm-4", "mb-4"], ["src", "../../../assets/img/certificate.jpg", "alt", "", 1, "img-thumbnail"], [1, "row", "mt-4"], [1, "col-6"], ["src", "../../../assets/img/award.jpeg", "alt", "", 1, "img-thumbnail"], ["src", "../../../assets/img/award_1.jpeg", "alt", "", 1, "img-thumbnail"], [1, "col-lg-8", "col-md-8", "col-sm-12", "col-12", "mb-lg-0", "mb-md-4", "mb-sm-4", "mb-4"], [1, "calltoaction-two-wrap"], [1, "col-lg-4", "col-md-4", "col-sm-12", "col-12", "mt-lg-4", "mt-md-4", "text-lg-right", "text-md-right", "text-sm-left", "text-left"], ["routerLinkActive", "active", 1, "btn-style", "btn-border", "btn-border-3", 3, "routerLink"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Secure your Capital");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, " invest & multiply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Alliance investment Management ltd is one of most trustwothy global investment platform that secures investors Capital and gives them high returns on their investments .");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Login In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Welcome to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, " Alliance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, " Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, " Alliance investment management Ltd has molded an all-around client-driven experience that focuses on the latest value adding market insights and customizing our broad range of investment opportunities to meet the diverse needs of high net worth and institutional clients ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](34, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](36, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](43, "we help you create wealth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Alliance Investment Management Ltd ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](54, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](57, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "Agricultural Produce");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](61, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "At Alliance Investment management Ltd (AIM), we are passionate about bridging the gap between investors and agriculture. Farmers will have to produce 70% more food by 2050. With demand for food skyrocketing and the availability of farmland decreasing, we believe that investing in farmland is a smart move.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](70, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](73, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](76, "Cryptocurrency Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](77, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, "Alliance Investment management Ltd (AIM) offers an intuitive and customizable cryptocurrency exchange marketing plans that are budget - friendly and scalable. Governments around the world, regulatory agencies, central banks and other financial institutions are working to understand the nature and meaning of digital currencies thus, cryptocurrency allows both users and investors the ability to convert funds into digital currency and hold them securely without having to rely on the banking system.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](86, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](89, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "Real Estate Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](93, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](96, "Alliance Investment management Ltd (AIM) provides an alternative real estate investment platform where you can buy & sell shares in real estate that generate passive income on a daily basis. In Alliance investment management ltd, the benefits of investing in real estate are numerous with well chosen assets. Investors tends to enjoy consistent cash flow and huge returns, tax advantages and diversification that gives a high level investment leverage and wealth creation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "section", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](103, "Financial Legality");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](105, "Why Choose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](114, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, "Fast Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](119, "At Alliance Investment management Ltd, investors capital and interest are paid within 24hrs depending on which investment plan they have chosen once the date of withdrawal is due without any delay. Investors interest are paid immediately, as stated no additional hour or day is added from the seed stage to the date of withdrawal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](123, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](126, "High Return on investments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, "Investors are paid high level interest rate on capitals, Alliance investment Management Ltd understands the needs for investors to Receive good commissions on their investments. At Alliance Investment management Ltd, we know investors desire not only high ROI, but they are looking for something more - a\u00A0unique investing experience and this is why at AIM you will find the best alternative investing opportunities. Take a chance to earn more money by building an\u00A0alternative finance stream\u00A0and securing your profits. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](132, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](135, "Flexible investments Plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](137, "Alliance Investment Management Ltd is a platform where the least dollars on investment is accepted, this is due to the fact that we are a platform that is goal driven and open to everyone. Our Investment plans are flexible with no hidden investment charges. They can be adapted to fit any financial budget and goal. Whatever your investment needs are, we have a plan that will suit you so well, it will feel custom-made. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](141, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, "Secure Investments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](146, "We believed a dollar invested today will secure you tommorow, so with this aim we strived to create a secure platform where our investors funds can be invested and secured. At Alliance Investment management Ltd (AIM), we believe that through our Authenticity in Investment we help Investors to build passive income streams and to achieve financial freedom through proper management and securement of our Investors Funds. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](147, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](148, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](149, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](154, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](157, "World-class experience\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "Accessing investment should be seamless. At Alliance Investment management Ltd (AIM), we\u2019re committed to making the process simple and accessible for everyone. AIM is an investment company built on the belief that innovative and creative solutions can deliver more value and a better experience to investors. Alliance Investment management Ltd is an investment company for the smarter investor\", combining expertise, technology and experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "section", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "h3", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](168, "1856");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](170, "Real Estate Investors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "h3", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](174, "829595");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](176, "Agriculture Investors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](178, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "h3", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](180, "9295");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](182, "Cryptocurrency Investors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](183, "section", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](184, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](187, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](188, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](189, "what we do");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](190, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](191, "Alliance Investment Management Ltd ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](192, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](193, " Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](194, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](195, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](196, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](197, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](198, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](199, " Alliance investment management Ltd (AIM) is your trusted partner dedicated to growing your investment portfolio through investment in Real estate, Agricultural produce and Crypto currency exchange. Becoming a member of Alliance investment management Ltd, you need to know you'll get outstanding customer service - that means responsive and reliable support, even at the busiest of times. And because we personalize our service experience, you can be confident in knowing we're here to help you overcome any challenge and make sure you get the maximum value out of the platform. Helping investors to grow wealth and attain financial freedom is our sole aim in Alliance Investment management Ltd (AIM). We know how important it is to have good support in the online space and right from the start we have strived to be the best. Whether you have platform questions, any problem or you simply want to suggest new features, we are here to listen and to help you. AIM has an active 24/7 live support team that is efficient and diligent with a major aim of rendering the best of services to you. In Alliance Investment management Ltd, we help grow wealth by utilizing the best innovative investment strategies which allows you attain financial freedom. Authenticity in investment is our motto in Alliance investment management Ltd (AIM). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](200, "section", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](201, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](202, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](203, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](204, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](205, "h5", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](206, "Investment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](207, "h3", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](208, "Chain ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](209, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](210, "Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](211, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](212, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](213, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](214, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](215, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](216, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](217, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](218, "Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](219, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](220, "Sign up as a new user with your personal details ..");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](221, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](222, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](223, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](224, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](225, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](226, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](227, "Deposit & Invest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](228, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](229, "Deposit money to wallet and invest on a plan that suites you...... .");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](230, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](231, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](232, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](233, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](234, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](235, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](236, "Receive Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](237, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](238, "Get paid in a way that works for you, when your investment period is due, before you even get to ask you will receive your commisions on investment, anywhere directly into your wallets,Alliance Investment Management Ltd mission is to make it simple for invstors to invest and receive its payments..");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](239, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](240, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](241, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](242, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](243, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](244, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](245, "Withdraw");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](246, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](247, "you can apply for withdrawal anytime and receive your payment within 24 hours into your cryptocurrency wallet, payeer and perfect money..");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](248, "section", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](249, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](250, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](251, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](252, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](253, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](254, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](255, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](256, "Why you need ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](257, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](258, "Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](259, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](260, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](261, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](262, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](263, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](264, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](265, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](266, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](267, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](268, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](269, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](270, "Drop a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](271, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](272, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](273, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](274, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](275, "form", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](276, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](277, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](278, "input", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](279, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](280, "input", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](281, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](282, "input", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](283, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](284, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](285, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](286, "textarea", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](287, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](288, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function IndexComponent_Template_a_click_288_listener() { return ctx.message(ctx.contactForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](289, "Send Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](290, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](291, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](292, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](293, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](294, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](295, " We promise that we don't do spam & your mail id is confidential. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](296, "section", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](297, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](298, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](299, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](300, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](301, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](302, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](303, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](304, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](305, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](306, "Investment packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](307, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](308, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](309, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](310, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](311, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](312, "Alliance Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](313, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](314, " Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](315, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](316, "Basic Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](317, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](318, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](319, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](320, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](321, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](322, "/7 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](323, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](324, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](325, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](326, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](327, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](328, " $100 Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](329, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](330, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](331, "$4,999 Maximum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](332, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](333, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](334, "2% on Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](335, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](336, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](337, " 7 Days Investment Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](338, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](339, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](340, "Refreral Bonus: 6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](341, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](342, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](343, "Invest Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](344, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](345, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](346, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](347, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](348, "Alliance Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](349, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](350, " Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](351, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](352, "Standard Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](353, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](354, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](355, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](356, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](357, "5,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](358, "/14 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](359, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](360, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](361, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](362, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](363, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](364, "$5000 Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](365, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](366, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](367, "$9,999 Maximum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](368, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](369, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](370, "2.5% on investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](371, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](372, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](373, "14 Days Investment Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](374, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](375, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](376, "Refreral Bonus: 8%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](377, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](378, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](379, "Invest Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](380, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](381, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](382, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](383, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](384, "Alliance Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](385, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](386, " Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](387, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](388, "Premium Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](389, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](390, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](391, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](392, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](393, "10,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](394, "/21 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](395, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](396, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](397, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](398, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](399, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](400, "$10,000 Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](401, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](402, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](403, "$99,999 Maximum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](404, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](405, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](406, "3% on investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](407, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](408, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](409, "21 Days Investment Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](410, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](411, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](412, "Refreral Bonus: 10%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](413, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](414, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](415, "Invest Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](416, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](417, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](418, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](419, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](420, "Alliance Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](421, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](422, " Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](423, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](424, "plantium Investments");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](425, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](426, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](427, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](428, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](429, "100,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](430, "/90 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](431, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](432, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](433, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](434, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](435, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](436, "$100,000 Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](437, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](438, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](439, "$unlimited Maximum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](440, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](441, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](442, "4.5% on investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](443, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](444, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](445, "90 Days Investment Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](446, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](447, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](448, "Refreral Bonus: 15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](449, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](450, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](451, "Invest Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](452, "section", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](453, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](454, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](455, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](456, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](457, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](458, "our masters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](459, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](460, "Alliance Investment Management Ltd ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](461, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](462, "Top Executives");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](463, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](464, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](465, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](466, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](467, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](468, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](469, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](470, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](471, "Mollie Mertens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](472, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](473, "Group Financial Controller");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](474, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](475, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](476, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](477, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](478, "img", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](479, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](480, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](481, "William O Donnel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](482, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](483, " Chief Executive Officer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](484, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](485, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](486, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](487, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](488, "img", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](489, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](490, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](491, "Charlie leo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](492, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](493, "Head of Corporate Finance and Advisory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](494, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](495, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](496, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](497, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](498, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](499, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](500, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](501, "Freddie Harper");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](502, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](503, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](504, "section", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](505, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](506, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](507, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](508, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](509, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](510, "our achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](511, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](512, "Client ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](513, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](514, "Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](515, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](516, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](517, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](518, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](519, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](520, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](521, "img", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](522, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](523, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](524, "\u201Ci have been with Alliance Investment Management now for seven years. His amazing team have made an effort to help us secure our financials and provide us the service we receive which feels very personal. Alliance Investment Management has helped us to focus on what we want out of life and is helping us realise our financial plans. The peace of mind we have from knowing our finances are being so well managed is priceless.\u201D. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](525, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](526, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](527, "- Brenda mattson");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](528, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](529, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](530, "img", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](531, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](532, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](533, "\u201CAlliance Investment Manangement ltd provides an excellent investmnet service, I have found the company\u2019s platform regarding investment opportunities to be helpful \u2013 everything is explained fully and payments are made strictly on agreement . I am pleased to see the results in comparison to the experiences one reads or hears about Alinace Investment Manangement ltd. I get the feeling that Alinace Investment Manangement ltd are ahead of the game and i'm happy to say its one of the best investment plarform...\u201D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](534, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](535, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](536, "-Bob james-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](537, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](538, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](539, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](540, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](541, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](542, "\u201C\"Alliance Investment Management Ltd is an investment platform you should have;. I highly recommend Alliance Investment Management Ltd for any investor\u2019s intrested in Real Estates, Agriculture or Cryptocurrency, they are second to none. The only regret I have is not knowing about Alliance Investment Management Ltd earlier than now, commisions are paid even before the investment date and the return on investment is on the high side..\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](543, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](544, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](545, "-Tamula Scott-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](546, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](547, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](548, "img", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](549, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](550, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](551, "\u201C\u201CAlliance Investment Management Ltd understands the anxieties that comes with investing and at each stage of investmnet, so they work so hard to make sure investors are happy..\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](552, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](553, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](554, "-Khristina Michail-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](555, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](556, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](557, "img", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](558, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](559, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](560, "\"\"Alliance Investment Management Ltd is an amazing trading platform, it helped improved my financial situation. I feel grateful for the priviledge given to invest with Alliance Investment Management Ltd , and I thank my friend for the refreral\"\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](561, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](562, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](563, "-Dimitri Bernhard-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](564, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](565, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](566, "img", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](567, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](568, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](569, "\u201CAlliance Investment Manangement Ltd gave me a very comprehensive view of my investments and also provided me with a fantastic picture of what income I would have on retirement.\u201D.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](570, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](571, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](572, "-Elena Berhtram-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](573, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](574, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](575, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](576, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](577, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](578, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](579, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](580, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](581, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](582, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](583, "img", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](584, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](585, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](586, "img", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](587, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](588, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](589, "img", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](590, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](591, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](592, "img", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](593, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](594, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](595, "img", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](596, "section", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](597, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](598, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](599, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](600, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](601, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](602, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](603, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](604, "img", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](605, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](606, "img", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](607, "section", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](608, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](609, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](610, "div", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](611, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](612, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](613, "Need More Service?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](614, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](615, "Alliance Investment Management Ltd is always available for you anytime anyday...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](616, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](617, "a", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](618, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](257);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](167);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](14, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: [".slider-1[_ngcontent-%COMP%] {\n  background-image: url('slide1.jpg');\n}\n\n.slider-2[_ngcontent-%COMP%] {\n  background-image: url('slide5.jpg');\n}\n\n.slider-3[_ngcontent-%COMP%] {\n  background-image: url('slide6.jpg');\n}\n\n.counter[_ngcontent-%COMP%] {\n  background-image: url('counterbg.jpg');\n}\n\n.chain[_ngcontent-%COMP%] {\n  background-image: url('processbg.jpg');\n}\n\n.send[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQ0FBQTtBQUVKOztBQUFBO0VBQ0ksbUNBQUE7QUFHSjs7QUFBQTtFQUNJLHNDQUFBO0FBR0o7O0FBQUE7RUFDSSxzQ0FBQTtBQUdKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0FBR0oiLCJmaWxlIjoiaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyLTF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvc2xpZGUxLmpwZycpIDtcclxufVxyXG4uc2xpZGVyLTJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvc2xpZGU1LmpwZycpIDtcclxufVxyXG4uc2xpZGVyLTN7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvc2xpZGU2LmpwZycpIDtcclxufVxyXG5cclxuLmNvdW50ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnL2NvdW50ZXJiZy5qcGcnKSA7XHJcbn1cclxuXHJcbi5jaGFpbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy9wcm9jZXNzYmcuanBnJykgO1xyXG59XHJcblxyXG4uc2VuZHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.scss']
            }]
    }], function () { return [{ type: src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "XpXM":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ "3hl/");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "TzqU");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.component */ "wlho");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "dSXC");
/* harmony import */ var _mission_mission_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mission/mission.component */ "D6gV");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricing/pricing.component */ "MLlf");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./terms/terms.component */ "p03E");
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./faqs/faqs.component */ "QLSk");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./support/support.component */ "oTVA");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./privacy/privacy.component */ "PcvM");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "6d1u");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _risk_risk_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./risk/risk.component */ "uQQZ");
/* harmony import */ var _invest_invest_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./invest/invest.component */ "ktYW");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "og/B");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register.component */ "z//g");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _register_link_register_link_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./register-link/register-link.component */ "qVOK");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "IiFZ");























class MainModule {
}
MainModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: MainModule });
MainModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MainModule, { declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
        _main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
        _mission_mission_component__WEBPACK_IMPORTED_MODULE_7__["MissionComponent"],
        _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"],
        _terms_terms_component__WEBPACK_IMPORTED_MODULE_9__["TermsComponent"],
        _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_10__["FaqsComponent"],
        _support_support_component__WEBPACK_IMPORTED_MODULE_11__["SupportComponent"],
        _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_12__["PrivacyComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
        _risk_risk_component__WEBPACK_IMPORTED_MODULE_15__["RiskComponent"],
        _invest_invest_component__WEBPACK_IMPORTED_MODULE_16__["InvestComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
        _register_link_register_link_component__WEBPACK_IMPORTED_MODULE_20__["RegisterLinkComponent"],
        _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_21__["ForgetPasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
                    _main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                    _mission_mission_component__WEBPACK_IMPORTED_MODULE_7__["MissionComponent"],
                    _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"],
                    _terms_terms_component__WEBPACK_IMPORTED_MODULE_9__["TermsComponent"],
                    _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_10__["FaqsComponent"],
                    _support_support_component__WEBPACK_IMPORTED_MODULE_11__["SupportComponent"],
                    _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_12__["PrivacyComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                    _risk_risk_component__WEBPACK_IMPORTED_MODULE_15__["RiskComponent"],
                    _invest_invest_component__WEBPACK_IMPORTED_MODULE_16__["InvestComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                    _register_link_register_link_component__WEBPACK_IMPORTED_MODULE_20__["RegisterLinkComponent"],
                    _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_21__["ForgetPasswordComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "dSXC":
/*!***********************************************!*\
  !*** ./src/app/main/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.??fac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 36, vars: 0, consts: [["id", "page-banner"], ["data-background", "assets/img/bg/slide1.jpg", 1, "single-page-title-area", "overlay", "bg"], [1, "auto-container"], [1, "row"], [1, "col-12", "text-center"], [1, "single-page-title"], [1, "single-page-title-area-bottom"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "About Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Who we are?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\nAlliance investment management Ltd ( AIM ) is a professional investment corporation found in the year 27th June 2017. we engage in cryptocurrency exchange, real estate management and agricultural production.\nOur goal at Alliance investment management ltd is to provide our clients with a comprehensive market with new resources. Currently, AIM operates as an independently investment management company. We are very concerned about how we relate with and deal with our clients. When it comes to delivering on our words and relating to clients, we take no half measures. We do not undermine the role of teamwork in the success of our company and that of our clients. Thus, we put every resources together to achieve a greater height. Our aim is to push our business beyond every limit. We tend to achieve this by diversifying into various sectors of the economy and making good impacts in all. Alliance investment management Ltd has molded an all-around client-driven experience that focuses on the latest value adding market insights and customizing our broad range of investment opportunities to meet the diverse needs of high net worth and institutional clients. We deliver high performance with the clients\u2019 projected satisfaction We are Constantly ready to assist you make positive investment decisions, earning as much return as possible from selected investment instruments and markets. We aim for perfection in the asset management and financial investments. We guarantee you a safe space to invest your finances and receive a solid growth progress on your portfolio. We utilize the most developed and the most innovative investment strategies that are designed to produce and promote long term financial profits. Putting clients at the heart of the experience, Alliance investment management Ltd (AIM) implements an ethical, empathetically and proactive approach to building long lasting relationships while actively managing, monitoring and reporting on portfolios to reassess each client\u2019s needs in accordance with their set investment objectives. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " OUR SERVICES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Alliance investment management Ltd (AIM) is your trusted partner dedicated to growing your investment portfolio through investment in Real estate, Agricultural produce and Crypto currency exchange. Becoming a member of Alliance investment management Ltd, you need to know you'll get outstanding customer service - that means responsive and reliable support, even at the busiest of times. And because we personalize our service experience, you can be confident in knowing we're here to help you overcome any challenge and make sure you get the maximum value out of the platform. Helping investors to grow wealth and attain financial freedom is our sole aim in Alliance Investment management Ltd (AIM). We know how important it is to have good support in the online space and right from the start we have strived to be the best. Whether you have platform questions, any problem or you simply want to suggest new features, we are here to listen and to help you. AIM has an active 24/7 live support team that is efficient and diligent with a major aim of rendering the best of services to you. In Alliance Investment management Ltd, we help grow wealth by utilizing the best innovative investment strategies which allows you attain financial freedom. Authenticity in investment is our motto in Alliance investment management Ltd (AIM).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "br");
    } }, styles: [".bg[_ngcontent-%COMP%] {\n  background-image: url('slide1.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0FBQ0oiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvc2xpZGUxLmpwZycpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ktYW":
/*!*************************************************!*\
  !*** ./src/app/main/invest/invest.component.ts ***!
  \*************************************************/
/*! exports provided: InvestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestComponent", function() { return InvestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/pricing"]; };
class InvestComponent {
    constructor() { }
    ngOnInit() {
    }
}
InvestComponent.??fac = function InvestComponent_Factory(t) { return new (t || InvestComponent)(); };
InvestComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: InvestComponent, selectors: [["app-invest"]], decls: 193, vars: 8, consts: [["id", "page-banner"], ["data-background", "assets/img/bg/slide1.jpg", 1, "single-page-title-area", "overlay", "bg"], [1, "auto-container"], [1, "row"], [1, "col-12", "text-center"], [1, "single-page-title"], [1, "single-page-title-area-bottom"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], ["id", "price", 1, "section-padding", "bg-gray"], [1, "container"], [1, "section-title"], [1, "col-lg-4", "col-md-4", "col-12", "mb-lg-0", "mb-md-0", "mb-5"], [1, "single-pricing"], [1, "single-pricing-head", "text-center"], [1, "price"], [1, "price-digit"], [1, "single-pricing-body"], [1, "single-pricing-list"], [1, "icofont", "icofont-check-alt"], [1, "single-pricing-button"], [1, "mt-3", "d-block", "text-center", "rounded-0", 3, "routerLink"], [1, "copyright"], [1, "col-lg-6", "col-md-6", "col-sm-12", "col-12", "mb-lg-0", "mb-md-0", "mb-4", "footer-menu", "text-center", "text-lg-left", "text-md-left"], [1, "col-lg-6", "col-md-6", "col-sm-12", "col-12", "copyright-text", "text-center", "text-lg-right", "text-md-right"]], template: function InvestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Why Choose Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Why choose\u00A0Allinace Investment Management Ltd?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " This product is geared toward individual investors who have\u00A0challenges in setting up their portfolio, which is, choosing the right assets to achieve the desired objective. The correct mix is achieved only through careful selection based on accurate information and constant monitoring of the markets- a time-consuming task for many potential investors who may not have the investment know-how or time to commit this most important aspect. When managing your own portfolio, you must also contend with challenging decisions on which assets to purchase or dispose of when purchasing or dispose of and how much to purchase or dispose of in order to have the right mix to achieve your objectives. At Allinace Investment Management Ltd, we take these burdens off your shoulder. We offer you a very PERSONALIZED service- a one-on-one Client/ Investment Services Adviser relationship. We have a readymade portfolio that is tailored to your specifications, molded by your changing needs, and suitable for your investment goals. Creating your Investment Our Investment Plan service is carried out in 3 stages: First Stage: The investment is for individual Investors or Groups that wish to invest in\u00A0the Importation of Shrimps & Prawns from Asia to Europe\u00A0Investment Plan and the plan comes in 3 stages. You Second Stage: We have an investment trading for\u00A0Currency Exchange Trading (Digital & Paper Currency)\u00A0which is applicable for both the individual investor and group of investors. Third Stage: The last investment plan is for individual investor or group that wishes to invest in Chemical Products Trading and Agricultural Production Trading. Note:\u00A0Every investment Stage and Plans comes with different ROI periods and calculations, we advise you to choose your investment plan in line with your justification. Benefits of Investing with Allinace Investment Management Ltd The Investment Management team at Allinace Investment Management Ltd has a wealth of experience amounting to some of the best expertise in the world equity market and fixed income securities. In the local equity space, we are recognized as the best research house. Allinace Investment Management Ltd has a highly successful record of advising institutional and individual investors in stock picking. This will be of substantial benefit to your portfolio. One-on-one, in-depth review of your portfolio\u2019s performance with Allinace Investment Management Ltd Investment Analyst on a quarterly basis or more often as may be required. Quarterly statements and summary performance review on your portfolio in conjunction with changes in the market conditions. On-going information directly to you on\u00A0the outlook for specific Stocks, Bonds, and other money market instruments. Placing your investment Register\u00A0With us or\u00A0Login Deposit Fund through your dashboard Select any of the Investment Plan Wait for the period of investment to elapse Withdraw your profit and capital. You must be over 18 years of age Trust may be established on a single or joint basis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Investment packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Alliance Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Basic Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "/7 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " $100 Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "$4,999 Maximum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "2% on Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " 7 Days Investment Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Refreral Bonus: 6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Invest Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Alliance Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Standard Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "5,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "/14 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "$5000 Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "$9,999 Maximum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "2.5% on investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "14 Days Investment Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Refreral Bonus: 6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Invest Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Alliance Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, " Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Premium Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "10,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "/21 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "$10,000 Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](131, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "$99,999 Maximum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "3.2% on investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "21 Days Investment Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](140, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Refreral Bonus: 6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Invest Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Alliance Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, " Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "plantium Investments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "100,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "/90 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](164, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "$100,000 Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](167, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "$unlimited Maximum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](170, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "4.3% on investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](173, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "90 Days Investment Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](176, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Refreral Bonus: 6%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "Invest Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Company Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Terms & Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](192, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-image: url('slide1.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnZlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtQ0FBQTtBQURKIiwiZmlsZSI6ImludmVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnL3NsaWRlMS5qcGcnKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](InvestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-invest',
                templateUrl: './invest.component.html',
                styleUrls: ['./invest.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oTVA":
/*!***************************************************!*\
  !*** ./src/app/main/support/support.component.ts ***!
  \***************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SupportComponent {
    constructor() { }
    ngOnInit() {
    }
}
SupportComponent.??fac = function SupportComponent_Factory(t) { return new (t || SupportComponent)(); };
SupportComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SupportComponent, selectors: [["app-support"]], decls: 26, vars: 0, consts: [["id", "page-banner"], ["data-background", "assets/img/bg/slide1.jpg", 1, "single-page-title-area", "overlay", "bg"], [1, "auto-container"], [1, "row"], [1, "col-12", "text-center"], [1, "single-page-title"], [1, "single-page-title-area-bottom"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"]], template: function SupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Risk Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Our website and the contents therein are not intended to be an offering, sale, and/or distribution of any of the products or services described in the information or data produced within, to any jurisdiction to any person to whom it is unlawful to make such an offer, sale and/or distribution, including the United States. If you intend to obtain any product or service from Gromio Limited that is described on this website, you must first inform Gromio or if you would not be allowed to obtain such products or services from Gromio in your home jurisdiction. The website and its respective contents do not constitute an offer or invitation to purchase or subscribe for any securities or a solicitation of any offer to sell any securities to US Persons. Any brokerage and investment advisory services described herein are not intended for U.S. Persons. Furthermore, any solicitation on this web site of financial services is not intended for U.S. Persons \u201CUS Persons\u201D are generally defined as a natural person, residing in the United States or any entity organized or incorporated under the laws of the United States. US Citizens living abroad may also be deemed \u201CUS Persons\u201D under certain rules. Gromio Limited cannot be held responsible for any damages or losses that occur from transactions and/or services in defiance of the relevant rules of the purchaser\u2019s home jurisdiction. This website and its contents have been prepared by Gromio, for information purposes only. Any trade in securities recommended herein is done subject to the fact that Gromio, its subsidiaries and/or affiliates have or may have specific or potential conflicts of interest in respect of the security or the issuer of the security, including those arising from (i) trading or dealing in certain securities and acting as an investment advisor; (ii) holding of securities of the issuer as beneficial owner; (iii) having benefitted, benefitting or to benefit from compensation arrangements; (iv) acting as an underwriter in any distribution of securities of the issuer in the three years immediately preceding this document; or (v) having direct or indirect financial or other interest in the security or the issuer of the security. Investors are advised accordingly. Neither Gromio nor any of its subsidiaries, affiliates directors, officers, employees, representatives or agents, accepts any liability whatsoever for any direct, indirect or consequential losses arising from the use of this website or its contents or reliance on the information contained herein. Gromio does not guarantee the accuracy or completeness of the information produced, which may have been obtained from or is based upon trade and statistical services or other third-party sources. The information provided is not intended to predict actual results and no assurances are given with respect thereto. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");
    } }, styles: [".bg[_ngcontent-%COMP%] {\n  background-image: url('slide1.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdXBwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUFDSiIsImZpbGUiOiJzdXBwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnL3NsaWRlMS5qcGcnKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SupportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-support',
                templateUrl: './support.component.html',
                styleUrls: ['./support.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "og/B":
/*!***********************************************!*\
  !*** ./src/app/main/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/data/auth.service */ "/9VY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class LoginComponent {
    constructor(_authService, formBuilder, _router) {
        this._authService = _authService;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
        // Function to login
        this.loginUser = (form) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._authService.login(form).subscribe(res => {
                this._authService.setToken(res['token']);
                alert('successfully login now!');
                if (res['role'] === 'user') {
                    this._router.navigate(['/user']);
                }
                else if (res['role'] === 'admin') {
                    this._router.navigate(['/panel/admin']);
                }
                else {
                    this._router.navigate(['/login']);
                }
            }, (err) => {
                alert(`${err['error']['message']}`);
            });
        });
    }
    ngOnInit() {
    }
    forget() {
        this._router.navigate(['forget']);
    }
}
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 46, vars: 1, consts: [["id", "page-banner"], ["data-background", "assets/img/bg/slide1.jpg", 1, "single-page-title-area", "overlay", "bg"], [1, "auto-container"], [1, "row"], [1, "col-12", "text-center"], [1, "single-page-title"], [1, "single-page-title-area-bottom"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], ["id", "contactpage", 1, "section-padding"], [1, "container"], [1, "section-title-2"], [1, "col-lg-7", "mx-auto"], [1, "contact-form-wrapper"], [1, "contact-form"], ["return", "", "false", "", 3, "formGroup"], [1, "form-group", "col-12", "mb-3"], ["formControlName", "username", "id", "cusername", "required", "required", "type", "text", 1, "form-control"], ["formControlName", "password", "id", "cnumber", "required", "required", "type", "password", 1, "form-control"], [1, "form-group", "text-md-right"], ["href", "", 3, "click"], [1, "form-group", "col-lg-12", "mb-0", "text-center"], ["type", "submit", 1, "btn", "btn-contact-bg", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Why Choose Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Login To Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Your Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](39, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LoginComponent_Template_a_click_41_listener() { return ctx.forget(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LoginComponent_Template_a_click_44_listener() { return ctx.loginUser(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-image: url('slide1.jpg');\n}\n\n.white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1DQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0FBQUoiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnL3NsaWRlMS5qcGcnKTtcclxufVxyXG5cclxuLndoaXRle1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "p03E":
/*!***********************************************!*\
  !*** ./src/app/main/terms/terms.component.ts ***!
  \***********************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TermsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TermsComponent.??fac = function TermsComponent_Factory(t) { return new (t || TermsComponent)(); };
TermsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TermsComponent, selectors: [["app-terms"]], decls: 29, vars: 0, consts: [["id", "page-banner"], ["data-background", "assets/img/bg/slide1.jpg", 1, "single-page-title-area", "overlay", "bg"], [1, "auto-container"], [1, "row"], [1, "col-12", "text-center"], [1, "single-page-title"], [1, "single-page-title-area-bottom"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"]], template: function TermsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Terms & conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Terms & conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Terms and Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Please read the following rules carefully before signing in. You agree to be of legal age in your country to partake in this program, and in all the cases your minimal age must be 18 years. Alliance investment management Ltd is not available to the general public and is opened only to the qualified members of Alliance investment management ltd, the use of this site is restricted to our members and to individuals personally invited by them. Every deposit is considered to be a private transaction between the management and its Member. You agree that all information, communications, materials coming from Alliance investment management ltd are unsolicited, confidential and protected from any disclosure. Moreover, the information, communications and materials contained herein are not to be regarded as an offer, nor a solicitation for investments in any jurisdiction which deems non-public offers or solicitations unlawful, nor to any person to whom it will be unlawful to make such offer or solicitation. All the data giving by a member to Alliance investment management ltd will be only privately used and not disclosed to any third parties. Alliance investment management Ltd is not responsible or liable for any loss of data. You agree to hold all principals and members harmless of any liability. You are investing at your own risk and you agree that a past performance is not an explicit guarantee for the same future performance. You agree that all information, communications and materials you will find on this site are intended to be regarded as an informational and educational matter and not an investment advice. We reserve the right to change the rules, commissions and rates of the program at any time and at our sole discretion without notice, especially in order to respect the integrity and security of the members' interests. You agree that it is your sole responsibility to review the current terms. Alliance investment management Ltd is not responsible or liable for any damages, losses and costs resulting from any violation of the conditions and terms and/or use of our website by a member. You guarantee to Alliance investment management ltd that you will not use this site in any illegal way and you agree to respect your local, national and international laws. Don't post bad vote on Public Forums and at Gold Rating Site without contacting the administrator of our program FIRST. Maybe there was a technical problem with your transaction, so please always CLEAR the thing with the administrator. We will not tolerate SPAM or any type of UCE in this program. SPAM violators will be immediately and permanently removed from the program. Alliance investment management Ltd reserves the right to accept or decline any member for membership without explanation. If you do not agree with the above disclaimer, please do not go any further. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");
    } }, styles: [".bg[_ngcontent-%COMP%] {\n  background-image: url('slide1.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZXJtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0FBQ0oiLCJmaWxlIjoidGVybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcvc2xpZGUxLmpwZycpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TermsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terms',
                templateUrl: './terms.component.html',
                styleUrls: ['./terms.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qVOK":
/*!***************************************************************!*\
  !*** ./src/app/main/register-link/register-link.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLinkComponent", function() { return RegisterLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/data/auth.service */ "/9VY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class RegisterLinkComponent {
    constructor(_authService, formBuilder, _router, activatedRoute) {
        this._authService = _authService;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
        // Function to register
        this.register = (form) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._authService.signup(form).subscribe(res => {
                alert('You have successfully Register, Proceed to login now!');
                this._router.navigate(['/login']);
            }, (err) => {
                console.log(err);
                alert(`${err['error']['message']}`);
            });
        });
        this.token = this.activatedRoute.snapshot.paramMap.get('token');
        console.log(this.token);
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            referral_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.token, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            c_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
    }
    ngOnInit() {
    }
}
RegisterLinkComponent.??fac = function RegisterLinkComponent_Factory(t) { return new (t || RegisterLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
RegisterLinkComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: RegisterLinkComponent, selectors: [["app-register-link"]], decls: 60, vars: 1, consts: [["id", "page-banner"], ["data-background", "assets/img/bg/slide1.jpg", 1, "single-page-title-area", "overlay", "bg"], [1, "auto-container"], [1, "row"], [1, "col-12", "text-center"], [1, "single-page-title"], [1, "single-page-title-area-bottom"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], ["id", "contactpage", 1, "section-padding"], [1, "container"], [1, "section-title-2"], [1, "col-lg-7", "mx-auto"], [1, "contact-form-wrapper"], [1, "contact-form"], ["return", "", "false", "", 3, "formGroup"], [1, "form-group", "col-12", "mb-3"], ["formControlName", "name", "required", "required", "type", "text", 1, "form-control"], ["formControlName", "username", "required", "required", "type", "text", 1, "form-control"], ["formControlName", "phone_number", "required", "required", "type", "tel", 1, "form-control"], ["formControlName", "email", "required", "required", "type", "email", 1, "form-control"], ["formControlName", "password", "required", "required", "type", "password", 1, "form-control"], ["formControlName", "c_password", "required", "required", "type", "password", 1, "form-control"], [1, "form-group", "col-lg-12", "mb-0", "text-center"], [1, "actions"], ["type", "submit", 1, "btn", "btn-contact-bg", "white", 3, "click"]], template: function RegisterLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Why Choose Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Your Full Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Userame:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](39, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Phone Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](43, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "Your Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](47, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](51, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, " Confirm Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](55, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RegisterLinkComponent_Template_a_click_58_listener() { return ctx.register(ctx.registerForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.registerForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: [".white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci1saW5rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InJlZ2lzdGVyLWxpbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2hpdGV7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](RegisterLinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register-link',
                templateUrl: './register-link.component.html',
                styleUrls: ['./register-link.component.scss']
            }]
    }], function () { return [{ type: src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "uQQZ":
/*!*********************************************!*\
  !*** ./src/app/main/risk/risk.component.ts ***!
  \*********************************************/
/*! exports provided: RiskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskComponent", function() { return RiskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RiskComponent {
    constructor() { }
    ngOnInit() {
    }
}
RiskComponent.??fac = function RiskComponent_Factory(t) { return new (t || RiskComponent)(); };
RiskComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RiskComponent, selectors: [["app-risk"]], decls: 53, vars: 0, consts: [["id", "page-banner"], ["data-background", "assets/img/bg/slide1.jpg", 1, "single-page-title-area", "overlay", "bg"], [1, "auto-container"], [1, "row"], [1, "col-12", "text-center"], [1, "single-page-title"], [1, "single-page-title-area-bottom"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], ["id", "calltoaction", 1, "calltoaction-padding", "section-padding", "bg-theme"], [1, "col-lg-8", "col-md-8", "col-sm-12", "col-12", "mb-lg-0", "mb-md-4", "mb-sm-4", "mb-4"], [1, "calltoaction-two-wrap"], [1, "col-lg-4", "col-md-4", "col-sm-12", "col-12", "mt-lg-4", "mt-md-4", "text-lg-right", "text-md-right", "text-sm-left", "text-left"], ["href", "#", 1, "btn-style", "btn-border", "btn-border-3"], [1, "copyright"], [1, "col-lg-6", "col-md-6", "col-sm-12", "col-12", "mb-lg-0", "mb-md-0", "mb-4", "footer-menu", "text-center", "text-lg-left", "text-md-left"], [1, "col-lg-6", "col-md-6", "col-sm-12", "col-12", "copyright-text", "text-center", "text-lg-right", "text-md-right"], ["href", "https://www.templateshub.net", "target", "_blank"]], template: function RiskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Risk Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Introduction The aim of the Risk Management Policy is to provide guidelines on the management of risks to enable the achievement of strategic and operational objectives of Gromio Limited. The Policy seeks to cover all material risks that the Company Definitions Board:\u00A0Means the Board of Directors of Gromio Limited. Company:\u00A0Means Gromio Limited Directors:\u00A0Means the members of the Board. Investment Manager: Means Gromio Limited Investment Services Risk Management Plan: Means the risk management plan approved by the Investment Manager. Purpose The purpose of this Policy is to state the overall intentions and direction of Gromio Limited in relation to risk Risk management comprises a series of planned and coordinated activities to direct and control an organization with regard to Risk is the effect of uncertainty on Policy All investments and businesses involve risk. Gromio Limited is subject to an ever-changing spectrum of risk which may impact its ability to achieve its financial, operational, and investment Risk management is an important discipline which, to be effective, must be planned, implemented and The purpose of risk management is to plan for risk and to put into place controls which may reduce the likelihood of risks eventuating and to develop contingency plans to minimize their consequences if they Risk management process The purpose of the risk management process is to protect and further the interests of the Company\u2019s The risk management process is the systematic application of management policies, procedures, and practices to the activities of communicating, consulting, establishing the context, and identifying, analyzing, evaluating, treating, monitoring, and reviewing Risk management is not about avoiding risk. Risk necessarily attaches to all business decisions and risks must be taken to further the objectives of the Risk Management Plan Gromio Limited anticipates that the establishment of a risk management framework will assist both the Board and the Investment Manager to make informed and transparent decisions which will assist the Company to achieve its The risk management framework will comprise a set of components that will provide the foundations and organizational arrangements for designing, implementing, monitoring, reviewing, and continually improving risk management throughout the Risk appetite is the combined level of tolerance for all the risks that the Company is willing to accept in pursuing its objectives. Through its risk management plan, Gromio Limited will define its individual risk tolerances and therefore its collective risk appetite. To articulate its risk appetite, Gromio Limited will maintain a risk register which will record information about all identified, material, risks including their risk tolerances. Standards ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Need Team Service?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Company Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Terms & Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Templates Hub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".bg[_ngcontent-%COMP%] {\n  background-image: url('slide1.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyaXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUFDSiIsImZpbGUiOiJyaXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnL3NsaWRlMS5qcGcnKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RiskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-risk',
                templateUrl: './risk.component.html',
                styleUrls: ['./risk.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/footer/footer.component */ "jQpT");





class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.??fac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 4, vars: 0, consts: [[2, "margin-top", "-2rem !important"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-footer");
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "z//g":
/*!*****************************************************!*\
  !*** ./src/app/main/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/data/auth.service */ "/9VY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class RegisterComponent {
    constructor(_authService, formBuilder, _router) {
        this._authService = _authService;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.registerForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            referral_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            c_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
        // Function to register
        this.register = (form) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._authService.signup(form).subscribe(res => {
                alert('You have successfully Register, Proceed to login now!');
                this._router.navigate(['/login']);
            }, (err) => {
                alert(`${err['error']['message']}`);
            });
        });
    }
    ngOnInit() {
    }
}
RegisterComponent.??fac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 64, vars: 1, consts: [["id", "page-banner"], ["data-background", "assets/img/bg/slide1.jpg", 1, "single-page-title-area", "overlay", "bg"], [1, "auto-container"], [1, "row"], [1, "col-12", "text-center"], [1, "single-page-title"], [1, "single-page-title-area-bottom"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], ["id", "contactpage", 1, "section-padding"], [1, "container"], [1, "section-title-2"], [1, "col-lg-7", "mx-auto"], [1, "contact-form-wrapper"], [1, "contact-form"], ["return", "", "false", "", 3, "formGroup"], [1, "form-group", "col-12", "mb-3", 2, "display", "none"], ["formControlName", "referral_code", "required", "required", "type", "text", 1, "form-control"], [1, "form-group", "col-12", "mb-3"], ["formControlName", "name", "required", "required", "type", "text", 1, "form-control"], ["formControlName", "username", "required", "required", "type", "text", 1, "form-control"], ["formControlName", "phone_number", "required", "required", "type", "tel", 1, "form-control"], ["formControlName", "email", "required", "required", "type", "email", 1, "form-control"], ["formControlName", "password", "required", "required", "type", "password", 1, "form-control"], ["formControlName", "c_password", "required", "required", "type", "password", 1, "form-control"], [1, "form-group", "col-lg-12", "mb-0", "text-center"], [1, "actions"], ["type", "submit", 1, "btn", "btn-contact-bg", "white", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Why Choose Alliance Investment Management Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Refrence Code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Your Full Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](39, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Userame:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](43, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, "Phone Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](47, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Your Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](51, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](55, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, " Confirm Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](59, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RegisterComponent_Template_a_click_62_listener() { return ctx.register(ctx.registerForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.registerForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-image: url('slide1.jpg');\n}\n\n.white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1DQUFBO0FBQUo7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnL3NsaWRlMS5qcGcnKTtcclxufVxyXG4ud2hpdGV7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: src_app_core_data_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map