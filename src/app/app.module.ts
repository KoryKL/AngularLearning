import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { SexPipe } from './sex.pipe';
import { AgePipe } from './age.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {NzListModule} from "ng-zorro-antd/list";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzFormModule} from "ng-zorro-antd/form";

registerLocaleData(zh);


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
    ReactiveFormsModule,
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
    ),
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzListModule,
    NzTypographyModule,
    NzSpaceModule,
    NzCardModule,
    NzTableModule,
    NzDividerModule,
    NzInputModule,
    NzSelectModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzFormModule
  ],
  providers: [MenuService, { provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
