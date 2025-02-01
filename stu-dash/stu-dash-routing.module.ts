import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogsComponent } from './backlogs/backlogs.component';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { OverviewComponent } from './overview/overview.component';
import { ProfileComponent } from './profile/profile.component';
import { FindMentorComponent } from './find-mentor/find-mentor.component';
import { ApplyTaComponent } from './apply-ta/apply-ta.component';

const routes: Routes = [
  {path:'backlog',component:BacklogsComponent},
  {path:'mentor-list',component:MentorListComponent},
  {path:'overview',component:OverviewComponent},
  {path:'profile',component:ProfileComponent},
  {path:'find-mentor',component:FindMentorComponent},
  {path:'apply-ta',component:ApplyTaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StuDashRoutingModule { }
