"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CreateTenant = /** @class */ (function () {
    function CreateTenant(_fb, _avRoute, _tenantService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._tenantService = _tenantService;
        this._router = _router;
        this.title = "Create";
        if (this._avRoute.snapshot.params["id"]) {
            this.id = this._avRoute.snapshot.params["id"];
        }
        this.tenantForm = this._fb.group({
            id: 0,
            name: ['', [forms_1.Validators.required]],
            gender: ['', [forms_1.Validators.required]],
            buildingNo: ['', [forms_1.Validators.required]],
            aptNo: ['', [forms_1.Validators.required]],
            dateJoin: ['', [forms_1.Validators.required]],
            lastDate: ['']
        });
    }
    CreateTenant.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this.title = "Edit";
            this._tenantService.getTenantById(this.id)
                .subscribe(function (resp) { return _this.tenantForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    CreateTenant.prototype.save = function () {
        var _this = this;
        if (!this.tenantForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._tenantService.saveTenant(this.tenantForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/fetchTenant']);
            }, function (error) { return _this.errorMessage = error; });
        }
        else if (this.title == "Edit") {
            this._tenantService.updateTenant(this.tenantForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/fetchTenant']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    CreateTenant.prototype.cancel = function () {
        this._router.navigate(['/fetchTenant']);
    };
    Object.defineProperty(CreateTenant.prototype, "name", {
        get: function () {
            return this.tenantForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTenant.prototype, "gender", {
        get: function () {
            return this.tenantForm.get('gender');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTenant.prototype, "buildingNo", {
        get: function () {
            return this.tenantForm.get('buildingNo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTenant.prototype, "aptNo", {
        get: function () {
            return this.tenantForm.get('aptNo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTenant.prototype, "dateJoin", {
        get: function () {
            return this.tenantForm.get('dateJoin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTenant.prototype, "lastDate", {
        get: function () {
            return this.tenantForm.get('lastDate');
        },
        enumerable: true,
        configurable: true
    });
    CreateTenant = __decorate([
        core_1.Component({
            selector: 'createTenant',
            templateUrl: './AddTenant.component.html'
        })
    ], CreateTenant);
    return CreateTenant;
}());
exports.CreateTenant = CreateTenant;
//# sourceMappingURL=AddTenant.component.js.map