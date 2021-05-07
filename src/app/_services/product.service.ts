import { Injectable } from '@angular/core';
import { Product } from './../Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl= 'http://localhost:8899/product';
  
  constructor(private http: HttpClient)
  {
  }

  updateProduct(product: Object) {
    return this.http.put(`${this.baseUrl}`, product);
  }

  getProduct(id: number): Observable<Object>
  {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProduct(product: Object)
  {
    return this.http.post(this.baseUrl,product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProductsList(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

}
