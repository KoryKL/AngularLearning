import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../student";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../student.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit{
  student ?: Student;
  // 用来获取父组件传递而来的数据
  // @Input() selectedStudent ?: Student;

  // 注入服务
  constructor(private route: ActivatedRoute,
              private studentService: StudentService,
              private location: Location) { }

// 获取url中的学号
  getStudent(): void {
    // this.studentService.getStudent(this.student.id).subscribe()
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.studentService.getStudent(id).subscribe(
      res => this.student = res
    );
  }

  save():void {
    if (this.student) {
      this.studentService.updateStudent(this.student).subscribe(
        () => this.goBack()
      );
    }
  }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void{
    this.getStudent();
  }

}
