import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Student} from "./student";

@Injectable({
  providedIn: 'root'
})
// 接口/服务，所有方法都需要被实现
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students: Student[] = [
      {id: '20200001', studentName: 'Apple', studentBirthday: new Date(2001, 1, 3), isMale: false},
      {id: '20200002', studentName: 'Blue', studentBirthday: new Date(2002, 1, 3), isMale: true},
      {id: '20200003', studentName: 'Cindy', studentBirthday: new Date(2003, 7, 3), isMale: false},
    ];
    // 返回json格式
    return {students};
  }

  constructor() {

  }

  // 重写id函数，实现主键自增
  // 返回值类型是string
  genId(students: Student[]): string {
    return students.length > 0 ? String(
      Math.max(...students.map(student => Number(student.id))) + 1) : '20200001';
  }
}
