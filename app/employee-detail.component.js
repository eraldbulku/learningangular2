"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeDetailComponent = /** @class */ (function () {
    function EmployeeDetailComponent() {
    }
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            selector: 'employee-detail',
            template: "<h2>Employee Details</h2>\n  \t\t\t<ul *ngFor=\"let employee of employees\">\n  \t\t\t\t<li>{{employee.id}}. {{employee.name}} - {{employee.gender}}</li>\n  \t\t\t</ul>"
        })
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map