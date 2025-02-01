import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { MentorDashModule } from './mentor-dash/mentor-dash.module';
import { SharedModule } from './shared/shared.module';
import { StuDashModule } from './stu-dash/stu-dash.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MentorDashModule,
    SharedModule,
    StuDashModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
