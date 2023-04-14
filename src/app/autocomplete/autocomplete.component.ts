import {Component, OnInit} from '@angular/core';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';
import {Student} from "../student";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})

export class AutocompleteComponent implements OnInit {
  inputValue: string = '';
  students: Student[] = [];

  constructor(private studentService: StudentService,
              private router: Router) {
  }


  // 返回 student 类型的数组
  onInput(): void {
    this.studentService.searchStudent(this.inputValue).subscribe(
      res => this.students = res
    );
  }

  onClick(student: Student) {
    let num = student.id
    this.router?.navigate(['/detail', num]);
  }

  ngOnInit() {
  }
}

// onStudentSelected() {
//   const selectedStudent = this.students.find(student => student.name === this.selectedStudent);
//   this.router.navigate(['/details', selectedStudent.id]); // replace '/details' with your actual detail page route
// }


