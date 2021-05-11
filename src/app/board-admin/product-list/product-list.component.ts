import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../Product';
import { ProductService } from '../../_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  searchValue!: string;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit()
   {
    this.reloadData();
  }

  reloadData()
  {
    // this.products = this.productService.getProductsList();
    this.productService.getProductsList().subscribe(res => {
      this.products=res;
    });
  }

  deleteProduct(id: number)
  {
    var cfrm=confirm("Delete the product?");
    if(cfrm){
    this.productService.deleteProduct(id).subscribe(
      (data: any) => {
        //console.log(data);
        this.reloadData();
      },
      (error: any) => console.log(error));
  }
}

  productDetails(id: number){
    this.router.navigate(['admin/proddetails', id]);
  }

  updateProduct(id: number){
    this.router.navigate(['admin/update', id]);
  }


  }


