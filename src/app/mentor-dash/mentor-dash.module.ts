import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorDashRoutingModule } from './mentor-dash-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    ProfileComponent,
    MeetingsComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    MentorDashRoutingModule
  ]
})
export class MentorDashModule { }
