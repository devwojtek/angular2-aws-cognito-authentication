webpackJsonp([1,4],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Created by Vladimir Budilov
 */
var AuthService = (function () {
    function AuthService() {
        this.authUrl = "http://localhost:4200/home/login";
    }
    AuthService.prototype.isLogged = function () {
        var token = JSON.parse(localStorage.getItem('auth'));
        if (token['id'] == null || token['id'] == "undefined") {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.getAuthServerUrl = function () {
        return this.authUrl;
    };
    AuthService.prototype.setAuth = function (id, access) {
        localStorage.setItem('auth', JSON.stringify({ id: id, access: access }));
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */



/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part; });
var Part = (function () {
    function Part(id, name) {
        this.id = id;
        this.name = name;
    }
    return Part;
}());
//# sourceMappingURL=part.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceTicket; });
var ServiceTicket = (function () {
    function ServiceTicket(id, customerName, vehicle, vin, time, timeRemaining, advisor, technician, parts) {
        this.id = id;
        this.customerName = customerName;
        this.vehicle = vehicle;
        this.vin = vin;
        this.time = time;
        this.timeRemaining = timeRemaining;
        this.advisor = advisor;
        this.technician = technician;
        this.parts = parts;
    }
    return ServiceTicket;
}());
//# sourceMappingURL=service-ticket.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketContainer; });
var TicketContainer = (function () {
    function TicketContainer(id, name, tickets, nextZones) {
        this.id = id;
        this.name = name;
        this.tickets = tickets;
        this.nextZones = nextZones;
    }
    return TicketContainer;
}());
//# sourceMappingURL=ticket-container.js.map

/***/ }),

/***/ 514:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 514;


/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(653);





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(auth, activatedRoute) {
        this.auth = auth;
        this.activatedRoute = activatedRoute;
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(687),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_modal__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_date_time_picker__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_archwizard_dist__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_after_login_after_login_component__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_before_login_before_login_component__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_service_top_menu_service_top_menu_component__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_service_side_menu_service_side_menu_component__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_service_manager_dashboard_cardwall_service_manager_dashboard_cardwall_component__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_service_manager_dashboard_router_service_manager_dashboard_router_component__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_service_manager_dashboard_service_manager_dashboard_component__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_technician_dashboard_technician_dashboard_component__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_technician_dashboard_cardwall_technician_dashboard_cardwall_component__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_technician_dashboard_router_technician_dashboard_router_component__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_foreman_dashboard_foreman_dashboard_component__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_foreman_dashboard_cardwall_foreman_dashboard_cardwall_component__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_foreman_dashboard_router_foreman_dashboard_router_component__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__service_auth_service__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_service_top_menu_service_top_menu_component__["a" /* ServiceTopMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_service_side_menu_service_side_menu_component__["a" /* ServiceSideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_service_manager_dashboard_cardwall_service_manager_dashboard_cardwall_component__["a" /* ServiceManagerDashboardCardwallComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_service_manager_dashboard_router_service_manager_dashboard_router_component__["a" /* ServiceManagerDashboardRouterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_service_manager_dashboard_service_manager_dashboard_component__["a" /* ServiceManagerDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_technician_dashboard_technician_dashboard_component__["a" /* TechnicianDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_after_login_after_login_component__["a" /* AfterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_technician_dashboard_cardwall_technician_dashboard_cardwall_component__["a" /* TechnicianDashboardCardWallComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_technician_dashboard_router_technician_dashboard_router_component__["a" /* TechnicianDashboardRouterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_before_login_before_login_component__["a" /* BeforeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_foreman_dashboard_foreman_dashboard_component__["a" /* ForemanDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_foreman_dashboard_cardwall_foreman_dashboard_cardwall_component__["a" /* ForemanDashboardCardWallComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_foreman_dashboard_router_foreman_dashboard_router_component__["a" /* ForemanDashboardRouterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot([
                    {
                        path: 'app/:id/:access',
                        component: __WEBPACK_IMPORTED_MODULE_11__components_before_login_before_login_component__["a" /* BeforeComponent */]
                    },
                    {
                        path: 'dashboard',
                        component: __WEBPACK_IMPORTED_MODULE_10__components_after_login_after_login_component__["a" /* AfterComponent */],
                        children: [
                            { path: '', redirectTo: '/dashboard/service', pathMatch: 'full' },
                            { path: 'service', component: __WEBPACK_IMPORTED_MODULE_16__components_service_manager_dashboard_service_manager_dashboard_component__["a" /* ServiceManagerDashboardComponent */] },
                            { path: 'technician', component: __WEBPACK_IMPORTED_MODULE_17__components_technician_dashboard_technician_dashboard_component__["a" /* TechnicianDashboardComponent */] },
                            { path: 'foreman', component: __WEBPACK_IMPORTED_MODULE_20__components_foreman_dashboard_foreman_dashboard_component__["a" /* ForemanDashboardComponent */] }
                        ]
                    }
                ], { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_6_ng2_modal__["ModalModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng2_date_time_picker__["a" /* DateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_archwizard_dist__["a" /* WizardModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_dragula__["DragulaModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_23__service_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AfterComponent = (function () {
    function AfterComponent(auth, activatedRoute, router) {
        this.auth = auth;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.title = 'app works!';
    }
    AfterComponent.prototype.ngOnInit = function () {
        if (this.auth.isLogged() == false) {
            window.location.href = this.auth.getAuthServerUrl();
        }
    };
    AfterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-after-login',
            template: __webpack_require__(688),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _c) || Object])
    ], AfterComponent);
    return AfterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=after-login.component.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeforeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeforeComponent = (function () {
    function BeforeComponent(auth, activatedRoute, router) {
        this.auth = auth;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.title = 'app works!';
    }
    BeforeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.activatedRoute.url['_value'].length == 1)
            return;
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            console.log("params: ", params['id'] == null || params['id'] == undefined);
            if (params['id'] == null || params['access'] == undefined || params['id'] == "undefined" || params['access'] == "undefined") {
                if (_this.auth.isLogged() == false) {
                }
            }
            else {
                _this.auth.setAuth(params['id'], params['access']);
                _this.router.navigate(['dashboard']);
            }
        });
    };
    BeforeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-before-login',
            template: '<div></div>',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _c) || Object])
    ], BeforeComponent);
    return BeforeComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=before-login.component.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForemanDashboardCardWallComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForemanDashboardCardWallComponent = (function () {
    function ForemanDashboardCardWallComponent() {
    }
    ForemanDashboardCardWallComponent.prototype.ngOnInit = function () {
        // console.log("cookie: ", localStorage.getItem('token'));
    };
    ForemanDashboardCardWallComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-foreman-dashboard-cardwall',
            template: __webpack_require__(689),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [])
    ], ForemanDashboardCardWallComponent);
    return ForemanDashboardCardWallComponent;
}());
//# sourceMappingURL=foreman-dashboard-cardwall.component.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_part__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__ = __webpack_require__(226);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForemanDashboardRouterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForemanDashboardRouterComponent = (function () {
    function ForemanDashboardRouterComponent() {
        this.containers = [];
        this.containers = [
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('appointments', 'Tickets Working', [
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](12, "Michael Westen", "2017 Honda Odyssey EX-L", "5FNRL5H6XHB006972", "3:00 p.m.", "0 minutes", "Marcus Aman", null, null),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](13, "Sam Axe", "2017 Honda Accord SL", "5FNRL5H6XHB006972", "4:17p.m.", "90 minutes", "Archie Rival", null, [new __WEBPACK_IMPORTED_MODULE_1__models_part__["a" /* Part */](100, 'brakes pads'), new __WEBPACK_IMPORTED_MODULE_1__models_part__["a" /* Part */](101, 'oil'), new __WEBPACK_IMPORTED_MODULE_1__models_part__["a" /* Part */](102, 'oil filter')]),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](14, "Fiona Glennanne", "2017 Honda Civic EX-L", "5FNRL5H6XHB006972", "4:30 p.m.", null, "Marcus Aman", null, null),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](15, "Nate Westen", "2008 Honda Acura", "vin", "4:30p.m.", null, "James Retiring", null, null),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](16, "Pete Seymour", "2015 GMC Yukon Denali XL", "vin", "2:00 p.m.", "10 minutes", "Simon Aspirer", "Larry Shapiro", null),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](17, "Matthew Blackmon", "1993 Ford Probe GT", "vin", "2:30 p.m.", "55 minutes", "Joe Newbie", null, null)
            ], ['appointments', 'serviceEstimate']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('serviceEstimate', 'Price Parts', [], ['serviceEstimate', 'parts', 'multipoint', 'serviceFloor', 'invoice']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('parts', 'Attention Advisor', [], ['parts']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('multipoint', 'Recs Approved', [], ['multipoint']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('servicefloor', 'On Hold', [], ['serviceFloor', 'invoice']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('invoice', 'Completed', [], ['invoice'])
        ];
    }
    ForemanDashboardRouterComponent.prototype.ngOnInit = function () {
        console.log("cookie: ", localStorage.getItem('token'));
    };
    ForemanDashboardRouterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-foreman-dashboard-router',
            template: __webpack_require__(690),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [])
    ], ForemanDashboardRouterComponent);
    return ForemanDashboardRouterComponent;
}());
//# sourceMappingURL=foreman-dashboard-router.component.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForemanDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForemanDashboardComponent = (function () {
    function ForemanDashboardComponent() {
    }
    ForemanDashboardComponent.prototype.ngOnInit = function () {
        console.log("cookie: ", localStorage.getItem('token'));
    };
    ForemanDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-foreman-dashboard',
            template: __webpack_require__(691),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [])
    ], ForemanDashboardComponent);
    return ForemanDashboardComponent;
}());
//# sourceMappingURL=foreman-dashboard.component.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceManagerDashboardCardwallComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceManagerDashboardCardwallComponent = (function () {
    function ServiceManagerDashboardCardwallComponent() {
    }
    ServiceManagerDashboardCardwallComponent.prototype.ngOnInit = function () {
    };
    ServiceManagerDashboardCardwallComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-service-manager-dashboard-cardwall',
            template: __webpack_require__(692),
            styles: [__webpack_require__(668)]
        }), 
        __metadata('design:paramtypes', [])
    ], ServiceManagerDashboardCardwallComponent);
    return ServiceManagerDashboardCardwallComponent;
}());
//# sourceMappingURL=service-manager-dashboard-cardwall.component.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_part__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__ = __webpack_require__(226);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceManagerDashboardRouterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceManagerDashboardRouterComponent = (function () {
    function ServiceManagerDashboardRouterComponent() {
        this.containers = [];
        this.containers = [
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('appointments', 'Preprints', [
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](12, "Michael Westen", "2017 Honda Odyssey EX-L", "5FNRL5H6XHB006972", "3:00 p.m.", "0 minutes", "Marcus Aman", null, null),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](13, "Sam Axe", "2017 Honda Accord SL", "5FNRL5H6XHB006972", "4:17p.m.", "90 minutes", "Archie Rival", null, [new __WEBPACK_IMPORTED_MODULE_1__models_part__["a" /* Part */](100, 'brakes pads'), new __WEBPACK_IMPORTED_MODULE_1__models_part__["a" /* Part */](101, 'oil'), new __WEBPACK_IMPORTED_MODULE_1__models_part__["a" /* Part */](102, 'oil filter')]),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](14, "Fiona Glennanne", "2017 Honda Civic EX-L", "5FNRL5H6XHB006972", "4:30 p.m.", null, "Marcus Aman", null, null),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](15, "Nate Westen", "2008 Honda Acura", "vin", "4:30p.m.", null, "James Retiring", null, null),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](16, "Pete Seymour", "2015 GMC Yukon Denali XL", "vin", "2:00 p.m.", "10 minutes", "Simon Aspirer", "Larry Shapiro", null),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](17, "Matthew Blackmon", "1993 Ford Probe GT", "vin", "2:30 p.m.", "55 minutes", "Joe Newbie", null, null)
            ], [
                'appointments',
                'serviceEstimate']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('serviceEstimate', 'Advisor', [], ['serviceEstimate', 'parts', 'multipoint', 'serviceFloor', 'invoice']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('parts', 'Parts', [], ['parts']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('multipoint', 'Multipoint', [], ['multipoint']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('servicefloor', 'Servicing', [], ['serviceFloor', 'invoice']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('invoice', 'Invoice', [], ['invoice'])
        ];
    }
    ServiceManagerDashboardRouterComponent.prototype.ngOnInit = function () {
    };
    ServiceManagerDashboardRouterComponent.prototype.allowDropFunction = function (zone) {
        return function (dragData) { return dragData.nextZones.contains(zone); };
    };
    ServiceManagerDashboardRouterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-service-manager-dashboard-router',
            template: __webpack_require__(693),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [])
    ], ServiceManagerDashboardRouterComponent);
    return ServiceManagerDashboardRouterComponent;
}());
//# sourceMappingURL=service-manager-dashboard-router.component.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceManagerDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceManagerDashboardComponent = (function () {
    function ServiceManagerDashboardComponent() {
    }
    ServiceManagerDashboardComponent.prototype.ngOnInit = function () {
        console.log("cookie: ", localStorage.getItem('token'));
    };
    ServiceManagerDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-service-manager-dashboard',
            template: __webpack_require__(694),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [])
    ], ServiceManagerDashboardComponent);
    return ServiceManagerDashboardComponent;
}());
//# sourceMappingURL=service-manager-dashboard.component.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceSideMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceSideMenuComponent = (function () {
    function ServiceSideMenuComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.item = '';
        this.item = 'dashboard';
    }
    ServiceSideMenuComponent.prototype.ngOnInit = function () {
        if (this.router.url.includes('service'))
            this.item = 'service';
        if (this.router.url.includes('technician'))
            this.item = 'technician';
        if (this.router.url.includes('foreman'))
            this.item = 'foreman';
    };
    ServiceSideMenuComponent.prototype.onChangeRouter = function (path) {
        this.item = path;
        switch (path) {
            case 'dashboard':
                this.router.navigate(['/dashboard']);
                break;
            case 'service':
                this.router.navigate(['/dashboard/service']);
                break;
            case 'technician':
                this.router.navigate(['/dashboard/technician']);
                break;
            case 'foreman':
                this.router.navigate(['/dashboard/foreman']);
                break;
            default:
                this.router.navigate(['/dashboard']);
                break;
        }
    };
    ServiceSideMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-service-side-menu',
            template: __webpack_require__(695),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object])
    ], ServiceSideMenuComponent);
    return ServiceSideMenuComponent;
    var _a, _b;
}());
//# sourceMappingURL=service-side-menu.component.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceTopMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceTopMenuComponent = (function () {
    function ServiceTopMenuComponent() {
        this.options = [
            { value: 'name', display: 'Name' },
            { value: 'email', display: 'Email Address' },
            { value: 'vin', display: 'Vehicle vin Number' }
        ];
        this._form = {
            step1: {},
            step2: {},
            step3: {},
            step4: {}
        };
        this.cardData = [
            { label: "First Card", content: "This is first Card" },
            { label: "Second Card", content: "This is second Card" },
            { label: "Third Card", content: "This is third Card" },
            { label: "Fourth Card", content: "This is fourth Card" },
        ];
    }
    ServiceTopMenuComponent.prototype.ngOnInit = function () {
        $(".button-collapse").sideNav();
    };
    ServiceTopMenuComponent.prototype.getPlaceHolderString = function (option) {
        var placeholder = '';
        switch (option) {
            case "undefined":
                placeholder = "";
                break;
            case "name":
                placeholder = "Please provide your name";
                break;
            case "email":
                placeholder = "Please provide your email";
                break;
            case "vin":
                placeholder = "Please provide a vehicle vin Number";
                break;
            default:
                placeholder = "";
                break;
        }
        ;
        return placeholder;
    };
    ServiceTopMenuComponent.prototype.getDisplayString = function (option) {
        this.options.forEach(function (opt) {
            if (opt.value == option)
                return opt.display;
        });
    };
    ServiceTopMenuComponent.prototype.toggleDatePicker = function (status) {
        this.showDatePicker = status;
    };
    ServiceTopMenuComponent.prototype.setDate = function (date) {
        this._form.step4.date = date;
    };
    ServiceTopMenuComponent.prototype.onComplete = function (e) {
        this.myModal.close();
    };
    ServiceTopMenuComponent.prototype.stepChanged = function (e) {
        console.log(e);
        e.showPrev = false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myModal'), 
        __metadata('design:type', Object)
    ], ServiceTopMenuComponent.prototype, "myModal", void 0);
    ServiceTopMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-service-top-menu',
            template: __webpack_require__(696),
            styles: [__webpack_require__(672)]
        }), 
        __metadata('design:paramtypes', [])
    ], ServiceTopMenuComponent);
    return ServiceTopMenuComponent;
}());
//# sourceMappingURL=service-top-menu.component.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnicianDashboardCardWallComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TechnicianDashboardCardWallComponent = (function () {
    function TechnicianDashboardCardWallComponent() {
        this.myDatePickerOptions = {
            todayBtnTxt: 'Today',
            dateFormat: 'yyyy-mm-dd',
            firstDayOfWeek: 'su',
            sunHighlight: true,
            height: '34px',
            width: '375px',
            inline: true
        };
    }
    TechnicianDashboardCardWallComponent.prototype.ngOnInit = function () {
        // console.log("cookie: ", localStorage.getItem('token'));
    };
    TechnicianDashboardCardWallComponent.prototype.onDateChanged = function (event) {
        console.log('onDateChanged(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc, ' - selected week start: ', event.start, ' - selected week end: ', event.end);
    };
    TechnicianDashboardCardWallComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-technician-dashboard-cardwall',
            template: __webpack_require__(697),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [])
    ], TechnicianDashboardCardWallComponent);
    return TechnicianDashboardCardWallComponent;
}());
//# sourceMappingURL=technician-dashboard-cardwall.component.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_part__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__ = __webpack_require__(226);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnicianDashboardRouterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TechnicianDashboardRouterComponent = (function () {
    function TechnicianDashboardRouterComponent() {
        this.containers = [];
        this.containers = [
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('appointments', 'Tickets Working', [
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](12, "Michael Westen", "2017 Honda Odyssey EX-L", "5FNRL5H6XHB006972", "3:00 p.m.", "0 minutes", "Marcus Aman", null, null),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](13, "Sam Axe", "2017 Honda Accord SL", "5FNRL5H6XHB006972", "4:17p.m.", "90 minutes", "Archie Rival", null, [new __WEBPACK_IMPORTED_MODULE_1__models_part__["a" /* Part */](100, 'brakes pads'), new __WEBPACK_IMPORTED_MODULE_1__models_part__["a" /* Part */](101, 'oil'), new __WEBPACK_IMPORTED_MODULE_1__models_part__["a" /* Part */](102, 'oil filter')]),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](14, "Fiona Glennanne", "2017 Honda Civic EX-L", "5FNRL5H6XHB006972", "4:30 p.m.", null, "Marcus Aman", null, null),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](15, "Nate Westen", "2008 Honda Acura", "vin", "4:30p.m.", null, "James Retiring", null, null),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](16, "Pete Seymour", "2015 GMC Yukon Denali XL", "vin", "2:00 p.m.", "10 minutes", "Simon Aspirer", "Larry Shapiro", null),
                new __WEBPACK_IMPORTED_MODULE_2__models_service_ticket__["a" /* ServiceTicket */](17, "Matthew Blackmon", "1993 Ford Probe GT", "vin", "2:30 p.m.", "55 minutes", "Joe Newbie", null, null)
            ], ['appointments', 'serviceEstimate']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('serviceEstimate', 'Price Parts', [], ['serviceEstimate', 'parts', 'multipoint', 'serviceFloor', 'invoice']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('parts', 'Attention Advisor', [], ['parts']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('multipoint', 'Recs Approved', [], ['multipoint']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('servicefloor', 'On Hold', [], ['serviceFloor', 'invoice']),
            new __WEBPACK_IMPORTED_MODULE_3__models_ticket_container__["a" /* TicketContainer */]('invoice', 'Completed', [], ['invoice'])
        ];
    }
    TechnicianDashboardRouterComponent.prototype.ngOnInit = function () {
        console.log("cookie: ", localStorage.getItem('token'));
    };
    TechnicianDashboardRouterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-technician-dashboard-router',
            template: __webpack_require__(698),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], TechnicianDashboardRouterComponent);
    return TechnicianDashboardRouterComponent;
}());
//# sourceMappingURL=technician-dashboard-router.component.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnicianDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TechnicianDashboardComponent = (function () {
    function TechnicianDashboardComponent() {
    }
    TechnicianDashboardComponent.prototype.ngOnInit = function () {
        console.log("cookie: ", localStorage.getItem('token'));
    };
    TechnicianDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-technician-dashboard',
            template: __webpack_require__(699),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], TechnicianDashboardComponent);
    return TechnicianDashboardComponent;
}());
//# sourceMappingURL=technician-dashboard.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".panel {\n    margin-bottom: 21px;\n    background-color: #ffffff;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.panel-heading h4 {\n\tfont-size: 1.7rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".panel {\n    margin-bottom: 21px;\n    background-color: #ffffff;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.panel-heading h4 {\n\tfont-size: 1.7rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "picker-modal > section {\n\tposition: initial !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".panel {\n    margin-bottom: 21px;\n    background-color: #ffffff;\n    border: 1px solid transparent;\n    border-radius: 4px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.panel-heading h4 {\n\tfont-size: 1.7rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 378,
	"./af.js": 378,
	"./ar": 384,
	"./ar-dz": 379,
	"./ar-dz.js": 379,
	"./ar-ly": 380,
	"./ar-ly.js": 380,
	"./ar-ma": 381,
	"./ar-ma.js": 381,
	"./ar-sa": 382,
	"./ar-sa.js": 382,
	"./ar-tn": 383,
	"./ar-tn.js": 383,
	"./ar.js": 384,
	"./az": 385,
	"./az.js": 385,
	"./be": 386,
	"./be.js": 386,
	"./bg": 387,
	"./bg.js": 387,
	"./bn": 388,
	"./bn.js": 388,
	"./bo": 389,
	"./bo.js": 389,
	"./br": 390,
	"./br.js": 390,
	"./bs": 391,
	"./bs.js": 391,
	"./ca": 392,
	"./ca.js": 392,
	"./cs": 393,
	"./cs.js": 393,
	"./cv": 394,
	"./cv.js": 394,
	"./cy": 395,
	"./cy.js": 395,
	"./da": 396,
	"./da.js": 396,
	"./de": 398,
	"./de-at": 397,
	"./de-at.js": 397,
	"./de.js": 398,
	"./dv": 399,
	"./dv.js": 399,
	"./el": 400,
	"./el.js": 400,
	"./en-au": 401,
	"./en-au.js": 401,
	"./en-ca": 402,
	"./en-ca.js": 402,
	"./en-gb": 403,
	"./en-gb.js": 403,
	"./en-ie": 404,
	"./en-ie.js": 404,
	"./en-nz": 405,
	"./en-nz.js": 405,
	"./eo": 406,
	"./eo.js": 406,
	"./es": 408,
	"./es-do": 407,
	"./es-do.js": 407,
	"./es.js": 408,
	"./et": 409,
	"./et.js": 409,
	"./eu": 410,
	"./eu.js": 410,
	"./fa": 411,
	"./fa.js": 411,
	"./fi": 412,
	"./fi.js": 412,
	"./fo": 413,
	"./fo.js": 413,
	"./fr": 416,
	"./fr-ca": 414,
	"./fr-ca.js": 414,
	"./fr-ch": 415,
	"./fr-ch.js": 415,
	"./fr.js": 416,
	"./fy": 417,
	"./fy.js": 417,
	"./gd": 418,
	"./gd.js": 418,
	"./gl": 419,
	"./gl.js": 419,
	"./he": 420,
	"./he.js": 420,
	"./hi": 421,
	"./hi.js": 421,
	"./hr": 422,
	"./hr.js": 422,
	"./hu": 423,
	"./hu.js": 423,
	"./hy-am": 424,
	"./hy-am.js": 424,
	"./id": 425,
	"./id.js": 425,
	"./is": 426,
	"./is.js": 426,
	"./it": 427,
	"./it.js": 427,
	"./ja": 428,
	"./ja.js": 428,
	"./jv": 429,
	"./jv.js": 429,
	"./ka": 430,
	"./ka.js": 430,
	"./kk": 431,
	"./kk.js": 431,
	"./km": 432,
	"./km.js": 432,
	"./ko": 433,
	"./ko.js": 433,
	"./ky": 434,
	"./ky.js": 434,
	"./lb": 435,
	"./lb.js": 435,
	"./lo": 436,
	"./lo.js": 436,
	"./lt": 437,
	"./lt.js": 437,
	"./lv": 438,
	"./lv.js": 438,
	"./me": 439,
	"./me.js": 439,
	"./mi": 440,
	"./mi.js": 440,
	"./mk": 441,
	"./mk.js": 441,
	"./ml": 442,
	"./ml.js": 442,
	"./mr": 443,
	"./mr.js": 443,
	"./ms": 445,
	"./ms-my": 444,
	"./ms-my.js": 444,
	"./ms.js": 445,
	"./my": 446,
	"./my.js": 446,
	"./nb": 447,
	"./nb.js": 447,
	"./ne": 448,
	"./ne.js": 448,
	"./nl": 450,
	"./nl-be": 449,
	"./nl-be.js": 449,
	"./nl.js": 450,
	"./nn": 451,
	"./nn.js": 451,
	"./pa-in": 452,
	"./pa-in.js": 452,
	"./pl": 453,
	"./pl.js": 453,
	"./pt": 455,
	"./pt-br": 454,
	"./pt-br.js": 454,
	"./pt.js": 455,
	"./ro": 456,
	"./ro.js": 456,
	"./ru": 457,
	"./ru.js": 457,
	"./se": 458,
	"./se.js": 458,
	"./si": 459,
	"./si.js": 459,
	"./sk": 460,
	"./sk.js": 460,
	"./sl": 461,
	"./sl.js": 461,
	"./sq": 462,
	"./sq.js": 462,
	"./sr": 464,
	"./sr-cyrl": 463,
	"./sr-cyrl.js": 463,
	"./sr.js": 464,
	"./ss": 465,
	"./ss.js": 465,
	"./sv": 466,
	"./sv.js": 466,
	"./sw": 467,
	"./sw.js": 467,
	"./ta": 468,
	"./ta.js": 468,
	"./te": 469,
	"./te.js": 469,
	"./tet": 470,
	"./tet.js": 470,
	"./th": 471,
	"./th.js": 471,
	"./tl-ph": 472,
	"./tl-ph.js": 472,
	"./tlh": 473,
	"./tlh.js": 473,
	"./tr": 474,
	"./tr.js": 474,
	"./tzl": 475,
	"./tzl.js": 475,
	"./tzm": 477,
	"./tzm-latn": 476,
	"./tzm-latn.js": 476,
	"./tzm.js": 477,
	"./uk": 478,
	"./uk.js": 478,
	"./uz": 479,
	"./uz.js": 479,
	"./vi": 480,
	"./vi.js": 480,
	"./x-pseudo": 481,
	"./x-pseudo.js": 481,
	"./yo": 482,
	"./yo.js": 482,
	"./zh-cn": 483,
	"./zh-cn.js": 483,
	"./zh-hk": 484,
	"./zh-hk.js": 484,
	"./zh-tw": 485,
	"./zh-tw.js": 485
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 677;


/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<app-service-top-menu></app-service-top-menu>\n<div class=\"row m-t-body\">\n\t<div class=\"col s2\">\n\t\t<app-service-side-menu></app-service-side-menu>\n\t</div>\n\t<div class=\"col s10 m-l-minus-7p\" >\n\t\t<router-outlet></router-outlet>\n\t\t<!-- <app-service-manager-dashboard></app-service-manager-dashboard> -->\n\t</div>\n</div>"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<div class=\"row cardwall\">\n\t<div class=\"\">\n\t\t<div>\n\t\t\t<div class=\"\">\n\t\t\t\t<h5 style=\"text-align:center; color:white;\">Technician Availability</h5>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col s12 first\">\n\t\t\t<div class=\"col s3 center-align\" >\n\t\t\t\t<div class=\"card white-text\" id=\"tile1\">\n\t\t\t\t\t<span class=\"card-title pink-text\">.</span>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"material-icons\">today</i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"kpi\">13</div>\n\t\t\t\t\t<div>Appointments Today</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col s3 center-align\">\n\t\t\t\t<div class=\"card white-text\" id=\"tile3\">\n\t\t\t\t\t<span class=\"card-title blue-text\">.</span>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"material-icons\">person</i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"kpi\">1 out of 7</div>\n\t\t\t\t\t<div>Rank</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col s3 center-align\">\n\t\t\t\t<div class=\"card white-text\" id=\"tile2\">\n\t\t\t\t\t<span class=\"card-title green-text\">.</span>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"material-icons\">attach_money</i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"kpi\">$3,204.00</div>\n\t\t\t\t\t<div>Today's Total Revenue </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col s3 center-align\">\n\t\t\t\t<div class=\"card white-text\" id=\"tile4\">\n\t\t\t\t\t<span class=\"card-title yellow-text\">.</span>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"material-icons\">trending_up</i>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t<div class=\"kpi\">$264,990.00</div>\n\t\t\t\t\t<div>Trend/Month</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n</div>"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\t<div class=\"routerwall row\" style=\"\">\n\t\t<div class=\"\">\n\t\t\t<div class=\"\">\n\t\t\t<h5 style=\"text-align:center; color:white; padding-top: .8em;\"></h5>\n\t\t\t</div>\n\t\t\t<div class=\"\" >\n\t\t\t\t<div class=\"containerWall col s2 center-align\"    *ngFor=\"let container of containers; let i = index; \">\n\t\t\t\t\t<div class=\"panel panel-router \">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h4>{{container.name}}</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t<ul class=\"list-group\" [dragula]='\"first-bag\"'>\n\t\t\t\t\t\t\t\t<li *ngFor=\"let ticket of container.tickets; let x = index\" class=\"list-group-item\">\n\t\t\t\t\t\t\t\t\t<div class=\"routercard\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"top-card\" style=\"background-color:royalblue;\">{{ticket.advisor}} <a style=\"text-decoration:underline; color:white;\"><span class=\"pull-right\">#{{ticket.id}}</span></a></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"top-card\" *ngIf=\"['serviceFloor', 'multipoint'].indexOf(container.nextZones[0]) > -1\">Tech:  {{ticket.technician}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"customer-name\">{{ticket.customerName}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"customer-vehicle\">{{ticket.vehicle}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"customer-vehicle\" *ngIf=\"['parts'].indexOf(container.nextZones[0]) > -1\">\n\n\t\t\t\t\t\t\t\t\t\t\t<ol><li *ngFor=\"let part of ticket.parts;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{part.name}}</li>\n\t\t\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"time clearfix\"><span class=\"pull-left\">{{ticket.time}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">{{ticket.timeRemaining}}</span></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"m-t-2p\">\n\t<app-foreman-dashboard-cardwall></app-foreman-dashboard-cardwall>\n\t<app-foreman-dashboard-router></app-foreman-dashboard-router>\n</div>\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<div class=\"row cardwall\">\n\t<div class=\"\">\n\t\t<div>\n\t\t\t<div class=\"\">\n\t\t\t\t<h5 style=\"text-align:center; color:white;\">Key Performance Indicators</h5>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col s12 first\">\n\t\t\t<div class=\"col s3\" >\n\t\t\t\t<div class=\"front card white-text\" id=\"tile1\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"material-icons\">today</i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"kpi\">13</div>\n\t\t\t\t\t<div>Appointments Today</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rear card white-text\">.  </div>\n\t\t\t</div>\n\t\t\t<div class=\"col s3\">\n\t\t\t\t<div class=\"front card white-text\" id=\"tile3\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"material-icons\">person</i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"kpi\">1 out of 7</div>\n\t\t\t\t\t<div>Rank</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rear  card white-text\">\n\t\t\t\t\t<h3>Leaderboard</h3>\n\t\t\t\t\t<ol class=\"col s12\" style=\"column-count: 2; column-gap:40px;\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span>Marcus Aman</span> - <span>$750</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span>Archie Rival</span> - <span>$630</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span>James Retiring</span> - <span>$550</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span>Simon Aspirer</span> - <span>$480</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span>Larry Transfer</span> - <span>$394</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span>Jane Novice</span> - <span>$250</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span>Joe Newbie</span> - <span>$150</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col s3\">\n\t\t\t\t<div class=\"front card white-text\" id=\"tile2\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"material-icons\">attach_money</i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"kpi\">$3,204.00</div>\n\t\t\t\t\t<div>Today's Total Revenue </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rear  card white-text\">\n\t\t\t\t\t<h3>Cash Flow</h3>\n\t\t\t\t\t<p>$1,500.00</p>\n\t\t\t\t\t<p>Net</p>\n\t\t\t\t\t<p>-$1,704.00</p>\n\t\t\t\t\t<p>Billed to Parts</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col s3\">\n\t\t\t\t<div class=\"front card white-text\" id=\"tile4\">\n\t\t\t\t\t<i class=\"material-icons\">trending_up</i>\n\t\t\t\t\t<div class=\"kpi\">$264,990.00</div>\n\t\t\t\t\t<div>Trend/Month</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rear card white-text\">\n\t\t\t\t\t<h3>Daily Average</h3>\n\t\t\t\t\t<p>+$8,833/day</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t\t<div class=\"col s12 last\">\t\n\t\t\t<div class=\"col s3\">\n\t\t\t\t<div class=\"front card white-text\" id=\"tile5\">\n\t\t\t\t<i class=\"material-icons\">supervisor_account</i>\n\t\t\t\t\t<div class=\"kpi\">$110.38</div>\n\t\t\t\t\t<div>Average Revenue / Repair</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rear card white-text\">\n\t\t\t\t\t<h3>Stats</h3>\n\t\t\t\t\t<p style=\"text-decoration:underline\">$8,833.00 Trend Revenue / day</p>\n\n\t\t\t\t\t<p>80 Trend Customers / day</p>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class=\"col s3\">\n\t\t\t\t<div class=\"front card white-text\" id=\"tile6\">\n\t\t\t\t\t<i class=\"material-icons\">work</i>\n\t\t\t\t\t<div class=\"kpi\">8</div>\n\t\t\t\t\t<div>Appointments Tomorrow</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rear\">Order</div>\n\t\t\t</div>\n\t\t\t<div class=\"col s3\">\n\t\t\t\t<div class=\"front card white-text\" id=\"tile7\">\n\t\t\t\t\t<i class=\"material-icons\">library_books</i>\n\t\t\t\t\t<div class=\"kpi\">93.4</div>\n\t\t\t\t\t<div>MTD CSE</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rear card white-text\">Blog</div>\n\t\t\t</div>\n\t\t\t<div class=\"col s3\">\n\t\t\t\t<div class=\"front card white-text\" id=\"tile8\">\n\t\t\t\t\t<i class=\"material-icons\">insert_drive_file</i>\n\t\t\t\t\t<div class=\"kpi\">6</div>\n\t\t\t\t\t<div>Active Tickets</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"rear card white-text\">Contact</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\t<div class=\"routerwall row\" style=\"\">\n\t\t<div class=\"\">\n\t\t\t<div class=\"\">\n\t\t\t<h5 style=\"text-align:center; color:white; padding-top: .8em;\">Service Router</h5>\n\t\t\t</div>\n\t\t\t<div class=\"\" >\n\t\t\t\t<div class=\"containerWall col s2 center-align\"    *ngFor=\"let container of containers; let i = index; \">\n\t\t\t\t\t<div class=\"panel panel-router \">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h4>{{container.name}}</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t<ul class=\"list-group\" [dragula]='\"first-bag\"'>\n\t\t\t\t\t\t\t\t<li *ngFor=\"let ticket of container.tickets; let x = index\" class=\"list-group-item\">\n\t\t\t\t\t\t\t\t\t<div class=\"routercard\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"top-card\" style=\"background-color:royalblue;\">{{ticket.advisor}} <a style=\"text-decoration:underline; color:white;\"><span class=\"pull-right\">#{{ticket.id}}</span></a></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"top-card\" *ngIf=\"['serviceFloor', 'multipoint'].indexOf(container.nextZones[0]) > -1\">Tech:  {{ticket.technician}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"customer-name\">{{ticket.customerName}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"customer-vehicle\">{{ticket.vehicle}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"customer-vehicle\" *ngIf=\"['parts'].indexOf(container.nextZones[0]) > -1\">\n\n\t\t\t\t\t\t\t\t\t\t\t<ol><li *ngFor=\"let part of ticket.parts;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{part.name}}</li>\n\t\t\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"time clearfix\"><span class=\"pull-left\">{{ticket.time}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">{{ticket.timeRemaining}}</span></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"m-t-2p\">\n\t<app-service-manager-dashboard-cardwall></app-service-manager-dashboard-cardwall>\n\t<app-service-manager-dashboard-router></app-service-manager-dashboard-router>\n</div>\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<div class=\"side-menu z-depth-1\">\n\t<div class=\"collection\">\n\t\t<a class=\"collection-item\" [class.active]=\"item == 'dashboard'\" (click)=\"onChangeRouter('dashboard')\">Dashboard</a>\n\t\t<a class=\"collection-item\" [class.active]=\"item == 'service'\"  (click)=\"onChangeRouter('service')\">Service</a>\n\t\t<a class=\"collection-item\" [class.active]=\"item == 'technician'\" (click)=\"onChangeRouter('technician')\" >Technician</a>\n\t\t<a class=\"collection-item\" [class.active]=\"item == 'foreman'\" (click)=\"onChangeRouter('foreman')\" >Foreman</a>\n\t\t<a class=\"collection-item\" [class.active]=\"item == 'inbox'\" (click)=\"onChangeRouter('inbox')\" >Inbox</a>\n\t\t<a class=\"collection-item\" [class.active]=\"item == 'chat'\" (click)=\"onChangeRouter('chat')\" >Chat</a>\n\t\t<a class=\"collection-item\" [class.active]=\"item == 'reports'\"  (click)=\"onChangeRouter('reports')\">Reports</a>\n\t</div>\n</div>\t"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<header>\n\t<nav class=\"white z-depth-1\">\n\t    <div class=\"row nav-wrapper\">\n\t      \t<div class=\"navbar-brand col s2 hide-on-med-and-down\"><span class=\"sr-only\">Kloud DMS</span></div>\n\t      \t<a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse black-text\"><i class=\"material-icons\">menu</i></a>\n\t      \t<div class=\"col s10 blue-grey darken-3 hide-on-med-and-down\">\n\t      \t\t<div class=\"col s12\">\n\t      \t\t\t<div class=\"col s1 blue-grey-text text-darken-2\">.</div>\n\t      \t\t\t<div class=\"black col s11 ul-bar\">\n\t\t\t      \t\t<ul class=\"right\">\n\t\t\t\t        \t<li><a><i class=\"material-icons\">person</i></a></li>\n\t\t\t\t\t        <li><a><i class=\"material-icons\">chat_bubble</i></a></li>\n\t\t\t\t\t        <li><a><i class=\"material-icons\">public</i></a></li>\n\t\t\t\t\t        <li><a><i class=\"material-icons\">build</i></a></li>\n\t\t\t\t      \t</ul>\n\t\t\t\t      \t<span class=\"left\"><a>Weather</a></span>\n\t\t\t      \t</div>\n\t      \t\t</div>\n\t      \t\t\n\t      \t\t<div class=\"col s12\">\n\t      \t\t\t<div class=\"col s1 blue-grey-text text-darken-2\">.</div>\n\t\t\t      \t<div class=\"black col s11 ul-bar\">\n\t\t\t\t      \t<ul class=\"right\">\n\t\t\t\t        \t<li><a (click)=\"myModal.open()\">Schedule Appointment </a></li>\n\t\t\t\t\t        <li><a>Write Ticket</a></li>\n\t\t\t\t\t        <li><a>Vehicle Information</a></li>\n\t\t\t\t\t        <li><a>Customer Information</a></li>\n\t\t\t\t      \t</ul>\n\t\t\t\t      \t<span class=\"left\"><a>Today's Date</a></span>\n\t\t\t\t    </div>\n\t\t\t    </div>\t\t      \n\t      \t</div>\n      \t\t<ul class=\"side-nav\" id=\"mobile-demo\">\n\t\t        <li><a href=\"sass.html\">Sass</a></li>\n\t\t        <li><a href=\"badges.html\">Components</a></li>\n\t\t        <li><a href=\"collapsible.html\">Javascript</a></li>\n\t\t        <li><a href=\"mobile.html\">Mobile</a></li>\n\t      \t</ul>\n\t    </div>\n\t</nav>\n\t          \n</header>\n\n\n <modal #myModal [closeOnEscape]=\"false\" [closeOnOutsideClick]=\"false\">\n    <modal-content>\n\t    <wizard>\n\t\t\t<wizard-step title=\"Step 1\">\n\t\t\t\t<form #emailForm=\"ngForm\">\n\t\t\t      <div>\n\t\t\t        <label>Choose a option</label>\n\t\t\t\t    <div *ngFor=\"let option of options\">\n\t\t\t\t        <p>\n\t\t\t\t\t        <input class=\"with-gap\" type=\"radio\" name=\"option\" [id]=\"option.value\" [(ngModel)]=\"_form.step1.option\" \n\t\t\t\t\t        [value]=\"option.value\">\n\t\t\t\t\t        <label [for]=\"option.value\">{{option.display}}</label>\n\t\t\t\t        </p>\n\t\t\t\t    </div>\n\t\t\t        <input type=\"text\" class=\"form-control\" name=\"value\" aria-describedby=\"emailHelp\" [(ngModel)]=\"_form.step1.value\" [placeholder]=\"getPlaceHolderString(_form.step1.option)\" required>\n\t\t\t        <!-- <small *ngIf=\"_form.step1.option == 'email'\" id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n\t\t\t      </div>\n\t\t\t    </form>\n\t\t\t    <div class=\"row text-right\">\t\t\t\t\n\t\t\t    \t<div class=\"col-xs-12\">\n\t\t\t\t\t<button class=\" btn btn-sm btn-primary text-right\" type=\"button\" nextStep [disabled]=\"!emailForm.form.valid\" >Next</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</wizard-step>\n\n\t\t\t<wizard-step title=\"Step 2\">\t\t\t\n\t\t\t\t<div class=\"row text-center\">\n\t\t\t\t\t<div class=\"col-sm-12 form-group\">\n\t\t\t\t\t\t<div class=\"vehicle-card\" *ngFor=\"let card of cardData\">\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"fb\" [value]=\"card.label\" />\n\t\t\t\t\t\t\t<div class=\"widget-wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"widget item-widget\">\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"image\">\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"absolute-center site-speed-lazy-image img-lazy-load\" src=\"http://i.ebayimg.com/images/g/VbsAAOSwfVpYpfJ9/s-l225.jpg\" alt=\"2004 Ford F-150 FX4\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"item-details\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">2004 Ford F-150 FX4</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"price-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"discounted-price\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"price\">USD 10245.01</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div class=\"text-center\"><label>{{card.label}}</label></div>\n\t\t\t\t\t\t\t<div class=\"text-center\"><small>{{card.content}}</small></div> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row text-right\">\t\t\t\t\n\t\t\t    \t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<button class=\" btn btn-sm btn-primary\" type=\"button\" previousStep>Previous</button>\n\t\t\t\t\t\t<button class=\" btn btn-sm btn-primary\" type=\"button\" nextStep>Next</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</wizard-step>\n\t\t\t<wizard-step title=\"Step 3\">\n\t\t\t\t<form #complainForm=\"ngForm\">\n\t\t\t    \t<div class=\"form-group\">\n\t\t\t\t    \t<label>Complaints</label>\n\t\t\t\t    \t<textarea class=\"materialize-textarea\" name=\"complain\" [(ngModel)]=\"_form.step3.value\" required></textarea>\n\t\t\t    \t</div>\n\t\t\t    </form>\t\t\t\t\n\t\t\t    <div class=\"row text-right\">\t\t\t\t\n\t\t\t    \t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<button class=\" btn btn-sm btn-primary\" type=\"button\" previousStep>Previous</button>\n\t\t\t\t\t\t<button class=\" btn btn-sm btn-primary\" type=\"button\" [disabled]=\"!complainForm.form.valid\" nextStep >Next</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</wizard-step>\n\t\t\t<wizard-step title=\"Step 4\">\t\t\t\n\t\t\t\t<form #dateForm=\"ngForm\">\n\t\t\t    \t<div class=\"form-group\">\n\t\t\t\t    \t<label>Select a date</label>\n\t\t\t\t    \t<input class=\"form-control\" name=\"date\" [ngModel]=\"_form.step4.date\" (focus)=\"toggleDatePicker(true)\" readonly />\n\t\t\t\t\t\t<date-picker name=\"picker\" *ngIf=\"showDatePicker\" [initDate]=\"_form.step4.date\"\n\t\t\t\t\t\t           (onDatePickerCancel)=\"toggleDatePicker($event)\"\n\t\t\t\t\t\t           (onSelectDate)=\"setDate($event)\"></date-picker>\n\t\t\t    \t</div>\n\t\t\t    </form>\t\t\n\t\t\t    <div class=\"row text-right\">\t\t\t\t\n\t\t\t    \t<div class=\"col-xs-12\">    \n\t\t\t\t\t\t<button class=\" btn btn-sm btn-primary\" type=\"button\" previousStep>Previous</button>\n\t\t\t\t\t\t<button class=\" btn btn-sm btn-primary\" type=\"button\" nextStep [disabled]=\"!dateForm.form.valid\">Next</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</wizard-step>\n\t\t\t <wizard-step title=\"Step 5\">\n\t\t\t \t<div class=\"row\">\n\t\t\t\t  \t<div class=\"input-field col s12\">\n\t\t\t\t  \t\t<p>Select {{getDisplayString(_form.step1.option)}}  : {{_form.step1.value }}</p>\n\t\t\t\t  \t</div>\n\t\t\t\t  \t<div class=\"input-field col s12\">\n\t\t\t\t  \t\t<p>Selected a card  :  {{_form.step2.value }}</p>\n\t\t\t\t  \t</div>\n\t\t\t\t  \t<div class=\"input-field col s12\">\n\t\t\t\t  \t\t<p>Complaints  :  {{_form.step3.value }}</p>\n\t\t\t\t  \t</div>\n\t\t\t\t  \t<div class=\"input-field col s12\">\n\t\t\t\t  \t\t<p>Available Date  :  {{_form.step4.date }}</p>\n\t\t\t\t  \t</div>\n\t\t\t\t</div>  \t\n\t\t\t  \t<div class=\"row text-right\">\t\t\t\t\n\t\t\t    \t<div class=\"col-xs-12\">\n\t\t\t\t\t  \t<button class=\" btn btn-sm btn-primary\" type=\"button\" previousStep >Previous</button>\n\t\t\t\t\t\t<button class=\" btn btn-sm btn-primary\" type=\"button\" (click)=\"onComplete()\" >Done</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</wizard-step>\n\t\t</wizard>\n    </modal-content>\n</modal>"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<div class=\"row \">\n\t<div class=\"col s12\"> .</div>\n\t<!-- <my-date-picker [options]=\"myDatePickerOptions\" (dateChanged)=\"onDateChanged($event)\"></my-date-picker> -->\n\t<div class=\"col s2 offset-s10 p-l-6\"> \n\t\t<i class=\"material-icons medium blue-text\">person</i>\n\t\t<i class=\"material-icons medium red-text\">drafts</i>\n\t</div>\n\t<div class=\"col s4\">.</div>\n\t<div class=\"col s8\">\t\t\n\t\t<div class=\"col s6\">\n\t\t\t<div class=\"card blue white-text\">\n\t\t\t\t<span class=\"card-title blue-text\">.</span>\n\t\t\t\t<p class=\"center-align\">14 Hours Turned Yesterday</p>\n\t\t\t\t<span class=\"card-title blue-text\">.</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col s6\">\n\t\t\t<div class=\"card  cyan accent-3 black-text\">\n\t\t\t\t<span class=\"card-title cyan-text text-accent-3\">.</span>\n\t\t\t\t<p class=\"center-align\">28 Hours Turned This Week</p>\n\t\t\t\t<span class=\"card-title cyan-text text-accent-3\">.</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col s6\">\n\t\t\t<div class=\"card green lighten-4 black-text\">\n\t\t\t\t<span class=\"card-title green-text text-lighten-4\">.</span>\n\t\t\t\t<p class=\"center-align\">63 Hours Projected to Turn This Week</p>\n\t\t\t\t<span class=\"card-title green-text text-lighten-4\">.</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col s6\">\n\t\t\t<div class=\"card  yellow lighten-2 black-text\">\n\t\t\t\t<span class=\"card-title yellow-text text-lighten-2\">.</span>\n\t\t\t\t<p class=\"center-align\">132 Hours Projected to Turn This Week</p>\n\t\t\t\t<span class=\"card-title yellow-text text-lighten-2\">.</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col s12\"> .</div>\n</div>\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\t<div class=\"routerwall row\" style=\"\">\n\t\t<div class=\"\">\n\t\t\t<div class=\"\">\n\t\t\t<h5 style=\"text-align:center; color:white; padding-top: .8em;\"></h5>\n\t\t\t</div>\n\t\t\t<div class=\"\" >\n\t\t\t\t<div class=\"containerWall col s2 center-align\"    *ngFor=\"let container of containers; let i = index; \">\n\t\t\t\t\t<div class=\"panel panel-router \">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h4>{{container.name}}</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t<ul class=\"list-group\" [dragula]='\"first-bag\"'>\n\t\t\t\t\t\t\t\t<li *ngFor=\"let ticket of container.tickets; let x = index\" class=\"list-group-item\">\n\t\t\t\t\t\t\t\t\t<div class=\"routercard\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"top-card\" style=\"background-color:royalblue;\">{{ticket.advisor}} <a style=\"text-decoration:underline; color:white;\"><span class=\"pull-right\">#{{ticket.id}}</span></a></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"top-card\" *ngIf=\"['serviceFloor', 'multipoint'].indexOf(container.nextZones[0]) > -1\">Tech:  {{ticket.technician}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"customer-name\">{{ticket.customerName}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"customer-vehicle\">{{ticket.vehicle}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"customer-vehicle\" *ngIf=\"['parts'].indexOf(container.nextZones[0]) > -1\">\n\n\t\t\t\t\t\t\t\t\t\t\t<ol><li *ngFor=\"let part of ticket.parts;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{part.name}}</li>\n\t\t\t\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"time clearfix\"><span class=\"pull-left\">{{ticket.time}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">{{ticket.timeRemaining}}</span></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<div class=\"m-t-2p\">\n\t<app-technician-dashboard-cardwall></app-technician-dashboard-cardwall>\n\t<app-technician-dashboard-router></app-technician-dashboard-router>\n</div>"

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(515);


/***/ })

},[718]);
//# sourceMappingURL=main.bundle.js.map