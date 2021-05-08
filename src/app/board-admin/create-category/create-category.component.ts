// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Product } from '../product';
// import { ProductService } from '../product.service';

// @Component({
//   selector: 'app-create-product',
//   templateUrl: './create-product.component.html',
//   styleUrls: ['./create-product.component.css']
// })
// export class CreateProductComponent implements OnInit {

//   product: Product;
//   submitted=false;

//   constructor(private productService: ProductService, private router: Router) { 
//     this.product=new Product();
//   }

//   ngOnInit() {
//   }

//   // newProduct(): void{
//   //   this.submitted=false;
//   //   // this.product=new Product();
    
//   // }

//   // save()
//   // {
//   //   this.productService.createProduct(this.product).subscribe((data: any) => {
//   //     console.log(data) 
//   //     this.product=new Product();
//   //     this.gotoList();
//   //   },
//   //     (error: any) => console.log(error)
//   //   );
//   // }

//   onSubmit() {
//     this.submitted = true;
//     this.productService.createProduct(this.product).subscribe((data => this.gotoList()),
//       (error: any) => console.log(error)
//     );
//   }

//   gotoList() {
//     this.router.navigate(['/product']);
//   }

// }

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
    categoryId: new FormControl('',[Validators.required]),
    name: new FormControl('',Validators.required)
  })


  category: any={
    categoryId:'',
    name:''
  }
  submitted = false;
 
  constructor(private categoryService: CategoryService, private router: Router) { }
 
  ngOnInit() {
  }
 
  newProduct(): void {
    this.submitted = false;
    this.category = new Category();
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
 
  // saveProduct(saveProduct: any){
  //   this.product-new Product();
  //   this.product.prodId=this.
  // }
 
  // onSubmit() {
  //   //const {prodId,prodName,prodPrice,expDate,category}=this.form;
  //   this.submitted = true;
  //   this.saveProduct();    
  // }
 
  gotoList() {
    this.router.navigate(['/category']);
  }
 
}
