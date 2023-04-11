import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";


const routes: Routes = [
  {path: 'students', component: StudentComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  // 冒号（:）表示 :id 是一个占位符，它表示某个特定学生的 id
  {path: 'detail/:id', component:StudentDetailComponent},
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
