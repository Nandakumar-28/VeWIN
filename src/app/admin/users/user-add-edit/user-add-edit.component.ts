/** 
* This file contains user add-edit related functions
* dev: T.Nanda Kumar
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ROUTE_PATH } from '../../../shared/constants/route-path.constant';
import { UsersService } from '../services/users.service';
import { DatePipe } from '@angular/common';
import { HttpParams, HttpStatusCode } from '@angular/common/http';


@Component({
  selector: 'ngx-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss']
})
export class UserAddEditComponent implements OnInit {

  AddUserForm: FormGroup;
  submitted = false;
  //page_title: string;
  data_loading = false;

  //show password
  showPassword = true;

  //userlist pass user data
  userDetails: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    private userService: UsersService,
    private toastrService: NbToastrService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.AddUserFormInitialize();

    // Check if user details are passed user list, service to user-edit

    this.userService.getUserDetails().subscribe(user => {
      if (user) {
        this.userDetails = user;
        // Pre-fill the form with user details
        this.AddUserForm.patchValue({
          name: this.userDetails.name,
          mobile: this.userDetails.mobile,
          email: this.userDetails.email,
          address: this.userDetails.address,
          pincode: this.userDetails.pincode,
          password: this.userDetails.password,
        });
      }
    });
  }


  /**
   * User Form Initialize
   */

  AddUserFormInitialize() {
    const emailRegex = "[a-z0-9]+@[a-z]+.[a-z]{2,3}";
    this.AddUserForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      mobile: ["", [Validators.required, Validators.maxLength(10)]],
      email: ["", [Validators.required, Validators.pattern(emailRegex)]],
      address: ["", [Validators.required]],
      pincode: ["", [Validators.required]],
      password: ["", [Validators.required]],
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
   * User Form Submit
   */
  onSubmit() {
    this.submitted = true;

    if (this.AddUserForm.invalid) {
      return;
    } // stop here if form is invalid

    if (this.router.url.indexOf("edit") !== -1) {
      // For editing, pass the user ID
      this.AddUserForm.value.userId = this.userDetails.id;
      this.aRoute.snapshot.paramMap.get("id");
      this.AddUserForm.value.flag = 1;
    } else {
      this.AddUserForm.value.flag = 0;
    }

    // Get the current date and time in the desired format
    const modifiedDate = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

    // Prepare the user object with updated details
    const user = {
      id: this.userDetails.id,
      name: this.AddUserForm.value.name,
      mobile: this.AddUserForm.value.mobile,
      email: this.AddUserForm.value.email,
      address: this.AddUserForm.value.address,
      pincode: this.AddUserForm.value.pincode,
      password: this.AddUserForm.value.password,
      modifiedby: "Admin",
      modifiedon: modifiedDate
    }
    // const userId = this.userDetails.id;
    // Get the current date and time in the desired format
    // const modifiedDate = this.datePipe.transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

    // Build the request parameters using HttpParams
    // let params = new HttpParams();
    // params = params.set('Name', this.AddUserForm.value.name);
    // params = params.set('Mobile', this.AddUserForm.value.mobile);
    // params = params.set('Email', this.AddUserForm.value.email);
    // params = params.set('Address', this.AddUserForm.value.address);
    // params = params.set('pincode', this.AddUserForm.value.pincode);
    // params = params.set('Password', this.AddUserForm.value.password);
    // params = params.set('Modifiedby', 'admin');
    // params = params.set('Modifiedon', modifiedDate);

    this.userService.updateUser(user)
      .subscribe((response) => {
        this.backToUserList();
        if (HttpStatusCode.Ok) {
          this.toastrService.show(response["message"], "Success", {
            status: "success",
            duration: 8000,
          });
        } else {
          this.toastrService.show(response["message"], "Warning", {
            status: "warning",
            duration: 8000,
          });
        }
        this.router.navigate([ROUTE_PATH.ADMIN, ROUTE_PATH.USERS, ROUTE_PATH.USERES.LIST,]);
      });
  }

  /**
   * Back to User List
   * @param
   * @returns
   */
  backToUserList() {
    this.router.navigate([ROUTE_PATH.ADMIN, ROUTE_PATH.DASHBOARD]);
  }
}
