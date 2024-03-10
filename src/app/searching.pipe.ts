
import { Pipe, PipeTransform } from '@angular/core';
import { prodect } from './prodect';

@Pipe({
  name: 'searching',
})
export class SearchingPipe implements PipeTransform {
  transform(allProducts: prodect[], searchQuery: string): prodect[] {
    return allProducts.filter((e) => { return e.title.toLowerCase().includes(searchQuery.toLowerCase()) })
  }
}
