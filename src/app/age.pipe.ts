import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(studentBirthday: Date): string {

    // 根据年份计算年龄
    let age = new Date().getFullYear() - studentBirthday.getFullYear();
    // 计算是否过生日
    const thisYearBirthday = new Date(new Date().getFullYear(), studentBirthday.getMonth(), studentBirthday.getDate());
    // 还没过
    if (new Date() < thisYearBirthday) {
      age--;
    }
    return age.toString();
  }


}
