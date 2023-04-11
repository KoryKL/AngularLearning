import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {
  @Output() newStudentEvent = new EventEmitter<string>();

  constructor() {
  }

  nameList = ['a', 'b']
  isMale = false
  birthday = new Date()

  addNewName(name: string) {
    this.nameList.push(name)
  }

  addNewGender(isMale: boolean) {
    this.isMale = isMale
  }

  addNewBirthday(birthday: Date) {
    this.birthday = birthday;
  }

  addNewStudent(studentName: string): void {
    this.newStudentEvent.emit(studentName);
  }


  // addNewStudent(studentName: string, studentBirthday: Date, isMale: boolean): void {
  //   this.newStudentEvent.emit(studentName), studentBirthday, isMale;
  // }

  ngOnInit(): void {
  }
}
