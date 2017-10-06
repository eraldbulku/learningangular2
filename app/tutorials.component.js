"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.title = "Tutorials";
        this.showElement = true;
        this.color = 'blue';
        this.colors = ['red', 'blue', 'green'];
    }
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            template: "<h2>{{title}}</h2>\n\t\t\t\t<p *ngIf=\"showElement\">Show Element</p>\n\t\t\t\t<div [ngSwitch]='color'>\n\t\t\t\t\t<p *ngSwitchWhen=\"'red'\">Red color is shown</p>\n\t\t\t\t\t<p *ngSwitchWhen=\"'blue'\">Blue color is shown</p>\n\t\t\t\t\t<p *ngSwitchDefault>Invalid Color</p>\n\t\t\t\t</div>\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor=\"let color of colors\">{{color}}</li>\n\t\t\t\t</ul>"
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map