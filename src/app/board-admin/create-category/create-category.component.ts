import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../category';
import { CategoryService } from '../../_services/category.service';
 
@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
 
  form = new FormGroup({
    categoryId: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    name: new FormControl('',Validators.required),
  })
  get categoryId(){return this.form.get('categoryId')}
  get name(){return this.form.get('name')}

  category: any={
    categoryId:'',
    name:''
  }
  submitted = false;
 
  constructor(private categoryService: CategoryService, private router: Router) { }
 
  ngOnInit() {
  }
 
 
 
  save() {
    const data = {
      categoryId: this.category.categoryId,
      name: this.category.name
 
    };
    this.categoryService.createCategory(data).subscribe((response: any) => console.log(response),
      (error: any) => console.log(error));
    this.category = new Category();
  }
 
 
 
  gotoList() {
    this.router.navigate(['/category']);
  }




  newProduct(): void {
    this.submitted = false;
    this.category = new Category();
  }
 
}
