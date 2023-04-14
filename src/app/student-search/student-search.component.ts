import {Component, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {Student} from "../student";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {
  students$ ?: Observable<Student[]>;

  // 依赖注入
  constructor(private studentService: StudentService) {
  }

  inputValue: string = '';
  options: string[] = [];

  onInput(): void {
    this.studentService.searchStudent(this.inputValue).subscribe(
      res => this.options = res.map(student => student.name)
    );
  }


  private searchTerms = new Subject<string>();

  search(term: string): void {
    this.searchTerms.next(term);
  }

  // 生命周期函数：组建创建的时候
  ngOnInit() {
    this.students$ = this.searchTerms.pipe(
      // 表示数据流中不同数据的操作间隔，防止请求的访问太频繁、占用网络资源
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.studentService.searchStudent(term))
    );
  }
}
