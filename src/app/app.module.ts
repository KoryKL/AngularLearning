import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { SexPipe } from './sex.pipe';
import { AgePipe } from './age.pipe';
import {FormsModule} from "@angular/forms";
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { StudentSearchComponent } from './student-search/student-search.component';
import { ObRxComponent } from './ob-rx/ob-rx.component';
import {MenuService, NzMenuModule} from 'ng-zorro-antd/menu';
import { MenuServiceComponent } from './menu-service/menu-service.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";


@NgModule({
  declarations: [
    // MenuService,
    // NzMenuModule,
    AppComponent,
    StudentComponent,
    SexPipe,
    AgePipe,
    StudentDetailComponent,
    NewStudentComponent,
    MessagesComponent,
    DashboardComponent,
    StudentSearchComponent,
    ObRxComponent,
    MenuServiceComponent
  ],
  imports: [
    NzMenuModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NzButtonModule,
    NzIconModule,
    HttpClientInMemoryWebApiModule.forRoot(
      // 数据封装的属性，表示从根目录起就可以被引用
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
