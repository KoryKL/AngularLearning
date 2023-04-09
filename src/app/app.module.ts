import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StudentComponent} from './student/student.component';
import {SexPipe} from './sex.pipe';
import {AgePipe} from './age.pipe';
import {FormsModule} from "@angular/forms";
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {NewStudentComponent} from './new-student/new-student.component';
import {MessagesComponent} from './messages/messages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {StudentSearchComponent} from './student-search/student-search.component';
import {ObRxComponent} from './ob-rx/ob-rx.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzButtonModule} from 'ng-zorro-antd/button';
// import { NgZorroAntdModule } from 'ng-zorro-antd';
// import { NzLayoutModule, NzButtonModule } from 'ng-zorro-antd';
import {MenuService, NzMenuModule} from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {StudentService} from "./student.service";
import {MessageService} from "./message.service";


registerLocaleData(zh);
@NgModule({

  declarations: [
    AppComponent,
    StudentComponent,
    SexPipe,
    AgePipe,
    StudentDetailComponent,
    NewStudentComponent,
    MessagesComponent,
    DashboardComponent,
    StudentSearchComponent,
    ObRxComponent
  ],
  imports: [
    // NgZorroAntdModule.forRoot(),
    // NgZorroAntdModule,
    BrowserModule,
    // NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      // 数据封装的属性，表示从根目录起就可以被引用
      InMemoryDataService, {dataEncapsulation: false}
    ),
    BrowserAnimationsModule
  ],
  providers: [
    StudentService,
    MenuService,
    MessageService,
    InMemoryDataService
    // {provide: NZ_I18N, useValue: zh_CN}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


