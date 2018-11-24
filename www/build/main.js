webpackJsonp([4],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/formulario/formulario.module": [
		269,
		3
	],
	"../pages/login/login.module": [
		270,
		2
	],
	"../pages/mapa/mapa.module": [
		271,
		1
	],
	"../pages/signup/signup.module": [
		272,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/cfdj/Documentos/Proyecto/MyApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row class="Header">\n      <ion-col col-auto class="centerdiv">\n        <button ion-button clear color="light" menuToggle >\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col class="centerdiv">\n        <div text-right>\n          <h1 no-margin>SICLAS</h1>\n          <p no-margin>Servicio de Informacion y consulta local a ciclistas</p>\n        </div>\n        </ion-col>\n      <ion-col col-auto class="centerdiv">\n          <img src="../../assets/imgs/Logo_0.25x.png">\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n          <ion-slides>\n              <ion-slide>\n                <img src="../../assets/imgs/bike_1.jpeg">\n              </ion-slide>\n              <ion-slide>\n                <img src="../../assets/imgs/bike_2.jpeg">\n              </ion-slide>\n              <ion-slide>\n                <img src="../../assets/imgs/bike_3.jpeg">\n              </ion-slide>\n              <ion-slide>\n                <img src="../../assets/imgs/bike_4.jpeg">\n              </ion-slide>\n              <ion-slide>\n                <img src="../../assets/imgs/bike_5.jpeg">\n              </ion-slide>\n              <ion-slide>\n                <img src="../../assets/imgs/bike_6.jpeg">\n              </ion-slide>\n              <ion-slide>\n                <img src="../../assets/imgs/bike_7.jpeg">\n              </ion-slide>\n            </ion-slides>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 text-center>\n        <div class="description">\n            <img class="imgdesp" src="../../assets/imgs/description_1.png" alt="Info">\n            <div class="overlay">\n              <div>\n                  <h6>PLANEA TU VIAJE</h6>\n                  <p>Planea tu recorrido usando rutas rápidas y seguras, conoce las diferentes zonas de riesgo en tu localidad, informa de cualquier evento o falla en la infraestructura pública que pueda afectar tu seguridad y la de los demás.</p>\n              </div>\n            </div>\n        </div>\n        <div class="description">\n            <img class="imgdesp" src="../../assets/imgs/description_2.png" alt="Info" >\n            <div class="overlay">\n              <div>\n                  <h6>SEGURIDAD</h6>\n                  <p>En la actualidad la seguridad es un tema importante en nuestro diario vivir, por lo tanto se hace uso de tecnologías para aportar en la solución a la problemática de inseguridad que enfrentan algunos de los ciudadanos que usan la bicicleta como medio de transporte.</p>\n              </div>\n            </div>\n        </div>\n        <div class="description">\n            <img class="imgdesp" src="../../assets/imgs/description_3.png" alt="Info">\n            <div class="overlay">\n              <div>\n                  <h6>INFORMACIÓN Y ALERTAS</h6>\n                  <p>Recibe información en tiempo real acerca de eventos que sucedan dentro de tu localidad, además de enviar y responder a solicitudes expresadas por otros usuarios.</p>\n              </div>\n            </div>\n        </div >\n      </ion-col>\n    </ion-row>\n    <!--\n    <ion-row>\n      <ion-col col-12 col-sm-4 text-center style="background-color: blue">\n        <div class="description">\n          <img class="imgdesp" src="../../assets/imgs/description_1.png" alt="Info">\n          <div class="overlay vertical-align-text">\n            <h6>PLANEA TU VIAJE</h6>\n            <p>Planea tu recorrido usando rutas rápidas y seguras, conoce las diferentes zonas de riesgo en tu localidad, informa de cualquier evento o falla en la infraestructura pública que pueda afectar tu seguridad y la de los demás.</p>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-4 text-center style="background-color: rgb(9, 255, 0)">\n        <div class="description">\n          <img class="imgdesp" src="../../assets/imgs/description_2.png" alt="Info" >\n          <div class="overlay vertical-align-text">\n            <h6>SEGURIDAD</h6>\n            <p>En la actualidad la seguridad es un tema importante en nuestro diario vivir, por lo tanto se hace uso de tecnologías para aportar en la solución a la problemática de inseguridad que enfrentan algunos de los ciudadanos que usan la bicicleta como medio de transporte.</p>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-4 text-center style="background-color: rgb(255, 187, 0)">\n        <div class="description">\n          <img class="imgdesp" src="../../assets/imgs/description_3.png" alt="Info">\n          <div class="overlay vertical-align-text">\n            <h6>INFORMACIÓN Y ALERTAS</h6>\n            <p>Recibe información en tiempo real acerca de eventos que sucedan dentro de tu localidad, además de enviar y responder a solicitudes expresadas por otros usuarios.</p>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    -->\n  </ion-grid>\n</ion-content>\n                                                          '/*ion-inline-end:"/home/cfdj/Documentos/Proyecto/MyApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_formulario_formulario__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_formulario_formulario__["a" /* FormularioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/formulario/formulario.module#FormularioPageModule', name: 'FormularioPage', segment: 'formulario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapa/mapa.module#MapaPageModule', name: 'MapaPage', segment: 'mapa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_formulario_formulario__["a" /* FormularioPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_formulario_formulario__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Formulario', component: __WEBPACK_IMPORTED_MODULE_5__pages_formulario_formulario__["a" /* FormularioPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/cfdj/Documentos/Proyecto/MyApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/cfdj/Documentos/Proyecto/MyApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormularioPage = /** @class */ (function () {
    function FormularioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FormularioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormularioPage');
    };
    FormularioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formulario',template:/*ion-inline-start:"/home/cfdj/Documentos/Proyecto/MyApp/src/pages/formulario/formulario.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row class="Header">\n      <ion-col col-auto class="centerdiv">\n        <button ion-button clear color="light" menuToggle >\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col class="centerdiv">\n        <div text-right>\n          <h1 no-margin>SICLAS</h1>\n          <p no-margin>Formulario</p>\n        </div>\n        </ion-col>\n      <ion-col col-auto class="centerdiv">\n          <img src="../../assets/imgs/Logo_0.25x.png">\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="div_fieldset color1">\n    <fieldset>\n      <legend>Datos del perfil</legend>\n      <ion-item class="color1">\n        <ion-label color="light" stacked>Nombre:</ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item class="color1">\n        <ion-label color="light" stacked>Apellido:</ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item class="color1">\n        <ion-label color="light" stacked>Email:</ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item class="color1">\n        <ion-label color="light" stacked>Celular:</ion-label>\n        <ion-input type="tel" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item class="color1">\n        <ion-label color="light" stacked>Localidad</ion-label>\n        <ion-select [(ngModel)]="localidad" placeholder="Seleccionar localidad">\n            <ion-option value="0">Antonio Nariño</ion-option>\n            <ion-option value="1">Barrios Unidos</ion-option>\n            <ion-option value="2">Bosa</ion-option>\n            <ion-option value="3">Chapinero</ion-option>\n            <ion-option value="4">Ciudad Bolívar</ion-option>\n            <ion-option value="5">Engativá</ion-option>\n            <ion-option value="6">Fontibón</ion-option>\n            <ion-option value="7">Kennedy</ion-option>\n            <ion-option value="8">La Calendaria</ion-option>\n            <ion-option value="9">Los Mártires</ion-option>\n            <ion-option value="10">Puente Aranda</ion-option>\n            <ion-option value="11">Rafael Uribe Uribe</ion-option>\n            <ion-option value="12">San Cristóbal</ion-option>\n            <ion-option value="13">Santa Fe</ion-option>\n            <ion-option value="14">Suba</ion-option>\n            <ion-option value="15">Sumapaz</ion-option>\n            <ion-option value="16">Teusaquillo</ion-option>\n            <ion-option value="17">Tunjuelito</ion-option>\n            <ion-option value="18">Usaquén</ion-option>\n            <ion-option value="19">Usme</ion-option>\n          </ion-select>\n      </ion-item>\n    </fieldset>\n  </div>\n  <div class="div_fieldset color2">\n    <fieldset>\n      <legend>Datos de bicicleta</legend>\n      <ion-item class="color2">\n        <ion-label color="light" stacked>Referencia:</ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item class="color2">\n        <ion-label color="light" stacked>Marca:</ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item class="color2">\n        <ion-label color="light" stacked>Color:</ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item class="color2">\n        <ion-label color="light" stacked>Seleccionar foto:</ion-label>\n        <ion-input class = "labeltext" type="file" placeholder=""></ion-input>\n      </ion-item>\n    </fieldset>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/cfdj/Documentos/Proyecto/MyApp/src/pages/formulario/formulario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FormularioPage);
    return FormularioPage;
}());

//# sourceMappingURL=formulario.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map