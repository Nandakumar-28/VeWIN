/** 
* This file contains register related functions
* author: T.Nanda kumar
*/
import { Component, OnInit,ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
//import { NbAuthSocialLink } from '../../auth.options';
//import { NbAuthService } from '../../services/auth.service';
import * as i0 from "@angular/core";
import { NbAuthService, NbAuthSocialLink } from '@nebular/auth';
import { Inject } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AuthRegisterService } from '../services/auth-register.service';
import { NgForm } from '@angular/forms';

export const MY_OPTIONS_TOKEN = new InjectionToken<any>('my-options-token');



@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 @ViewChild('registrationForm') registrationForm: NgForm; // Import NgForm from @angular/forms

  user: any = { fullName: '', email: '', password: '', confirmPassword: '', terms: false };

constructor(
 private apiservice: AuthRegisterService,
  @Inject(MY_OPTIONS_TOKEN) useValue: {} , // Provide an appropriate value for 'options'
  cd: ChangeDetectorRef,
  private router: Router
) {}

  ngOnInit(): void {
      //Populate socialLinks with the appropriate data, e.g., Facebook, Google, etc.
    this.socialLinks = [
      { link: 'social-link-1', icon: 'facebook', title: 'Facebook' },
      { link: 'social-link-2', icon: 'twitter', title: 'Twitter' },
      { link: 'social-link-3', icon: 'google',title:'Google'}
      //Add more social links as needed
   ];
  }
   protected service: NbAuthService;
    protected options: {};
    protected cd: ChangeDetectorRef;
    //protected router: Router;
    redirectDelay: number;
    showMessages: any={};
    strategy: string;
    submitted: boolean;
    errors: string[]=[];
    messages: string[]=[];
    //user: any;
    socialLinks: NbAuthSocialLink[]=[];
    register(){
     const credentials = {
      // name: this.user.fullName,
      // email: this.user.email,
      // password: this.user.password ,
      // retypePassword: this.user.confirmPassword ,
    name: this.user.fullName,
    email: this.user.email,
    PhoneNumber: this.user.phoneNumber,
    StateName: this.user.stateName,
    CityName: this.user.cityName,
    password: this.user.password,
    RetypePassword: this.user.confirmPassword
    };
      let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
      headers = headers.append('ngrok-skip-browser-warning', '69420');

    this.apiservice.register(credentials,headers).subscribe(
      (response) => {
     alert("Register Successfull");
      this.registrationForm.resetForm();
      this.router.navigate(['auth/company/login']);
    },(err: any)=>{
      alert("Something went wrong")
    })
    }

    getConfigValue(key: string): any {
  // Implement logic to retrieve configuration values based on the provided 'key'
  // Return the corresponding configuration value
    }

    static ɵfac: i0.ɵɵFactoryDeclaration<RegisterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RegisterComponent, "nb-register", never, {}, {}, never, never>;

}
