import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchTenantComponent } from './fetchTenant/fetchTenant.component';
import { CreateTenant } from './addTenant/AddTenant.component';
import { CommonModule } from '@angular/common';
import { TenantService } from './Services/tenantService.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchTenantComponent,
    CreateTenant
  ],
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,  //.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'fetchTenant', component: FetchTenantComponent },
      { path: 'register-tenant', component: CreateTenant },
      { path: 'tenant/edit/:id', component: CreateTenant },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [TenantService],
})
export class AppModuleShared {
 
}

