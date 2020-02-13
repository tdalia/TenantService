import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TenantService } from "../Services/tenantService.service";
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { retry } from "rxjs/operators";


@Component({
  selector: 'createTenant',
  templateUrl: './AddTenant.component.html'
})

export class CreateTenant implements OnInit {
  tenantForm: FormGroup;
  title: string = "Create";
  id: number;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _tenantService: TenantService, private _router: Router) {

    if (this._avRoute.snapshot.params["id"]) {
      this.id = this._avRoute.snapshot.params["id"];
    }

    this.tenantForm = this._fb.group({
      id: 0,
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      buildingNo: ['', [Validators.required]],
      aptNo: ['', [Validators.required]],
      dateJoin: ['', [Validators.required]],
      lastDate: ['']
    });
  }

    ngOnInit() {
      if (this.id > 0) {
        this.title = "Edit";
        this._tenantService.getTenantById(this.id)
          .subscribe(resp => this.tenantForm.setValue(resp),
            error => this.errorMessage = error);
      }
    }

  save() {
    if (!this.tenantForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._tenantService.saveTenant(this.tenantForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetchTenant']);
        }, error => this.errorMessage = error);
    }
    else if (this.title == "Edit") {
      this._tenantService.updateTenant(this.tenantForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetchTenant']);
        }, error => this.errorMessage = error);
    }

  }

  cancel() {
    this._router.navigate(['/fetchTenant']);
  }

  get name() {
    return this.tenantForm.get('name');
  }

  get gender() {
    return this.tenantForm.get('gender');
  }
  get buildingNo() {
    return this.tenantForm.get('buildingNo');
  }
  get aptNo() {
    return this.tenantForm.get('aptNo');
  }
  get dateJoin() {
    return this.tenantForm.get('dateJoin');
  }
  get lastDate() {
    return this.tenantForm.get('lastDate');
  }


}
