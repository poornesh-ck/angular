import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';

import { SignInComponent } from './sign-in/sign-in.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { NgOtpInputModule } from 'ng-otp-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserpagemoduleModule } from '../userpagemodule/userpagemodule.module';
// import { UserpagemoduleModule } from '../userpagemodule/userpagemodule.module';


// import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
@NgModule({
  declarations: [
    
    SignInComponent,
    SideBarComponent,
    
  ],
  imports: [
    CommonModule,NgxOtpInputModule,
    LoginPageRoutingModule, NgOtpInputModule,FormsModule, ReactiveFormsModule
  ],
  exports:[SignInComponent,SideBarComponent

  ]
})
export class LoginPageModule { }
