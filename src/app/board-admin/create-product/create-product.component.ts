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
import { Router } from '@angular/router';
import { Product } from '../../Product';
import { ProductService } from '../../_services/product.service';
 
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
 
  //product: Product=new Product();
  product: any = {
    //prodId: '',
    prodName:'',
    prodPrice: '',
    expDate: '',
    category: {
      categoryId:'',
      name:''
    }
  }
  submitted = false;
 
  constructor(private productService: ProductService, private router: Router) { }
 
  ngOnInit() {
  }
 
  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }
 
  save() {
    const data = {
      //prodId: this.product.prodId,
      prodName: this.product.prodName,
      prodPrice: this.product.prodPrice,
      expDate: this.product.expDate,
      category: {
        categoryId:this.product.category.categoryId,
        name:this.product.category.name
      }
 
    };
    this.productService.createProduct(data).subscribe((response: any) => console.log(response),
      (error: any) => console.log(error));
    this.product = new Product();
    this.gotoList();
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
    this.router.navigate(['admin/products']);
  }
 
}
