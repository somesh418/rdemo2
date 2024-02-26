import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(value: any, inputVal: any): any {
    return (value && value.length > inputVal) ? value.splice(1, inputVal) : value;
  }

}
