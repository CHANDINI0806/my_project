import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'auth',
    loadChildren:()=> import ('./auth/auth.module').then(m=>m.AuthModule)
  },
  {path:'mentor-dash',
    loadChildren:()=>import ('./mentor-dash/mentor-dash.module').then(m=>m.MentorDashModule)
  },
  {path:'student-dash',
    loadChildren:()=>import ('./stu-dash/stu-dash.module').then(m=>m.StuDashModule)
  },
  {path:'shared',
    loadChildren:()=>import ('./shared/shared.module').then(m=>m.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
