import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student/student.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";

// 定义路由和组件的对应关系
const routes: Routes = [
  {path: 'students', component: StudentComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  // 冒号（:）表示 :id 是一个占位符，它表示某个特定学生的 id
  {path: 'detail/:id', component:StudentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
