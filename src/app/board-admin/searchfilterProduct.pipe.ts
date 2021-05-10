import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Product';

@Pipe({
  name: 'searchfilterproduct'
})
export class SearchfilterPipeProduct implements PipeTransform {

  transform(products: Product[], searchValue: string): Product[] {
    if(!products || !searchValue)
    {
      return products;
    }
    return products.filter(product =>
      product.prodName.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      product.category.name.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
  }

}
