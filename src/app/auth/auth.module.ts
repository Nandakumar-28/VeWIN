import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MY_OPTIONS_TOKEN } from './register/register.component'; // Import the token from your component

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import {
    NbAlertModule,
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
    NbActionsModule,
    NbCardModule,
    NbDatepickerModule, NbIconModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
} from '@nebular/theme';

// Components
import { NgxLoginComponent } from './login/login.component'; 
import { NbxLogoutComponent } from './logout/logout.component';
import { RequestPassComponent } from './request-password/request-password.component'; 
import { RequestMessage } from './request-password/request-password.component'; 
import { NbxResetPasswordComponent } from './reset-pass/reset-pass.component'; 
import { ResetPassMessage } from './reset-pass/reset-pass.component'; 
import { RegisterComponent } from './register/register.component';

// Service
import { AuthOptionsService } from './services/auth-options.service';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NbAlertModule,
        NbInputModule,
        NbButtonModule,
        NbCheckboxModule,
        NgxAuthRoutingModule,
        NbAuthModule, 
        NbActionsModule,
        NbCardModule,
        NbDatepickerModule, NbIconModule,
        NbRadioModule,
        NbSelectModule,
        NbUserModule
    ],
    declarations: [
        NgxLoginComponent,
        NbxLogoutComponent,
        RegisterComponent,
        RequestPassComponent,
        NbxResetPasswordComponent,
        RequestMessage,
        ResetPassMessage,
       
    ],
    providers: [AuthOptionsService, { provide: MY_OPTIONS_TOKEN, useValue: {} } // Provide an appropriate value for 'options'
]
})
export class NgxAuthModule {
}