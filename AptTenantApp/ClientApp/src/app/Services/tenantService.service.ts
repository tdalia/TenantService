import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
//import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


@Injectable() 
export class TenantService {
  myAppUrl: string = "";

  constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getTenants() {
    return this.http.get(this.myAppUrl + 'api/Tenant/Index')
      .map((response: Response) => response.json())
      .catch(error => this.errorHandler(error));
//      .pipe(catchError(this.errorHandler));
      
  }

  getTenantById(id: number) {
    return this.http.get(this.myAppUrl + "api/Tenant/Details/" + id)
      .map((response: Response) => response.json())
      .catch(error => this.errorHandler(error));
//     .pipe(catchError(this.errorHandler));
  }

  // Create / Add
  saveTenant(tenant) {
    return this.http.post(this.myAppUrl + 'api/Tenant/Create', tenant)
      .map((response: Response) => response.json())
      .catch(error => this.errorHandler(error));
      //.pipe(catchError(this.errorHandler));
  }

  // Update
  updateTenant(tenant) {
    return this.http.put(this.myAppUrl + 'api/Tenant/Edit', tenant)
      .map((response: Response) => response.json())
      .catch(error => this.errorHandler(error));
//      .pipe(catchError(this.errorHandler));
  }

  // Delete
  deleteTenant(id) {
    return this.http.delete(this.myAppUrl + "api/Tenant/Delete/" + id)
      .map((response: Response) => response.json())
      .catch(error => this.errorHandler(error));
//     .pipe(catchError(this.errorHandler));
  }

   errorHandler(error: Response) {
     console.log(error);
     return Observable.throw(error);
   }

}
