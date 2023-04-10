import {Component, OnInit} from '@angular/core';
import {Student} from "../student";
// import {STUDENTS} from "../mockData";
import {StudentService} from "../student.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

// 生命周期函数
export class StudentComponent implements OnInit {
  students ?: Student[];
  selectedStudent ?: Student;

  constructor(private studentService: StudentService) {
  }

  // students = STUDENTS;

  // 实现异步数据的订阅


  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(
        students => {
          this.students = students
          console.log(this.students)
        }
      );
        // (res) => {this.students = res}
        // (res) => {
        //   // 设置延时
        //   // setTimeout(() => {
        //   //   this.students = res;
        //   // }, 2000);
        //   this.students = res;
        // }
      // );
  }

  // 做一个强制类型转换
  add(name: string): void {
    // trim去掉输入的所有空格
    name = name.trim();
    if (!name) {
      return;
    }
    this.studentService.addStudent({studentName: name} as Student).subscribe(
      student => this.students?.push(student)
    );
  }

  delete(student: Student): void {
    this.students = this.students?.filter(h => h !== student)
    this.studentService.deleteStudent(student).subscribe();
  }


  onSelect(student: Student): void {
    this.selectedStudent = student;
    console.log(student);
  }

  // nameList = ['a', 'b']
  //
  // addNewName(name: string) {
  //   this.nameList.push(name)
  // }

  // 生命周期函数
  ngOnInit(): void {
    this.getStudents()
  }

}
