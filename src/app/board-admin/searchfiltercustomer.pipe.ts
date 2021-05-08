import { Pipe, PipeTransform } from '@angular/core';
import { customer } from '../customer';

@Pipe({
  name: 'searchfiltercustomer'
})
export class SearchfilterPipeCustomer implements PipeTransform {

  transform(customerList: customer[], searchValue: string): customer[] {
    if(!customerList || !searchValue)
    {
      return customerList;
    }
    return customerList.filter(customer =>
      customer.username.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
