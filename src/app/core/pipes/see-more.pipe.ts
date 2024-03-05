import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore',
  standalone:true
})
export class SeeMorePipe implements PipeTransform {

  transform(value: string, limit:number = 5): string {
    return value.split(' ').slice(0, limit).join(' ');
  }

}
