import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Product';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(products: Product[], searchValue: string): Product[] {
    if(!products || !searchValue)
    {
      return products;
    }
    return products.filter(product =>
      product.prodId.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
