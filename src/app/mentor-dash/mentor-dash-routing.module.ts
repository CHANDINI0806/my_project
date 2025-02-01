import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingsComponent } from './meetings/meetings.component';
import { ProfileComponent } from '../stu-dash/profile/profile.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path:'meetings',component:MeetingsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'review',component:ReviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorDashRoutingModule { }
