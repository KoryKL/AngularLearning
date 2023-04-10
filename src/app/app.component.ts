import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';
import {StudentService} from "./student.service";
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {Router} from "@angular/router";


export class AppModule { }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'my-angular-project';
  constructor() {
  }

  // constructor(private StudentService: StudentService) {
  // }

  ngOnInit() {
    // this.StudentService.getStudents().subscribe( {
    //   // console.log(students);
    // });
  }
}

// export class AppComponent{
//   title = 'my-angular-project';
// }
