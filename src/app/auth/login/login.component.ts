/** 
* This file contains login related functions
* author: Nanda kumar
*/

import { NbLoginComponent, NbAuthResult, NbAuthSocialLink, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { Router } from '@angular/router';
import { getDeepFromObject } from '../helpers/helpers';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject,ViewChild } from '@angular/core';
import { AuthOptionsService } from '../services/auth-options.service';
import { ActivatedRoute } from '@angular/router';
import { AuthLogin } from '../services/auth-login.service';
import { HttpHeaders,HttpClient,HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})

/*  extended NbLoginComponent for our custom login design*/
export class NgxLoginComponent {

 @ViewChild('loginform') loginform: NgForm; // Import NgForm from @angular/forms

  forget_path = "company"; //for redirecting company and admin when login
  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = "";

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  socialLinks: NbAuthSocialLink[] = [];
  rememberMe = false;
  


   

    constructor(protected service: NbAuthService,
        @Inject(NB_AUTH_OPTIONS) protected options = {},
        protected cd: ChangeDetectorRef,
        protected router: Router,
        private authService: AuthOptionsService,
        private route: ActivatedRoute,
        private apiService: AuthLogin,
        private http: HttpClient) {

        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.strategy = this.getConfigValue('forms.login.strategy');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
        this.rememberMe = this.getConfigValue('forms.login.rememberMe');
    }

    ngOnInit() {
        let setUser = "company";
        //To get the type of user, from which URL user access the login page
        try {
            let loginType = window.location.href.split("/");
            let userType = loginType[loginType.length - 2];
            if (userType == "admin") {
                setUser = "admin";
            }
        }
        catch (err) {
            console.log(err);
        }
        localStorage.setItem('user_type', setUser); //sets a local storage value for user type
        this.forget_path = setUser;
    }


  /**
   * Logins ngx login component,  overridden the native ngx login function
   * This function is used to check login with backend with values given in app.module
   * @return void
   */

   
// login(): void {
//  const credentials = {
//       Email: this.user.username,
//       Password: this.user.password ,
//     };

//   // Construct the API URL with query parameters
//   const apiUrl = `https://eac3-2409-408d-4d86-bbed-c157-31ae-7ef-7ac2.ngrok-free.app/api/Public/Login`;

//   // Define HTTP headers if needed
//   let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
//   headers = headers.append('ngrok-skip-browser-warning', '69420');

//   // Make the GET request
//   this.http.post(apiUrl,{params:credentials,headers}).subscribe(
//     (response) => {
//       // Handle successful login response
//       console.log(response);
//     },
//     (error) => {
//       // Handle login error
//       console.error(error);
//     }
// );
  login(){
     const credentials = {
      Email: this.user.username,
      Password: this.user.password ,
    };
      let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
      headers = headers.append('ngrok-skip-browser-warning', '69420');
    this.apiService.login({params:credentials,headers}).subscribe(
      (response) => {
        // Handle successful login response
        console.log(response);
        alert("Register Successfull");
        this.loginform.resetForm();
        this.router.navigate(['pages/company']);
      },
      (error) => {
        // Handle login error
        console.error(error);
        alert("Something went wrong")

      }
    );
  


  //   this.errors = [];
  //   this.messages = [];
  //   this.submitted = true;
  //   this.user["role"] = this.forget_path;
  //   /* ngx-auth service has been used authenticate user */
  //   this.service
  //     .authenticate(this.strategy, this.user)
  //     .subscribe((result: NbAuthResult) => {
  //       console.log(result);
  //       this.submitted = false;

  //           if (result.isSuccess()) {
  //               //  this.messages = result.getMessages();
  //               this.authService.setUserPermissons(result["response"].body.data.userPermission);

  //           } else {
  //               this.errors = result.getErrors();
  //           }

  //       const redirect = result.getRedirect();
  //       if (redirect) {
  //         return this.router.navigateByUrl(redirect);
  //       }
  //       this.cd.detectChanges();
  //     });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }
}