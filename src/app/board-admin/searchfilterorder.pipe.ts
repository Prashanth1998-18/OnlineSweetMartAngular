import { Pipe, PipeTransform } from '@angular/core';
import { SweetOrder } from '../SweetOrder';

@Pipe({
  name: 'searchfilterorder'
})
export class SearchfilterPipeSweetOrder implements PipeTransform {

 
  transform(sweetorders: SweetOrder[], searchValue: string): SweetOrder[] {
    if(!sweetorders || !searchValue)
    {
      return sweetorders;
    }
    return sweetorders.filter(sweetorder =>
      sweetorder.orderId.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
