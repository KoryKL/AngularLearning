import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
// 依赖注入
export class DashboardComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentService) { }
  getStudents(): void {
    this.studentService.getStudents()
      // 异步，需要订阅
      .subscribe( students => this.students = students.slice(1, 3));
  }
  ngOnInit(): void {
    this.getStudents();
  }

}
