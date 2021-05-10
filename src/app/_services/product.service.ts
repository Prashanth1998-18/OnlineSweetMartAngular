import { Injectable } from '@angular/core';
import { Product } from './../Product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Category } from '../category';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl= 'http://localhost:8899/product';
  
  constructor(private http: HttpClient)
  {
  }

  updateProduct(product: Object) {
    return this.http.put(`${this.baseUrl}`, product).pipe(
      retry(1), catchError(this.handleError));
  }

  getProduct(id: number): Observable<Object>
  {
    return this.http.get(`${this.baseUrl}/${id}`).pipe(
      retry(1), catchError(this.handleError));
  }

  createProduct(product: Object)
  {
    return this.http.post(this.baseUrl,product).pipe(
      retry(1), catchError(this.handleError));
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' }).pipe(
      retry(1), catchError(this.handleError));
  }

  getProductsList(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}`).pipe(
      retry(1), catchError(this.handleError));
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
