import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../../Product';
import { ProductService } from '../../_services/product.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id!: number;
  product: Product = new Product;

  form = new FormGroup({
    prodName: new FormControl('', Validators.required),
    prodPrice: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    expDate: new FormControl('', Validators.required),
    categoryId: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
  });

  get prodName(){return this.form.get('prodName')}
  get prodPrice(){return this.form.get('prodPrice')}
  get expDate(){return this.form.get('expDate')}
  get categoryId(){return this.form.get('categoryId')}

  constructor(private route: ActivatedRoute,private router: Router,private productService: ProductService) { }

  ngOnInit() {
    this.product=new Product();

   // this.id = this.route.snapshot.params['id'];
    this.route.paramMap.subscribe((params:any) =>{
      this.id= params.get('id')
    })

    this.productService.getProduct(this.id)
    .subscribe((data: any) => {
      console.log(data)
      this.product = data;
    }, (error: any) => console.log(error));

  }

  updateProduct() {
    this.productService.updateProduct(this.product)
      .subscribe((data: any) => {
        console.log(data);
        this.product = new Product();
        this.gotoList();
      }, (error: any) => console.log(error));
  }

  onSubmit() {
    this.updateProduct();    
  }

  gotoList() {
    this.router.navigate(['admin/products']);
  }

}
