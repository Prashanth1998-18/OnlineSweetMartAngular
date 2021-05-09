import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../category';


@Pipe({
  name: 'searchfiltercategory'
})
export class SearchfilterPipeCatgeory implements PipeTransform {

  transform(categoryList: Category[], searchValue: string): Category[] {
    if(!categoryList || !searchValue)
    {
      return categoryList;
    }
    return categoryList.filter(category =>
      category.name.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}