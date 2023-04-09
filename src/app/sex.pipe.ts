import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {

  transform(isMale: boolean): string {
    if (isMale) {
      return '男';
    }
    return '女';
  }

}
