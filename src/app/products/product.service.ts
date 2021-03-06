import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // If using Stackblitz, replace the url with this line
  // because Stackblitz can't find the api folder.
  // private productUrl = 'assets/products/products.json';
  private productsUrl = 'http://localhost:8899/product';
  private productUrl='http://localhost:8899/product/${id}'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Get one product
  // Since we are working with a json file, we can only retrieve all products
  // So retrieve all products and then find the one we want using 'map'
  getProduct(id: number): Observable<Product | undefined> {
    // return this.http.get<Product>('${this.productUrl}/${id}').pipe(
    //   retry(1),
    //   catchError(this.handleError)
    // );
    return this.getProducts()
      .pipe(
        map((products: Product[]) => products.find(p => p.prodId === id))
      );

      
  }


  getCategorizedProducts(id:number): Observable<Product[] | undefined> {
    return this.getProducts()
    .pipe(map((products: Product[])=>
    products.filter(p=>p.category.categoryId === id)));
  }


  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
