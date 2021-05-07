import { Component, OnInit } from '@angular/core';
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
    this.router.navigate(['products']);
  }

}
