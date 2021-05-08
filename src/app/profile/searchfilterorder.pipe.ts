import { Pipe, PipeTransform } from '@angular/core';
import { Sweetorder } from './sweetorder';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipeSweetOrder implements PipeTransform {

 
  transform(sweetorders: Sweetorder[], searchValue: string): Sweetorder[] {
    if(!sweetorders || !searchValue)
    {
      return sweetorders;
    }
    return sweetorders.filter(sweetorder =>
      sweetorder.orderId.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
