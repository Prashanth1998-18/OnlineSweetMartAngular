import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { Product } from '../Product';
import { ProductService } from './product.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Category } from '../category';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class UserProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Product List';
  imageWidth = 300;
  imageHeight= 300;
  imageMargin = 2;
  showButton = false;
  errorMessage = '';
  sub!: Subscription;
  catId=1;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: Product[] = [];
  products: Product[] = [];
  items: Product[] = [];
  cats:Category[]=[];

  constructor(private productService: ProductService, private _snackBar: MatSnackBar) {}

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.prodName.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = (products || []);
        this.filteredProducts = this.products;

      },
      error: err  => this.errorMessage = err
    });
  }

  getCatId(id:number){
    return id;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggleButton(): void{
    this.showButton= !this.showButton;
  }
  
  addToOrder(prod:Product): void{
    // this.toggleButton();
    if(!(this.items.includes(prod))){
    this.items.push(prod);
    window.sessionStorage.setItem("cart",JSON.stringify(this.items));
    console.log(this.items);
    this._snackBar.open(`You added:${prod.prodName}`,"",{duration:2500,verticalPosition:'top'});}
    else{
      this._snackBar.open(`You cannot add:${prod.prodName} more than once`,"",{duration:2500,verticalPosition:'top'});}
    }
  }




