import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(product:Product[], letter: string): Product[] {
    return product.filter((item) => item.title.toLowerCase().includes(letter.toLowerCase()));
  }

}
