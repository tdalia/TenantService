"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FetchTenantComponent = /** @class */ (function () {
    function FetchTenantComponent(http, router, tenantService) {
        this.http = http;
        this.router = router;
        this.tenantService = tenantService;
        console.log("///  ************  Into Constructor of FetchTenantComponent");
        this.getTenants();
        console.log("///  ************  Retrieved tenants length = " + this.tenantList.length);
    }
    FetchTenantComponent.prototype.getTenants = function () {
        var _this = this;
        console.log("///  ************  Retrieving getTenants");
        this.tenantService.getTenants().subscribe(function (data) { return _this.tenantList = data; });
    };
    FetchTenantComponent.prototype.delete = function (tenId) {
        var _this = this;
        var ans = confirm("Do you want to delete Tenant with Id: " + tenId);
        if (ans) {
            this.tenantService.deleteTenant(tenId)
                .subscribe(function (data) {
                _this.getTenants();
            }, function (error) { return console.error(error); });
        }
    };
    FetchTenantComponent = __decorate([
        core_1.Component({
            selector: 'fetchTenant',
            templateUrl: './fetchTenant.component.html'
        })
    ], FetchTenantComponent);
    return FetchTenantComponent;
}());
exports.FetchTenantComponent = FetchTenantComponent;
//# sourceMappingURL=fetchTenant.component.js.map