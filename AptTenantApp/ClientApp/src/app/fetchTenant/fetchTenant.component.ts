import { Component } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";
import { TenantService } from "../Services/tenantService.service";

@Component({
  selector: 'fetchTenant',
  templateUrl: './fetchTenant.component.html'
})

export class FetchTenantComponent {
 
  public tenantList: TenantData[];

  constructor(public http: Http, private router: Router, private tenantService: TenantService) {
    console.log("///  ************  Into Constructor of FetchTenantComponent");
    this.getTenants();
    console.log("///  ************  Retrieved tenants length = " + this.tenantList.length);
  }

  getTenants() {
    console.log("///  ************  Retrieving getTenants");
    this.tenantService.getTenants().subscribe(data => this.tenantList = data);
  }

  delete(tenId) {
    var ans = confirm("Do you want to delete Tenant with Id: " + tenId);
    if (ans) {
      this.tenantService.deleteTenant(tenId)
        .subscribe((data) => {
          this.getTenants();
        }, error => console.error(error));
    }
  }

}

interface TenantData {
  id: number;
  name: string;
  gender: string;
  buildingNo: string;
  aptNo: string;
  dateJoin: Date;
  lastDate: Date;
}
