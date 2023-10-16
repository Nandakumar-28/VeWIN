import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { NbAuthJWTToken, NbAuthService, NB_AUTH_OPTIONS } from "@nebular/auth";
import { NbToastrService } from "@nebular/theme";

import { CompanyService } from "../services/company.service";
import { ROUTE_PATH } from "../../../shared/constants/route-path.constant";

@Component({
  selector: "ngx-company-add-edit",
  templateUrl: "./company-add-edit.component.html",
  styleUrls: ["./company-add-edit.component.scss"],
})
export class CompanyAddEditComponent implements OnInit {
  AddCompanyForm: FormGroup;
  submitted = false;
  page_title: string;
  data_loading = false;

  //logo variable
  logoUploadFile: File | null = null; // Property to store the selected logo file
  logo: string | ArrayBuffer | null = null; // Property to store the URL of the uploaded logo for preview
  
  //show password
  showPassword =true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    private companyService: CompanyService,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.AddCompanyFormInitialize();

    if (this.router.url.indexOf("edit") !== -1) {
      this.data_loading = true;
      const id = this.aRoute.snapshot.paramMap.get("id");
      this.page_title = "Edit Company";
      this.companyRetrive(id);
    } else {
      this.page_title = "Create Company";
    }
  }

  /**
   * Company Form Initialize
   */

  AddCompanyFormInitialize() {
  const emailRegex = "[a-z0-9]+@[a-z]+.[a-z]{2,3}";
  this.AddCompanyForm = this.formBuilder.group({
    company_organization: ["", [Validators.required]],
    display_name: ["", [Validators.required]],
    contact_person: ["", [Validators.required]],
    decsignation: ["", [Validators.required]],
    contact_number: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.pattern(emailRegex)]],
    address: ["", [Validators.required]],
    district: ["", [Validators.required]],
    state: ["", [Validators.required]],
    logo: [null], // Add a control for the logo file
    user_name: ["", [Validators.required]],
    password: ["", [Validators.required]],
    confirm_password: ["", [Validators.required]],
    remarks: ["", [Validators.required]],
  });
}

  //Show Password
   getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  /**
   * Handle logo file change event
   */
   onFileChange(event: Event, fieldName: string) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.AddCompanyForm.get(fieldName)?.setValue(file); // Set the selected file in the form
      this.logoUploadFile = file;

      // Read and display the logo for preview
      const reader = new FileReader();
      reader.onload = (e) => {
        this.logo = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  /**
   * Company Retrive
   * @params companyId
   */
   companyRetrive(companyId) {
    let deleteData = { companyId: companyId };

    this.companyService.companyRetrive(deleteData).subscribe((resp) => {
      this.AddCompanyForm.patchValue({
        username: resp["username"],
        company_organization: resp["company_organization"],
        number_of_links: resp["number_of_links"],
        email: resp["email"],
      });
      this.data_loading = false;
    });
  }

  /**
   * Company Form Submit
   */
  onSubmit() {
    this.submitted = true;

    if (this.AddCompanyForm.invalid) {
      return;
    } // stop here if form is invalid

    if (this.router.url.indexOf("edit") !== -1) {
      this.AddCompanyForm.value.companyId =
        this.aRoute.snapshot.paramMap.get("id");
      this.AddCompanyForm.value.flag = 1;
    } else {
      this.AddCompanyForm.value.flag = 0;
    }

    // Prepare your form data, including the logo file
    const formData = new FormData();
    for (const key in this.AddCompanyForm.value) {
      if (key === "logo" && this.AddCompanyForm.value[key] instanceof File) {
        formData.append(key, this.AddCompanyForm.value[key], this.AddCompanyForm.value[key].name);
      } else {
        formData.append(key, this.AddCompanyForm.value[key]);
      }
    }

    this.companyService
      .AddCompanyDetials(this.AddCompanyForm.value)
      .subscribe((res) => {
        this.backToCompanyList();
        // if (res["status"] != 200) {
        //   this.toastrService.show(res["message"], "Warning", {
        //     status: "warning",
        //     duration: 8000,
        //   });
        // } else {
        //   this.toastrService.show(res["message"], "Success", {
        //     status: "success",
        //     duration: 8000,
        //   });
        // }
      });
  }

  /**
   * Back to Company Lsit
   * @param
   * @returns
   */
  backToCompanyList() {
    this.router.navigate([ROUTE_PATH.PAGES, ROUTE_PATH.COMPANY]);
  }
}
