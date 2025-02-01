import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

// Component imports
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginMentorComponent } from './login-mentor/login-mentor.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotComponent,
    LoginMentorComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }