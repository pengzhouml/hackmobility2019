require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"~/app/home/home.module": [
		"./app/home/home.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// Module
exports.push([module.i, "/*\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n*/\n\n/*\nFor example, the following CSS rule changes the font size of all UI\ncomponents that have the btn class name.\n*/\n.btn {\n    font-size: 18;\n}\n", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/login/login.component.ts");



var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<page-router-outlet></page-router-outlet>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/nativescript.module");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/login/login.component.ts");






var nsNgCoreImport_Generated = __webpack_require__("@angular/core");
var NSLazyModulesLoader_Generated = /** @class */ (function () {
    function NSLazyModulesLoader_Generated(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory',
        };
    }
    NSLazyModulesLoader_Generated.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof nsNgCoreImport_Generated.Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    NSLazyModulesLoader_Generated.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return _this.checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    NSLazyModulesLoader_Generated.prototype.loadFactory = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = 'NgFactory';
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
    };
    NSLazyModulesLoader_Generated.prototype.checkNotEmpty = function (value, modulePath, exportName) {
        if (!value) {
            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
        }
        return value;
    };
    NSLazyModulesLoader_Generated = __decorate([
        nsNgCoreImport_Generated.Injectable(),
        __param(1, nsNgCoreImport_Generated.Optional()),
        __metadata("design:paramtypes", [nsNgCoreImport_Generated.Compiler, nsNgCoreImport_Generated.SystemJsNgModuleLoaderConfig])
    ], NSLazyModulesLoader_Generated);
    return NSLazyModulesLoader_Generated;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ],
            providers: [{ provide: nsNgCoreImport_Generated.NgModuleFactoryLoader, useClass: NSLazyModulesLoader_Generated }]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".page {\n  align-items: center;\n  flex-direction: column;\n}\n.form {\n  margin-left: 30;\n  margin-right: 30;\n  flex-grow: 2;\n  vertical-align: middle;\n}\n\n.logo {\n  margin-bottom: 12;\n  height: 90;\n  font-weight: bold;\n}\n.header {\n  horizontal-align: center;\n  font-size: 25;\n  font-weight: 600;\n  margin-bottom: 70;\n  text-align: center;\n  color: #D51A1A;\n}\n\n.input-field {\n  margin-bottom: 25;\n}\n.input {\n  font-size: 18;\n  placeholder-color: #A8A8A8;\n}\n.input:disabled {\n  background-color: white;\n  opacity: 0.5;\n}\n\n.btn-primary {\n  margin: 30 5 15 5;\n}\n\n.login-label {\n  horizontal-align: center;\n  color: #A8A8A8;\n  font-size: 16;\n}\n.sign-up-label {\n  margin-bottom: 20;\n}\n.bold {\n  color: #000000; \n}\n"

/***/ }),

/***/ "./app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout class=\"page\">\n    <StackLayout class=\"form\">\n        <Image class=\"logo\" src=\"~/images/logo.png\"></Image>\n        <Label class=\"header\" text=\"APP NAME\"></Label>\n\n        <PreviousNextView>\n            <GridLayout rows=\"auto, auto, auto\">\n                <StackLayout row=\"0\" class=\"input-field\">\n                    <TextField class=\"input\" hint=\"Email\" [isEnabled]=\"!processing\"\n                        keyboardType=\"email\" autocorrect=\"false\"\n                        autocapitalizationType=\"none\" [(ngModel)]=\"user.email\"\n                        returnKeyType=\"next\" (returnPress)=\"focusPassword()\"></TextField>\n                    <StackLayout class=\"hr-light\"></StackLayout>\n                </StackLayout>\n\n                <StackLayout row=\"1\" class=\"input-field\">\n                    <TextField #password class=\"input\" [isEnabled]=\"!processing\"\n                        hint=\"Password\" secure=\"true\" [(ngModel)]=\"user.password\"\n                        [returnKeyType]=\"isLoggingIn ? 'done' : 'next'\"\n                        (returnPress)=\"focusConfirmPassword()\"></TextField>\n                    <StackLayout class=\"hr-light\"></StackLayout>\n                </StackLayout>\n\n                <StackLayout row=\"2\" *ngIf=\"!isLoggingIn\" class=\"input-field\">\n                    <TextField #confirmPassword class=\"input\" [isEnabled]=\"!processing\"\n                        hint=\"Confirm password\" secure=\"true\" [(ngModel)]=\"user.confirmPassword\"\n                        returnKeyType=\"done\"></TextField>\n                    <StackLayout class=\"hr-light\"></StackLayout>\n                </StackLayout>\n\n                <ActivityIndicator rowSpan=\"3\" [busy]=\"processing\"></ActivityIndicator>\n            </GridLayout>\n        </PreviousNextView>\n\n        <Button [text]=\"isLoggingIn ? 'Log In' : 'Sign Up'\" [isEnabled]=\"!processing\"\n            (tap)=\"submit()\" class=\"btn btn-primary m-t-20\"></Button>\n        <Label *ngIf=\"isLoggingIn\" text=\"Forgot your password?\" class=\"login-label\"\n            (tap)=\"forgotPassword()\"></Label>\n    </StackLayout>\n\n    <Label class=\"login-label sign-up-label\" (tap)=\"toggleForm()\">\n        <FormattedString>\n            <Span [text]=\"isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'\"></Span>\n            <Span [text]=\"isLoggingIn ? 'Sign up' : ''\" class=\"bold\"></Span>\n        </FormattedString>\n    </Label>\n</FlexboxLayout>"

/***/ }),

/***/ "./app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/ui/dialogs");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/ui/page");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/shared/user.model.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/shared/user.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, userService, routerExtensions) {
        this.page = page;
        this.userService = userService;
        this.routerExtensions = routerExtensions;
        this.isLoggingIn = true;
        this.processing = false;
        this.page.actionBarHidden = true;
        this.user = new _shared_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.user.email = "user@nativescript.org";
        this.user.password = "password";
    }
    LoginComponent.prototype.toggleForm = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.email || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }
        this.processing = true;
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.register();
        }
    };
    LoginComponent.prototype.login = function () {
        // this.userService.login(this.user)
        //     .then(() => {
        //         this.processing = false;
        //         this.routerExtensions.navigate(["/home"], { clearHistory: true });
        //     })
        //     .catch(() => {
        //         this.processing = false;
        //         this.alert("Unfortunately we could not find your account.");
        //     });
    };
    LoginComponent.prototype.register = function () {
        if (this.user.password != this.user.confirmPassword) {
            this.alert("Your passwords do not match.");
            return;
        }
        // this.userService.register(this.user)
        //     .then(() => {
        //         this.processing = false;
        //         this.alert("Your account was successfully created.");
        //         this.isLoggingIn = true;
        //     })
        //     .catch(() => {
        //         this.processing = false;
        //         this.alert("Unfortunately we were unable to create your account.");
        //     });
    };
    LoginComponent.prototype.forgotPassword = function () {
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__["prompt"])({
            title: "Forgot Password",
            message: "Enter the email address you used to register for APP NAME to reset your password.",
            inputType: "email",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            if (data.result) {
                // this.userService.resetPassword(data.text.trim())
                //     .then(() => {
                //         this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                //     }).catch(() => {
                //         this.alert("Unfortunately, an error occurred resetting your password.");
                //     });
            }
        });
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    LoginComponent.prototype.focusConfirmPassword = function () {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    };
    LoginComponent.prototype.alert = function (message) {
        return Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__["alert"])({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"] },
        { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("password", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "password", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("confirmPassword", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "confirmPassword", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__("./app/login/login.component.html"),
            styles: [__webpack_require__("./app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"], _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./app/shared/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./app/shared/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-angular/platform");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "nativescript-angular/common":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/common");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/ui/dialogs":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/dialogs");

/***/ }),

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3VzZXIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC91c2VyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7Ozs7Ozs7QUN4QkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUErRjs7QUFFakg7QUFDQSxjQUFjLFFBQVMsMGxCQUEwbEIsb0JBQW9CLEdBQUc7O0FBRXhvQjtBQUNBLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLG1DQUFtQztBQUNsRSxTQUFTO0FBQ1Q7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUNkO0FBRXpELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDckQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxxRUFBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsbUNBQW1DLEVBQUU7Q0FDdEUsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFD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QU8sRUFBRSxzQkFBUyxDQUFFLDBFQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0Msa0NBQXlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHpELDBDOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLHFEOzs7Ozs7O0FDQUEsb0UiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCJ+L2FwcC9ob21lL2hvbWUubW9kdWxlXCI6IFtcblx0XHRcIi4vYXBwL2hvbWUvaG9tZS5tb2R1bGUudHNcIixcblx0XHQwXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHR2YXIgaWRzID0gbWFwW3JlcV07XG5cdGlmKCFpZHMpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlkID0gaWRzWzBdO1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpLCBcIlwiKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gRm9yIGEgZnVsbCBsaXN0IG9mIGNsYXNzIG5hbWVzIGluIHRoZSB0aGVtZVxcbnJlZmVyIHRvIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvdGhlbWUuXFxuKi9cXG5cXG4vKlxcbkZvciBleGFtcGxlLCB0aGUgZm9sbG93aW5nIENTUyBydWxlIGNoYW5nZXMgdGhlIGZvbnQgc2l6ZSBvZiBhbGwgVUlcXG5jb21wb25lbnRzIHRoYXQgaGF2ZSB0aGUgYnRuIGNsYXNzIG5hbWUuXFxuKi9cXG4uYnRuIHtcXG4gICAgZm9udC1zaXplOiAxODtcXG59XFxuXCIsIFwiXCJdKTtcblxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2xvZ2luXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIucGFnZSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmZvcm0ge1xcbiAgbWFyZ2luLWxlZnQ6IDMwO1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gIGZsZXgtZ3JvdzogMjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1hcmdpbi1ib3R0b206IDEyO1xcbiAgaGVpZ2h0OiA5MDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNzA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI0Q1MUExQTtcXG59XFxuXFxuLmlucHV0LWZpZWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDI1O1xcbn1cXG4uaW5wdXQge1xcbiAgZm9udC1zaXplOiAxODtcXG4gIHBsYWNlaG9sZGVyLWNvbG9yOiAjQThBOEE4O1xcbn1cXG4uaW5wdXQ6ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBtYXJnaW46IDMwIDUgMTUgNTtcXG59XFxuXFxuLmxvZ2luLWxhYmVsIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjQThBOEE4O1xcbiAgZm9udC1zaXplOiAxNjtcXG59XFxuLnNpZ24tdXAtbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7XFxufVxcbi5ib2xkIHtcXG4gIGNvbG9yOiAjMDAwMDAwOyBcXG59XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgPEltYWdlIGNsYXNzPVxcXCJsb2dvXFxcIiBzcmM9XFxcIn4vaW1hZ2VzL2xvZ28ucG5nXFxcIj48L0ltYWdlPlxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoZWFkZXJcXFwiIHRleHQ9XFxcIkFQUCBOQU1FXFxcIj48L0xhYmVsPlxcblxcbiAgICAgICAgPFByZXZpb3VzTmV4dFZpZXc+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0b1xcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVxcXCJpbnB1dFxcXCIgaGludD1cXFwiRW1haWxcXFwiIFtpc0VuYWJsZWRdPVxcXCIhcHJvY2Vzc2luZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XFxcImVtYWlsXFxcIiBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCIgKHJldHVyblByZXNzKT1cXFwiZm9jdXNQYXNzd29yZCgpXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkICNwYXNzd29yZCBjbGFzcz1cXFwiaW5wdXRcXFwiIFtpc0VuYWJsZWRdPVxcXCIhcHJvY2Vzc2luZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoaW50PVxcXCJQYXNzd29yZFxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5wYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBbcmV0dXJuS2V5VHlwZV09XFxcImlzTG9nZ2luZ0luID8gJ2RvbmUnIDogJ25leHQnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXR1cm5QcmVzcyk9XFxcImZvY3VzQ29uZmlybVBhc3N3b3JkKClcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMlxcXCIgKm5nSWY9XFxcIiFpc0xvZ2dpbmdJblxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgI2NvbmZpcm1QYXNzd29yZCBjbGFzcz1cXFwiaW5wdXRcXFwiIFtpc0VuYWJsZWRdPVxcXCIhcHJvY2Vzc2luZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBoaW50PVxcXCJDb25maXJtIHBhc3N3b3JkXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmNvbmZpcm1QYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVxcXCJkb25lXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciByb3dTcGFuPVxcXCIzXFxcIiBbYnVzeV09XFxcInByb2Nlc3NpbmdcXFwiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPC9QcmV2aW91c05leHRWaWV3PlxcblxcbiAgICAgICAgPEJ1dHRvbiBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gJ0xvZyBJbicgOiAnU2lnbiBVcCdcXFwiIFtpc0VuYWJsZWRdPVxcXCIhcHJvY2Vzc2luZ1xcXCJcXG4gICAgICAgICAgICAodGFwKT1cXFwic3VibWl0KClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgbS10LTIwXFxcIj48L0J1dHRvbj5cXG4gICAgICAgIDxMYWJlbCAqbmdJZj1cXFwiaXNMb2dnaW5nSW5cXFwiIHRleHQ9XFxcIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1xcXCIgY2xhc3M9XFxcImxvZ2luLWxhYmVsXFxcIlxcbiAgICAgICAgICAgICh0YXApPVxcXCJmb3Jnb3RQYXNzd29yZCgpXFxcIj48L0xhYmVsPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImxvZ2luLWxhYmVsIHNpZ24tdXAtbGFiZWxcXFwiICh0YXApPVxcXCJ0b2dnbGVGb3JtKClcXFwiPlxcbiAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICA8U3BhbiBbdGV4dF09XFxcImlzTG9nZ2luZ0luID8gJ0RvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyAnIDogJ0JhY2sgdG8gTG9naW4nXFxcIj48L1NwYW4+XFxuICAgICAgICAgICAgPFNwYW4gW3RleHRdPVxcXCJpc0xvZ2dpbmdJbiA/ICdTaWduIHVwJyA6ICcnXFxcIiBjbGFzcz1cXFwiYm9sZFxcXCI+PC9TcGFuPlxcbiAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxuICAgIDwvTGFiZWw+XFxuPC9GbGV4Ym94TGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1sb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gICAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICAgIHVzZXI6IFVzZXI7XG4gICAgcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiLCB7c3RhdGljOiBmYWxzZX0pIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJjb25maXJtUGFzc3dvcmRcIiwge3N0YXRpYzogZmFsc2V9KSBjb25maXJtUGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwidXNlckBuYXRpdmVzY3JpcHQub3JnXCI7XG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwicGFzc3dvcmRcIjtcbiAgICB9XG5cbiAgICB0b2dnbGVGb3JtKCkge1xuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCB8fCAhdGhpcy51c2VyLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIC8vIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxuICAgICAgICAvLyAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXIucGFzc3dvcmQgIT0gdGhpcy51c2VyLmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydChcIllvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gICAgICAgIC8vICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5hbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSB0cnVlO1xuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5hbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIik7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3Jnb3RQYXNzd29yZCgpIHtcbiAgICAgICAgcHJvbXB0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgQVBQIE5BTUUgdG8gcmVzZXQgeW91ciBwYXNzd29yZC5cIixcbiAgICAgICAgICAgIGlucHV0VHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy51c2VyU2VydmljZS5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXG4gICAgICAgICAgICAgICAgLy8gICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuYWxlcnQoXCJZb3VyIHBhc3N3b3JkIHdhcyBzdWNjZXNzZnVsbHkgcmVzZXQuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciBpbnN0cnVjdGlvbnMgb24gY2hvb3NpbmcgYSBuZXcgcGFzc3dvcmQuXCIpO1xuICAgICAgICAgICAgICAgIC8vICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmFsZXJ0KFwiVW5mb3J0dW5hdGVseSwgYW4gZXJyb3Igb2NjdXJyZWQgcmVzZXR0aW5nIHlvdXIgcGFzc3dvcmQuXCIpO1xuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9jdXNQYXNzd29yZCgpIHtcbiAgICAgICAgdGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICAgIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiQVBQIE5BTUVcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiIsImV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG59IiwiLy8gVGhlIGZvbGxvd2luZyBpcyBhIHNhbXBsZSBpbXBsZW1lbnRhdGlvbiBvZiBhIGJhY2tlbmQgc2VydmljZSB1c2luZyBQcm9ncmVzcyBLaW52ZXkgKGh0dHBzOi8vd3d3LnByb2dyZXNzLmNvbS9raW52ZXkpLlxuLy8gRmVlbCBmcmVlIHRvIHN3YXAgaW4geW91ciBvd24gc2VydmljZSAvIEFQSXMgLyBldGMgaGVyZSBmb3IgeW91ciBvd24gYXBwcy5cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vLyBpbXBvcnQgKiBhcyBLaW52ZXkgZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG4vLyBUT0RPOiBzaG91bGQgYmUgaW1wb3J0ZWQgZnJvbSBraW52ZXktbmF0aXZlc2NyaXB0LXNkay9hbmd1bGFyIGJ1dCBkZWNsYXJhdGlvbiBmaWxlIGlzIGN1cnJlbnRseSBtaXNzaW5nXG4vLyBpbXBvcnQgeyBVc2VyU2VydmljZSBhcyBLaW52ZXlVc2VyU2VydmljZSB9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNkay9saWIvYW5ndWxhclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIGtpbnZleVVzZXJTZXJ2aWNlOiBLaW52ZXlVc2VyU2VydmljZSkgeyB9XG5cbiAgICAvLyByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmtpbnZleVVzZXJTZXJ2aWNlLnNpZ251cCh7IHVzZXJuYW1lOiB1c2VyLmVtYWlsLCBwYXNzd29yZDogdXNlci5wYXNzd29yZCB9KVxuICAgIC8vICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICAvLyB9XG5cbiAgICAvLyBsb2dpbih1c2VyOiBVc2VyKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmtpbnZleVVzZXJTZXJ2aWNlLmxvZ2luKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQpXG4gICAgLy8gICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICAgIC8vIH1cblxuICAgIC8vIGxvZ291dCgpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMua2ludmV5VXNlclNlcnZpY2UubG9nb3V0KClcbiAgICAvLyAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgLy8gfVxuXG4gICAgLy8gcmVzZXRQYXNzd29yZChlbWFpbCkge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5raW52ZXlVc2VyU2VydmljZS5yZXNldFBhc3N3b3JkKGVtYWlsKVxuICAgIC8vICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICAvLyB9XG5cbiAgICAvLyBoYW5kbGVFcnJvcnMoZXJyb3I6IEtpbnZleS5FcnJvcnMuQmFzZUVycm9yKSB7XG4gICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgLy8gICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlKTtcbiAgICAvLyB9XG59XG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=