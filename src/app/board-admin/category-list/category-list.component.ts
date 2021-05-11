import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../../category';
import { CategoryService } from '../../_services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  category!: Category[];
  searchValue!: string;

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit()
   {
    this.reloadData();
  }

  reloadData()
  {
    // this.products = this.productService.getProductsList();
    this.categoryService.getCategoryList().subscribe(res => {
      this.category=res;
    });
  }

  deleteCategory(id: number)
  {
    this.categoryService.deleteCategory(id).subscribe(
      (data: any) => {
        //console.log(data);
        this.reloadData();
      },
      (error: any) => console.log(error));
  }

  CategoryDetails(id: number){
    this.router.navigate(['admin/categorydetails', id]);
  }

  updateCategory(id: number){
    this.router.navigate(['admin/updatecategory', id]);
  }


  }


