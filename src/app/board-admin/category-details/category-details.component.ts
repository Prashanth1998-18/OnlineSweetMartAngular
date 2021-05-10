import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../category';
import { CategoryService } from '../../_services/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  id!: number;
  category: Category | undefined;


  constructor(private route: ActivatedRoute,private router: Router,private categoryService: CategoryService) { }

  ngOnInit(){
    this.category=new Category();

    this.id=this.route.snapshot.params['id'];

    this.categoryService.getCategory(this.id)
      .subscribe((data: any) => {
        console.log(data)
        this.category = data;
      }, (error: any) => console.log(error));

  }

  list()
  {
    this.router.navigate(['admin/category']);
  }

}
