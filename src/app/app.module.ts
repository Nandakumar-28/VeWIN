/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
*/
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DatePipe } from "@angular/common";
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NbChatModule, NbDatepickerModule, NbDialogModule, NbMenuModule, NbSidebarModule, NbToastrModule, NbWindowModule} from '@nebular/theme';

// module
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import {NgxAuthModule} from "../app/auth/auth.module";

// component
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// service
import { AuthLogin } from "./auth/services/auth-login.service";
import { AuthOptionsService } from "./auth/services/auth-options.service";

// guard
import { AuthGuardUser } from "./auth/services/auth-user-guard";
import { AuthGuard } from "./auth/services/auth-guard.service";

// Interceptor
import { HeaderInterceptor } from './shared/interceptor/header.interceptor';
import { NbAuthJWTInterceptor } from "./auth/interceptor/jwt-interceptor";
import { HttpErrorInterceptor } from "./auth/interceptor/jwt-interceptor";


@NgModule({
  declarations: [AppComponent, ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbEvaIconsModule,
    NgxAuthModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    //UsersRoutingModule,
  ],
  providers: [
    AuthGuard,
    NbAuthJWTInterceptor,
    AuthLogin,
    AuthGuardUser,
    AuthOptionsService,
    { provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
