import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../category';
import { CategoryService } from '../../_services/category.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id!: number;
  category: Category = new Category;

  
  form = new FormGroup({
    categoryId: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    name: new FormControl('',Validators.required),
  });
  get name(){return this.form.get('name')}
  get categoryId(){return this.form.get('categoryId')}

  constructor(private route: ActivatedRoute,private router: Router,private categoryService: CategoryService) { }

  ngOnInit() {
    this.category=new Category();

    

    this.id = this.route.snapshot.params['id'];

    this.categoryService.getCategory(this.id)
    .subscribe((data: any) => {
      //console.log(data)
      this.category = data;
    }, (error: any) => console.log(error));

  }

  updateCategory() {
    this.categoryService.updateCategory(this.category)
      .subscribe((data: any) => {
        //console.log(data);
        this.category = new Category();
        this.gotoList();
      }, (error: any) => console.log(error));
  }

  onSubmit() {
    this.updateCategory();    
  }

  gotoList() {
    this.router.navigate(['admin/category']);
  }

}
