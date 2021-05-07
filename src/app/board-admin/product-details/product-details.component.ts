import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../Product';
import { ProductService } from '../../_services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id!: number;
  product: Product | undefined;


  constructor(private route: ActivatedRoute,private router: Router,private productService: ProductService) { }

  ngOnInit(){
    this.product=new Product();

    this.id=this.route.snapshot.params['id'];

    this.productService.getProduct(this.id)
      .subscribe((data: any) => {
        console.log(data)
        this.product = data;
      }, (error: any) => console.log(error));

  }

  list()
  {
    this.router.navigate(['admin/products']);
  }

}
