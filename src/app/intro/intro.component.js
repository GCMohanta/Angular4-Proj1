"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var IntroComponent = (function () {
    function IntroComponent() {
        this.name = 'Angular Intro';
        this.num = 23;
        this.gender = true;
        this.obj = { key: 'value', key1: 'varlue2' };
        this.fruits = ['banana', 'kiwi', 'litchi'];
        this.one = 12;
        this.two = 56;
    }
    return IntroComponent;
}());
IntroComponent = __decorate([
    core_1.Component({
        selector: 'my-intro',
        //template: `<h1>Hello {{name}}</h1>`,
        templateUrl: './intro.component.html',
    })
], IntroComponent);
exports.IntroComponent = IntroComponent;
//# sourceMappingURL=intro.component.js.map