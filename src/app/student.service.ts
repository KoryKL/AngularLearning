import {Injectable} from '@angular/core';
import {Student} from "./student";
// import {STUDENTS} from "./mockData";
import {catchError, Observable, of, tap} from "rxjs";
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

// 可以被注入
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // private studentsUrl = 'api/students';
  private studentsUrl = 'http://127.0.0.1:5000';

  private log(message: string) {
    // 不是单引号，日志函数
    this.messageService.add(`StudentService:${message}`)
  }

  // 报头信息
  // httpOptions = {
  //   headers: new HttpHeaders({'Content-Type:': 'application/json'})
  // }


  // 改造成异步的数据传输，泛型<>
  // 获取所有学生信息
  getStudents(): Observable<Student[]> {
    const url = `${this.studentsUrl}/students`
    this.messageService.add("已获取学生信息列表！")
    // of表示是异步的
    // <>表示强制类型转化
    // pipe表示管道运算
    return this.http.get<Student[]>(url)
      .pipe(
      tap(_ => this.log('获取所有学生的信息')),
      // 捕捉后，执行handleError
      catchError(this.handleError<Student[]>('getStudents', []))
    );
    // return this.http.get<Student[]>(this.studentsUrl).pipe(
    //   tap(_ => this.log('获取所有学生的信息')),
    //   // 捕捉后，执行handleError
    //   catchError(this.handleError<Student[]>('getStudents', []))
    // );
  }

  // 根据学生学号获取学生信息
  getStudent(id: string): Observable<Student> {
    // 三个等号：值、类型也相等
    const url = `${this.studentsUrl}/student/${id}`;
    return this.http.get<Student>(url)
      .pipe(
      tap(_ => this.log(`获取学号为${id}`)),
      catchError(this.handleError<Student>(`getStudent, id = ${id}`))
    );
  }


  //修改学生信息
  updateStudent(student: Student): Observable<any> {
    const url = `${this.studentsUrl}/update`
    // put方法，修改
    return this.http.put(url, student).pipe(
      tap(_ => this.log(`更改学生信息，学生id为 ${student.id}`)),
      // 记录在哪出错，不用有返回值
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  // 新增学生信息
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student).pipe(
      tap((newStudent: Student) => this.log(`添加学号为${newStudent.id}的学生`)),
      catchError(this.handleError<Student>('addStudent'))
    )
  }

  // 删除学生信息
  // |在ts中意思是接受的参数类型既可以是student也可以是string
  deleteStudent(student: Student | string): Observable<Student> {
    const id = typeof student === 'string' ? student : student.id;
    const url = `${this.studentsUrl}/${id}`;
    return this.http.delete<Student>(url).pipe(
      tap(_ => this.log(`删除学号为${id}的学生信息`)),
      catchError(this.handleError<Student>('deleteStudent'))
    );
  }

  // 搜索学生信息
  searchStudent(term: string): Observable<Student[]> {
    if (!term.trim()) {
      // 因为是异步的，所以要写of
      return of([]);
    }
    return this.http.get<Student[]>(`${this.studentsUrl}/?name=${term}`).pipe(
      tap(res => res.length ? this.log(`发现姓名为${term}的学生`)
          : this.log(`没有找到姓名为${term}的学生`),
        catchError(this.handleError<Student[]>('searchStudents', []))
      ));
  }

  // 错误处理函数，在哪个方法里发生错误、返回什么样的值
  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log('${operation} 失败: ${error.message}');
      return of(result as T);
    }

  }

  constructor(private messageService: MessageService,
              private http: HttpClient) {
  }
}
