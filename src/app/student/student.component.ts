import {Component, OnInit} from '@angular/core';
import {Student} from "../student";
// import {STUDENTS} from "../mockData";
import {StudentService} from "../student.service";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

// 生命周期函数
export class StudentComponent implements OnInit {
  students ?: Student[];
  selectedStudent ?: Student;

  // private router: any;

  constructor(private studentService: StudentService,
              private router: Router) {
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


  // 做一个强制类型转换
  // add(name: string, isMale: boolean, birthday: Date): void {
  //   // trim去掉输入的所有空格
  //   name = name.trim();
  //   if (!name) {
  //     return;
  //   }
  //   this.studentService.addStudent({studentName: name, studentBirthday: birthday, isMale: isMale} as Student).subscribe(
  //     student => this.students?.push(student)
  //   );
  // }
  //
  //
  // add(name:string, isMale: boolean, birthday: Date) {
  //   fetch('/api/addStudent', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //       isMale: isMale,
  //       birthday: birthday
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error(error))
  // }


  delete(student: Student): void {
    this.students = this.students?.filter(h => h !== student)
    this.studentService.deleteStudent(student).subscribe();
  }


  onSelect(student: Student): void {
    this.selectedStudent = student;
    console.log(student);
  }

  // goDetail(id : number) {
  //   this.router.navigate('/detail',id)
  // }
  goDetail(id: string) {
    // const studentId = parseInt(id, 10);
    // const student = this.selectedStudent;
    this.router?.navigate(['/detail', id]);
  }

  // goDetail(id: string) {
  //   const student = this.selectedStudent.find(s => s.id === id);
  //   if (student?.navigate) {
  //     this.router.navigate(['/detail', id]);
  //   }
  // }
  // goDetail(id: string) {
  //   const student = this.selectedStudent.find((s: Student) => s.id === id);
  //   if (student?.navigate === undefined) {
  //     return;
  //   }
  //   this.router.navigate(['/detail', id]);
  // }

  // nameList = ['a', 'b']
  //
  // addNewName(name: string) {
  //   this.nameList.push(name)
  // }

  // 生命周期函数
  createForm: any;

  ngOnInit(): void {
    this.getStudents()
  }

}
