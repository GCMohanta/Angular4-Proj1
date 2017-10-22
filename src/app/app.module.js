"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var trail_component_1 = require("./trail.component");
var intro_component_1 = require("./intro/intro.component");
var directives_component_1 = require("./directives/directives.component");
var forms_component_1 = require("./forms/forms.component");
var appConfirm_directive_1 = require("./custom/appConfirm.directive");
var appRoutess = [
    { path: 'trail', component: trail_component_1.TrailComponent },
    { path: 'intro', component: intro_component_1.IntroComponent },
    { path: 'directives', component: directives_component_1.DirectivesComponent },
    { path: 'forms', component: forms_component_1.FormsComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutess), forms_1.FormsModule],
        declarations: [
            app_component_1.AppComponent,
            trail_component_1.TrailComponent,
            intro_component_1.IntroComponent,
            directives_component_1.DirectivesComponent,
            forms_component_1.FormsComponent,
            appConfirm_directive_1.appConfirm
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map