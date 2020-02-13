"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
//import { catchError } from 'rxjs/operators';
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/catch");
var TenantService = /** @class */ (function () {
    function TenantService(http, baseUrl) {
        this.http = http;
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    TenantService.prototype.getTenants = function () {
        var _this = this;
        return this.http.get(this.myAppUrl + 'api/Tenant/Index')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.errorHandler(error); });
        //      .pipe(catchError(this.errorHandler));
    };
    TenantService.prototype.getTenantById = function (id) {
        var _this = this;
        return this.http.get(this.myAppUrl + "api/Tenant/Details/" + id)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.errorHandler(error); });
        //     .pipe(catchError(this.errorHandler));
    };
    // Create / Add
    TenantService.prototype.saveTenant = function (tenant) {
        var _this = this;
        return this.http.post(this.myAppUrl + 'api/Tenant/Create', tenant)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.errorHandler(error); });
        //.pipe(catchError(this.errorHandler));
    };
    // Update
    TenantService.prototype.updateTenant = function (tenant) {
        var _this = this;
        return this.http.put(this.myAppUrl + 'api/Tenant/Edit', tenant)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.errorHandler(error); });
        //      .pipe(catchError(this.errorHandler));
    };
    // Delete
    TenantService.prototype.deleteTenant = function (id) {
        var _this = this;
        return this.http.delete(this.myAppUrl + "api/Tenant/Delete/" + id)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.errorHandler(error); });
        //     .pipe(catchError(this.errorHandler));
    };
    TenantService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    TenantService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('BASE_URL'))
    ], TenantService);
    return TenantService;
}());
exports.TenantService = TenantService;
//# sourceMappingURL=tenantService.service.js.map