import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StuDashRoutingModule } from './stu-dash-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { OverviewComponent } from './overview/overview.component';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { BacklogsComponent } from './backlogs/backlogs.component';
import { FindMentorComponent } from './find-mentor/find-mentor.component';
import { ApplyTaComponent } from './apply-ta/apply-ta.component';


@NgModule({
  declarations: [
    ProfileComponent,
    OverviewComponent,
    MentorListComponent,
    BacklogsComponent,
    FindMentorComponent,
    ApplyTaComponent
  ],
  imports: [
    CommonModule,
    StuDashRoutingModule
  ]
})
export class StuDashModule { }
