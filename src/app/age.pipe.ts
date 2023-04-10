import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(studentBirthday: Date): string {
    const dateObject = new Date(studentBirthday);
    // const year = dateObject.getFullYear();
    // studentBirthday = new Date(Date.parse());
    // console.log(studentBirthday);
    // 根据年份计算年龄
    let age = new Date().getFullYear() - dateObject.getFullYear();
    // 计算是否过生日
    const thisYearBirthday = new Date(new Date().getFullYear(), dateObject.getMonth(), dateObject.getDate());
    // 还没过
    if (new Date() < thisYearBirthday) {
      age--;
    }
    return age.toString();
  }


}
