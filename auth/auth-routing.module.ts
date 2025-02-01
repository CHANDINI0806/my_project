import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [
  {path:'forgot',component:ForgotComponent},
  {path:'login',component:LoginComponent},
  {path:'sign',component:SignComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
