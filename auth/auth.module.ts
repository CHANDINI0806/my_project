import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { ForgotComponent } from './forgot/forgot.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
