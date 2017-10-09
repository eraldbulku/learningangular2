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
        this.name = 'TheKobi';
        this.date = new Date();
    }
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            template: "<h2>{{name}}</h2>\n\t\t\t\t<h2>{{name | uppercase}}</h2>\n\t\t\t\t<h2>{{name | lowercase}}</h2>\n\t\t\t\t<h2>{{name | slice:'2':'4'}}</h2>\n\t\t\t\t<h2>{{name | replace:'The':'Hello'}}</h2>\n\n\t\t\t\t<h2>{{8.567}}</h2>\n\t\t\t\t<h2>{{8.567 | number:'1.2-3'}}</h2>\n\t\t\t\t<h2>{{8.567 | number:'2.2-3'}}</h2>\n\t\t\t\t<h2>{{8.567 | number:'2.4-4'}}</h2>\n\t\t\t\t<h2>{{8.567 | number:'2.2-2'}}</h2>\n\t\t\t\t<h2>{{8.99 | currency:'EUR':true}}</h2>\n\n\t\t\t\t<h2>{{date}}</h2>\n\t\t\t\t<h2>{{date | date:'fullDate'}}</h2>\n\t\t\t\t<h2>{{date | date:'shortDate'}}</h2>\n\t\t\t\t<h2>{{date | date:'mediumTime'}}</h2>\n\t\t\t\t<h2>{{date | date:'shortTime'}}</h2>\n\t\t\t\t",
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorials.component.js.map