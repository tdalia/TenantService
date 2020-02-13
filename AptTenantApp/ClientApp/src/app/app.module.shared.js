"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var nav_menu_component_1 = require("./nav-menu/nav-menu.component");
var home_component_1 = require("./home/home.component");
var fetchTenant_component_1 = require("./fetchTenant/fetchTenant.component");
var AddTenant_component_1 = require("./addTenant/AddTenant.component");
var common_1 = require("@angular/common");
var tenantService_service_1 = require("./Services/tenantService.service");
var AppModuleShared = /** @class */ (function () {
    function AppModuleShared() {
    }
    AppModuleShared = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_menu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                fetchTenant_component_1.FetchTenantComponent,
                AddTenant_component_1.CreateTenant
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'fetchTenant', component: fetchTenant_component_1.FetchTenantComponent },
                    { path: 'register-tenant', component: AddTenant_component_1.CreateTenant },
                    { path: 'tenant/edit/:id', component: AddTenant_component_1.CreateTenant },
                    { path: '**', redirectTo: 'home' }
                ])
            ],
            providers: [tenantService_service_1.TenantService],
        })
    ], AppModuleShared);
    return AppModuleShared;
}());
exports.AppModuleShared = AppModuleShared;
//# sourceMappingURL=app.module.shared.js.map