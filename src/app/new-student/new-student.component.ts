import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {
  @Output() newStudentEvent = new EventEmitter<string>();
  constructor() { }
  nameList = ['a','b']
  addNewName(name: string){
    this.nameList.push(name)
  }
  addNewStudent(studentName: string): void{
    this.newStudentEvent.emit(studentName);
  }
  ngOnInit(): void {
  }
}
