import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';

import { LoginMentorComponent } from './login-mentor/login-mentor.component';

const routes: Routes = [
  {path:'forgot',component:ForgotComponent},
  {path:'login',component:LoginComponent},
  
  {path:'login-mentor',component:LoginMentorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
