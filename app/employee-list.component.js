"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent() {
        this.employees = [
            { "id": 1, "name": "Andrew", "gender": "Male" },
            { "id": 2, "name": "Kobi", "gender": "Male" },
            { "id": 3, "name": "Christina", "gender": "Female" },
            { "id": 4, "name": "Elena", "gender": "Female" }
        ];
    }
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'employee-list',
            template: "<h2>Employee List</h2>\n  \t\t\t<ul *ngFor=\"let employee of employees\">\n  \t\t\t\t<li>{{employee.name}}</li>\n  \t\t\t</ul>"
        })
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map